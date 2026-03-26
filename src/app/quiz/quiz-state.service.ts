import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { QUIZ_QUESTIONS } from './quiz.data';
import { MultiLangQuizQuestion, QuizQuestion, QuizStatus } from './quiz.model';
import { I18nService } from '../i18n/i18n.service';
import { HistoryService } from './history.service';

const hasStorage = typeof localStorage !== 'undefined';
const SHUFFLE_KEY = 'quiz-shuffle';
const TIMER_KEY = 'quiz-timer';
const TIMER_DURATION = 30;

@Injectable({ providedIn: 'root' })
export class QuizStateService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly i18n = inject(I18nService);
  private readonly historyService = inject(HistoryService);

  // ── Simulate async loading ───────────────────────────────────────────────
  private readonly rawQuestions$ = of(QUIZ_QUESTIONS).pipe(delay(1000));
  private readonly rawQuestions = toSignal(this.rawQuestions$, {
    initialValue: [] as MultiLangQuizQuestion[],
  });

  // ── Settings (persisted) ─────────────────────────────────────────────────
  readonly shuffleEnabled = signal<boolean>(
    hasStorage ? localStorage.getItem(SHUFFLE_KEY) === 'true' : false
  );
  readonly timerEnabled = signal<boolean>(
    hasStorage ? localStorage.getItem(TIMER_KEY) === 'true' : false
  );

  // ── Game state ───────────────────────────────────────────────────────────
  readonly status = signal<QuizStatus>('idle');
  readonly currentIndex = signal(0);
  readonly answers = signal<(number | null)[]>([]);
  readonly timeLeft = signal(TIMER_DURATION);
  readonly slideDirection = signal<'left' | 'right'>('right');

  // ── Timer (imperative, not effect-based) ─────────────────────────────────
  private timerId: ReturnType<typeof setInterval> | null = null;

  // ── Question order (set at start, allows shuffle) ────────────────────────
  private readonly questionOrder = signal<number[]>([]);

  // ── Localized + ordered questions ───────────────────────────────────────
  readonly questions = computed<QuizQuestion[]>(() => {
    const raw = this.rawQuestions();
    const order = this.questionOrder();
    const lang = this.i18n.lang();
    if (order.length === 0) return raw.map((q) => ({ id: q.id, correctIndex: q.correctIndex, ...q.translations[lang] }));
    return order.map((i) => ({ id: raw[i].id, correctIndex: raw[i].correctIndex, ...raw[i].translations[lang] }));
  });

  // ── Computed signals ─────────────────────────────────────────────────────
  readonly loading = computed<boolean>(() => this.rawQuestions().length === 0);
  readonly total = computed(() => this.questions().length);
  readonly currentQuestion = computed(() => this.questions()[this.currentIndex()]);
  readonly selectedAnswer = computed(() => this.answers()[this.currentIndex()] ?? null);
  readonly isAnswered = computed<boolean>(() => this.selectedAnswer() !== null);
  readonly isLastQuestion = computed(() => this.currentIndex() === this.total() - 1);
  readonly progress = computed(() => ((this.currentIndex() + 1) / this.total()) * 100);
  readonly score = computed(() =>
    this.answers().filter(
      (answer, i) => answer !== null && answer === this.questions()[i]?.correctIndex
    ).length
  );

  constructor() {
    // Persist settings
    effect(() => {
      if (hasStorage) {
        localStorage.setItem(SHUFFLE_KEY, String(this.shuffleEnabled()));
        localStorage.setItem(TIMER_KEY, String(this.timerEnabled()));
      }
    });
  }

  // ── Actions ──────────────────────────────────────────────────────────────
  start(): void {
    const total = this.rawQuestions().length;
    const order = Array.from({ length: total }, (_, i) => i);
    if (this.shuffleEnabled()) {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    }
    this.questionOrder.set(order);
    this.answers.set(new Array(total).fill(null));
    this.currentIndex.set(0);
    this.status.set('playing');
    this.startTimerIfEnabled();
  }

  selectAnswer(optionIndex: number): void {
    if (this.isAnswered()) return;
    this.answers.update((prev) => {
      const next = [...prev];
      next[this.currentIndex()] = optionIndex;
      return next;
    });
    this.stopTimer();
  }

  next(): void {
    if (!this.isAnswered()) return;
    if (this.isLastQuestion()) {
      this.stopTimer();
      this.historyService.add(this.score(), this.total());
      this.status.set('finished');
    } else {
      this.slideDirection.set('right');
      this.currentIndex.update((i) => i + 1);
      this.startTimerIfCurrentUnanswered();
    }
  }

  prev(): void {
    if (this.currentIndex() > 0) {
      this.slideDirection.set('left');
      this.currentIndex.update((i) => i - 1);
      this.startTimerIfCurrentUnanswered();
    }
  }

  restart(): void {
    this.stopTimer();
    this.currentIndex.set(0);
    this.answers.set([]);
    this.status.set('idle');
  }

  // ── Timer helpers ────────────────────────────────────────────────────────
  private startTimerIfEnabled(): void {
    if (!this.timerEnabled() || !isPlatformBrowser(this.platformId)) return;
    this.stopTimer();
    this.timeLeft.set(TIMER_DURATION);
    this.timerId = setInterval(() => {
      const t = this.timeLeft();
      if (t <= 1) {
        this.stopTimer();
        this.autoSkip();
      } else {
        this.timeLeft.set(t - 1);
      }
    }, 1000);
  }

  private startTimerIfCurrentUnanswered(): void {
    if (!this.timerEnabled()) return;
    if (this.selectedAnswer() !== null) {
      this.stopTimer();
    } else {
      this.startTimerIfEnabled();
    }
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private autoSkip(): void {
    if (this.isLastQuestion()) {
      this.historyService.add(this.score(), this.total());
      this.status.set('finished');
    } else {
      this.slideDirection.set('right');
      this.currentIndex.update((i) => i + 1);
      this.startTimerIfEnabled();
    }
  }
}
