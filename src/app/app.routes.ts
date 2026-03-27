import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  {
    path: 'intro',
    loadComponent: () => import('./intro/intro').then((m) => m.IntroComponent),
  },
  {
    path: 'quiz',
    loadComponent: () => import('./quiz/quiz').then((m) => m.QuizComponent),
  },
];
