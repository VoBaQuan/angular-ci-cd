import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {
  LUCIDE_ICONS, LucideIconProvider,
  Zap, Play, ChevronLeft, ChevronRight,
  Check, X, CircleCheck, CircleX, Lightbulb, RotateCcw,
  Trophy, PartyPopper, ThumbsUp, BookOpen,
  Clock, Shuffle, History, Trash2,
  Sun, Moon,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({
        Zap, Play, ChevronLeft, ChevronRight,
        Check, X, CircleCheck, CircleX, Lightbulb, RotateCcw,
        Trophy, PartyPopper, ThumbsUp, BookOpen,
        Clock, Shuffle, History, Trash2,
        Sun, Moon,
      }),
    },
  ],
};
