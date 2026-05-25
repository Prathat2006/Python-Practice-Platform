### Lecture 1: Introduction to Database Systems

**Question 1**
Which of the following is NOT a database use case?
A. Financial administration
B. Workforce management
C. Compiler optimization
D. Educational information systems

**Answer:** C
**Explanation:** Compiler optimization is performed by compiler design engines, whereas financial administration, workforce management, and educational information systems are major use cases of database systems.

---

**Question 2**
In old file-based systems, repeated copies of data lead to:
A. Data consistency
B. Data redundancy and inconsistency
C. Faster processing
D. Strong integrity

**Answer:** B
**Explanation:** Storing the same data multiple times across different files results in data redundancy, which easily leads to data inconsistency if some copies are updated while others are not.

---

**Question 3**
Retrieving information in early systems often required:
A. SQL optimizer
B. Custom application programs
C. Views
D. Buffer manager

**Answer:** B
**Explanation:** Before the advent of DBMS, user programs written in high-level languages like COBOL or C had to directly open and search files to retrieve any data.

---

**Question 4**
Which database level hides storage implementation details?
A. Physical level
B. Logical level
C. View level
D. Transaction level

**Answer:** B
**Explanation:** The logical level describes what data is stored and what relationships exist, hiding the complex physical storage structures (lowest level) from database users.

---

**Question 5**
The logical level mainly defines:
A. Disk blocks
B. Record structures and relationships
C. User permissions only
D. Memory allocation

**Answer:** B
**Explanation:** The logical level describes the record types, attributes, fields, and relationships that exist within the database.

---

**Question 6**
View level mainly provides:
A. Data encryption
B. Customized data presentation
C. Physical storage
D. Query compilation

**Answer:** B
**Explanation:** The view level provides customized data presentation to different users, hiding other parts of the database structure that are irrelevant or restricted.

---

**Question 7**
Database instance refers to:
A. Database design
B. Current stored data
C. Data dictionary
D. Query language

**Answer:** B
**Explanation:** A database instance is the actual collection of information stored in the database at any specific point in time.

---

**Question 8**
Database schema changes:
A. Frequently
B. Rarely
C. Every transaction
D. Every query

**Answer:** B
**Explanation:** The database schema is the overall design/structure of the database, which is rarely modified after initialization.

---

**Question 9**
Physical data independence means:
A. Data stored independently of users
B. Storage changes don’t affect applications
C. Data never changes
D. Queries are independent

**Answer:** B
**Explanation:** Physical data independence is the ability to modify physical schemas (such as storage formats, files, indexing structures) without requiring changes to logical schemas or applications.

---

**Question 10**
Which model represents data using tables?
A. ER Model
B. Relational Model
C. Network Model
D. XML Model

**Answer:** B
**Explanation:** The Relational Model stores and represents data in grids or tables (also known as relations).

---

**Question 11**
Entity–Relationship model is mostly used for:
A. Physical storage
B. Conceptual design
C. Query optimization
D. Caching

**Answer:** B
**Explanation:** The Entity-Relationship (ER) model is a graphic representational model used primarily during the database structural and conceptual design phases.

---

**Question 12**
Semistructured data commonly uses:
A. XML
B. SQL only
C. Arrays
D. Binary trees

**Answer:** A
**Explanation:** XML and JSON are frequent formats used to represent semistructured data where tags or metadata describe data directly.

---

**Question 13**
Which language supports retrieval and update operations?
A. DML
B. DDL
C. HDL
D. SDL

**Answer:** A
**Explanation:** Data Manipulation Language (DML) is used to retrieve, insert, delete, and alter the data stored in a database.

---

**Question 14**
Queries belong to:
A. DDL
B. DML
C. Buffer manager
D. Metadata

**Answer:** B
**Explanation:** A query is a statement requesting the retrieval of information. Query languages are part of the Data Manipulation Language (DML).

---

**Question 15**
Which of the following is an integrity constraint?
A. Domain constraint
B. Referential integrity
C. Assertions
D. All of these

**Answer:** D
**Explanation:** Domain constraints, referential integrity, and assertions are different types of integrity rules managed by the database schema to keep data clean and valid.

---

**Question 16**
Metadata is stored in:
A. Buffer
B. Data dictionary
C. Transaction log
D. Cache

**Answer:** B
**Explanation:** The data dictionary (also called system catalog) stores metadata, which is descriptive information describing the structures and constraints of the database.

---

**Question 17**
DML compiler generates:
A. Tables
B. Execution plans
C. Schemas
D. Views

**Answer:** B
**Explanation:** The DML compiler compiles query constructs into low-level instructions or evaluation plans that the engine can run.

