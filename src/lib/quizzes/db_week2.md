### Week 2: Relational Database

**Question 1**
In an RDBMS, data is primarily stored in:
A. Graphs
B. Tables
C. Trees
D. Arrays

**Answer:** B
**Explanation:** A Relational Database Management System (RDBMS) organizes and stores data primarily in structural grids or tables (also known as relations).

---

**Question 2**
In `Students(sid, name, login, age, gpa)`, `sid` is:
A. Attribute
B. Relation
C. Primary Key
D. Domain

**Answer:** C
**Explanation:** In the relation `Students`, `sid` is designed to uniquely identify each student record, making it the Primary Key.

---

**Question 3**
A row in a relation is called:
A. Attribute
B. Tuple
C. Domain
D. Schema

**Answer:** B
**Explanation:** A single horizontal row in a database table/relation is formally called a tuple.

---

**Question 4**
The set of allowed values for an attribute is called:
A. Relation
B. Domain
C. Instance
D. Key

**Answer:** B
**Explanation:** A domain is the set of all permitted atomic values that can be assigned to a particular attribute or column.

---

**Question 5**
Attribute values are normally required to be:
A. Distributed
B. Atomic
C. Recursive
D. Derived

**Answer:** B
**Explanation:** For a relation to satisfy First Normal Form (1NF), all attribute values must be atomic, meaning they represent indivisible items.

---

**Question 6**
NULL value represents:
A. Zero
B. Empty string
C. Unknown value
D. Invalid value

**Answer:** C
**Explanation:** In relational theory, a NULL value represents missing information or an unknown/unassigned value. It is not equivalent to zero or an empty string.

---

**Question 7**
Database schema represents:
A. Current data only
B. Database structure
C. Temporary records
D. Query output

**Answer:** B
**Explanation:** The database schema defines the structural layout, designs, types, tables, and constraints of the database.

---

**Question 8**
Database instance refers to:
A. Logical structure
B. Snapshot of data at a given time
C. Query language
D. Physical storage

**Answer:** B
**Explanation:** A database instance is a snapshot of the actual records currently stored in the database at a specific moment in time.

---

**Question 9**
Which of the following is always minimal?
A. Superkey
B. Candidate Key
C. Foreign Key
D. Composite Key

**Answer:** B
**Explanation:** A candidate key is defined as a minimal superkey; removing any attribute from it would cause it to lose its unique identification property.

---

**Question 10**
A candidate key selected for identification becomes:
A. Alternate key
B. Foreign key
C. Primary key
D. Domain

**Answer:** C
**Explanation:** Out of all available candidate keys, the DBA selects exactly one key to serve as the principal identifier for tuples—this is the primary key.

---

**Question 11**
Foreign key ensures:
A. Query optimization
B. Referential integrity
C. Data compression
D. Data duplication

**Answer:** B
**Explanation:** A foreign key is a column or group of columns that points to a primary key in another table, enforcing referential integrity by guaranteeing referenced values must exist.

---

**Question 12**
Which language is procedural?
A. Relational Algebra
B. SQL only
C. ER Model
D. XML

**Answer:** A
**Explanation:** Relational Algebra is a procedural query language because it defines step-by-step operations (e.g., first join, then filter, then project) to locate and calculate results.

---

**Question 13**
Relational Algebra expressions produce:
A. Scalar value
B. Relation
C. Boolean
D. Graph

**Answer:** B
**Explanation:** The closure property of relational algebra ensures that the input of any operator is one or more relations, and the output is always a new relation.

---

**Question 14**
Symbol for SELECT operation:
A. ∏
B. σ
C. ρ
D. γ

**Answer:** B
**Explanation:** The selection operation, which filters rows based on a given predicate, is denoted by the lowercase Greek letter sigma (σ).

---

**Question 15**
Symbol for PROJECT operation:
A. σ
B. γ
C. ∏
D. ×

**Answer:** C
**Explanation:** The projection operation, which selects specific columns and discards duplicates, is denoted by the uppercase Greek letter pi (∏).

---

**Question 16**
Operation used to combine every tuple pair:
A. Join
B. Cartesian Product
C. Projection
D. Rename

**Answer:** B
**Explanation:** The Cartesian Product (denoted by ×) pairs every row of the first table with every row of the second table, yielding (R x S) rows.

---

**Question 17**
Which operation reduces columns?
A. Select
B. Project
C. Join
D. Rename

