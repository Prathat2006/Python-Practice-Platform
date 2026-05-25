### Week 1 - Part 2: Introduction to Database Systems

**Question 1**
A bank stores customer balance in three independent files. One file updates while another fails. This issue is:
A. Atomicity
B. Data redundancy and inconsistency
C. Physical independence
D. Data abstraction

**Answer:** B
**Explanation:** When the same database information is kept across multiple separate files, discrepancies arise where some copies might successfully commit updates while others fail, leading directly to data redundancy and inconsistency.

---

**Question 2**
Which DBMS feature directly solves “application rewrite for every new query”?
A. Data independence
B. Buffer management
C. Disk indexing
D. Recovery mechanism

**Answer:** A
**Explanation:** Data independence ensures that the application programs are separated from the details of data storage and logical organization, meaning new queries or updates can be performed easily without refactoring application-level code.

---

**Question 3**
A user sees student names but not salary details. This is achieved at:
A. Physical level
B. Logical level
C. View level
D. Transaction level

**Answer:** C
**Explanation:** The view level provides distinct customized presentation windows for different types of users, omitting irrelevant or restricted information such as employee salaries.

---

**Question 4**
Which statement is FALSE?
A. Schema changes frequently
B. Instance changes frequently
C. Schema defines structure
D. Applications depend on logical schema

**Answer:** A
**Explanation:** The schema specifies the structural design and field properties of the database, which is rarely and infrequently altered after the initial setup.

---

**Question 5**
Which abstraction level provides physical data independence?
A. View
B. Logical
C. Physical
D. Application

**Answer:** B
**Explanation:** The logical level serves as an abstraction layer above the physical level. Applications are coded against the logical structures, allowing modifications to disks or physical structures to be completed without altering schemas or software logic.

---

**Question 6**
Which is closest to “schema : instance” analogy?
A. Function : variable
B. Class : object state
C. Variable declaration : current value
D. Query : execution

**Answer:** C
**Explanation:** Similar to programming variables where the declaration (type and name) is defined once and rarely changes, while its value changes constantly, a database schema (structural definition) is static whereas its instance (actual stored values) changes constantly.

---

**Question 7**
Which data model is most suitable during initial requirement analysis?
A. Relational
B. ER
C. Semistructured
D. Object-relational

**Answer:** B
**Explanation:** The Entity-Relationship (ER) model provides a visual framework that is highly effective for representing entities and relationships during initial database requirement discovery and conceptual design.

---

**Question 8**
Which model naturally supports varying attributes across records?
A. Relational
B. XML-based semistructured
C. Hierarchical
D. Network

**Answer:** B
**Explanation:** Semistructured models, such as XML or JSON, embed metadata tags directly within each individual record, allowing different entities within the same collection or file to store entirely different sets of attributes dynamically.

---

**Question 9**
Which language specifies **what data is required but not how to retrieve it**?
A. Procedural DML
B. Declarative DML
C. DDL
D. Query engine

**Answer:** B
**Explanation:** Non-procedural or declarative Data Manipulation Languages (DML), such as SQL, define exactly what information the user needs without expressing the algorithmic execution/retrieval paths.

---

**Question 10**
Which is NOT handled by DDL?
A. Schema creation
B. Constraints
C. Access methods
D. Query execution

**Answer:** D
**Explanation:** DDL commands define structure, schemas, integrity rules, and database structural partitions. The execution of queries is handled primarily by the DML compiler and evaluation engine.

---

**Question 11**
Referential integrity primarily ensures:
A. Correct storage blocks
B. Relation consistency
C. Faster queries
D. Disk optimization

**Answer:** B
**Explanation:** Referential integrity ensures that values appearing in one table's foreign key attributes must also exist in the referenced primary key column of another table, keeping relationship records clean and consistent.

---

**Question 12**
Query optimization happens mainly inside:
A. DDL interpreter
B. DML compiler
C. Buffer manager
D. Transaction manager

**Answer:** B
**Explanation:** The Data Manipulation Language (DML) compiler performs syntactic validation, query translation, and optimization, outputting efficient execution plans.

---

**Question 13**
Query processor hides:
A. User identity
B. Physical storage complexity
C. Transactions
D. Views

**Answer:** B
**Explanation:** The query processor handles complex details such as page physical lookups, index tree traversals, and disk seek operations, shielding application programmers and users from physical storage complexity.

---

**Question 14**
Which manager would most directly improve repeated data access speed?
A. Recovery manager
B. File manager
C. Buffer manager
D. Transaction manager

**Answer:** C
**Explanation:** The buffer manager caches frequently accessed data pages from non-volatile disk blocks into fast, volatile RAM main memory, dramatically lowering average access delay.

---

**Question 15**
Which manager protects correctness during simultaneous withdrawals?
A. Buffer manager
B. Transaction manager
C. File manager
D. Data dictionary

**Answer:** B
**Explanation:** The transaction manager manages concurrency and execution ordering, preventing dirty read anomalies, inconsistent balances, or concurrent write interferences.

