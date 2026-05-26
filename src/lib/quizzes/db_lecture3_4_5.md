### Lecture 3-4-5: SQL, Indexing & B+ Trees

**Question 1**
Which SQL statement is used to create a new table?
A. INSERT TABLE
B. CREATE TABLE
C. BUILD TABLE
D. MAKE TABLE

**Answer:** B
**Explanation:** The `CREATE TABLE` statement is used to create a new relation/table inside a relational database system.

---

**Question 2**
Which clause filters rows in SQL?
A. GROUP BY
B. WHERE
C. ORDER BY
D. HAVING

**Answer:** B
**Explanation:** The `WHERE` clause filters individual rows before any grouping or aggregate transformations occur.

---

**Question 3**
What does `COUNT(*)` return?
A. Only non-NULL rows
B. Total rows
C. Distinct rows
D. Average rows

**Answer:** B
**Explanation:** Unlike column-specific counts, `COUNT(*)` returns the total count of all rows in the selected relation or group, including those containing NULL elements.

---

**Question 4**
Which SQL clause groups rows?
A. ORDER BY
B. HAVING
C. GROUP BY
D. DISTINCT

**Answer:** C
**Explanation:** The `GROUP BY` clause combines rows that share matching field values in specified attributes into summary groups.

---

**Question 5**
Which aggregate function finds average?
A. SUM
B. AVG
C. COUNT
D. TOTAL

**Answer:** B
**Explanation:** The `AVG()` aggregate function calculates and returns the arithmetic mean of a column representing numerical attributes.

---

**Question 6**
Which operation combines rows from two tables?
A. JOIN
B. DELETE
C. GROUP
D. CREATE

**Answer:** A
**Explanation:** A relational `JOIN` operator is utilized to combine rows from multiple tables based on logical predicates.

---

**Question 7**
Purpose of index is:
A. Increase storage
B. Speed up access
C. Encrypt data
D. Compress data

**Answer:** B
**Explanation:** The primary, direct purpose of database indexes is to speed up retrieval/access operations of target records.

---

**Question 8**
Index where data ordering matches index ordering:
A. Secondary
B. Dense
C. Clustered
D. Sparse

**Answer:** C
**Explanation:** A clustered index physically arranges the table records on disk in exact matching sequence with the search-key order of the index.

---

**Question 9**
Which index stores entries for every search key?
A. Sparse
B. Dense
C. Secondary
D. Hash

**Answer:** B
**Explanation:** A dense index holds an index entry pointing to the storage address of every unique search key value stored within the main data file.

---

**Question 10**
Primary index is generally built on:
A. Foreign key
B. Search key determining file order
C. Random attribute
D. Secondary attribute

**Answer:** B
**Explanation:** Structurally, the primary index is built on a search key that determines the physical, sequential sorting order of file records on disk.

---

**Question 11**
Sparse index stores:
A. Entry for every record
B. Entry for selected values
C. No pointers
D. Full rows

**Answer:** B
**Explanation:** A sparse index maintains entry keys pointing only to selected records, typically one index pointer per physical block, saving substantial memory space.

---

**Question 12**
Which indexing structure remains efficient after insert/delete?
A. Linked List
B. B+ Tree
C. Stack
D. Queue

**Answer:** B
**Explanation:** B+ Trees automatically maintain balanced structural configurations through node splits and merges, ensuring consistent O(log N) operations.

---

**Question 13**
In B+ Tree actual records exist in:
A. Internal nodes
B. Root only
C. Leaf nodes
D. Parent nodes

**Answer:** C
**Explanation:** In B+ Trees, internal routing nodes contain solely search keys and child page pointers. Real data values, or pointers to actual records, lie strictly in the leaf nodes.

---

**Question 14**
All leaves in B+ Tree are:
A. Unequal depth
B. Same level
C. Optional
D. Empty

**Answer:** B
**Explanation:** Because the B+ Tree maintains a balanced height invariant, all leaf nodes exist at the exact same depth/level from the root.

---

**Question 15**
Which operation removes duplicates?
A. DISTINCT
B. GROUP
C. JOIN
D. ORDER

**Answer:** A
**Explanation:** Including the `DISTINCT` keyword in a SQL `SELECT` projection eliminates any duplicate rows from the query results.

---

**Question 16**
`HAVING` works on:
A. Individual rows
B. Groups
C. Tables
D. Columns

**Answer:** B
**Explanation:** The `HAVING` clause specifies filter constraints targeted immediately against groups constructed via `GROUP BY`.

---

**Question 17**
Which query counts unique IDs?
A. COUNT(ID)
B. COUNT(DISTINCT ID)
C. SUM(ID)
D. AVG(ID)

