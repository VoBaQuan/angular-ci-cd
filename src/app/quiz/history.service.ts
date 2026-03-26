import { Injectable, signal } from '@angular/core';

export interface HistoryEntry {
  date: string;
  score: number;
  total: number;
  percent: number;
}

const HISTORY_KEY = 'quiz-history';
const MAX_HISTORY = 5;
const hasStorage = typeof localStorage !== 'undefined';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  readonly entries = signal<HistoryEntry[]>(this.load());

  private load(): HistoryEntry[] {
    if (!hasStorage) return [];
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  add(score: number, total: number): void {
    const entry: HistoryEntry = {
      date: new Date().toISOString(),
      score,
      total,
      percent: Math.round((score / total) * 100),
    };
    const next = [entry, ...this.entries()].slice(0, MAX_HISTORY);
    this.entries.set(next);
    if (hasStorage) localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  }

  clear(): void {
    this.entries.set([]);
    if (hasStorage) localStorage.removeItem(HISTORY_KEY);
  }
}