---

**Question 18**
Query evaluation engine performs:
A. Execution of optimized plans
B. Data backup
C. Authentication
D. Disk partitioning

**Answer:** A
**Explanation:** The query evaluation engine takes compiled/optimized query execution plans and actually executes them, loading and writing data.

---

**Question 19**
Storage manager mainly interacts with:
A. GPU
B. Disk-resident data
C. Browser
D. Compiler

**Answer:** B
**Explanation:** The storage manager is a program module that acts as an interface between low-level data stored on disk and the queries sent to the system.

---

**Question 20**
Which manager enforces integrity and authorization?
A. Buffer manager
B. File manager
C. Authorization and integrity manager
D. Scheduler

**Answer:** C
**Explanation:** The authorization and integrity manager tests for satisfaction of integrity constraints and checks the authorization of users who access the database.

---

**Question 21**
Buffer manager handles:
A. CPU scheduling
B. Disk–memory transfer
C. Transactions only
D. SQL parsing

**Answer:** B
**Explanation:** The buffer manager is responsible for fetching data from disk storage into main memory cache and writing updated columns/blocks back.

---

**Question 22**
Atomicity means:
A. Transaction executes fully or not at all
B. Parallel execution
C. Permanent storage
D. Multiple users

**Answer:** A
**Explanation:** Part of ACID, atomicity guarantees that either all database changes of a transaction are computed successfully, or none of them are.

---

**Question 23**
Durability ensures:
A. Data persists after commit
B. Fast queries
C. Data compression
D. Security

**Answer:** A
**Explanation:** Durability guarantees that once a transaction commits, its changes survive even in the event of system power-offs or failures.

---

**Question 24**
Recovery manager supports:
A. Atomicity and durability
B. Security and indexing
C. Query parsing
D. Caching

**Answer:** A
**Explanation:** The recovery manager is responsible for restoring the database to a consistent state following any system crash, ensuring atomicity and durability.

---

**Question 25**
Three-tier architecture introduces:
A. Application server layer
B. Query optimizer
C. Buffer layer
D. Storage blocks

**Answer:** A
**Explanation:** In a three-tier architecture, the client communicates with an intermediate Application Server (business logic layer), which then queries the database system.

---

**Question 26**
Problems in early file systems included: (Select all that apply)
A. Data redundancy
B. Poor accessibility
C. Strong consistency
D. Limited adaptability

**Answer:** A, B, D
**Explanation:** Early file-processing systems suffered from data redundancy and inconsistency, difficulty accessing data (poor accessibility), data isolation, integrity problems, atomicity problems, and concurrent-access anomalies. Strong consistency was not a feature.

---

**Question 27**
DB abstraction levels are: (Select all that apply)
A. Physical
B. Logical
C. View
D. Semantic

**Answer:** A, B, C
**Explanation:** The three standard levels of data abstraction are the physical level (how it is stored), logical level (what is stored), and view level (customized presentations). There is no "semantic" level.

---

**Question 28**
Physical level characteristics: (Select all that apply)
A. Lowest layer
B. Defines storage structures
C. User-specific views
D. Hidden from programmers

**Answer:** A, B, D
**Explanation:** The physical level is the lowest level of abstraction. It defines the actual storage structures and page blocks on disks, and is typically hidden from database application programmers (who work at the logical or view level).

---

**Question 29**
Data models discussed include: (Select all that apply)
A. Relational
B. ER
C. Object-oriented
D. Semistructured

**Answer:** A, B, C, D
**Explanation:** The relational model, Entity-Relationship (ER) model, object-based/object-oriented models, and semistructured data models (like XML/JSON) are all major classes of data models.

---

**Question 30**
DML operations include: (Select all that apply)
A. Retrieval
B. Insertion
C. Deletion
D. Update

**Answer:** A, B, C, D
**Explanation:** Data Manipulation Language (DML) is used to retrieve, insert, delete, and alter/update records in the database.

---

**Question 31**
DDL handles: (Select all that apply)
A. Schema definition
B. Access methods
C. Constraints
D. Storage structure

**Answer:** A, B, C, D
**Explanation:** Data Definition Language (DDL) defines schema structures, integrity constraints (primary/foreign keys), authorization, physical storage descriptors, and indexing access methods.

---

**Question 32**
Integrity constraints include: (Select all that apply)
A. Domain constraints
B. Referential integrity
C. Assertions
D. Authorization rules

**Answer:** A, B, C, D
**Explanation:** Schema constraints processed by DDL include Domain constraints, Referential integrity, Assertions, and Authorization rules.

---