**Answer:** B
**Explanation:** Projection (∏) retrieves only a specific subset of columns from a relation, thereby discarding unwanted attributes.

---

**Question 18**
Which operation reduces rows?
A. Projection
B. Selection
C. Rename
D. Aggregation

**Answer:** B
**Explanation:** Selection (σ) retrieves only rows that satisfy a specified predicate, filtering out rows that do not match the criteria.

---

**Question 19**
Join operation mainly combines:
A. Rows within one table
B. Multiple tables
C. Domains
D. Views

**Answer:** B
**Explanation:** The join operation merges tuples from multiple tables according to shared attribute matches or logical join conditions.

---

**Question 20**
Which set operation returns tuples present in both relations?
A. Union
B. Difference
C. Intersection
D. Rename

**Answer:** C
**Explanation:** The intersection operator (∩) returns only those tuples that appear simultaneously in both input relations.

---

**Question 21**
Assignment operator in relational algebra:
A. ←
B. →
C. =
D. ≠

**Answer:** A
**Explanation:** The left arrow (←) acts as the assignment operator, allowing multi-step relational expressions to store intermediate relations in temporary variables.

---

**Question 22**
Rename operator symbol:
A. ∏
B. σ
C. ρ
D. γ

**Answer:** C
**Explanation:** The rename operator is represented by the lowercase Greek letter rho (ρ), which allows renaming relations or attributes.

---

**Question 23**
Aggregation function to count tuples:
A. avg
B. max
C. count
D. sum

**Answer:** C
**Explanation:** The `count` aggregate function is used to compute the total number of matched tuples/rows within a group.

---

**Question 24**
Which statement is true?
A. Equivalent queries always look identical
B. Equivalent queries produce same result
C. Equivalent queries run equally fast
D. Equivalent queries require joins

**Answer:** B
**Explanation:** Equivalent expressions/queries always guarantee identical result tables on any valid database, even though they may look different and run at completely different optimization speeds.

---

**Question 25**
Which relational model is most widely used?
A. Hierarchical
B. Network
C. Relational
D. Object

**Answer:** C
**Explanation:** The Relational Model (representing tables with rows and columns) is the predominant data model used in enterprise database engines.

---

**Question 26**
Which are relational algebra operators? (Select all that apply)
A. Select
B. Project
C. Join
D. Compile

**Answer:** A, B, C
**Explanation:** Select, Project, and Join are standard operators in algebraic relational languages. Compile is a software execution step, not a relational operator.

---

**Question 27**
Database schema levels include: (Select all that apply)
A. Physical
B. Logical
C. View
D. Runtime

**Answer:** A, B, C
**Explanation:** The standard database design abstraction levels include Physical schema, Logical schema, and View schemas.

---

**Question 28**
Which are pure query languages? (Select all that apply)
A. Relational Algebra
B. Tuple Relational Calculus
C. Domain Relational Calculus
D. HTML

**Answer:** A, B, C
**Explanation:** Relational Algebra, Tuple Relational Calculus (TRC), and Domain Relational Calculus (DRC) are the three classic formal data models that describe querying processes. HTML is a document formatting language.

---

**Question 29**
Properties of a superkey: (Select all that apply)
A. Identifies tuples uniquely
B. May contain extra attributes
C. Always minimal
D. Can become candidate key

**Answer:** A, B, D
**Explanation:** A superkey uniquely identifies every row inside a table, but it may contain extra redundant columns (i.e., it is not necessarily minimal). A minimal superkey is a candidate key.

---

**Question 30**
Which are aggregate functions? (Select all that apply)
A. avg
B. count
C. sum
D. delete

**Answer:** A, B, C
**Explanation:** `avg`, `count`, `sum`, `max`, and `min` are aggregate operations. `delete` is a modification command.

---

**Question 31**
Set operations include: (Select all that apply)
A. Union
B. Intersection
C. Difference
D. Join

**Answer:** A, B, C
**Explanation:** The native mathematical set operations are Union, Intersection, and Set Difference. Join is an algebraic operation, but not a pure set operation.

---

**Question 32**
Conditions for UNION: (Select all that apply)
A. Same number of attributes
B. Same domains
C. Same relation name
D. Compatible schema

**Answer:** A, B, D
**Explanation:** For relations to be compatible for set operations like UNION, they must have the same number of attributes (same arity) and their corresponding domains must be compatible. Relation names do not need to match.

---

