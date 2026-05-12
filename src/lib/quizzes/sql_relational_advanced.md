### Advanced SQL & Relational Algebra MCQ Quiz

**Question 1**
Which relational algebra expression returns names of users who are Premium subscribers?
A) σsubscription_tier='Premium'(users)
B) Πusername(σsubscription_tier='Premium'(users))
C) Πsubscription_tier(users)
D) σusername='Premium'(users)

**Answer:** B
**Explanation:** First, we select (σ) rows where the tier is Premium, then we project (Π) the username column.

---

**Question 2**
Which SQL query is equivalent to: Πtitle(σgenre='Action' ∧ imdb_rating>8.0(movies))
A) SELECT * FROM movies WHERE genre='Action';
B) SELECT title FROM movies WHERE genre='Action' AND imdb_rating>8.0;
C) SELECT genre,title FROM movies;
D) SELECT title FROM movies GROUP BY genre;

**Answer:** B
**Explanation:** σ filters the rows based on genre and rating, while Π specifies the column (title) to select.

---

**Question 3**
What does the following relational algebra expression perform? σcompletion_pct=100(watch_history)
A) Projection
B) Selection
C) Join
D) Aggregation

**Answer:** B
**Explanation:** σ (sigma) is the selection operator, which filters rows based on a condition.

---

**Question 4**
Which relational algebra operator corresponds to SQL GROUP BY with aggregates?
A) σ
B) Π
C) γ
D) ⋈

**Answer:** C
**Explanation:** γ (gamma) is used in extended relational algebra to denote aggregation and grouping.

---

**Question 5**
Which expression returns usernames and movie titles for watched movies?
A) users × movies
B) Πusername,title(users ⋈ watch_history ⋈ movies)
C) σusername,title(users)
D) movies − users

**Answer:** B
**Explanation:** We join (⋈) the three tables and then project (Π) the specific columns needed.

---

**Question 6**
Which operation is evaluated FIRST in: Πtitle(σgenre='Sci-Fi'(movies))
A) Projection
B) Join
C) Selection
D) Union

**Answer:** C
**Explanation:** Relational algebra expressions are evaluated from the inside out; σ is inside the Π.

---

**Question 7**
What does the expression below return? movies − σgenre='Drama'(movies)
A) Only Drama movies
B) All non-Drama movies
C) Empty relation
D) Only NULL rows

**Answer:** B
**Explanation:** The set difference operator (−) removes all matching tuples (Drama movies) from the original movies set.

---

**Question 8**
Which relational algebra expression finds all users who watched movies completely?
A) σcompletion_pct=100(users)
B) Πusername(users ⋈ σcompletion_pct=100(watch_history))
C) γcount(username)(users)
D) users − watch_history

**Answer:** B
**Explanation:** We first filter the watch history for 100% completion, join it with users to get names, and project the username.

---

**Question 9**
What does Cartesian Product produce?
A) Matching rows only
B) Aggregated rows
C) Every possible row combination
D) Unique rows only

**Answer:** C
**Explanation:** The Cartesian Product (×) combines every row from the first table with every row from the second table.

---

**Question 10**
If relation A has 7 rows and B has 5 rows, how many rows are in: A × B
A) 12
B) 35
C) 7
D) Depends on attributes only

**Answer:** B
**Explanation:** The cardinality of a Cartesian product is the product of the cardinalities of the two relations: 7 * 5 = 35.

---

**Question 11**
Which relational algebra operator removes columns?
A) σ
B) ⋈
C) Π
D) γ

**Answer:** C
**Explanation:** Projection (Π) is the operator that selects specific columns and discards the rest.

---

**Question 12**
Which expression returns all movie titles with IMDb rating above average?
A) σimdb_rating>AVG(imdb_rating)(movies)
B) γavg(imdb_rating)(movies)
C) σimdb_rating>8(movies)
D) Cannot be expressed directly in basic relational algebra

**Answer:** D
**Explanation:** Standard relational algebra does not allow comparing an attribute to a dynamically calculated aggregate value in a single σ expression without intermediate steps.

---

**Question 13**
Which operation combines tuples from two relations based on matching values?
A) Projection
B) Difference
C) Join
D) Rename

**Answer:** C
**Explanation:** Join (⋈) combines rows from two relations when specified criteria are met.

---

**Question 14**
What is the purpose of the rename operator ρ ?
A) Delete attributes
B) Rename relation or attributes
C) Filter tuples
D) Sort rows

**Answer:** B
**Explanation:** ρ (rho) is used to rename the relation or the attributes within it.

---

**Question 15**
Which expression correctly finds all genres from movies relation?
A) Πgenre(movies)
B) σgenre(movies)
C) γgenre(movies)
D) movies × genre

**Answer:** A
**Explanation:** Pi (Π) is used to select the attribute 'genre'.

---

**Question 16**
Which relational algebra expression corresponds to: SELECT username FROM users WHERE subscription_tier='Basic';
A) σsubscription_tier='Basic'(users)
B) Πusername(σsubscription_tier='Basic'(users))
C) γusername(users)
D) users − Premium

