import { computed, effect, Injectable, signal } from '@angular/core';
import { Lang, LANG_FLAGS, LANG_LABELS, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'quiz-lang';
const VALID_LANGS: Lang[] = ['en', 'vi', 'zh'];
const hasStorage = typeof localStorage !== 'undefined';

function getInitialLang(): Lang {
  if (!hasStorage) return 'en';
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  return stored && VALID_LANGS.includes(stored) ? stored : 'en';
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(getInitialLang());
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  readonly langs: Lang[] = VALID_LANGS;
  readonly langFlags = LANG_FLAGS;
  readonly langLabels = LANG_LABELS;

  constructor() {
    effect(() => {
      if (hasStorage) {
        localStorage.setItem(STORAGE_KEY, this.lang());
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
