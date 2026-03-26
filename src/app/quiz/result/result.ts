import { Component, computed, inject, input, output } from '@angular/core';
import { QuizQuestion } from '../quiz.model';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.html',
})
export class ResultComponent {
  protected readonly i18n = inject(I18nService);

  // signal-based inputs
  score = input.required<number>();
  total = input.required<number>();
  questions = input.required<QuizQuestion[]>();
  answers = input.required<(number | null)[]>();

  // signal-based output
  restart = output<void>();

  // computed signals
  protected readonly percent = computed(() =>
    Math.round((this.score() / this.total()) * 100)
  );

  protected readonly message = computed(() => {
    const p = this.percent();
    const t = this.i18n.t().result;
    if (p === 100) return { text: t.perfect, color: 'text-yellow-600' };
    if (p >= 80)   return { text: t.great, color: 'text-green-600' };
    if (p >= 60)   return { text: t.good, color: 'text-blue-600' };
    return { text: t.needPractice, color: 'text-red-500' };
  });

  protected readonly ringColor = computed(() => {
    const p = this.percent();
    if (p === 100) return 'stroke-yellow-400';
    if (p >= 80)   return 'stroke-green-500';
    if (p >= 60)   return 'stroke-blue-500';
    return 'stroke-red-400';
  });

  protected readonly circumference = 2 * Math.PI * 40; // r=40

  protected readonly dashOffset = computed(
    () => this.circumference * (1 - this.percent() / 100)
  );
}
