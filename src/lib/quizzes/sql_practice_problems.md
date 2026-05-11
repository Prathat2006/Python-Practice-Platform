### SQL Practice: Movie Streaming Database

**Question 1**
**Schema Context:**
```sql
movies (id, title, genre, release_year, imdb_rating, duration_mins)
users (id, username, subscription_tier, signup_date)
watch_history (watch_id, user_id, movie_id, completion_pct, watch_date)
```
Display all movies.

**Answer:** SELECT * FROM movies;
**Explanation:** Use the asterisk (*) to select all columns from the movies table.

---

**Question 2**
Show only `title` and `genre` from movies.

**Answer:** SELECT title, genre FROM movies;
**Explanation:** Specify the columns you want to retrieve before the FROM clause.

---

**Question 3**
List all Premium users.

**Answer:** SELECT * FROM users WHERE subscription_tier = 'Premium';
**Explanation:** Use the WHERE clause to filter users by their subscription tier.

---

**Question 4**
Show movies released after 2010.

**Answer:** SELECT * FROM movies WHERE release_year > 2010;
**Explanation:** Use the > operator to compare numeric values for years.

---

**Question 5**
Show movies with IMDb rating greater than 8.5.

**Answer:** SELECT * FROM movies WHERE imdb_rating > 8.5;
**Explanation:** Filter based on the decimal column imdb_rating.

---

**Question 6**
List all movies ordered by `release_year` descending.

**Answer:** SELECT * FROM movies ORDER BY release_year DESC;
**Explanation:** Use ORDER BY with DESC to sort in reverse chronological order.

---

**Question 7**
Show unique genres available in the movies table.

**Answer:** SELECT DISTINCT genre FROM movies;
**Explanation:** DISTINCT removes duplicates from the result set.

---

**Question 8**
Find movies whose title starts with 'The'.

**Answer:** SELECT * FROM movies WHERE title LIKE 'The%';
**Explanation:** The % wildcard at the end matches any characters following 'The'.

---

**Question 9**
Find movies whose title contains 'Star'.

**Answer:** SELECT * FROM movies WHERE title LIKE '%Star%';
**Explanation:** Using % before and after matches 'Star' anywhere in the string.

---

**Question 10**
Display users signed up between 2023-01-01 and 2023-06-30.

**Answer:** SELECT * FROM users WHERE signup_date BETWEEN '2023-01-01' AND '2023-06-30';
**Explanation:** BETWEEN is inclusive of both the start and end dates.

---

**Question 11**
Show Sci-Fi movies with rating above 8.5 ordered by rating descending.

**Answer:** SELECT * FROM movies WHERE genre = 'Sci-Fi' AND imdb_rating > 8.5 ORDER BY imdb_rating DESC;
**Explanation:** Combine multiple filters using AND.

---

**Question 12**
Find movies with duration between 120 and 160 minutes.

**Answer:** SELECT * FROM movies WHERE duration_mins BETWEEN 120 AND 160;
**Explanation:** BETWEEN works for both numbers and dates.

---

**Question 13**
Display users whose username ends with _P.

**Answer:** SELECT * FROM users WHERE username LIKE '%\_P' ESCAPE '\';
**Explanation:** Since underscore (_) is a wildcard character, you might need to escape it or use it carefully. In many dialects, `LIKE '%_P'` works if you just want it at the end.

---

**Question 14**
Show movies where IMDb rating is NULL.

**Answer:** SELECT * FROM movies WHERE imdb_rating IS NULL;
**Explanation:** Comparisons with NULL must use IS NULL, not = NULL.

---

**Question 15**
Count total number of movies.

**Answer:** SELECT COUNT(*) FROM movies;
**Explanation:** COUNT(*) is a standard way to count the total rows in a table.

---

**Question 16**
Find average IMDb rating of all movies.

**Answer:** SELECT AVG(imdb_rating) FROM movies;
**Explanation:** AVG calculates the arithmetic mean, ignoring NULL values.

---

**Question 17**
Find average movie duration per genre.

**Answer:** SELECT genre, AVG(duration_mins) FROM movies GROUP BY genre;
**Explanation:** GROUP BY aggregates data into categories before calculating the average.

---

**Question 18**
Find genres having more than 3 movies.

**Answer:** SELECT genre FROM movies GROUP BY genre HAVING COUNT(*) > 3;
**Explanation:** Use HAVING for conditions on aggregated results (after GROUP BY).

---

**Question 19**
Show usernames with movie titles they watched.

