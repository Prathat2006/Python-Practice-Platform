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
import sqlDdlIntegrityMd from './quizzes/sql_ddl_integrity.md?raw';
import mlQuiz1Md from './quizzes/ml_quiz1.md?raw';
import mlQuiz1PracticeMd from './quizzes/ml_quiz1_practice.md?raw';
import ml100QuestionsMd from './quizzes/ml_100_questions.md?raw';
import mlQuiz2Md from './quizzes/ml_quiz2.md?raw';
import osWeek21Md from './quizzes/os_week2_1.md?raw';
import osWeek22Md from './quizzes/os_week2_2.md?raw';
import osWeek1Md from './quizzes/os_week1.md?raw';
import osWeek3Md from './quizzes/os_week3.md?raw';
import osWeek4Md from './quizzes/os_week4.md?raw';
import osWeek5Md from './quizzes/os_week5.md?raw';
import osWeek6Md from './quizzes/os_week6.md?raw';
import osTaSpecialQuiz1Md from './quizzes/os_ta_special_quiz_1.md?raw';
import mlWeek11Md from './quizzes/ml_week11.md?raw';
import dbIntroLecture1Md from './quizzes/db_intro_lecture1.md?raw';
import dbIntroLecture1Part2Md from './quizzes/db_intro_lecture1_part2.md?raw';
import dbGradedQuiz1Md from './quizzes/db_graded_quiz1.md?raw';
import dbLecture345Md from './quizzes/db_lecture3_4_5.md?raw';
import dbWeek2Md from './quizzes/db_week2.md?raw';
import dbWeek6Md from './quizzes/db_week6.md?raw';
import dbWeek6Part2Md from './quizzes/db_week6_part2.md?raw';
import dbWeek7Md from './quizzes/db_week7.md?raw';
import dbLecture6HashingMd from './quizzes/db_lecture6_hashing.md?raw';
import dbLecture6HashingHardIitjMd from './quizzes/db_lecture6_hashing_hard_iitj.md?raw';
import dbLecture7TransactionsMd from './quizzes/db_lecture7_transactions.md?raw';
import dbWeek8SerializabilityMd from './quizzes/db_week8_serializability.md?raw';
import dbWeek9LockingMd from './quizzes/db_week9_locking.md?raw';

export type MCQProblem = {
  question: string;
  options: string[];
  correctOptionIndex?: number | number[];
  correctText?: string;
  explanation?: string;
  isMultipleChoice?: boolean;
  type?: 'mcq' | 'text';
  dataset?: string;
};

export type MCQQuiz = {
  id: string;
  title: string;
  subjectId?: string;
  questions: MCQProblem[];
};

export const mcqQuizzes: MCQQuiz[] = [
  { ...parseMarkdownQuiz("ml-100-questions", ml100QuestionsMd), subjectId: 'ml' },
  { ...parseMarkdownQuiz("ml-quiz-1", mlQuiz1Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("combined-7-10", combined710Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("week-9", week9Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("week-10", week10Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("boosting", boostingMd), subjectId: 'ml' },
  { ...parseMarkdownQuiz("random-forests", rfMd), subjectId: 'ml' },
  { ...parseMarkdownQuiz("db-quiz-2", dbQuiz2Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("sql-practice", sqlPracticeMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("sql-db-systems", sqlDbSystemsMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("sql-relational-advanced", sqlRelationalAdvancedMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("sql-ddl-integrity", sqlDdlIntegrityMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("ml-quiz1-practice", mlQuiz1PracticeMd), subjectId: 'ml' },
  { ...parseMarkdownQuiz("ml-quiz2", mlQuiz2Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("os-week1", osWeek1Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("os-week2-1", osWeek21Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("os-week2-2", osWeek22Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("os-week3", osWeek3Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("os-week4", osWeek4Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("os-week5", osWeek5Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("os-week6", osWeek6Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("os-ta-special-quiz-1", osTaSpecialQuiz1Md), subjectId: 'os' },
  { ...parseMarkdownQuiz("ml-week11", mlWeek11Md), subjectId: 'ml' },
  { ...parseMarkdownQuiz("db-lecture1-intro", dbIntroLecture1Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-lecture1-intro-part2", dbIntroLecture1Part2Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-graded-quiz-1", dbGradedQuiz1Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-lecture3-4-5", dbLecture345Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-week2", dbWeek2Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-week6", dbWeek6Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-week6-part2", dbWeek6Part2Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-week7", dbWeek7Md), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-lecture6-hashing", dbLecture6HashingMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-lecture6-hashing-hard-iitj", dbLecture6HashingHardIitjMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-lecture7-transactions-concurrency", dbLecture7TransactionsMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-week8-serializability", dbWeek8SerializabilityMd), subjectId: 'db' },
  { ...parseMarkdownQuiz("db-week9-locking", dbWeek9LockingMd), subjectId: 'db' }
];
