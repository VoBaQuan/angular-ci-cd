import { Component, inject } from '@angular/core';
import { QuizStateService } from '../quiz-state.service';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.html',
})
export class StartComponent {
  protected readonly quiz = inject(QuizStateService);
  protected readonly i18n = inject(I18nService);
}
