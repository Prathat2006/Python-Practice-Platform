export interface SQLProblem {
  id: string;
  title: string;
  description: string;
  expectedQuery: string;
  initialCode: string;
}

export interface SQLQuiz {
  id: string;
  title: string;
  description: string;
  problems: SQLProblem[];
}

const allProblems: SQLProblem[] = [
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
  },
  {
    id: 'sql-21',
    title: 'Genre Counts',
    description: 'Find the total number of movies for each genre.',
    expectedQuery: 'SELECT genre, COUNT(*) FROM movies GROUP BY genre;',
    initialCode: ''
  },
  {
    id: 'sql-22',
    title: 'Recent Sci-Fi',
    description: 'List Sci-Fi movies released after the year 2000.',
    expectedQuery: "SELECT * FROM movies WHERE genre = 'Sci-Fi' AND release_year > 2000;",
    initialCode: ''
  },
  {
    id: 'sql-23',
    title: 'Average Completion',
    description: 'Find the average completion percentage for all watches.',
    expectedQuery: 'SELECT AVG(completion_pct) FROM watch_history;',
    initialCode: ''
  },
  {
    id: 'sql-24',
    title: 'High Rated Selection',
    description: 'Display titles of movies with an IMDb rating of 9.0 or higher.',
    expectedQuery: 'SELECT title FROM movies WHERE imdb_rating >= 9.0;',
    initialCode: ''
  },
  {
    id: 'sql-25',
    title: 'User Signup Timeline',
    description: 'List usernames of users who signed up in the first half of 2023 (Jan 1 to June 30).',
    expectedQuery: "SELECT username FROM users WHERE signup_date BETWEEN '2023-01-01' AND '2023-06-30';",
    initialCode: ''
  },
  {
    id: 'sql-26',
    title: 'Short Movies',
    description: 'Find movies that are shorter than 100 minutes.',
    expectedQuery: 'SELECT * FROM movies WHERE duration_mins < 100;',
    initialCode: ''
  },
  {
    id: 'sql-27',
    title: 'Tiered User Counts',
    description: 'Count how many users are in each subscription tier.',
    expectedQuery: 'SELECT subscription_tier, COUNT(*) FROM users GROUP BY subscription_tier;',
    initialCode: ''
  },
  {
    id: 'sql-28',
    title: 'Animation Average',
    description: 'Find the average IMDb rating for "Animation" movies.',
    expectedQuery: "SELECT AVG(imdb_rating) FROM movies WHERE genre = 'Animation';",
    initialCode: ''
  },
  {
    id: 'sql-29',
    title: 'Watch History Dates',
    description: 'List all watch dates for movie ID 1.',
    expectedQuery: 'SELECT watch_date FROM watch_history WHERE movie_id = 1;',
    initialCode: ''
  },
  {
    id: 'sql-30',
    title: 'Long Action Movies',
    description: 'List Action movies that are longer than 150 minutes.',
    expectedQuery: "SELECT * FROM movies WHERE genre = 'Action' AND duration_mins > 150;",
    initialCode: ''
  },
  {
    id: 'sql-31',
    title: 'Monthly Watch Activity',
    description: 'Count how many watches occurred in September 2023.',
    expectedQuery: "SELECT COUNT(*) FROM watch_history WHERE watch_date BETWEEN '2023-09-01' AND '2023-09-30';",
    initialCode: ''
  },
  {
    id: 'sql-32',
    title: 'User Watch List',
    description: 'Find all movie IDs watched by the user "Amit_P".',
    expectedQuery: "SELECT movie_id FROM watch_history wh JOIN users u ON wh.user_id = u.id WHERE u.username = 'Amit_P';",
    initialCode: ''
  },
  {
    id: 'sql-33',
    title: 'Specific Year Movies',
    description: 'List titles of movies released exactly in 2003.',
    expectedQuery: 'SELECT title FROM movies WHERE release_year = 2003;',
    initialCode: ''
  },
  {
    id: 'sql-34',
    title: 'Max Completion Per User',
    description: 'Find the maximum completion percentage reached by each user.',
    expectedQuery: 'SELECT user_id, MAX(completion_pct) FROM watch_history GROUP BY user_id;',
    initialCode: ''
  },
  {
    id: 'sql-35',
    title: 'Lowest Rating',
    description: 'Find the title of the movie with the lowest IMDb rating.',
    expectedQuery: 'SELECT title FROM movies ORDER BY imdb_rating ASC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-36',
    title: 'Genre Duration Sum',
    description: 'Calculate the total duration (in minutes) of all movies in the "Sci-Fi" genre.',
    expectedQuery: "SELECT SUM(duration_mins) FROM movies WHERE genre = 'Sci-Fi';",
    initialCode: ''
  },
  {
    id: 'sql-37',
    title: 'Partial Watches',
    description: 'List all watches where the completion percentage was between 10 and 50.',
    expectedQuery: 'SELECT * FROM watch_history WHERE completion_pct BETWEEN 10 AND 50;',
    initialCode: ''
  },
  {
    id: 'sql-38',
    title: 'Alphabetical Titles',
    description: 'List all movie titles in alphabetical order.',
    expectedQuery: 'SELECT title FROM movies ORDER BY title ASC;',
    initialCode: ''
  },
  {
    id: 'sql-39',
    title: 'User Signups Over Time',
    description: 'List users ordered by their signup date, starting from the most recent.',
    expectedQuery: 'SELECT * FROM users ORDER BY signup_date DESC;',
    initialCode: ''
  },
  {
    id: 'sql-40',
    title: 'Generic Genres',
    description: 'List all unique genres in alphabetical order.',
    expectedQuery: 'SELECT DISTINCT genre FROM movies ORDER BY genre ASC;',
    initialCode: ''
  },
  {
    id: 'sql-41',
    title: 'Watched Movies with Genre',
    description: 'Show titles of movies and their genres for all watches in the watch history.',
    expectedQuery: 'SELECT m.title, m.genre FROM movies m JOIN watch_history w ON m.id = w.movie_id;',
    initialCode: ''
  },
  {
    id: 'sql-42',
    title: 'User Completion Status',
    description: 'Show usernames and their completion percentages for each watch.',
    expectedQuery: 'SELECT u.username, w.completion_pct FROM users u JOIN watch_history w ON u.id = w.user_id;',
    initialCode: ''
  },
  {
    id: 'sql-43',
    title: 'Full Watch Details',
    description: 'List username, movie title, and completion percentage for all records.',
    expectedQuery: 'SELECT u.username, m.title, w.completion_pct FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id;',
    initialCode: ''
  },
  {
    id: 'sql-44',
    title: 'Highly Completed Watches',
    description: 'Find movie titles watched by users with a completion percentage of at least 100%.',
    expectedQuery: 'SELECT DISTINCT m.title FROM movies m JOIN watch_history w ON m.id = w.movie_id WHERE w.completion_pct >= 100;',
    initialCode: ''
  },
  {
    id: 'sql-45',
    title: 'Missing Ratings Count',
    description: 'Count how many movies have no IMDb rating recorded.',
    expectedQuery: 'SELECT COUNT(*) FROM movies WHERE imdb_rating IS NULL;',
    initialCode: ''
  },
  {
    id: 'sql-46',
    title: 'Users with Specific Tier watches',
    description: 'List usernames of Basic tier users who have watched at least one movie.',
    expectedQuery: "SELECT DISTINCT u.username FROM users u JOIN watch_history w ON u.id = w.user_id WHERE u.subscription_tier = 'Basic';",
    initialCode: ''
  },
  {
    id: 'sql-47',
    title: 'Oldest Movie Watched',
    description: 'Find the title and release year of the oldest movie present in the watch history.',
    expectedQuery: 'SELECT m.title, m.release_year FROM movies m JOIN watch_history w ON m.id = w.movie_id ORDER BY m.release_year ASC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-48',
    title: 'Genre Popularity',
    description: 'Find which genre has the highest number of watches.',
    expectedQuery: 'SELECT m.genre, COUNT(*) FROM movies m JOIN watch_history w ON m.id = w.movie_id GROUP BY m.genre ORDER BY COUNT(*) DESC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-49',
    title: 'Top Completion User',
    description: 'Find the username of the user with the single highest completion percentage record.',
    expectedQuery: 'SELECT u.username FROM users u JOIN watch_history w ON u.id = w.user_id ORDER BY w.completion_pct DESC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-50',
    title: 'Movies Without Any Watch',
    description: 'List titles of movies that have never been watched by anyone (use self-contained subquery).',
    expectedQuery: 'SELECT title FROM movies WHERE id NOT IN (SELECT movie_id FROM watch_history);',
    initialCode: ''
  },
  {
    id: 'sql-51',
    title: 'Users Without Any Watch',
    description: 'List usernames of users who have not watched any movies yet.',
    expectedQuery: 'SELECT username FROM users WHERE id NOT IN (SELECT user_id FROM watch_history);',
    initialCode: ''
  },
  {
    id: 'sql-52',
    title: 'Average Rating per Tier',
    description: 'Find the average movie rating watched by "Premium" vs "Basic" users.',
    expectedQuery: 'SELECT u.subscription_tier, AVG(m.imdb_rating) FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id GROUP BY u.subscription_tier;',
    initialCode: ''
  },
  {
    id: 'sql-53',
    title: 'Multiple Watch Movies',
    description: 'List titles of movies that have been watched more than once.',
    expectedQuery: 'SELECT m.title FROM movies m JOIN watch_history w ON m.id = w.movie_id GROUP BY m.id HAVING COUNT(*) > 1;',
    initialCode: ''
  },
  {
    id: 'sql-54',
    title: 'Recent Watch History',
    description: 'List username and title for all movies watched in October 2023.',
    expectedQuery: "SELECT u.username, m.title FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id WHERE w.watch_date BETWEEN '2023-10-01' AND '2023-10-31';",
    initialCode: ''
  },
  {
    id: 'sql-55',
    title: 'Sci-Fi Fans',
    description: 'List usernames of users who have watched at least one "Sci-Fi" movie.',
    expectedQuery: "SELECT DISTINCT u.username FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id WHERE m.genre = 'Sci-Fi';",
    initialCode: ''
  },
  {
    id: 'sql-56',
    title: 'Total Watch Sum',
    description: 'Calculate the total completion percentage across all entries for user ID 1.',
    expectedQuery: 'SELECT SUM(completion_pct) FROM watch_history WHERE user_id = 1;',
    initialCode: ''
  },
  {
    id: 'sql-57',
    title: 'Genre Variety per User',
    description: 'Find how many different genres each user has watched.',
    expectedQuery: 'SELECT u.username, COUNT(DISTINCT m.genre) FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id GROUP BY u.id;',
    initialCode: ''
  },
  {
    id: 'sql-58',
    title: 'Unrated Movie Watch Count',
    description: 'Count how many watches involved movies that have no IMDb rating.',
    expectedQuery: 'SELECT COUNT(*) FROM watch_history w JOIN movies m ON w.movie_id = m.id WHERE m.imdb_rating IS NULL;',
    initialCode: ''
  },
  {
    id: 'sql-59',
    title: 'Average PCT for Genre',
    description: 'Find the average completion percentage for each genre.',
    expectedQuery: 'SELECT m.genre, AVG(w.completion_pct) FROM movies m JOIN watch_history w ON m.id = w.movie_id GROUP BY m.genre;',
    initialCode: ''
  },
  {
    id: 'sql-60',
    title: 'First and Last Signup',
    description: 'Find the dates of the earliest and most recent user signups.',
    expectedQuery: 'SELECT MIN(signup_date), MAX(signup_date) FROM users;',
    initialCode: ''
  },
  {
    id: 'sql-61',
    title: 'Highly Active Users',
    description: 'Find usernames of users who have watched 3 or more movies.',
    expectedQuery: 'SELECT u.username FROM users u JOIN watch_history w ON u.id = w.user_id GROUP BY u.id HAVING COUNT(*) >= 3;',
    initialCode: ''
  },
  {
    id: 'sql-62',
    title: 'Above Average Ratings',
    description: 'List all movie titles that have an IMDb rating higher than the average rating of all Sci-Fi movies.',
    expectedQuery: "SELECT title FROM movies WHERE imdb_rating > (SELECT AVG(imdb_rating) FROM movies WHERE genre = 'Sci-Fi');",
    initialCode: ''
  },
  {
    id: 'sql-63',
    title: 'Movies with Full Watches Only',
    description: 'Find movies that have only been watched with 100% completion (exclude movies ever watched below 100%).',
    expectedQuery: 'SELECT DISTINCT title FROM movies m JOIN watch_history w ON m.id = w.movie_id WHERE m.id NOT IN (SELECT movie_id FROM watch_history WHERE completion_pct < 100);',
    initialCode: ''
  },
  {
    id: 'sql-64',
    title: 'Genre with Shortest Movies',
    description: 'Find the genre that has the shortest average movie duration.',
    expectedQuery: 'SELECT genre FROM movies GROUP BY genre ORDER BY AVG(duration_mins) ASC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-65',
    title: 'Top Rated Action Movie',
    description: 'Find the title and rating of the highest-rated Action movie.',
    expectedQuery: "SELECT title, imdb_rating FROM movies WHERE genre = 'Action' ORDER BY imdb_rating DESC LIMIT 1;",
    initialCode: ''
  },
  {
    id: 'sql-66',
    title: 'Users Watching Same Movie',
    description: 'Find pairs of different usernames who watched the same movie (use a self-join scenario or logical filter). For this challenge, just find usernames who watched Inception.',
    expectedQuery: "SELECT DISTINCT u.username FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id WHERE m.title = 'Inception';",
    initialCode: ''
  },
  {
    id: 'sql-67',
    title: 'September and November Users',
    description: 'Find usernames of users who watched movies in both September and November.',
    expectedQuery: "SELECT username FROM users WHERE id IN (SELECT user_id FROM watch_history WHERE watch_date BETWEEN '2023-09-01' AND '2023-09-30') AND id IN (SELECT user_id FROM watch_history WHERE watch_date BETWEEN '2023-11-01' AND '2023-11-30');",
    initialCode: ''
  },
  {
    id: 'sql-68',
    title: 'Most Recent Watch',
    description: 'Find the movie title and the date it was last watched.',
    expectedQuery: 'SELECT m.title, w.watch_date FROM movies m JOIN watch_history w ON m.id = w.movie_id ORDER BY w.watch_date DESC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-69',
    title: 'Movies Watched by All Premiums',
    description: 'Find titles of movies watched by every single Premium user (Division approximation). For now, just find movies watched by at least 2 different Premium users.',
    expectedQuery: "SELECT m.title FROM movies m JOIN watch_history w ON m.id = w.movie_id JOIN users u ON u.id = w.user_id WHERE u.subscription_tier = 'Premium' GROUP BY m.id HAVING COUNT(DISTINCT u.id) >= 2;",
    initialCode: ''
  },
  {
    id: 'sql-70',
    title: 'Average Completion of Premium',
    description: 'Compare the average completion percentage of Premium users vs Basic users.',
    expectedQuery: 'SELECT u.subscription_tier, AVG(w.completion_pct) FROM users u JOIN watch_history w ON u.id = w.user_id GROUP BY u.subscription_tier;',
    initialCode: ''
  },
  {
    id: 'sql-71',
    title: 'Movies with Specific Characters',
    description: 'List movie titles that contain the letter "a" exactly twice (Approximate with LIKE). For now, just find titles containing "In".',
    expectedQuery: "SELECT title FROM movies WHERE title LIKE '%In%';",
    initialCode: ''
  },
  {
    id: 'sql-72',
    title: 'Highly Rated Subquery',
    description: 'List usernames who watched movies with a rating higher than 8.8.',
    expectedQuery: 'SELECT DISTINCT u.username FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id WHERE m.imdb_rating > 8.8;',
    initialCode: ''
  },
  {
    id: 'sql-73',
    title: 'Watch Gap',
    description: 'Find the duration of the longest movie that has never been watched.',
    expectedQuery: 'SELECT MAX(duration_mins) FROM movies WHERE id NOT IN (SELECT movie_id FROM watch_history);',
    initialCode: ''
  },
  {
    id: 'sql-74',
    title: 'User Watch Frequency',
    description: 'List usernames and the count of their total watches, sorted by count descending.',
    expectedQuery: 'SELECT u.username, COUNT(w.watch_id) FROM users u LEFT JOIN watch_history w ON u.id = w.user_id GROUP BY u.id ORDER BY COUNT(w.watch_id) DESC;',
    initialCode: ''
  },
  {
    id: 'sql-75',
    title: 'Genre Rating Range',
    description: 'For each genre, find the difference between the maximum and minimum IMDb rating.',
    expectedQuery: 'SELECT genre, (MAX(imdb_rating) - MIN(imdb_rating)) as diff FROM movies GROUP BY genre;',
    initialCode: ''
  },
  {
    id: 'sql-76',
    title: 'Top Completion per Genre',
    description: 'Find the highest completion percentage achieved in any "Action" movie watch.',
    expectedQuery: "SELECT MAX(w.completion_pct) FROM watch_history w JOIN movies m ON w.movie_id = m.id WHERE m.genre = 'Action';",
    initialCode: ''
  },
  {
    id: 'sql-77',
    title: 'Users with Early Signups',
    description: 'List usernames who signed up before any movie in the "Sci-Fi" genre was watched.',
    expectedQuery: "SELECT username FROM users WHERE signup_date < (SELECT MIN(w.watch_date) FROM watch_history w JOIN movies m ON w.movie_id = m.id WHERE m.genre = 'Sci-Fi');",
    initialCode: ''
  },
  {
    id: 'sql-78',
    title: 'Genre with Most Distinct Users',
    description: 'Find the genre that has been watched by the highest number of unique users.',
    expectedQuery: 'SELECT m.genre FROM movies m JOIN watch_history w ON m.id = w.movie_id GROUP BY m.genre ORDER BY COUNT(DISTINCT w.user_id) DESC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-79',
    title: 'Longest Movie Title',
    description: 'Find the movie with the longest title string.',
    expectedQuery: 'SELECT title FROM movies ORDER BY LENGTH(title) DESC LIMIT 1;',
    initialCode: ''
  },
  {
    id: 'sql-80',
    title: 'Completeness Check',
    description: 'Find the total number of users who have completed at least 100 minutes of total watch time (SUM of duration * PCT).',
    expectedQuery: 'SELECT COUNT(*) FROM (SELECT u.id FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id GROUP BY u.id HAVING SUM(m.duration_mins * w.completion_pct / 100.0) >= 100);',
    initialCode: ''
  }
];

export const sqlQuizzes: SQLQuiz[] = [
  {
    id: 'sql-quiz-1',
    title: 'SQL Fundamentals',
    description: 'Master SELECT, WHERE, and basic ordering.',
    problems: allProblems.slice(0, 20)
  },
  {
    id: 'sql-quiz-2',
    title: 'Intermediate SQL',
    description: 'Grouping, Aggregations, and Date filtering.',
    problems: allProblems.slice(20, 40)
  },
  {
    id: 'sql-quiz-3',
    title: 'Joins & Subqueries',
    description: 'Connecting multiple tables and nesting queries.',
    problems: allProblems.slice(40, 60)
  },
  {
    id: 'sql-quiz-4',
    title: 'Advanced SQL Challenges',
    description: 'Complex logic and professional SQL tasks.',
    problems: allProblems.slice(60, 80)
  }
];
