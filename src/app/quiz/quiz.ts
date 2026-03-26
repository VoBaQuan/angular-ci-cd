import { Component, inject } from '@angular/core';
import { QuizStateService } from './quiz-state.service';
import { StartComponent } from './start/start';
import { QuestionComponent } from './question/question';
import { ResultComponent } from './result/result';
import { I18nService } from '../i18n/i18n.service';
import { ThemeService } from '../theme.service';
import { LucideAngularModule } from 'lucide-angular';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-quiz',
  imports: [StartComponent, QuestionComponent, ResultComponent, LucideAngularModule],
  templateUrl: './quiz.html',
  animations: [fadeIn],
})
export class QuizComponent {
  protected readonly quiz = inject(QuizStateService);
  protected readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);
}
