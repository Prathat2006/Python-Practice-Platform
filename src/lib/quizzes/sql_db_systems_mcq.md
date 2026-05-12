### SQL & Database Systems MCQ Quiz

**Question 1**
Which clause filters rows before they are returned?
A) ORDER BY
B) GROUP BY
C) WHERE
D) DISTINCT

**Answer:** C
**Explanation:** The WHERE clause is used to filter rows before any groupings or aggregations are performed.

---

**Question 2**
Which query returns unique genres from the movies table?
A) SELECT genre FROM movies;
B) SELECT UNIQUE genre FROM movies;
C) SELECT DISTINCT genre FROM movies;
D) SELECT genre UNIQUE FROM movies;

**Answer:** C
**Explanation:** The DISTINCT keyword is used in SQL to return only unique (different) values.

---

**Question 3**
Which query correctly finds movies released between 2000 and 2010 inclusive?
A) WHERE release_year > 2000 AND < 2010
B) WHERE release_year BETWEEN 2000 AND 2010
C) WHERE release_year IN 2000 TO 2010
D) WHERE release_year = 2000-2010

**Answer:** B
**Explanation:** The BETWEEN operator is inclusive and is shorthand for release_year >= 2000 AND release_year <= 2010.

---

**Question 4**
Which query finds movie titles starting with 'The'?
A) WHERE title = 'The%'
B) WHERE title LIKE '%The'
C) WHERE title LIKE 'The%'
D) WHERE title CONTAINS 'The'

**Answer:** C
**Explanation:** The % wildcard represents zero or more characters. 'The%' matches any string starting with 'The'.

---

**Question 5**
What is the default sorting order of ORDER BY?
A) RANDOM
B) DESC
C) ASC
D) HASH

**Answer:** C
**Explanation:** By default, ORDER BY sorts the result set in ascending order (ASC).

---

**Question 6**
Which function counts all rows including NULL values?
A) COUNT(column_name)
B) SUM(*)
C) COUNT(*)
D) AVG(*)

**Answer:** C
**Explanation:** COUNT(*) tracks the number of rows in a table, regardless of whether columns contain NULL values.

---

**Question 7**
What is wrong with this query?
```sql
SELECT genre, title, COUNT(*)
FROM movies
GROUP BY genre;
```
A) COUNT(*) cannot be used
B) title is neither grouped nor aggregated
C) genre should not appear in SELECT
D) GROUP BY cannot be used with COUNT

**Answer:** B
**Explanation:** When using GROUP BY, every column in the SELECT list must either be an aggregate function or be included in the GROUP BY clause.

---

**Question 8**
Which clause filters groups after aggregation?
A) WHERE
B) FILTER
C) ORDER BY
D) HAVING

**Answer:** D
**Explanation:** WHERE filters individual rows, while HAVING filters groups created by GROUP BY.

---

**Question 9**
Which query correctly returns genres having more than 2 movies?
A) SELECT genre FROM movies WHERE COUNT(*) > 2;
B) SELECT genre FROM movies GROUP BY genre HAVING COUNT(*) > 2;
C) SELECT genre FROM movies HAVING COUNT(*) > 2;
D) SELECT genre FROM movies ORDER BY COUNT(*) > 2;

**Answer:** B
**Explanation:** Filtering based on aggregate results like COUNT(*) must be done in the HAVING clause after grouping by the genre.

---

**Question 10**
Which aggregate function ignores NULL values?
A) AVG()
B) SUM()
C) COUNT(column_name)
D) All of the above

**Answer:** D
**Explanation:** Most standard aggregate functions (SUM, AVG, COUNT, MAX, MIN) ignore NULL values in the specified column.

---

**Question 11**
What does NULL represent in SQL?
A) Zero
B) Empty string
C) Unknown or missing value
D) False

**Answer:** C
**Explanation:** NULL is a marker used to represent a missing or unknown data value.

---

**Question 12**
Which query correctly checks for NULL values?
A) WHERE imdb_rating = NULL
B) WHERE imdb_rating == NULL
C) WHERE imdb_rating IS NULL
D) WHERE imdb_rating EQUALS NULL

**Answer:** C
**Explanation:** In SQL, you cannot use = NULL to check for nullity. You must use IS NULL or IS NOT NULL.

---

**Question 13**
A table has 12 rows. The rating column contains NULL in 5 rows. What does this return?
```sql
SELECT COUNT(*), COUNT(rating)
FROM reviews;
```
A) 12, 12
B) 12, 5
C) 12, 7
D) 7, 7

**Answer:** C
**Explanation:** COUNT(*) counts all rows (12), while COUNT(column) counts only non-null values (12 - 5 = 7).

---

**Question 14**
What happens when NULL is used inside NOT IN?
A) Query works normally
B) NULL values are ignored
C) Result may become empty due to UNKNOWN comparisons
D) SQL automatically converts NULL to 0

