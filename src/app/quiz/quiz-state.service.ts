import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { QUIZ_QUESTIONS } from './quiz.data';
import { MultiLangQuizQuestion, QuizQuestion, QuizStatus } from './quiz.model';
import { I18nService } from '../i18n/i18n.service';

@Injectable({ providedIn: 'root' })
export class QuizStateService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly i18n = inject(I18nService);

  // ── Simulate async loading with toSignal() ──────────────────────────────
  private readonly rawQuestions$ = of(QUIZ_QUESTIONS).pipe(delay(600));
  private readonly rawQuestions = toSignal(this.rawQuestions$, {
    initialValue: [] as MultiLangQuizQuestion[],
  });

  // ── Localized questions (derived from raw + current language) ───────────
  readonly questions = computed<QuizQuestion[]>(() =>
    this.rawQuestions().map((q) => ({
      id: q.id,
      correctIndex: q.correctIndex,
      ...q.translations[this.i18n.lang()],
    }))
  );

  // ── Writable signals (mutable state) ───────────────────────────────────
  readonly status = signal<QuizStatus>('idle');
  readonly currentIndex = signal(0);
  readonly answers = signal<(number | null)[]>([]);

  // ── Computed signals (derived, read-only) ──────────────────────────────
  readonly loading = computed<boolean>(() => this.rawQuestions().length === 0);
  readonly total = computed(() => this.questions().length);
  readonly currentQuestion = computed(() => this.questions()[this.currentIndex()]);
  readonly selectedAnswer = computed(() => this.answers()[this.currentIndex()] ?? null);
  readonly isAnswered = computed<boolean>(() => this.selectedAnswer() !== null);
  readonly isLastQuestion = computed(() => this.currentIndex() === this.total() - 1);
  readonly progress = computed(() => ((this.currentIndex() + 1) / this.total()) * 100);
  readonly score = computed(() =>
    this.answers().filter(
      (answer, i) => answer !== null && answer === this.rawQuestions()[i]?.correctIndex
    ).length
  );
  readonly scorePercent = computed(() =>
    this.total() > 0 ? Math.round((this.score() / this.total()) * 100) : 0
  );

  constructor() {
    // ── Effect: persist answers to localStorage (browser only) ───────────
    effect(() => {
      if (isPlatformBrowser(this.platformId) && this.status() === 'playing') {
        localStorage.setItem('quiz-progress', JSON.stringify(this.answers()));
      }
    });
  }

  // ── Actions ─────────────────────────────────────────────────────────────
  start(): void {
    this.answers.set(new Array(this.total()).fill(null));
    this.currentIndex.set(0);
    this.status.set('playing');
  }

  selectAnswer(optionIndex: number): void {
    if (this.isAnswered()) return;
    this.answers.update((prev) => {
      const next = [...prev];
      next[this.currentIndex()] = optionIndex;
      return next;
    });
  }

  next(): void {
    if (!this.isAnswered()) return;
    if (this.isLastQuestion()) {
      this.status.set('finished');
      if (isPlatformBrowser(this.platformId)) {
        localStorage.removeItem('quiz-progress');
      }
    } else {
      this.currentIndex.update((i) => i + 1);
    }
  }

  prev(): void {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((i) => i - 1);
    }
  }

  restart(): void {
    this.currentIndex.set(0);
    this.answers.set([]);
    this.status.set('idle');
  }
}
