import { parseMarkdownQuiz } from './mdParser';
import week9Md from './quizzes/week9.md?raw';
import week10Md from './quizzes/week10.md?raw';
import boostingMd from './quizzes/boosting.md?raw';
import rfMd from './quizzes/random_forests.md?raw';
import combined710Md from './quizzes/week7_to_10.md?raw';
import dbQuiz2Md from './quizzes/db_quiz_2.md?raw';
import sqlPracticeMd from './quizzes/sql_practice_problems.md?raw';
import sqlDbSystemsMd from './quizzes/sql_db_systems_mcq.md?raw';
import sqlRelationalAdvancedMd from './quizzes/sql_relational_advanced.md?raw';

export type MCQProblem = {
  question: string;
  options: string[];
  correctOptionIndex?: number | number[];
  correctText?: string;
  explanation?: string;
  isMultipleChoice?: boolean;
  type?: 'mcq' | 'text';
};

export type MCQQuiz = {
  id: string;
  title: string;
  subjectId?: string;
  questions: MCQProblem[];
};

export const mcqQuizzes: MCQQuiz[] = [
  { ...parseMarkdownQuiz("combined-7-10", combined710Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("week-9", week9Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("week-10", week10Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("boosting", boostingMd), subjectId: 'ml' },
  { ...parseMarkdownQuiz("random-forests", rfMd), subjectId: 'ml' },
  { ...parseMarkdownQuiz("db-quiz-2", dbQuiz2Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("sql-practice", sqlPracticeMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("sql-db-systems", sqlDbSystemsMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("sql-relational-advanced", sqlRelationalAdvancedMd), subjectId: 'db' }
];
