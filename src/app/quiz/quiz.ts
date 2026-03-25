import { Component, inject } from '@angular/core';
import { QuizStateService } from './quiz-state.service';
import { StartComponent } from './start/start';
import { QuestionComponent } from './question/question';
import { ResultComponent } from './result/result';

@Component({
  selector: 'app-quiz',
  imports: [StartComponent, QuestionComponent, ResultComponent],
  templateUrl: './quiz.html',
})
export class QuizComponent {
  protected readonly quiz = inject(QuizStateService);
}
