### Advanced DDL & Integrity Constraints MCQ Quiz

**Question 1**
Which SQL command is primarily used to create a new table?
A) INSERT TABLE
B) CREATE TABLE
C) NEW TABLE
D) ADD TABLE

**Answer:** B
**Explanation:** The CREATE TABLE statement is used to create a new table in a database.

---

**Question 2**
What is the main purpose of a PRIMARY KEY?
A) Store duplicate values
B) Allow NULL values
C) Uniquely identify each row
D) Sort rows automatically

**Answer:** C
**Explanation:** A primary key's main role is to provide a unique identifier for every record in the table.

---

**Question 3**
Which constraint prevents duplicate and NULL values simultaneously?
A) UNIQUE
B) NOT NULL
C) PRIMARY KEY
D) CHECK

**Answer:** C
**Explanation:** A PRIMARY KEY constraint implicitly includes both UNIQUE and NOT NULL constraints.

---

**Question 4**
Which statement about FOREIGN KEY is TRUE?
A) It uniquely identifies rows in the same table
B) It references a key in another table
C) It automatically creates indexes only
D) It allows invalid references

**Answer:** B
**Explanation:** A foreign key is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

---

**Question 5**
Consider:
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username VARCHAR(50)
);
```
Which insert will FAIL?
A) INSERT INTO users VALUES (1, 'Amit');
B) INSERT INTO users VALUES (2, 'Neha');
C) INSERT INTO users VALUES (1, 'Rohan');
D) INSERT INTO users VALUES (3, NULL);

**Answer:** C
**Explanation:** Inserting id=1 again will fail because id=1 already exists and the column is a PRIMARY KEY (unique).

---

**Question 6**
What does NOT NULL enforce?
A) Values must be unique
B) Column cannot contain missing values
C) Column must contain numbers only
D) Column becomes PRIMARY KEY automatically

**Answer:** B
**Explanation:** The NOT NULL constraint enforces that a column must always contain a value, which means you cannot insert a new record, or update a record without adding a value to this column.

---

**Question 7**
Which constraint is best suited for: completion_pct must always be between 0 and 100
A) PRIMARY KEY
B) FOREIGN KEY
C) CHECK
D) UNIQUE

**Answer:** C
**Explanation:** The CHECK constraint is used to ensure that the values in a column satisfy a specific condition.

---

**Question 8**
Which SQL statement correctly creates a CHECK constraint?
A) completion_pct INTEGER CHECK completion_pct > 0
B) completion_pct INTEGER CHECK (completion_pct BETWEEN 0 AND 100)
C) completion_pct CHECK INTEGER
D) CHECK completion_pct INTEGER

**Answer:** B
**Explanation:** This is the standard syntax for defining a range-based CHECK constraint at the column level.

---

**Question 9**
What is referential integrity?
A) Preventing duplicate rows
B) Ensuring referenced foreign key values exist
C) Preventing NULL values
D) Sorting rows automatically

**Answer:** B
**Explanation:** Referential integrity is a property of data stating that all its references are valid (i.e. every foreign key value must exist in the parent table).

---

**Question 10**
Consider:
```sql
FOREIGN KEY (movie_id) REFERENCES movies(id)
```
What happens if movie_id = 999 does not exist in movies table?
A) Insert succeeds normally
B) movie_id becomes NULL
C) Foreign key constraint violation occurs
D) movies table auto-creates row 999

**Answer:** C
**Explanation:** The database will reject the insert to maintain referential integrity.

---

**Question 11**
Which statement about UNIQUE constraint is TRUE?
A) Allows duplicate values
B) Prevents duplicate values
C) Prevents NULL values always
D) Creates foreign keys automatically

**Answer:** B
**Explanation:** The UNIQUE constraint ensures that all values in a column are different.

---

**Question 12**
Which constraint can allow NULL but still prevent duplicate non-NULL values?
A) PRIMARY KEY
B) FOREIGN KEY
C) UNIQUE
D) CHECK

**Answer:** C
**Explanation:** Unlike PRIMARY KEY, a UNIQUE constraint typically allows one or more NULL values (depending on the DB engine) while still enforcing uniqueness for non-null values.

---

**Question 13**
Which SQL command modifies an existing table structure?
A) UPDATE
B) ALTER TABLE
C) MODIFY ROW
D) CHANGE TABLE

**Answer:** B
**Explanation:** The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

---

**Question 14**
Which command removes a table and all its data permanently?
A) DELETE TABLE movies;
B) REMOVE TABLE movies;
C) DROP TABLE movies;
D) TRUNCATE movies;

**Answer:** C
**Explanation:** DROP TABLE removes the table definition, data, and all its indexes/constraints.

---

**Question 15**
What is the difference between DELETE and DROP?
A) DELETE removes structure only
B) DROP removes rows only
C) DELETE removes rows, DROP removes entire table
D) Both are identical

**Answer:** C
**Explanation:** DELETE is a DML command (removes records); DROP is a DDL command (removes the table itself).

---

**Question 16**
Which statement about composite primary keys is TRUE?
A) Only one column participates
B) Combination of columns must be unique
C) NULL values are allowed freely
D) Composite keys cannot reference other tables

**Answer:** B
**Explanation:** In a composite primary key, the individual columns can have duplicates, but the combined set of values across all columns must be unique.

---

**Question 17**
Consider:
```sql
PRIMARY KEY(user_id, movie_id)
```
Which insert violates the constraint?
A) (1,2)
B) (1,3)
C) (2,2)
D) Duplicate (1,2)

**Answer:** D
**Explanation:** Since (1,2) was already inserted, another attempt to insert (1,2) violates the primary key uniqueness of the pair.

---

**Question 18**
Which SQL statement correctly adds a UNIQUE constraint to username?
A) ALTER TABLE users ADD UNIQUE(username);
B) ALTER TABLE users ADD PRIMARY username;
C) UPDATE users SET UNIQUE(username);
D) CREATE UNIQUE users(username);

**Answer:** A
**Explanation:** This is the standard syntax for adding a unique constraint via ALTER TABLE.

---

**Question 19**
Which constraint ensures values satisfy a condition?
A) FOREIGN KEY
B) CHECK
C) UNIQUE
D) INDEX

**Answer:** B
**Explanation:** The CHECK constraint is explicitly for validating logical conditions.

---

**Question 20**
What happens if you insert NULL into a PRIMARY KEY column?
A) Insert succeeds
B) NULL converted to 0
C) Constraint violation occurs
D) Value auto-duplicates

**Answer:** C
**Explanation:** Primary keys do not allow NULL values.

---

**Question 21**
Which command removes all rows but keeps table structure?
A) DROP TABLE
B) REMOVE TABLE
C) TRUNCATE TABLE
D) DELETE DATABASE

**Answer:** C
**Explanation:** TRUNCATE TABLE deletes all rows from a table but keeps the table structure (columns, types, indices).

---

**Question 22**
Which of the following is a valid FOREIGN KEY declaration?
A) FOREIGN movie_id REFERENCES movies(id)
B) FOREIGN KEY movie_id REFERENCES movies
C) FOREIGN KEY(movie_id) REFERENCES movies(id)
D) REFERENCE KEY(movie_id) movies(id)

**Answer:** C
**Explanation:** This is the standard syntax used within a CREATE TABLE or ALTER TABLE statement.

---

**Question 23**
What is the purpose of DEFAULT constraint?
A) Prevent duplicates
B) Automatically assign a value if none provided
C) Create indexes
D) Remove NULL values entirely

**Answer:** B
**Explanation:** The DEFAULT constraint is used to set a default value for a column when no value is specified in the INSERT statement.

---

**Question 24**
Which statement correctly sets default subscription tier?
A) subscription_tier VARCHAR(20) DEFAULT 'Basic'
B) subscription_tier = 'Basic'
C) DEFAULT subscription_tier 'Basic'
D) subscription_tier AUTO 'Basic'

**Answer:** A
**Explanation:** This defines the column with a default value of 'Basic'.

---

**Question 25**
Which integrity constraint ensures entity uniqueness?
A) Referential integrity
B) Domain integrity
C) Entity integrity
D) Transaction integrity

**Answer:** C
**Explanation:** Entity integrity is enforced by the PRIMARY KEY constraint which ensures each row represents a unique entity.

---

**Question 26**
What does domain integrity enforce?
A) Valid values for attributes
B) Table relationships only
C) Duplicate prevention only
D) Join correctness

**Answer:** A
**Explanation:** Domain integrity ensures that all data in a column follows the rules for its data type, format, and range.

---

**Question 27**
Which statement is TRUE about CHECK constraints?
A) They can reference impossible values safely
B) They validate inserted/updated data
C) They replace PRIMARY KEY completely
D) They allow invalid data temporarily

**Answer:** B
**Explanation:** CHECK constraints are active during both INSERT and UPDATE operations to ensure data validity.

---

**Question 28**
Which SQL statement correctly creates this table?
reviews(review_id PK, movie_id FK, rating between 1 and 10)
A) CREATE TABLE reviews(
review_id INTEGER PRIMARY KEY,
movie_id INTEGER REFERENCES movies(id),
rating INTEGER CHECK(rating BETWEEN 1 AND 10)
);
B) CREATE reviews(review_id PRIMARY, rating CHECK);
C) NEW TABLE reviews(rating 1 TO 10);
D) CREATE TABLE reviews(rating INTEGER UNIQUE BETWEEN 1 AND 10);

**Answer:** A
**Explanation:** This uses the correct syntax for PRIMARY KEY, FOREIGN KEY, and CHECK constraints.

---

**Question 29**
What happens if a CHECK condition evaluates FALSE?
A) Row inserted normally
B) Database ignores condition
C) Insert/update fails
D) Value becomes NULL automatically

**Answer:** C
**Explanation:** If the condition evaluates to FALSE, the DML operation is aborted with an error.

---

**Question 30**
Which statement about integrity constraints is CORRECT?
A) Constraints reduce data consistency
B) Constraints help maintain valid and reliable data
C) Constraints are only for performance
D) Constraints replace queries completely

**Answer:** B
**Explanation:** Integrity constraints are rules enforced by the DBMS to ensure data quality and reliability.
