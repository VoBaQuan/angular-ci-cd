export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export type QuizStatus = 'idle' | 'playing' | 'finished';
