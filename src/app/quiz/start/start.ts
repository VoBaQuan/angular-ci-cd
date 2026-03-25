import { Component, inject } from '@angular/core';
import { QuizStateService } from '../quiz-state.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.html',
})
export class StartComponent {
  protected readonly quiz = inject(QuizStateService);
}
