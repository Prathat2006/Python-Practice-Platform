import { parseMarkdownQuiz } from './mdParser';
import week9Md from './quizzes/week9.md?raw';
import week10Md from './quizzes/week10.md?raw';
import boostingMd from './quizzes/boosting.md?raw';
import rfMd from './quizzes/random_forests.md?raw';

export type MCQProblem = {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
};

export type MCQQuiz = {
  id: string;
  title: string;
  questions: MCQProblem[];
};

export const mcqQuizzes: MCQQuiz[] = [
  parseMarkdownQuiz("week-9", week9Md),
  parseMarkdownQuiz("week-10", week10Md),
  parseMarkdownQuiz("boosting", boostingMd),
  parseMarkdownQuiz("random-forests", rfMd)
];
