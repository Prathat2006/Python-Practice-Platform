### Practice for Quiz 2

#### SQL SELECT / WHERE / ORDER BY

**Question 1**
Which clause is used to filter rows before they are returned?

* **A** ORDER BY
* **B** GROUP BY
* **C** WHERE
* **D** DISTINCT

**Answer:** C
**Explanation:** The WHERE clause filters rows before the final result is returned.

---

**Question 2**
What does `SELECT *` return?

* **A** Only primary key columns
* **B** All rows but no columns
* **C** All columns from the table
* **D** Only distinct values

**Answer:** C
**Explanation:** `SELECT *` retrieves every column from the specified table.

---

**Question 3**
What does this query return?
`SELECT DISTINCT city FROM Customers;`

* **A** All rows including duplicates
* **B** Only unique city names
* **C** Only NULL cities
* **D** Sorted city names automatically

**Answer:** B
**Explanation:** DISTINCT removes duplicate values from the selected column.

---

**Question 4**
Which query finds names ending with "son"?

* **A** `WHERE name = '%son'`
* **B** `WHERE name LIKE '%son'`
* **C** `WHERE name CONTAINS 'son'`
* **D** `WHERE name STARTS 'son'`

**Answer:** B
**Explanation:** `%` matches any sequence of characters before "son".

---

**Question 5**
What is the default sorting order of ORDER BY?

* **A** RANDOM
* **B** DESC
* **C** ASC
* **D** NONE

**Answer:** C
**Explanation:** ORDER BY sorts in ascending order by default.

---

**Question 6**
Which query correctly finds salaries between 5000 and 10000 inclusive?

* **A** `salary > 5000 AND salary < 10000`
* **B** `salary BETWEEN 5000 AND 10000`
* **C** `salary IN 5000 TO 10000`
* **D** `salary RANGE 5000,10000`

**Answer:** B
**Explanation:** BETWEEN includes both boundary values.

---

#### Aggregate Functions & GROUP BY / HAVING

**Question 7**
Which function counts all rows including NULL values?

* **A** COUNT(column)
* **B** COUNT(*)
* **C** AVG()
* **D** SUM()

**Answer:** B
**Explanation:** COUNT(*) counts every row regardless of NULL values.

---

**Question 8**
What does AVG(column) ignore?

* **A** Duplicate values
* **B** Negative values
* **C** NULL values
* **D** Zero values

**Answer:** C
**Explanation:** AVG ignores NULL values automatically.

---

**Question 9**
Which clause filters groups after aggregation?

* **A** WHERE
* **B** ORDER BY
* **C** HAVING
* **D** DISTINCT

**Answer:** C
**Explanation:** HAVING works after GROUP BY and aggregate computation.

---

**Question 10**
What is wrong with this query?
`SELECT dept, emp_id, COUNT(*) FROM Employee GROUP BY dept;`

* **A** COUNT cannot be used
* **B** emp_id is neither grouped nor aggregated
* **C** GROUP BY should come first
* **D** Nothing is wrong

**Answer:** B
**Explanation:** Every selected column must either be aggregated or included in GROUP BY.

---

**Question 11**
Which query returns departments having more than 10 employees?

* **A** `WHERE COUNT(*) > 10`
* **B** `GROUP BY dept HAVING COUNT(*) > 10`
* **C** `HAVING dept > 10`
* **D** `COUNT(dept) > 10`

**Answer:** B
**Explanation:** HAVING filters grouped results after aggregation.

---

**Question 12**
What does GROUP BY do?

* **A** Sorts rows
* **B** Removes duplicates
* **C** Splits rows into groups
* **D** Deletes repeated rows

**Answer:** C
**Explanation:** GROUP BY divides rows into groups for aggregation.

---

#### NULL Handling in SQL

**Question 13**
What does NULL represent in SQL?

* **A** Zero
* **B** Empty string
* **C** Unknown or missing value
* **D** Negative value

**Answer:** C
**Explanation:** NULL means the value is unknown or missing.

---

**Question 14**
Which condition correctly checks for NULL?

* **A** `= NULL`
* **B** `== NULL`
* **C** `IS NULL`
* **D** `LIKE NULL`

**Answer:** C
**Explanation:** SQL requires IS NULL instead of `= NULL`.

---

**Question 15**
What does `COUNT(column)` ignore?

* **A** Duplicates
* **B** NULL values
* **C** Negative values
* **D** Zero values

**Answer:** B
**Explanation:** COUNT(column) counts only non-NULL values.

---

**Question 16**
A table has 12 rows. Column marks contains NULL in 3 rows. What does this return?
`SELECT COUNT(*), COUNT(marks) FROM Student;`

* **A** 12, 12
* **B** 9, 9
* **C** 12, 9
* **D** 9, 12

**Answer:** C
**Explanation:** COUNT(*) counts all rows while COUNT(marks) ignores NULLs.

---

**Question 17**
What happens when using `NOT IN (..., NULL)`?

* **A** Works normally
* **B** Returns only NULL rows
* **C** Usually returns empty results
* **D** Causes syntax error