**Answer:** C
**Explanation:** If the list provided to NOT IN contains a NULL, the logical result for any comparison not in the list becomes UNKNOWN, which typically results in an empty result set.

---

**Question 15**
Which statement is TRUE?
A) NULL = NULL returns TRUE
B) NULL comparisons return UNKNOWN
C) NULL behaves exactly like 0
D) COUNT(column) counts NULL values

**Answer:** B
**Explanation:** Under Three-Valued Logic (3VL), comparisons involving NULL result in UNKNOWN, not TRUE or FALSE.

---

**Question 16**
What does this query produce?
```sql
SELECT * FROM users, movies;
```
A) INNER JOIN
B) LEFT JOIN
C) Cartesian Product
D) NATURAL JOIN

**Answer:** C
**Explanation:** Selecting from multiple tables separated by commas without a join condition results in a cross join (Cartesian Product).

---

**Question 17**
Table A has 5 rows and Table B has 8 rows. How many rows does this return?
```sql
SELECT * FROM A, B;
```
A) 5
B) 8
C) 13
D) 40

**Answer:** D
**Explanation:** A Cartesian product returns the product of the row counts: 5 * 8 = 40.

---

**Question 18**
Which JOIN keeps all rows from the left table?
A) INNER JOIN
B) LEFT JOIN
C) NATURAL JOIN
D) CROSS JOIN

**Answer:** B
**Explanation:** A LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and the matched records from the right table.

---

**Question 19**
Which query finds users who never watched any movie?
A) SELECT username FROM users u INNER JOIN watch_history w ON u.id = w.user_id;
B) SELECT username FROM users u LEFT JOIN watch_history w ON u.id = w.user_id WHERE w.user_id IS NULL;
C) SELECT username FROM users WHERE id = NULL;
D) SELECT username FROM watch_history;

**Answer:** B
**Explanation:** A LEFT JOIN paired with a WHERE clause checking for NULL on the right table's ID is a classic way to find records with no matches.

---

**Question 20**
Which clause specifies the join condition?
A) USING
B) HAVING
C) ON
D) WHERE ONLY

**Answer:** C
**Explanation:** The ON clause is used to define the relationship or condition between the primary key of one table and the foreign key of another during a JOIN.

---

**Question 21**
What is a subquery?
A) A temporary table
B) A query nested inside another query
C) A database index
D) A transaction block

**Answer:** B
**Explanation:** A subquery is a SELECT statement within another SELECT, INSERT, UPDATE, or DELETE statement.

---

**Question 22**
What does this query return?
```sql
SELECT title FROM movies WHERE imdb_rating > (SELECT AVG(imdb_rating) FROM movies);
```
A) Movies below average rating
B) All movies
C) Movies above average rating
D) Syntax error

**Answer:** C
**Explanation:** The inner subquery calculates the average rating, and the outer query selects titles with a rating greater than that value.

---

**Question 23**
Which keyword checks whether a subquery returns at least one row?
A) IN
B) EXISTS
C) BETWEEN
D) UNIQUE

**Answer:** B
**Explanation:** The EXISTS operator is used to test for the existence of any record in a subquery.

---

**Question 24**
Which type of subquery executes once for every outer row?
A) Scalar subquery
B) Nested aggregate query
C) Correlated subquery
D) Static subquery

**Answer:** C
**Explanation:** A correlated subquery uses values from the outer query and must be re-evaluated for each row processed by the outer query.

---

**Question 25**
What does NOT EXISTS return?
A) TRUE when subquery returns no rows
B) TRUE when subquery has duplicates
C) FALSE always
D) Number of rows returned

**Answer:** A
**Explanation:** NOT EXISTS returns TRUE if the subquery returns no rows at all.

---

**Question 26**
Which operation removes duplicates automatically?
A) UNION
B) UNION ALL
C) CROSS JOIN
D) EXCEPT ALL

**Answer:** A
**Explanation:** The UNION operator combines result sets and removes duplicate rows by default.

---

**Question 27**
What does INTERSECT return?
A) Rows only in first query
B) Rows from both queries combined
C) Rows common to both queries
D) Rows not common in either query

**Answer:** C
**Explanation:** INTERSECT returns only the rows that appear in the results of both queries.

---

**Question 28**
Query1 returns: {1,2,3}. Query2 returns: {2,3,4}. What does Query1 EXCEPT Query2 return?
A) {2,3}
B) {1}
C) {4}
D) {1,2,3,4}

**Answer:** B
**Explanation:** EXCEPT (or MINUS) returns rows from the first query that are not present in the second query's result.

---

**Question 29**
Which operation keeps duplicates?
A) UNION
B) INTERSECT
C) UNION ALL
D) EXCEPT