---

**Question 16**
Atomicity guarantees:
A. No duplicate records
B. Entire transaction or rollback
C. Faster execution
D. Isolation only

**Answer:** B
**Explanation:** Atomicity (part of the ACID properties) guarantees that either all the database modifications comprising a transaction are executed successfully to completion, or they are entirely rolled back.

---

**Question 17**
Which property guarantees committed changes survive power failure?
A. Consistency
B. Isolation
C. Durability
D. Authorization

**Answer:** C
**Explanation:** Durability ensures that once a transaction completes and commits, its modifications are permanently written to non-volatile disks and will persist through unexpected power failures or system crashes.

---

**Question 18**
Recovery manager mainly supports:
A. Consistency and durability
B. Atomicity and durability
C. Isolation and indexing
D. Access control

**Answer:** B
**Explanation:** The recovery subsystem rollback system logs and checkpoints to guarantee transaction Atomicity (undoing partial writes) and Durability (redoing committed operations) after an unexpected system crash.

---

**Question 19**
Which architecture introduces middle-tier business logic?
A. Single-tier
B. Two-tier
C. Three-tier
D. Peer-to-peer

**Answer:** C
**Explanation:** A three-tier design decouples the front-end interface, placing business logic within an intermediate application server, which coordinates with the backend database.

---

**Question 20**
Which statement best describes DBMS?
A. Storage only
B. Query execution only
C. Coordinated data management system
D. Programming language

**Answer:** C
**Explanation:** A Database Management System (DBMS) is an integrated suite of software tools designed to store, manage, secure, query, and restore enterprise data.

---

**Question 21**
Problems of early file systems: (Select all that apply)
A. Data fragmentation
B. Centralized constraints
C. Poor accessibility
D. Limited adaptability

**Answer:** A, C, D
**Explanation:** Early file-processing systems lacked standard metadata mappings, leading to data fragmentation (isolated data items), poor data accessibility due to custom scripts needed for retrieving records, and limited adaptability because schema adjustments required rewriting files and code. Constraint verification was not centralized, but scattered across multiple user applications.

---

**Question 22**
Logical level responsibilities: (Select all that apply)
A. Define record structure
B. Define relationships
C. Specify storage blocks
D. Hide physical implementation

**Answer:** A, B, D
**Explanation:** The logical level specifies what record formats, attributes, fields, and relationships exist within the database. It hides the physical disk blocks and track seek specifications from programmers.

---

**Question 23**
Examples of physical data structures: (Select all that apply)
A. Indices
B. Data files
C. Data dictionary
D. Views

**Answer:** A, B, C
**Explanation:** Physical storage components include data files storing flat records, indices providing quick access to specific data, and the data dictionary storing schemas. Views are logical/virtual structures, not physical disk structures.

---

**Question 24**
Declarative DML characteristics: (Select all that apply)
A. Specify required data
B. DBMS decides execution
C. User specifies algorithms
D. Used in querying

**Answer:** A, B, D
**Explanation:** Declarative/non-procedural DML (like SQL queries) allows users to request exactly what columns or rows are needed. The optimization and lookup algorithm details are decided internally by the DBMS, not the user.

---

**Question 25**
Components of query processor: (Select all that apply)
A. DDL interpreter
B. DML compiler
C. Query evaluation engine
D. Recovery manager

**Answer:** A, B, C
**Explanation:** The DDL interpreter, DML compiler, and Query evaluation engine are primary parts of the query processing subsystem. The recovery unit is a component of the storage manager.

---

**Question 26**
Storage manager responsibilities: (Select all that apply)
A. Translate DML
B. Organize storage
C. Minimize I/O
D. Execute SQL syntax checking

**Answer:** B, C
**Explanation:** The storage manager handles the physical layout of files and pages on disk, handles block caching, and minimizes slow disk I/O operations. It does not translate or parse SQL/DML syntax, which is handled by the compilation engine.

---

**Question 27**
Transaction manager handles: (Select all that apply)
A. Concurrent transactions
B. Consistency
C. Recovery support
D. Disk caching

**Answer:** A, B, C
**Explanation:** The transaction manager manages concurrent execution of operations, helps ensure logical consistency, and coordinates with the recovery manager for crash safety. Disk caching is managed by the buffer and file subsystem, not the transaction manager.

---

**Question 28**
ACID means: (Select all that apply)
A. Atomicity
B. Consistency
C. Isolation
D. Durability

**Answer:** A, B, C, D
**Explanation:** ACID is the foundational acronym for database transactions: Atomicity, Consistency, Isolation, and Durability.

---

**Question 29**
Which support security? (Select all that apply)
A. Authorization manager
B. View level
C. Authorization rules
D. Buffer manager

**Answer:** A, B, C
**Explanation:** Security is enforced via the Authorization Manager, custom View levels (masking sensitive attributes), and schema Authorization Rules. The buffer manager is responsible for disk paging and does not handle user access control.

---

