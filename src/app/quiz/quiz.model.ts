import { Lang } from '../i18n/translations';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface MultiLangQuizQuestion {
  id: number;
  translations: Record<Lang, { question: string; options: string[] }>;
  correctIndex: number;
}

export type QuizStatus = 'idle' | 'playing' | 'finished';