**Answer:** C
**Explanation:** UNION ALL combines result sets but preserves all duplicates from both sets.

---

**Question 30**
Which requirement is necessary for UNION?
A) Same table names
B) Same column count and compatible data types
C) Same primary key
D) Same indexes

**Answer:** B
**Explanation:** Every SELECT statement within the UNION must have the same number of columns with similar data types.

---

**Question 31**
Which relational algebra operator corresponds to SQL WHERE?
A) Π
B) σ
C) ⋈
D) γ

**Answer:** B
**Explanation:** σ (sigma) represents the Selection operator, which filters tuples based on a condition (equivalent to WHERE).

---

**Question 32**
Which relational algebra operator corresponds to SQL SELECT columns?
A) Π
B) σ
C) ×
D) −

**Answer:** A
**Explanation:** Π (pi) represents the Projection operator, used to select a subset of columns (equivalent to SELECT col1, col2).

---

**Question 33**
Which SQL is equivalent to: Πtitle (σgenre='Sci-Fi'(movies))?
A) SELECT * FROM movies;
B) SELECT title FROM movies WHERE genre='Sci-Fi';
C) SELECT genre FROM movies WHERE title='Sci-Fi';
D) SELECT DISTINCT title, genre FROM movies;

**Answer:** B
**Explanation:** Sigma (σ) filters for genre='Sci-Fi', and Pi (Π) projects only the 'title' column.

---

**Question 34**
What does: R - S return?
A) Tuples in both R and S
B) Tuples in S but not R
C) Tuples in R but not S
D) Cartesian product

**Answer:** C
**Explanation:** The set difference (minus) operator returns records in the first relation that do not exist in the second.

---

**Question 35**
Which operator represents JOIN in relational algebra?
A) ×
B) ⋈
C) σ
D) γ

**Answer:** B
**Explanation:** The bow-tie symbol (⋈) represents the Natural Join operator.

---

**Question 36**
What is the purpose of PRIMARY KEY?
A) Allow duplicate rows
B) Store NULL values
C) Uniquely identify each row
D) Improve formatting

**Answer:** C
**Explanation:** A primary key is a column or set of columns that uniquely identifies each row in a table.

---

**Question 37**
Which constraint enforces referential integrity?
A) CHECK
B) PRIMARY KEY
C) FOREIGN KEY
D) UNIQUE

**Answer:** C
**Explanation:** A foreign key ensures that a value in one table points to an existing primary key in another table, maintaining referential integrity.

---

**Question 38**
What happens if a FOREIGN KEY value does not exist in the referenced table?
A) Row inserted successfully
B) Value converted to NULL
C) Insert fails with constraint violation
D) Parent row auto-created

**Answer:** C
**Explanation:** Referential integrity constraints prevent inconsistent data from being inserted if the parent record doesn't exist.

---

**Question 39**
Which constraint prevents NULL values?
A) UNIQUE
B) CHECK
C) NOT NULL
D) FOREIGN KEY

**Answer:** C
**Explanation:** The NOT NULL constraint enforces that a column cannot accept NULL values.

---

**Question 40**
Which statement about composite primary keys is TRUE?
A) Only one column participates
B) Combination of columns must be unique
C) NULL values are always allowed
D) Composite keys cannot reference tables

**Answer:** B
**Explanation:** A composite primary key uses two or more columns to identify a row; individual columns can have duplicates, but the combination must be unique.

---

**Question 41**
What is a view?
A) Physical copy of table
B) Stored query treated like a table
C) Database index
D) Transaction log

**Answer:** B
**Explanation:** A view is a virtual table based on the result-set of an SQL statement.

---

**Question 42**
Which statement about virtual views is TRUE?
A) They store physical data permanently
B) They always reflect latest base-table data
C) They require manual refresh
D) They cannot be queried

**Answer:** B
**Explanation:** Standard views do not store data; they re-run the underlying query every time they are accessed, reflecting the latest data.

---

**Question 43**
Which statement about materialized views is CORRECT?
A) Always reflect the most current data at query time
B) Store pre-computed results; faster but may be stale
C) Identical in behaviour to regular virtual views
D) Cannot be queried directly by users

**Answer:** B
**Explanation:** Materialized views physically store the data of the query result, improving performance at the cost of immediate data consistency.

---

**Question 44**
Why are views useful for security?
A) They encrypt data automatically
B) They hide sensitive columns/rows
C) They remove indexes
D) They duplicate tables

**Answer:** B
**Explanation:** Views allow users to access only specific parts of the data, effectively restricting access to sensitive information in base tables.

---

**Question 45**
What may happen with materialized views?
A) They disappear automatically
B) They may become stale until refreshed
C) They cannot store aggregates
D) They disable constraints

**Answer:** B
**Explanation:** Because materialized views store results physically, changes to the base tables are not reflected until the view is explicitly refreshed.