**Answer:** B
**Explanation:** σ filters the tier, and Π selects the username column.

---

**Question 17**
Which SQL query matches: Πtitle(σduration_mins>150(movies))
A) SELECT * FROM movies WHERE duration_mins>150;
B) SELECT duration_mins FROM movies;
C) SELECT title FROM movies WHERE duration_mins>150;
D) SELECT title FROM movies GROUP BY duration_mins;

**Answer:** C
**Explanation:** The sigma filters duration, and pi specifies the title column.

---

**Question 18**
Which relational algebra expression corresponds to INNER JOIN?
A) ×
B) ⋈
C) −
D) Π

**Answer:** B
**Explanation:** The join operator (⋈) corresponds to an inner join.

---

**Question 19**
Which SQL operation corresponds to relational algebra difference (−)?
A) UNION
B) INTERSECT
C) EXCEPT
D) JOIN

**Answer:** C
**Explanation:** EXCEPT (or MINUS) in SQL is equivalent to the set difference in relational algebra.

---

**Question 20**
What does this SQL query conceptually perform first? SELECT title FROM movies WHERE genre='Sci-Fi';
A) Projection
B) Selection
C) Sorting
D) Aggregation

**Answer:** B
**Explanation:** Logically, the WHERE clause (Selection) is processed before the SELECT list (Projection).

---

**Question 21**
What is wrong with this query?
```sql
SELECT genre, title, AVG(imdb_rating)
FROM movies
GROUP BY genre;
```
A) AVG cannot be used with GROUP BY
B) title is neither aggregated nor grouped
C) genre should not be grouped
D) imdb_rating must be PRIMARY KEY

**Answer:** B
**Explanation:** In a GROUP BY query, all columns in the SELECT list that are not in an aggregate function MUST be present in the GROUP BY clause.

---

**Question 22**
Which query correctly finds genres whose average rating is greater than 8?
A) SELECT genre FROM movies WHERE AVG(imdb_rating)>8 GROUP BY genre;
B) SELECT genre FROM movies GROUP BY genre HAVING AVG(imdb_rating)>8;
C) SELECT AVG(imdb_rating) FROM movies HAVING genre>8;
D) SELECT genre FROM movies ORDER BY AVG(imdb_rating)>8;

**Answer:** B
**Explanation:** To filter on aggregate values, you must use the HAVING clause.

---

**Question 23**
What does COUNT(imdb_rating) ignore?
A) Duplicate rows
B) NULL values
C) Numeric values
D) Zero values

**Answer:** B
**Explanation:** COUNT(column_name) counts non-NULL entries in that column.

---

**Question 24**
Which JOIN returns all rows from both tables including unmatched rows?
A) INNER JOIN
B) LEFT JOIN
C) RIGHT JOIN
D) FULL OUTER JOIN

**Answer:** D
**Explanation:** FULL OUTER JOIN returns all records from both tables, filling with NULLs where no match exists.

---

**Question 25**
Which query finds movies that were never watched?
A) SELECT title FROM movies m LEFT JOIN watch_history w ON m.id=w.movie_id WHERE w.movie_id IS NULL;
B) SELECT title FROM watch_history;
C) SELECT * FROM movies, watch_history;
D) SELECT title FROM movies WHERE id=NULL;

**Answer:** A
**Explanation:** Joining movies with history and looking for rows where the history side is NULL identifies unwatched movies.

---

**Question 26**
What does UNION do by default?
A) Keeps duplicates
B) Removes duplicates
C) Performs join
D) Sorts descending

**Answer:** B
**Explanation:** UNION combines result sets and removes duplicates; UNION ALL preserves them.

---

**Question 27**
What is the output of: SELECT COUNT(*) FROM watch_history WHERE completion_pct=100;
Given 4 rows have completion_pct = 100.
A) 0
B) 1
C) 4
D) Total table rows

**Answer:** C
**Explanation:** COUNT(*) returns the number of rows matching the criteria.

---

**Question 28**
Which statement about GROUP BY is TRUE?
A) GROUP BY executes after SELECT
B) Non-aggregated selected columns must appear in GROUP BY
C) GROUP BY removes NULL automatically
D) HAVING executes before GROUP BY

**Answer:** B
**Explanation:** This is a fundamental rule of SQL grouping to ensure deterministic results.

---

**Question 29**
What does EXISTS return?
A) Number of rows
B) Boolean-like TRUE/FALSE result
C) Sorted output
D) Aggregated relation

**Answer:** B
**Explanation:** EXISTS is a logical operator that returns true if the subquery returns any rows.

---

**Question 30**
Which query correctly finds users who watched at least one movie?
A) SELECT username FROM users WHERE EXISTS (SELECT * FROM watch_history WHERE users.id=watch_history.user_id);
B) SELECT username FROM watch_history;
C) SELECT * FROM users GROUP BY username;
D) SELECT username FROM users WHERE COUNT(*)>0;

**Answer:** A
**Explanation:** The EXISTS subquery checks for the existence of matching records in the watch history for each user.
