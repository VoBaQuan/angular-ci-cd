import { effect, Injectable, signal } from '@angular/core';

const THEME_KEY = 'quiz-theme';
const hasStorage = typeof localStorage !== 'undefined';
const hasDocument = typeof document !== 'undefined';

function getInitialTheme(): boolean {
  if (hasStorage) {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored !== null) return stored === 'dark';
  }
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal<boolean>(getInitialTheme());

  constructor() {
    effect(() => {
      const dark = this.isDark();
      if (hasDocument) document.documentElement.classList.toggle('dark', dark);
      if (hasStorage) localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.isDark.update((v) => !v);
  }
}
