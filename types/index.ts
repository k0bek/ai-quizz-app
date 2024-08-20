export type AnswerMapItem = {
  [key: number]: number | undefined;
};

export type HistoryItem = {
  question: string;
  selectedAnswer: string;
  isCorrect: boolean;
  options: { answer: string; properValue: boolean }[];
};