**Answer:** SELECT u.username, m.title FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id;
**Explanation:** Join the users table with watch_history and then movies to connect usernames to titles.

---

**Question 20**
Find movies with rating higher than average IMDb rating.

**Answer:** SELECT * FROM movies WHERE imdb_rating > (SELECT AVG(imdb_rating) FROM movies);
**Explanation:** This is a subquery that first calculates the average, which is then used by the outer query.

---

**Question 21**
Predict the output: `SELECT COUNT(imdb_rating) FROM movies;` (Given the data where 2 movies have NULL ratings out of 12)

* **A** 12
* **B** 10
* **C** 0
* **D** ERROR

**Answer:** B
**Explanation:** COUNT(column) ignores NULL values. Since 2 movies have NULL IMDb ratings, it returns 10.

---

**Question 22**
Predict the output: `SELECT DISTINCT genre FROM movies;`

* **A** 12 rows (one for each movie)
* **B** 4 unique rows (Sci-Fi, Action, Animation, Drama)
* **C** 1 row (all genres joined)
* **D** 5 unique rows

**Answer:** B
**Explanation:** DISTINCT removes duplicates. The genres are Sci-Fi, Action, Animation, and Drama.

---

**Question 23**
Which join would you use to find users who have NEVER watched a movie?

* **A** INNER JOIN
* **B** LEFT JOIN from users to watch_history checking for NULL
* **C** RIGHT JOIN from users to watch_history
* **D** CROSS JOIN

**Answer:** B
**Explanation:** A LEFT JOIN from users to watch_history keeps all users; if there's no match in watch_history, those columns will be NULL.

---

**Question 24**
**Section: Aggregate Functions**
Find average movie duration per genre.

**Answer:** SELECT genre, AVG(duration_mins) FROM movies GROUP BY genre;
**Explanation:** Use AVG() with GROUP BY to get the mean duration for each category.

---

**Question 25**
Find genres having more than 3 movies.

**Answer:** SELECT genre FROM movies GROUP BY genre HAVING COUNT(*) > 3;
**Explanation:** HAVING filters grouped records after aggregation.

---

**Question 26**
**Section: JOIN Operations**
Find users who watched Sci-Fi movies.

**Answer:** SELECT DISTINCT u.username FROM users u JOIN watch_history w ON u.id = w.user_id JOIN movies m ON m.id = w.movie_id WHERE m.genre = 'Sci-Fi';
**Explanation:** Multiple joins are required to link the user to the movie genre through the watch history.

---

**Question 27**
Find all users who have never watched any movie.

**Answer:** SELECT u.username FROM users u LEFT JOIN watch_history w ON u.id = w.user_id WHERE w.watch_id IS NULL;
**Explanation:** A LEFT JOIN combined with a NULL check on the right side finds records with no matches.

---

**Question 28**
**Section: Subqueries**
Find movie(s) with maximum IMDb rating.

**Answer:** SELECT * FROM movies WHERE imdb_rating = (SELECT MAX(imdb_rating) FROM movies);
**Explanation:** The subquery finds the highest rating value, which the outer query uses to filter.

---

**Question 29**
Find movies whose rating is higher than all Action movies. (Using ALL keyword)

**Answer:** SELECT * FROM movies WHERE imdb_rating > ALL (SELECT imdb_rating FROM movies WHERE genre = 'Action' AND imdb_rating IS NOT NULL);
**Explanation:** The > ALL operator compares a value against every value in the subquery result.

---

**Question 30**
**Section: Set Operations**
Find movies watched in both September and November.

**Answer:** SELECT movie_id FROM watch_history WHERE watch_date BETWEEN '2023-09-01' AND '2023-09-30' INTERSECT SELECT movie_id FROM watch_history WHERE watch_date BETWEEN '2023-11-01' AND '2023-11-30';
**Explanation:** INTERSECT returns only the records that appear in both result sets.

---

**Question 31**
**Section: Relational Algebra**
Convert to Relational Algebra: `SELECT title FROM movies WHERE genre = 'Sci-Fi';`

**Answer:** ∏ title ( σ genre = 'Sci-Fi' (movies) )
**Explanation:** Sigma (σ) is for Selection (WHERE) and Pi (∏) is for Projection (SELECT columns).

---

**Question 32**
**Section: DDL**
Create a CHECK constraint ensuring `completion_pct` is between 0 and 100.

**Answer:** ALTER TABLE watch_history ADD CONSTRAINT check_pct CHECK (completion_pct BETWEEN 0 AND 100);
**Explanation:** CHECK constraints validate data values before they are committed to the database.

---
