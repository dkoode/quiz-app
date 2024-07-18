export interface Question {
  question: string;
  options: string[];
}
export interface Answer {
  question: string;
  answer: string;
  selectedAnswerItem:number | string | null;
}
export interface AnswerProps {
  questions: string[];
  onAnswerSelect: (answer: string, index:number) => void;
  isAnswerable: boolean;
}
export interface AnswerResult{
  question: string;
  answer: string
  selectedAnswerItem: number | string | null;
}