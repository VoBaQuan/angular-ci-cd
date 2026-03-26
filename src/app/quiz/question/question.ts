import { Component, computed, inject, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { QuizQuestion } from '../quiz.model';
import { I18nService } from '../../i18n/i18n.service';
import { LucideAngularModule } from 'lucide-angular';
import { fadeIn, questionSlide } from '../../animations';

@Component({
  selector: 'app-question',
  imports: [DecimalPipe, LucideAngularModule],
  templateUrl: './question.html',
  animations: [fadeIn, questionSlide],
})
export class QuestionComponent {
  protected readonly i18n = inject(I18nService);

  // signal-based inputs
  question = input.required<QuizQuestion>();
  selectedAnswer = input<number | null>(null);
  currentIndex = input.required<number>();
  total = input.required<number>();
  timeLeft = input<number>(30);
  timerEnabled = input<boolean>(false);
  slideDirection = input<'left' | 'right'>('right');

  // signal-based output
  answerSelected = output<number>();

  // computed từ inputs
  protected readonly progressPercent = computed(
    () => ((this.currentIndex() + 1) / this.total()) * 100
  );

  protected readonly slideState = computed(() => ({
    value: this.currentIndex(),
    params: { fromX: this.slideDirection() === 'right' ? '48px' : '-48px' },
  }));

  protected optionState(index: number): 'default' | 'correct' | 'wrong' | 'dimmed' {
    const selected = this.selectedAnswer();
    if (selected === null) return 'default';
    if (index === this.question().correctIndex) return 'correct';
    if (index === selected) return 'wrong';
    return 'dimmed';
  }

  protected optionClass(index: number): string {
    const base = 'w-full text-left px-5 py-3 rounded-xl border-2 font-medium transition-all duration-200 flex items-center justify-between';
    const state = this.optionState(index);
    const variants: Record<string, string> = {
      correct: 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:border-green-600 dark:text-green-300',
      wrong:   'border-red-400 bg-red-50 text-red-700 dark:bg-red-900/30 dark:border-red-600 dark:text-red-300',
      dimmed:  'border-gray-200 bg-gray-50 text-gray-400 cursor-default dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500',
      default: 'border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 text-gray-700 cursor-pointer dark:border-gray-600 dark:hover:border-indigo-500 dark:hover:bg-indigo-900/30 dark:text-gray-300',
    };
    return `${base} ${variants[state]}`;
  }

  protected select(index: number): void {
    if (this.selectedAnswer() !== null) return;
    this.answerSelected.emit(index);
  }
}