**Answer:** C
**Explanation:** Comparisons with NULL become UNKNOWN, causing NOT IN to fail logically.

---

**Question 18**
What does SQL treat UNKNOWN as inside WHERE?

* **A** TRUE
* **B** FALSE
* **C** NULL
* **D** ERROR

**Answer:** B
**Explanation:** WHERE only keeps TRUE conditions; UNKNOWN is discarded.

---

#### JOIN Operations

**Question 19**
What does a Cartesian product produce?

* **A** Matching rows only
* **B** All possible row combinations
* **C** Duplicate rows removed
* **D** Only NULL rows

**Answer:** B
**Explanation:** Cartesian product combines every row of one table with every row of another.

---

**Question 20**
Table A has 5 rows and Table B has 3 rows. How many rows result from `SELECT * FROM A, B;`?

* **A** 5
* **B** 8
* **C** 15
* **D** Depends on columns

**Answer:** C
**Explanation:** Cartesian product size = 5 × 3 = 15.

---

**Question 21**
Which JOIN keeps all rows from the left table?

* **A** INNER JOIN
* **B** LEFT JOIN
* **C** NATURAL JOIN
* **D** CROSS JOIN

**Answer:** B
**Explanation:** LEFT JOIN keeps all left-side rows and fills unmatched right-side values with NULL.

---

**Question 22**
What does INNER JOIN return?

* **A** Only unmatched rows
* **B** All rows from both tables
* **C** Only matching rows
* **D** Cartesian product

**Answer:** C
**Explanation:** INNER JOIN returns rows satisfying the join condition.

---

**Question 23**
Which JOIN automatically joins columns having the same name?

* **A** LEFT JOIN
* **B** CROSS JOIN
* **C** NATURAL JOIN
* **D** SELF JOIN

**Answer:** C
**Explanation:** NATURAL JOIN automatically matches same-named columns.

---

**Question 24**
How can you find rows with no matching record using LEFT JOIN?

* **A** `WHERE table2.id IS NULL`
* **B** `WHERE table1.id IS NULL`
* **C** `HAVING NULL`
* **D** `ORDER BY NULL`

**Answer:** A
**Explanation:** Unmatched rows on the right side appear as NULL.

---

#### Subqueries

**Question 25**
What is a subquery?

* **A** A deleted query
* **B** A query inside another query
* **C** A JOIN operation
* **D** A table constraint

**Answer:** B
**Explanation:** A subquery is nested within another SQL statement.

---

**Question 26**
What does a scalar subquery return?

* **A** Multiple rows
* **B** Entire table
* **C** One value
* **D** One column only

**Answer:** C
**Explanation:** Scalar subqueries return exactly one value.

---

**Question 27**
What does EXISTS return?

* **A** Number of rows
* **B** TRUE if subquery returns rows
* **C** Average value
* **D** Only NULL values

**Answer:** B
**Explanation:** EXISTS checks whether the subquery returns at least one row.

---

**Question 28**
What does this query return?
`SELECT name FROM Employee WHERE salary > (SELECT AVG(salary) FROM Employee);`

* **A** Employees with minimum salary
* **B** Employees above average salary
* **C** All employees
* **D** Error

**Answer:** B
**Explanation:** The subquery calculates average salary and outer query filters higher salaries.

---

**Question 29**
A correlated subquery:

* **A** Runs once only
* **B** References the outer query
* **C** Cannot use WHERE
* **D** Always returns one row

**Answer:** B
**Explanation:** Correlated subqueries depend on values from the outer query.

---

**Question 30**
Which keyword is best for checking membership in a returned set?

* **A** EXISTS
* **B** BETWEEN
* **C** IN
* **D** DISTINCT

**Answer:** C
**Explanation:** IN checks whether a value exists within a set.

---

#### Set Operations

**Question 31**
What does UNION do?

* **A** Combines rows and removes duplicates
* **B** Returns common rows only
* **C** Returns unmatched rows
* **D** Multiplies rows

**Answer:** A
**Explanation:** UNION merges results while eliminating duplicates.

---

**Question 32**
Which operation keeps duplicates?

* **A** UNION
* **B** INTERSECT
* **C** UNION ALL
* **D** EXCEPT

**Answer:** C
**Explanation:** UNION ALL preserves duplicate rows.

---

**Question 33**
What does INTERSECT return?

* **A** Unique rows from both queries
* **B** Rows common to both queries
* **C** Rows only in first query
* **D** Rows only in second query

**Answer:** B
**Explanation:** INTERSECT returns common rows.

---

**Question 34**
What does `A EXCEPT B` return?

* **A** Rows in both A and B
* **B** Rows only in B
* **C** Rows in A but not B
* **D** All rows combined

**Answer:** C
**Explanation:** EXCEPT subtracts rows found in the second result.

---

**Question 35**
What requirement must set operations satisfy?

* **A** Same table names
* **B** Same column count and compatible types
* **C** Same row count
* **D** Same constraints

**Answer:** B
**Explanation:** Set operations require schema compatibility.

---

