export type SectionId =
  | 'pembuka'
  | 'pengenalan'
  | 'tabung'
  | 'bola'
  | 'kerucut'
  | 'ringkasan'
  | 'contoh-soal'
  | 'latihan-hots';

export interface SolidElement {
  name: string;
  symbol?: string;
  description: string;
  color: string;
}

export interface FormulaItem {
  name: string;
  formula: string;
  spokenFormula: string;
  description: string;
  unit: string;
  breakdown?: string[];
}

export interface ExampleProblem {
  id: string;
  solidType: 'tabung' | 'bola' | 'kerucut';
  title: string;
  context: string;
  illustrationType: 'drum' | 'ball' | 'cone' | 'tumpeng' | 'can';
  known: { label: string; value: string; spoken: string }[];
  asked: string;
  spokenAsked: string;
  formulaUsed: string;
  spokenFormulaUsed: string;
  logicReason: string;
  steps: {
    title: string;
    detail: string;
    calculation: string;
    spoken: string;
  }[];
  finalAnswer: string;
  spokenFinalAnswer: string;
}

export interface QuizQuestion {
  id: number;
  level: 'C4 (Menganalisis)' | 'C5 (Mengevaluasi)' | 'C6 (Merancang Solusi)';
  solidType: 'Tabung' | 'Bola' | 'Kerucut' | 'Gabungan';
  contextTitle: string;
  story: string;
  question: string;
  spokenQuestion: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
    spoken: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: {
    concept: string;
    known: string[];
    steps: string[];
    conclusion: string;
    spokenExplanation: string;
  };
  diagramType: 'tank' | 'biscuit' | 'party-hat' | 'ice-cream' | 'dome' | 'spheres-compare' | 'funnel-drum' | 'error-analysis' | 'beverage-can' | 'capsule-tank';
}

export interface QuizProgress {
  currentIndex: number;
  selectedAnswers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>;
  checkedQuestions: Record<number, boolean>;
  isCompleted: boolean;
  score: number;
}