**Answer:** B
**Explanation:** `COUNT(DISTINCT ID)` is the standard relational SQL syntax used to count the total of unique, non-NULL attributes.

---

**Question 18**
Clustered index is usually:
A. Primary
B. Sparse
C. Foreign
D. Hash

**Answer:** A
**Explanation:** Because records can only be ordered sequentially in one physical layout, tables typically can maintain only one clustered index, which corresponds to the primary index.

---

**Question 19**
Secondary index is built on:
A. Sequential attribute
B. Non-sequential attribute
C. Root node
D. Leaf node

**Answer:** B
**Explanation:** Secondary indexes are built on alternative fields that do not determine the sequence order of records inside the data file.

---

**Question 20**
When root splits in B+ Tree:
A. Height decreases
B. Height increases
C. Height remains unchanged
D. Tree becomes unbalanced

**Answer:** B
**Explanation:** When root nodes overflow and split recursively, a new root node is created above, increasing the overall balanced tree height by exactly 1 level.

---

**Question 21**
Aggregate functions are: (Select all that apply)
A. AVG
B. COUNT
C. MAX
D. JOIN

**Answer:** A, B, C
**Explanation:** `AVG`, `COUNT`, and `MAX` are relational aggregations. `JOIN` is a relative database clause.

---

**Question 22**
SQL set operations include: (Select all that apply)
A. UNION
B. INTERSECT
C. EXCEPT
D. DELETE

**Answer:** A, B, C
**Explanation:** `UNION`, `INTERSECT`, and `EXCEPT` represent SQL's native mathematical set operators. `DELETE` is a command statement.

---

**Question 23**
Index evaluation metrics include: (Select all that apply)
A. Access time
B. Insertion time
C. Space overhead
D. Compilation time

**Answer:** A, B, C
**Explanation:** Index designs are evaluated using access latency, insert/write overheads, space storage multipliers, and deletes. Query compilation remains independent.

---

**Question 24**
Features of clustered index: (Select all that apply)
A. Data follows index order
B. Faster range search
C. Multiple clustered indexes per table
D. Related to primary ordering

**Answer:** A, B, D
**Explanation:** Clustered indexes dictate the physical sorted footprint of files on disk, making range lookups extremely rapid. Only one physical sorting configuration can exist per relation table.

---

**Question 25**
Dense index characteristics: (Select all that apply)
A. Every key indexed
B. Larger storage
C. Faster lookup
D. Fewer entries

**Answer:** A, B, C
**Explanation:** Dense configurations index every individual key-value, accelerating lookups directly but consuming substantially more storage space compared to sparse designs.

---

**Question 26**
Advantages of B+ Tree: (Select all that apply)
A. Dynamic growth
B. Efficient search
C. Sequential access
D. Supports insert/delete efficiently

**Answer:** A, B, C, D
**Explanation:** B+ Trees expand/shrink dynamically without file reorganizations, locate search keys rapidly (logarithmic searches), facilitate rapid range scans using chained list leaves, and run updates efficiently.

---

**Question 27**
SQL aggregate functions ignore NULL: (Select all that apply)
A. AVG
B. SUM
C. COUNT(column)
D. COUNT(*)

**Answer:** A, B, C
**Explanation:** Column aggregate functions ignore NULL values during computation. In contrast, `COUNT(*)` counts total records including NULL rows.

---

**Question 28**
Valid GROUP BY rules: (Select all that apply)
A. Non-aggregate columns appear in GROUP BY
B. HAVING filters groups
C. WHERE executes after GROUP BY
D. Aggregates allowed in SELECT

**Answer:** A, B, D
**Explanation:** Columns specified within the projection selection must appear inside the `GROUP BY` clause unless they are arguments for aggregated operations. `WHERE` expressions execute before groups are established.

---

**Question 29**
Leaf split in B+ Tree causes: (Select all that apply)
A. Copy up middle key
B. Push up middle key
C. New child generation
D. Root deletion

**Answer:** A, C
**Explanation:** When B+ Tree leaves split, the key is copied upwards to preserve index structures while maintaining structural records in the bottom level. A sibling child is generated.

---

**Question 30**
Multi-level indexing helps because: (Select all that apply)
A. Reduces search cost
B. Keeps index manageable
C. Index can be indexed
D. Removes storage completely

**Answer:** A, B, C
**Explanation:** Large primary index trees are structured using outer multi-level indexes to prevent multi-Gigabyte files from degrading search queries, scaling performance logarithmically.

---

**Question 31**
SQL command used to insert rows is ________.

**Answer:** INSERT
**Explanation:** The `INSERT` command is the standard relational SQL DML instruction utilized to append metadata rows into tables.

