import { effect, Injectable, signal } from '@angular/core';

const THEME_KEY = 'quiz-theme';
const COLOR_KEY = 'quiz-primary-color';
const DEFAULT_COLOR = '#6366f1'; // indigo-500
const hasStorage = typeof localStorage !== 'undefined';
const hasDocument = typeof document !== 'undefined';

function getInitialTheme(): boolean {
  if (hasStorage) {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored !== null) return stored === 'dark';
  }
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  const sl = s / 100;
  const ll = l / 100;
  const a = sl * Math.min(ll, 1 - ll);
  const f = (n: number): string => {
    const k = (n + h / 30) % 12;
    const color = ll - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generatePalette(hex: string): Record<string, string> {
  const [h, s] = hexToHsl(hex);
  const shades: [string, number][] = [
    ['50', 96], ['100', 91], ['300', 76], ['400', 65],
    ['500', 55], ['600', 45], ['700', 37], ['800', 29], ['900', 22],
  ];
  const palette: Record<string, string> = {};
  for (const [shade, lightness] of shades) {
    palette[shade] = hslToHex(h, Math.min(s, 88), lightness);
  }
  return palette;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal<boolean>(getInitialTheme());
  readonly primaryColor = signal<string>(
    hasStorage ? (localStorage.getItem(COLOR_KEY) ?? DEFAULT_COLOR) : DEFAULT_COLOR
  );

  constructor() {
    effect(() => {
      const dark = this.isDark();
      if (hasDocument) document.documentElement.classList.toggle('dark', dark);
      if (hasStorage) localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    });

    effect(() => {
      const color = this.primaryColor();
      if (hasStorage) localStorage.setItem(COLOR_KEY, color);
      if (hasDocument) this.applyColorPalette(color);
    });
  }

  toggle(): void {
    this.isDark.update((v) => !v);
  }

  setPrimaryColor(color: string): void {
    this.primaryColor.set(color);
  }

  private applyColorPalette(hex: string): void {
    const palette = generatePalette(hex);
    const root = document.documentElement;
    for (const [shade, value] of Object.entries(palette)) {
      root.style.setProperty(`--app-primary-${shade}`, value);
    }
  }
}
