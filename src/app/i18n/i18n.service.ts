import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Lang, LANG_FLAGS, LANG_LABELS, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'quiz-lang';
const VALID_LANGS: Lang[] = ['en', 'vi', 'zh'];

function getInitialLang(isBrowser: boolean): Lang {
  if (!isBrowser) return 'en';
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  return stored && VALID_LANGS.includes(stored) ? stored : 'en';
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly lang = signal<Lang>(getInitialLang(isPlatformBrowser(this.platformId)));
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  readonly langs: Lang[] = VALID_LANGS;
  readonly langFlags = LANG_FLAGS;
  readonly langLabels = LANG_LABELS;

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(STORAGE_KEY, this.lang());
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