---

**Question 32**
`GROUP BY` is usually followed by ________ to filter groups.

**Answer:** HAVING
**Explanation:** The `HAVING` statement tracks summary parameters to isolate group rows created under `GROUP BY`.

---

**Question 33**
Indexing in databases is similar to ________ in a library.

**Answer:** catalog
**Explanation:** Indexing operates identically to a library card catalog, mapping search keys directly to block storage addresses.

---

**Question 34**
Dense index stores ________ for every search key.

**Answer:** pointer
**Explanation:** Dense layouts assign an index trace and record pointer referencing every search key coordinate under main relation files.

---

**Question 35**
Sparse index stores index entries only for ________ values.

**Answer:** some
**Explanation:** Sparse approaches structure entries indexing only subset/some record pages (typically block boundary keys) to minimize memory allocations.

---

**Question 36**
B+ Tree is a generalization of ________ search tree.

**Answer:** binary
**Explanation:** A B+ Tree operates as a balanced generalization of traditional multiway binary search tree setups.

---

**Question 37**
Data records in B+ Tree exist only in ________ nodes.

**Answer:** leaf
**Explanation:** Interior pointer structures remain search keys, leaving real database records confined completely within leaf nodes.

---

**Question 38**
Root split causes tree ________.

**Answer:** height
**Explanation:** Overflow adjustments at the outermost root node create new parent nodes, increasing the tree height.

---

**Question 39**
`SELECT AVG(salary)` uses an ________ function.

**Answer:** aggregate
**Explanation:** `AVG()` performs group computations, acting as a standard aggregate function.

---

**Question 40**
A view stores a ________ query.

**Answer:** select
**Explanation:** Virtual structural Views do not physicalize data rows; they store select definitions executed dynamically during query calls.

---

**Question 41**
What is wrong?
```sql
SELECT dept_name, ID, AVG(salary)
FROM instructor
GROUP BY dept_name;
```
A. AVG invalid
B. ID not grouped
C. GROUP BY invalid
D. Nothing wrong

**Answer:** B
**Explanation:** The raw numeric attribute `ID` is projected in the `SELECT` query but is missing from both aggregate definitions and list details in the `GROUP BY` statement, causing an compilation syntax failure.

---

**Question 42**
If file has 100000 records and 10 records/block, number of data blocks?
A. 1000
B. 10000
C. 100
D. 10

**Answer:** B
**Explanation:** Blocks are computed directly: Total Records / Records per Block = 100,000 / 10 = 10,000 data blocks.

---

**Question 43**
B+ Tree internal nodes contain: (Select all that apply)
A. Search keys
B. Child pointers
C. Data records
D. Routing information

**Answer:** A, B, D
**Explanation:** Internal, non-leaf nodes function as index routers, storing keys and child page pointers to locate blocks quickly. They do not store final database records.

---

**Question 44**
Which index is usually required for non-candidate keys?
A. Sparse
B. Dense
C. Clustered
D. Primary

**Answer:** B
**Explanation:** Non-candidate keys require secondary configurations. Because secondary keys do not align table sorting orders, these structures are dense.

---

**Question 45**
Which operation is more efficient with clustered index?
A. Range queries
B. Encryption
C. Updates
D. Backup

**Answer:** A
**Explanation:** Clustered configurations group values sequentially across contiguous disk blocks, facilitating extremely efficient multi-row range scans.

---

**Question 46**
In SQL, `HAVING` executes ________ aggregation.

**Answer:** after
**Explanation:** The `HAVING` expression executes after rows have been grouped and aggregates have been computed.

---

**Question 47**
If B+ Tree leaf underflows:
A. Ignore
B. Redistribute
C. Merge
D. B or C

**Answer:** D
**Explanation:** Falling below minimum thresholds causes underflows, forcing the engine to either redistribute elements or merge sibling nodes.

---

**Question 48**
Deletion in B+ Tree may cause: (Select all that apply)
A. Redistribution
B. Merge
C. Height reduction
D. Root split

**Answer:** A, B, C
**Explanation:** Underflow resolutions can trigger data redistributions, sibling merges, and tree height reductions. Root splits can only occur on overflows (insertions).

---

**Question 49**
Secondary index is generally ________.

**Answer:** dense
**Explanation:** Because search attributes are disjoint from physical record sort sequencing, secondary indexes must map keys via dense alignments.

---

**Question 50**
Main reason to use multi-level index:
A. Save RAM only
B. Faster searching on large index
C. Remove leaves
D. Delete records

**Answer:** B
**Explanation:** Multi-level indexing prevents extremely large files from slowing down lookup times, guaranteeing logarithmic searching speeds on multi-Gigabyte indexes.
