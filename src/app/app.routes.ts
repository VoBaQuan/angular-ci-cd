import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  {
    path: 'quiz',
    loadComponent: () => import('./quiz/quiz').then((m) => m.QuizComponent),
  },
];
