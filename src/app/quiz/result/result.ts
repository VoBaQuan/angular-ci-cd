import { Component, computed, input, output } from '@angular/core';
import { QuizQuestion } from '../quiz.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.html',
})
export class ResultComponent {
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
    if (p === 100) return { text: 'Xuất sắc! Bạn nắm vững Angular Signals! 🏆', color: 'text-yellow-600' };
    if (p >= 80)  return { text: 'Rất tốt! Chỉ còn một chút nữa thôi! 🎉', color: 'text-green-600' };
    if (p >= 60)  return { text: 'Khá tốt! Hãy ôn lại những câu sai nhé. 💪', color: 'text-blue-600' };
    return { text: 'Cần ôn tập thêm về Angular Signals. 📚', color: 'text-red-500' };
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