**Question 36**
Query1 = {1,2,3} and Query2 = {2,3,4}. What is Query1 INTERSECT Query2?

* **A** {1,4}
* **B** {2,3}
* **C** {1,2,3,4}
* **D** {4}

**Answer:** B
**Explanation:** INTERSECT returns common values only.

---

#### Relational Algebra

**Question 37**
What does σ (sigma) represent?

* **A** Projection
* **B** Selection/filtering
* **C** Join
* **D** Aggregation

**Answer:** B
**Explanation:** Sigma corresponds to SQL WHERE filtering.

---

**Question 38**
What does ∏ (pi) represent?

* **A** SELECT columns
* **B** GROUP BY
* **C** JOIN
* **D** ORDER BY

**Answer:** A
**Explanation:** Pi projects selected columns.

---

**Question 39**
Which symbol represents JOIN?

* **A** ×
* **B** ∪
* **C** ⋈
* **D** γ

**Answer:** C
**Explanation:** Bowtie (⋈) denotes JOIN in relational algebra.

---

**Question 40**
Which SQL matches this expression?
`σ salary > 5000 (Employee)`

* **A** `SELECT * FROM Employee WHERE salary > 5000`
* **B** `SELECT salary FROM Employee`
* **C** `GROUP BY salary`
* **D** `ORDER BY salary`

**Answer:** A
**Explanation:** Sigma performs row filtering equivalent to WHERE.

---

**Question 41**
What does γ (gamma) represent?

* **A** Aggregation and grouping
* **B** Sorting
* **C** Projection
* **D** Cartesian product

**Answer:** A
**Explanation:** Gamma corresponds to GROUP BY with aggregates.

---

**Question 42**
What does `R × S` mean?

* **A** JOIN
* **B** UNION
* **C** Cartesian product
* **D** Difference

**Answer:** C
**Explanation:** × represents Cartesian product.

---

#### DDL & Integrity Constraints

**Question 43**
What is the purpose of a PRIMARY KEY?

* **A** Store duplicate rows
* **B** Identify each row uniquely
* **C** Allow NULL values
* **D** Sort rows automatically

**Answer:** B
**Explanation:** Primary keys uniquely identify records.

---

**Question 44**
Can a PRIMARY KEY contain NULL?

* **A** Yes
* **B** Only once
* **C** No
* **D** Only in composite keys

**Answer:** C
**Explanation:** Primary keys must always contain non-NULL unique values.

---

**Question 45**
What does a FOREIGN KEY enforce?

* **A** Sorting rules
* **B** Referential integrity
* **C** Aggregation
* **D** Data compression

**Answer:** B
**Explanation:** Foreign keys ensure referenced values exist in parent tables.

---

**Question 46**
What happens if a FOREIGN KEY value does not exist in the parent table?

* **A** Row inserts successfully
* **B** Value becomes NULL
* **C** Constraint violation occurs
* **D** Table gets deleted

**Answer:** C
**Explanation:** Referential integrity prevents invalid references.

---

**Question 47**
What does NOT NULL ensure?

* **A** Unique values
* **B** Non-empty rows only
* **C** Column must contain a value
* **D** No duplicates

**Answer:** C
**Explanation:** NOT NULL prevents missing values.

---

**Question 48**
What is a composite key?

* **A** Key with one column
* **B** Combination of multiple columns forming uniqueness
* **C** Foreign key plus primary key
* **D** Temporary key

**Answer:** B
**Explanation:** Composite keys use multiple columns together for uniqueness.

---

#### Views — Virtual & Materialized

**Question 49**
What is a view?

* **A** Physical backup table
* **B** Stored query with a name
* **C** Index structure
* **D** Temporary database

**Answer:** B
**Explanation:** Views are saved SQL queries treated like virtual tables.

---

**Question 50**
What is true about virtual views?

* **A** Store data physically
* **B** Always require refresh
* **C** Reflect latest base table data
* **D** Cannot use SELECT

**Answer:** C
**Explanation:** Virtual views execute their query whenever accessed.

---

**Question 51**
What is the advantage of materialized views?

* **A** Faster query performance
* **B** Unlimited storage
* **C** Automatic normalization
* **D** No refresh needed

**Answer:** A
**Explanation:** Materialized views store precomputed results for faster access.

---

**Question 52**
What problem can materialized views have?

* **A** Duplicate primary keys
* **B** Stale data
* **C** No indexes
* **D** No permissions

**Answer:** B
**Explanation:** Stored results may become outdated until refreshed.

---

**Question 53**
Which statement about views is correct?

* **A** Views improve security by restricting access
* **B** Views always duplicate data physically
* **C** Views cannot contain WHERE clauses
* **D** Views replace tables permanently

**Answer:** A
**Explanation:** Views can expose only selected rows or columns to users.

---

**Question 54**
A student's GPA changes from 3.2 to 3.9 in the base table. What happens in a virtual view filtering GPA > 3.7?

* **A** Student immediately appears in the view
* **B** View must be recreated
* **C** Database crashes
* **D** Nothing changes

**Answer:** A
**Explanation:** Virtual views always reflect current underlying table data.