**Question 30**
Which may cause incorrect account balance? (Select all that apply)
A. Partial updates
B. Concurrent access
C. Transaction rollback
D. Atomic transactions

**Answer:** A, B
**Explanation:** Partial updates (violating atomicity) and uncontrolled concurrent file updates (leading to race conditions) are major sources of corrupted records. Properly managed rollovers and atomic executions prevent errors.

---

**Question 31**
DBMS abstraction aims to: (Select all that apply)
A. Simplify usage
B. Separate concerns
C. Improve maintainability
D. Remove need for storage

**Answer:** A, B, C
**Explanation:** High levels of abstraction hide complex hardware configurations, simplifying usage, separating concerns (physical format vs query logic), and improving design maintainability. Abstraction does not eliminate the physical storage itself.

---

**Question 32**
Database use cases: (Select all that apply)
A. Banking
B. Manufacturing
C. Education
D. Inventory control

**Answer:** A, B, C, D
**Explanation:** Financial banking, product manufacturing tracking, educational portals, and inventory control systems are all classic, enterprise-scale use cases for relational databases.

---

**Question 33**
Metadata includes: (Select all that apply)
A. Schema definitions
B. Constraints
C. Structure info
D. Transaction values

**Answer:** A, B, C
**Explanation:** Metadata comprises descriptive schema layouts, tables, and constraints definition details stored in the catalog. Real transaction or user values are raw transactional data, not metadata.

---

**Question 34**
Data models covered: (Select all that apply)
A. Relational
B. ER
C. Object-relational
D. Semistructured

**Answer:** A, B, C, D
**Explanation:** Relational systems, Entity-Relationship graphic design, Object-Relational combinations, and semistructured formats are all major modern data models.

---

**Question 35**
Which support performance? (Select all that apply)
A. Buffer manager
B. Query optimization
C. Storage organization
D. Transaction rollback

**Answer:** A, B, C
**Explanation:** Performance gains are delivered via memory buffer caching (buffer manager), optimization plans (DML compiler), and organized indexing files. Transaction rollbacks are safety and recovery actions, not performance boosters.

---

**Question 36**
Database ______ represents actual data at a particular time.

**Answer:** Instance
**Explanation:** A database instance represents the real collection of records stored within database nodes at any given instant.

---

**Question 37**
Database ______ changes less frequently than data.

**Answer:** Schema
**Explanation:** The database schema defines the structural layout and rules of the tables, changing very rarely compared to database records.

---

**Question 38**
Storage details are hidden from programmers at the ______ level.

**Answer:** Physical
**Explanation:** The physical abstraction level, which defines blocks, tracks, and cylinders on disk, is hidden from application programmers.

---

**Question 39**
The highest abstraction level is the ______ level.

**Answer:** View
**Explanation:** The view level is the highest abstraction layer, providing simplified virtual grids of database rows to end users.

---

**Question 40**
DML compiler generates low-level execution ______.

**Answer:** Plans
**Explanation:** The DML compiler compiles high-level queries into optimized, low-level execution plans or instructions.

---

**Question 41**
Metadata is stored inside the data ______.

**Answer:** Dictionary
**Explanation:** Metadata details are kept inside the system-owned repository called the data dictionary (or system catalog).

---

**Question 42**
The storage manager minimizes disk ______.

**Answer:** I/O
**Explanation:** To maximize speed, the storage manager tries to minimize slow physical disk I/O operations through caching buffer pages in memory.

---

**Question 43**
The property ensuring correctness before and after execution is ______.

**Answer:** Consistency
**Explanation:** Consistency guarantees that any transaction transitions the database from one valid, correct state to another.

---

**Question 44**
The property preventing partial execution is ______.

**Answer:** Atomicity
**Explanation:** Atomicity ensures that a transaction is handled as a single unit—either all actions complete successfully, or all of them are rolled back.

---

**Question 45**
Recovery manager ensures atomicity and ______.

**Answer:** Durability
**Explanation:** The recovery system checks logs after crashes to undo incomplete transactions and redo completed ones, preserving Atomicity and Durability.

---

**Question 46**
Parallel access without control may create ______ updates.

**Answer:** Conflicting
**Explanation:** Uncontrolled concurrency can cause concurrent race conditions and conflicting updates, resulting in corrupted cells and lost updates.

---

**Question 47**
DBMS allows changes in storage without changing ______ programs.

**Answer:** Application
**Explanation:** Data independence ensures physical structures can be tuned without requiring any rewrites to application programs.

---

**Question 48**
Queries are examples of ______ statements.

**Answer:** DML
**Explanation:** Data Retrieval Queries are declarative statements belonging to the Data Manipulation Language (DML).

---

**Question 49**
Object-relational model combines relational and ______ concepts.

**Answer:** Object-oriented
**Explanation:** The object-relational model extends the standard relational structure by adding support for advanced object-oriented classes and inheritance patterns.

---

**Question 50**
Transaction is a logical unit of ______.

**Answer:** Work
**Explanation:** A transaction is defined in database theory as a logical unit of work (group of reads/writes) that must execute atomically.
