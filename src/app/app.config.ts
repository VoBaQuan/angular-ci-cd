import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import {
  LUCIDE_ICONS, LucideIconProvider,
  Zap, Play, ChevronLeft, ChevronRight,
  Check, X, CircleCheck, CircleX, Lightbulb, RotateCcw,
  Trophy, PartyPopper, ThumbsUp, BookOpen,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({
        Zap, Play, ChevronLeft, ChevronRight,
        Check, X, CircleCheck, CircleX, Lightbulb, RotateCcw,
        Trophy, PartyPopper, ThumbsUp, BookOpen,
      }),
    },
  ],
};
