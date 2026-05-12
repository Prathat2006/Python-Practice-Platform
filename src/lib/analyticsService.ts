
export interface QuizAttempt {
  date: string;
  score: number;
  total: number;
}

export interface QuizStats {
  quizId: string;
  attemptsCount: number;
  lastScore: number;
  lastTotal: number;
  lastAttemptDate: string;
  history: QuizAttempt[];
}

export interface UserAnalytics {
  lastQuizId: string | null;
  quizzes: Record<string, QuizStats>;
}

const STORAGE_KEY = 'quiz_analytics_data';

export const analyticsService = {
  getAnalytics(): UserAnalytics {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return { lastQuizId: null, quizzes: {} };
    }
    return JSON.parse(data);
  },

  saveAttempt(quizId: string, score: number, total: number) {
    const analytics = this.getAnalytics();
    const date = new Date().toISOString();

    const quizStats = analytics.quizzes[quizId] || {
      quizId,
      attemptsCount: 0,
      lastScore: 0,
      lastTotal: 0,
      lastAttemptDate: '',
      history: []
    };

    quizStats.attemptsCount += 1;
    quizStats.lastScore = score;
    quizStats.lastTotal = total;
    quizStats.lastAttemptDate = date;
    quizStats.history.push({ date, score, total });

    // Keep only last 10 attempts for space
    if (quizStats.history.length > 10) {
      quizStats.history = quizStats.history.slice(-10);
    }

    analytics.quizzes[quizId] = quizStats;
    analytics.lastQuizId = quizId;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics));
  },

  getQuizStats(quizId: string): QuizStats | null {
    const analytics = this.getAnalytics();
    return analytics.quizzes[quizId] || null;
  }
};
