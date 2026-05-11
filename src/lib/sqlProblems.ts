export interface SQLProblem {
  id: string;
  title: string;
  description: string;
  expectedQuery: string;
  initialCode: string;
}

export const sqlProblems: SQLProblem[] = [
  {
    id: 'sql-1',
    title: 'Selection',
    description: 'Display all movies from the `movies` table.',
    expectedQuery: 'SELECT * FROM movies;',
    initialCode: 'SELECT * FROM movies;'
  },
  {
    id: 'sql-2',
    title: 'Column Projection',
    description: 'Show only `title` and `genre` from movies.',
    expectedQuery: 'SELECT title, genre FROM movies;',
    initialCode: ''
  },
  {
    id: 'sql-3',
    title: 'Filtering Rows',
    description: 'List all Premium users from the `users` table.',
    expectedQuery: "SELECT * FROM users WHERE subscription_tier = 'Premium';",
    initialCode: ''
  },
  {
    id: 'sql-4',
    title: 'Date Filtering',
    description: 'Show movies released after 2010.',
    expectedQuery: 'SELECT * FROM movies WHERE release_year > 2010;',
    initialCode: ''
  },
  {
    id: 'sql-5',
    title: 'Complex Filtering',
    description: 'Show Sci-Fi movies with rating above 8.5 ordered by rating descending.',
    expectedQuery: "SELECT * FROM movies WHERE genre = 'Sci-Fi' AND imdb_rating > 8.5 ORDER BY imdb_rating DESC;",
    initialCode: ''
  },
  {
    id: 'sql-6',
    title: 'NULL Handling',
    description: 'Show movies where IMDb rating is NULL.',
    expectedQuery: 'SELECT * FROM movies WHERE imdb_rating IS NULL;',
    initialCode: ''
  },
  {
    id: 'sql-7',
    title: 'Basic Aggregation',
    description: 'Count the total number of movies.',
    expectedQuery: 'SELECT COUNT(*) FROM movies;',
    initialCode: ''
  },
  {
    id: 'sql-8',
    title: 'Grouping',
    description: 'Find number of movies in each genre.',
    expectedQuery: 'SELECT genre, COUNT(*) FROM movies GROUP BY genre;',
    initialCode: ''
  },
  {
    id: 'sql-9',
    title: 'Join Operations',
    description: 'Show usernames with movie titles they watched.',
    expectedQuery: 'SELECT u.username, m.title FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id;',
    initialCode: ''
  },
  {
    id: 'sql-10',
    title: 'Subqueries',
    description: 'Find movies with rating higher than average IMDb rating.',
    expectedQuery: 'SELECT * FROM movies WHERE imdb_rating > (SELECT AVG(imdb_rating) FROM movies);',
    initialCode: ''
  },
  {
    id: 'sql-11',
    title: 'Genre Duration',
    description: 'Find average movie duration per genre.',
    expectedQuery: 'SELECT genre, AVG(duration_mins) FROM movies GROUP BY genre;',
    initialCode: ''
  },
  {
    id: 'sql-12',
    title: 'Genre Filtering',
    description: 'Find genres having more than 3 movies.',
    expectedQuery: 'SELECT genre FROM movies GROUP BY genre HAVING COUNT(*) > 3;',
    initialCode: ''
  },
  {
    id: 'sql-13',
    title: 'Never Watched',
    description: 'Find all users who have never watched any movie.',
    expectedQuery: 'SELECT username FROM users WHERE id NOT IN (SELECT DISTINCT user_id FROM watch_history);',
    initialCode: ''
  },
  {
    id: 'sql-14',
    title: 'Maximum Rating',
    description: 'Find movie(s) with maximum IMDb rating.',
    expectedQuery: 'SELECT * FROM movies WHERE imdb_rating = (SELECT MAX(imdb_rating) FROM movies);',
    initialCode: ''
  },
  {
    id: 'sql-15',
    title: 'Inter-month Watches',
    description: 'Find movies watched in both September and October.',
    expectedQuery: "SELECT movie_id FROM watch_history WHERE watch_date BETWEEN '2023-09-01' AND '2023-09-30' AND movie_id IN (SELECT movie_id FROM watch_history WHERE watch_date BETWEEN '2023-10-01' AND '2023-10-31');",
    initialCode: ''
  },
  {
    id: 'sql-16',
    title: 'Genre Highest Rating',
    description: 'Find the genre with the highest average IMDb rating.',
    expectedQuery: "SELECT genre FROM movies GROUP BY genre ORDER BY AVG(imdb_rating) DESC LIMIT 1;",
    initialCode: ''
  },
  {
    id: 'sql-17',
    title: 'Watch Counts',
    description: 'Find users who watched more than 1 movie.',
    expectedQuery: "SELECT username FROM users u JOIN watch_history w ON u.id = w.user_id GROUP BY u.id HAVING COUNT(*) > 1;",
    initialCode: ''
  },
  {
    id: 'sql-18',
    title: 'Specific Genre Duration',
    description: 'Find Sci-Fi movies with duration between 120 and 160 minutes.',
    expectedQuery: "SELECT * FROM movies WHERE genre = 'Sci-Fi' AND duration_mins BETWEEN 120 AND 160;",
    initialCode: ''
  },
  {
    id: 'sql-19',
    title: 'Subscription Comparison',
    description: 'Find movie titles watched by Premium users only (excluding movies ever watched by Basic users).',
    expectedQuery: "SELECT DISTINCT m.title FROM movies m JOIN watch_history w ON m.id = w.movie_id JOIN users u ON u.id = w.user_id WHERE u.subscription_tier = 'Premium' AND m.id NOT IN (SELECT DISTINCT movie_id FROM watch_history wh JOIN users us ON us.id = wh.user_id WHERE us.subscription_tier = 'Basic');",
    initialCode: ''
  },
  {
    id: 'sql-20',
    title: 'Most Active User',
    description: 'Find the username of the person who has the highest total completion percentage sum across all their watches.',
    expectedQuery: "SELECT u.username FROM users u JOIN watch_history w ON u.id = w.user_id GROUP BY u.id ORDER BY SUM(w.completion_pct) DESC LIMIT 1;",
    initialCode: ''
  }
];