**Question 33**
Which operations return a relation? (Select all that apply)
A. Select
B. Project
C. Cartesian Product
D. Rename

**Answer:** A, B, C, D
**Explanation:** Due to the algebraic closure property, all operators (Select σ, Project ∏, Cartesian Product ×, Rename ρ) take relations as input and yield a new relation as output.

---

**Question 34**
Foreign key: (Select all that apply)
A. References another relation
B. Must exist in referenced relation
C. Enforces integrity
D. Must always be primary key

**Answer:** A, B, C
**Explanation:** A foreign key refers to a primary key or unique key in another table. The referenced value must exist in the target table to ensure referential integrity. A foreign key itself does not have to be a primary key.

---

**Question 35**
Join operation: (Select all that apply)
A. Combines relations
B. Uses matching condition
C. Always creates duplicates
D. Can involve multiple tables

**Answer:** A, B, D
**Explanation:** Joins merge data from multiple tables according to a shared comparison criteria. It does not always create duplicates.

---

**Question 36**
Schema and instance relation: (Select all that apply)
A. Schema changes frequently
B. Instance changes frequently
C. Schema = structure
D. Instance = data snapshot

**Answer:** B, C, D
**Explanation:** The schema defines structural boundaries and constraints and changes very rarely. In contrast, the database instance changes frequently with insert/update/delete operations.

---

**Question 37**
Project operation: (Select all that apply)
A. Selects columns
B. Selects rows
C. Removes unnecessary attributes
D. Returns relation

**Answer:** A, C, D
**Explanation:** The projection operator (∏) chooses specific columns (attributes) and removes others, returning a new relation with duplicate rows eliminated. Filtering rows is done by selection (σ), not projection.

---

**Question 38**
Relational Algebra is: (Select all that apply)
A. Procedural
B. Operational
C. Declarative
D. Step-wise

**Answer:** A, B, D
**Explanation:** Relational Algebra describes query evaluation in terms of step-by-step operators (procedural/operational). Declarative query styles (like Relational Calculus or SQL) specify *what* to fetch without outlining the steps.

---

**Question 39**
Which operators are basic? (Select all that apply)
A. σ
B. ∏
C. ×
D. ∪

**Answer:** A, B, C, D
**Explanation:** Selected basic operators of relational algebra include Selection (σ), Projection (∏), Cartesian Product (×), Union (∪), and Set Difference (-). Other complex operators like Join or Intersection are derived from these.

---

**Question 40**
Candidate key: (Select all that apply)
A. Minimal superkey
B. Can become primary key
C. Unique
D. Always composite

**Answer:** A, B, C
**Explanation:** A candidate key is a minimal superkey that uniquely identifies tuples and is a candidate to become the primary key. It does not have to be composite; a single attribute can easily be a candidate key.

---

**Question 41**
A table in relational database is called a _________.

**Answer:** relation
**Explanation:** In relational model terminology, a table is formally referred to as a relation.

---

**Question 42**
A row of a relation is called a _________.

**Answer:** tuple
**Explanation:** Individual records or rows in a database relation are called tuples.

---

**Question 43**
The special value representing unknown data is _________.

**Answer:** NULL
**Explanation:** NULL is a unique marker used in databases to signify missing, unknown, or non-applicable values.

---

**Question 44**
Database _________ is the logical structure of the database.

**Answer:** schema
**Explanation:** The schema represents the logical and blueprints structural layouts governing the database.

---

**Question 45**
A _________ key uniquely identifies tuples but may contain extra attributes.

**Answer:** super
**Explanation:** A superkey refers to any set of columns that uniquely identifies a record, regardless of whether it has redundant, unnecessary attributes.

---

**Question 46**
Selection operator symbol is _________.

**Answer:** sigma
**Explanation:** The selection operator is symbolized by the lowercase Greek letter sigma (σ).

---

**Question 47**
Projection operator symbol is _________.

**Answer:** pi
**Explanation:** The projection operator is symbolized by the uppercase Greek letter pi (∏).

---

**Question 48**
Cartesian product symbol is _________.

**Answer:** cross
**Explanation:** The Cartesian product is represented by the cross/multiplication symbol (×).

---

**Question 49**
Rename operator is represented by _________.

**Answer:** rho
**Explanation:** The rename operator is designated by the lowercase Greek letter rho (ρ).

---

**Question 50**
Aggregate operation for average is _________.

**Answer:** avg
**Explanation:** The standard database abbreviation for computing the mean average inside aggregates is `avg`.