**Question 33**
Query processor contains: (Select all that apply)
A. DDL interpreter
B. DML compiler
C. Query evaluation engine
D. Buffer manager

**Answer:** A, B, C
**Explanation:** DDL interpreter, DML compiler, and Query evaluation engine are primary parts of the Query Processor. The Buffer Manager is a component of the Storage Manager.

---

**Question 34**
Storage manager components: (Select all that apply)
A. File manager
B. Buffer manager
C. Transaction manager
D. Authorization manager

**Answer:** A, B, C, D
**Explanation:** The storage manager is composed of several modules: Authorization/Integrity manager, Transaction manager, File manager, and Buffer manager.

---

**Question 35**
Physical data structures include: (Select all that apply)
A. Data files
B. Data dictionary
C. Indices
D. Views

**Answer:** A, B, C
**Explanation:** Disk-level data structures include data files (storing the raw data), the data dictionary (storing metadata), and indices (providing fast lookup access). Views are logical/virtual windows, not physical disk structures.

---

**Question 36**
ACID properties include: (Select all that apply)
A. Atomicity
B. Consistency
C. Isolation
D. Durability

**Answer:** A, B, C, D
**Explanation:** The fundamental properties of transactions are Atomicity, Consistency, Isolation, and Durability (ACID).

---

**Question 37**
Transaction manager helps in: (Select all that apply)
A. Database consistency
B. Concurrent transactions
C. Recovery
D. Compilation

**Answer:** A, B, C
**Explanation:** The transaction manager ensures that transactions are completed without violating consistency rules, schedules concurrency, and handles crash recovery. Compilation is performed by the DML compiler, not the transaction manager.

---

**Question 38**
Recovery manager guarantees: (Select all that apply)
A. Atomicity
B. Durability
C. Encryption
D. Logging support

**Answer:** A, B
**Explanation:** The recovery manager guarantees transaction Atomicity and Durability (by restoring state after crashes via rolled-back or committed redo/undo logs).

---

**Question 39**
Database use cases include: (Select all that apply)
A. Banking
B. Manufacturing
C. Education
D. Payroll

**Answer:** A, B, C, D
**Explanation:** Modern enterprise systems—including banking, inventory/manufacturing, educational portals, and human resource payroll systems—depend heavily on database storage databases.

---

**Question 40**
Three-tier architecture contains: (Select all that apply)
A. User
B. Application Client
C. Application Server
D. Database System

**Answer:** A, B, C, D
**Explanation:** The standard 3-tier model consists of Client/User (Client Layer/Web Browser), Application Server (which executes business logic), and Database Server (storing raw data).

---

**Question 41**
The ______ level presents customized subsets of data to users.

**Answer:** View
**Explanation:** The View level is the highest level of abstraction, providing simplified representations of portions of the database customized for individual users or applications.

---

**Question 42**
Database ______ refers to actual stored data at a particular time.

**Answer:** Instance
**Explanation:** A database instance is the collection of actual records and data stored within the system at any given moment.

---

**Question 43**
Database ______ defines overall structure and changes infrequently.

**Answer:** Schema
**Explanation:** The database schema represents the schematic layout, structural design, and field rules governing the database.

---

**Question 44**
The relational model stores data in the form of ______.

**Answer:** Tables
**Explanation:** The relational model organizes data structurally into uniform, grid-like tables containing rows (tuples) and columns (attributes).

---

**Question 45**
DML stands for Data ______ Language.

**Answer:** Manipulation
**Explanation:** Data Manipulation Language (DML) defines query retrieval and write operations.

---

**Question 46**
DDL stands for Data ______ Language.

**Answer:** Definition
**Explanation:** Data Definition Language (DDL) defines table creations, structures, schemas, and integrity rules.

---

**Question 47**
Metadata is stored in the data ______.

**Answer:** Dictionary
**Explanation:** The Data Dictionary (system catalog) serves as a system repository containing metadata for tables and configurations.

---

**Question 48**
A transaction must satisfy ______ properties.

**Answer:** ACID
**Explanation:** To guarantee correctness, integrity, and safety during operations and failures, transactions must be compliant with ACID properties (Atomicity, Consistency, Isolation, Durability).

---

**Question 49**
Buffer manager moves data between disk and ______ memory.

**Answer:** Main
**Explanation:** The buffer manager acts as an intermediary, loading data into fast volatile Main Memory (RAM) cache and syncing changes back onto physical non-volatile disks.

---

**Question 50**
Recovery manager ensures atomicity and ______.

**Answer:** Durability
**Explanation:** The recovery unit uses journals or log files to restore system state after failures, keeping the Atomicity and Durability of committed records fully intact.
