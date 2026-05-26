### Lecture 7: Database Transactions and Concurrency Control

**Question 1**
A transaction is best defined as:
A. A single SQL INSERT command executed on the database
B. A unit of program execution that accesses and potentially updates various data items
C. A set of security backup protocols running on the system server
D. A dynamic list of relational schema variables in physical memory

**Answer:** B
**Explanation:** A transaction is a sequence of read and write operations representing a logical logical unit of work.

---

**Question 2**
In the standard fund transfer transaction where $50 is moved from account A to account B, which operation decreases the value of account A?
A. `read(A)`
B. `write(A)`
C. `A := A - 50` followed by `write(A)`
D. `read(B)`

**Answer:** C
**Explanation:** The local mathematical subtraction updates the memory variable, which must then be written to disk via `write(A)` to persist the decrease.

---

**Question 3**
Suppose a database server crashes after executing `write(A)` but before committing the companion `write(B)` step. Which ACID property ensures that the partial update to A is rolled back?
A. Consistency
B. Isolation
C. Atomicity
D. Durability

**Answer:** C
**Explanation:** Atomicity ensures "all-or-nothing" execution. If a transaction fails mid-way, all of its updates must be completely undone.

---

**Question 4**
Which ACID property guarantees that committed transaction updates survive subsequent power failures or database crashes?
A. Durability
B. Isolation
C. Consistency
D. Atomicity

**Answer:** A
**Explanation:** Durability guarantees that once a transaction commits, its writes are written to disk and survive any subsequent system failures.

---

**Question 5**
In Concurrency, "Isolation" primarily means:
A. Transactions must run on completely separate database servers
B. Multiple transactions can run simultaneously, but their execution must appear as if they ran sequentially one after another
C. Every transaction must be isolated from the system's disk log files
D. Only one database administrator can login at a time

**Answer:** B
**Explanation:** Isolation ensures that concurrently executing transactions are unaware of each other's intermediate state.

---

**Question 6**
What is "Consistency" in ACID properties?
A. Ensuring the database has 100% active uptime
B. Transitioning the database from one valid state preserving all integrity constraints to another valid state
C. Forcing transaction execution times to be constant
D. Keeping the schema identical on all server replicas

**Answer:** B
**Explanation:** Consistency ensures that a transaction maintains all schema integrity constraints (e.g., account sums must remain constant on transfer).

---

**Question 7**
The transaction state representing a transaction that has executed its final statement but has not yet committed is:
A. Active
B. Aborted
C. Partially Committed
D. Failed

**Answer:** C
**Explanation:** Once the final program line is executed, the transaction enters the "partially committed" state. It only enters the "committed" state after its updates are fully written to the disk log.

---

**Question 8**
When a transaction enters the "Failed" state, what must the database system do to maintain consistency?
A. Immediately archive the database to backup
B. Roll back (undo) its partial changes and restart or terminate the transaction
C. Force-commit its remaining statements to disk
D. Pause all other concurrent database transactions

**Answer:** B
**Explanation:** A failed transaction must be rolled back. The database discards any changes it made to ensure a clean state.

---

**Question 9**
What is a "Schedule" in transaction execution?
A. A timetable list of database backup tasks
B. A chronological sequence of operations from a set of concurrent transactions
C. The optimal query compiler plan for joins
D. The total memory buffer size allocated to query transactions

**Answer:** B
**Explanation:** A schedule logs the execution order of individual read, write, commit, and abort statements from a set of competing transactions.

---

**Question 10**
A "Serial Schedule" is a schedule where:
A. Transactions are executed in parallel on multi-core processors
B. Transactions are executed end-to-end, with no interleaving of operations
C. Reads are prioritized over writes
D. Every operation uses a serial key sequence

**Answer:** B
**Explanation:** In a serial schedule, one transaction completes entirely before the next transaction begins executing.

---

**Question 11**
What concurrency problem occurs when a transaction T2 reads intermediate data written by transaction T1 before T1 has committed?
A. Unrepeatable Read
B. Lost Update
C. Dirty Read
D. Phantom Read

**Answer:** C
**Explanation:** A dirty read occurs when T2 reads an uncommitted value from T1. If T1 subsequently aborts, T2 is left with invalid, non-existent data.

---

**Question 12**
What is the "Lost Update" problem?
A. A transaction failing to update a record due to CPU overheating
B. Transaction T1's write is overwritten and obliterated by transaction T2's concurrent write without T2 reading T1's intermediate update
C. Reading different values of a record within the same transaction scope
D. Archiving database logs on a remote server

**Answer:** B
**Explanation:** Lost updates occur when concurrent writes overwrite each other without proper coordination, losing T1's write.

---

**Question 13**
A schedule is conflict serializable if:
A. It is equivalent to some serial schedule of the same transactions
B. It contains no concurrent transactions
C. It is equivalent to a serial schedule by swapping non-conflicting adjacent operations
D. It has no lock requests

**Answer:** C
**Explanation:** Conflict serializability is proven if a schedule can be transformed into a serial schedule by repeatedly swapping adjacent non-conflicting instructions.

---

**Question 14**
Two operations from different transactions conflict if they are on the same data item, and:
A. Both are read operations
B. One is a read and one is a write, or both are write operations
C. Both occur at the same time
D. Both have committed

**Answer:** B
**Explanation:** Two instructions conflict if and only if they belong to different transactions, access the same record, and at least one of them is a `write` operation.

---

**Question 15**
In transaction serializability, what does a cycle in the Precedence (Serialization) Graph indicate?
A. The schedule is serial
B. The schedule is NOT conflict serializable
C. The schedule has successfully committed
D. Conflict locks have been released

**Answer:** B
**Explanation:** A cycle in the precedence graph indicates conflicting loops between transactions, meaning the schedule is not conflict serializable.

---

**Question 16**
Which of the following is true regarding View Serializability?
A. Every conflict serializable schedule is also view serializable
B. Every view serializable schedule is also conflict serializable
C. View serializability is faster to compute than conflict serializability
D. View serializability only applies to read-only databases

**Answer:** A
**Explanation:** Conflict serializability is a strict subset of view serializability. All conflict serializable schedules are view serializable, but not vice-versa.

---

**Question 17**
A "Cascading Abort" is a situation where:
A. A database abort statement propagates and crashes the operating system
B. The failure of a single transaction T1 forces several other uncommitted transactions to abort because they read uncommitted data from T1
C. A transaction restarts itself consecutively 10 times in a loop
D. Disk block corruption spreads to adjacent sectors

**Answer:** B
**Explanation:** If T2 reads uncommitted data from T1, and T1 aborts, T2 must also abort. This cascading rollback degrades performance and is avoided by cascade-free schedules.

---

**Question 18**
To guarantee that a schedule is completely "Recoverable", what condition must be met?
A. All transactions must commit at the exact same millisecond
B. For each pair of transactions T_i and T_j such that T_j reads data written by T_i, T_i commits BEFORE T_j commits
C. No two write operations can execute sequentially
D. The database must run in read-only mode

**Answer:** B
**Explanation:** Recoverability ensures that if T_j depends on T_i, T_j cannot commit before T_i. This prevents the system from being unable to roll back a committed transaction if its dependency fails.

---

**Question 19**
What does a "Blind Write" mean?
A. Writing to database blocks without having any transaction privilege
B. A write operation executed by a transaction on a data item without reading that data item first
C. Writing to a corrupted disk block
D. Deleting an index pointer randomly

**Answer:** B
**Explanation:** A blind write is a `write(A)` operation that is executed without a preceding `read(A)`. It is a key factor in view serializability cases.

---

**Question 20**
Which transaction isolation level in SQL allows dirty reads?
A. SERIALIZABLE
B. REPEATABLE READ
C. READ COMMITTED
D. READ UNCOMMITTED

**Answer:** D
**Explanation:** `READ UNCOMMITTED` is the lowest SQL isolation level, allowing dirty reads, non-repeatable reads, and phantoms to occur.

---

### Section B: Multiple-Select Questions (Select all that apply)

**Question 21**
Which of the following are the classic ACID properties? (Select all that apply)
A. Atomicity
B. Consistency
C. Isolation
D. Durability

**Answer:** A, B, C, D
**Explanation:** The ACID framework stands for Atomicity, Consistency, Isolation, and Durability.

---

**Question 22**
Which transactions states exist in the transaction lifecycle? (Select all that apply)
A. Active
B. Partially Committed
C. Failed
D. Aborted

**Answer:** A, B, C, D
**Explanation:** The official state diagram contains: Active, Partially Committed, Failed, Aborted, and Committed.

---

**Question 23**
Which of the following represent standard concurrency anomalies? (Select all that apply)
A. Dirty Read
B. Lost Update
C. Non-repeatable Read
D. Deadlock rollback

**Answer:** A, B, C
**Explanation:** Dirty reads, lost updates, and non-repeatable reads are classic concurrency anomalies. Deadlock is a resource state, not a direct concurrency inconsistency anomaly.

---

**Question 24**
Which of the following instructions from different transactions conflict? (Select all that apply)
A. `read(A)` from T1 and `read(A)` from T2
B. `read(A)` from T1 and `write(A)` from T2
C. `write(A)` from T1 and `write(A)` from T2
D. `write(A)` from T1 and `write(B)` from T2

**Answer:** B, C
**Explanation:** Read-Read (A) does not conflict. Write-Write on different items (D) does not conflict. Conflict needs same item plus at least one write (B, C).

---

**Question 25**
What features describe a "Sufficiently Isolated" cascading-free schedule? (Select all that apply)
A. Transactions only read committed data values
B. It is a subset of recoverable schedules
C. It completely eliminates cascading abort chains
D. It disallows read operations entirely

**Answer:** A, B, C
**Explanation:** A schedule is cascade-less if transactions only read committed data. Cascading aborts are prevented, and all cascade-free schedules are recoverable.

---

**Question 26**
Identify the advantages of building precedence graphs for schedules: (Select all that apply)
A. Finding cycles to determine if a schedule is conflict serializable
B. Finding a topological sort order to construct equivalent serial schedules
C. Automatically recovering lost updates at runtime
D. Locking database records before transactions start

**Answer:** A, B
**Explanation:** Precedence graphs help detect cycles to test for conflict serializability and construct equivalent serial schedules via topological sorting.

---

**Question 27**
Which of the following conditions must hold for view equivalence between schedule S and schedule S'? (Select all that apply)
A. If T_i reads initial value of Q in S, it must read initial value of Q in S'
B. If T_i executes write(Q) in S and this write is read by T_j, then T_j must read T_i's write in S'
C. If T_i executes the final write(Q) in S, it must execute the final write(Q) in S'
D. Swaps must involve only concurrent read operations

**Answer:** A, B, C
**Explanation:** These are the three core rules defining view equivalence. Swapping is only used for conflict equivalence.

---

**Question 28**
Which SQL isolation levels prevent non-repeatable reads? (Select all that apply)
A. READ UNCOMMITTED
B. READ COMMITTED
C. REPEATABLE READ
D. SERIALIZABLE

**Answer:** C, D
**Explanation:** REPEATABLE READ and SERIALIZABLE enforce constraints that prevent both dirty reads and non-repeatable reads.

---

**Question 29**
A transaction rollback involves which operations? (Select all that apply)
A. Re-reading database records
B. Undoing all writes of active or failed transactions using system log records
C. Releasing all locks acquired by the transaction
D. Changing the database schema definitions automatically

**Answer:** B, C
**Explanation:** Rollback undoes transaction writes using logging data and releases locks. Schema definitions are unaffected.

---

**Question 30**
Which lock modes are commonly used in Concurrency Control? (Select all that apply)
A. Shared (S) lock (for reading data)
B. Exclusive (X) lock (for writing data)
C. Random (R) lock
D. Static (ST) lock

**Answer:** A, B
**Explanation:** Relational locking uses Shared locks (multiple transactions can read) and Exclusive locks (only one transaction can write).

---

**Question 31**
Under what circumstances does a transaction enter the "Aborted" state? (Select all that apply)
A. It executes commit successfully
B. The transaction is rolled back after entering the Failed state
C. It is killed by the system lock manager to resolve a deadlock loop
D. It executes a database read phase

**Answer:** B, C
**Explanation:** Aborted represents a transaction that has been completely rolled back. Commit (A) and Read (D) do not abort.

---

**Question 32**
Which of the following statements about View Serializability are correct? (Select all that apply)
A. Testing view serializability is NP-complete
B. Every conflict-serializable schedule is view-serializable
C. View serializability allows schedules with blind writes that are not conflict-serializable
D. Precedence graphs can easily find view-serializable schedules in linear time

**Answer:** A, B, C
**Explanation:** View serializability testing is NP-complete. It is a superset of conflict serializability and accommodates blind writes.

---

**Question 33**
If a precedence graph contains two vertices T1 and T2, and an edge T1 -> T2, which conflicts could have created this edge? (Select all that apply)
A. T1 reads item X before T2 writes X
B. T1 writes item X before T2 reads X
C. T1 writes item X before T2 writes X
D. T1 reads item X before T2 reads X

**Answer:** A, B, C
**Explanation:** All write-conflict transitions (Read-Write, Write-Read, Write-Write) on the same item create precedence edges from the first transaction to the second transaction.

---

**Question 34**
Which of the following concurrency anomalies are prevented by the `READ COMMITTED` isolation level? (Select all that apply)
A. Dirty Reads
B. Non-repeatable Reads
C. Phantoms
D. Lost Updates (using proper locks)

**Answer:** A
**Explanation:** `READ COMMITTED` only guarantees that uncommitted data is never read (preventing dirty reads). It does not prevent non-repeatable reads or phantoms.

---

**Question 35**
In the transaction journal logs, what records are recorded during execution? (Select all that apply)
A. Transaction Start
B. Before-image and After-image of modified data values
C. Transaction Commit or Abort
D. The compiler speed index

**Answer:** A, B, C
**Explanation:** Relational transaction journals log starts, image values (for undo/redo), and rollbacks/commits.

---

**Question 36**
Which statements about serial schedules are true? (Select all that apply)
A. They always produce a consistent database state if transactions are individually consistent
B. They have 0% interleaving of transaction operations
C. They maximize CPU and disk-access concurrency
D. They represent the standard correctness criteria for non-serial schedules

**Answer:** A, B, D
**Explanation:** Serial schedules preserve consistency, involve no interleaving of operations, and serve as the baseline correctness criteria. However, they suffer from poor performance due to low concurrency.

---

**Question 37**
Cascade-free schedules have which of the following properties? (Select all that apply)
A. They are always recoverable
B. They prevent uncommitted dependencies
C. They require more storage overhead
D. They represent a subset of conflict-serializable schedules

**Answer:** A, B
**Explanation:** Cascade-free schedules are always recoverable and prevent uncommitted dependencies. They are not necessarily conflict-serializable.

---

**Question 38**
What is a phantom read? (Select all that apply)
A. Reading a data item and finding its value has changed on re-read within the same transaction scope
B. A transaction executing a query that scans a set of rows, and a concurrent transaction inserts new records that match the query's filter predicate before the first transaction commits
C. A transaction reading from a deleted table
D. Seeing new records appear in subsequent scans that weren't there initially

**Answer:** B, D
**Explanation:** Phantom reads occur when rows matching a query predicate are inserted or deleted by another transaction mid-execution, causing the row count/presence to change.

---

**Question 39**
How does the database scheduler enforce serializability? (Select all that apply)
A. By applying protocol locking rules (such as Two-Phase Locking)
B. By utilizing Timestamp-Based Ordering rules
C. By performing automatic relational index compressions
D. By managing transaction commit order

**Answer:** A, B, D
**Explanation:** Locking (2PL), Timestamps, and commit ordering are standard techniques used by database schedulers to enforce serializability.

---

**Question 40**
Under the strict Two-Phase Locking (Strict 2PL) protocol, what occurs? (Select all that apply)
A. All lock requests must precede unlock requests
B. All exclusive (X) locks must be held until the transaction finishes (commits or aborts)
C. Locks are released immediately after use
D. No cascading rollbacks can occur

**Answer:** A, B, D
**Explanation:** Strict 2PL requires all lock requests to occur in a growing phase and holds exclusive locks until commit/abort. This prevents cascading rollbacks.

---

### Section C: Fill-in-the-Blank Questions

**Question 41**
If T1 updates record A, and T2 updates record A before T1 commits, the database exhibits which concurrency problem?
**Answer:** Lost Update
**Explanation:** If T2 overwrites T1's uncommitted write, T1's work is lost.

---

**Question 42**
The transaction state that represents the complete, successful termination of a transaction where all changes are durable is:
**Answer:** Committed
**Explanation:** The "committed" state indicates the transaction successfully terminated and its log records are durable on disk.

---

**Question 43**
If a transaction T1 reads data written by T2, and T2 aborts, T1 must also abort. This is known as:
**Answer:** Cascading Rollback
**Explanation:** Cascading rollbacks (or cascading aborts) occur when a transaction's abort triggers the abort of dependent transactions.

---

**Question 44**
A schedule containing transactions {T1, T2} is conflict serializable if we can remove all cycles from its:
**Answer:** Precedence Graph
**Explanation:** A schedule is conflict serializable if and only if its precedence graph is acyclic (contains 0 cycles).

---

**Question 45**
The metric denoting the duration a transaction spends in the active state before committing is known as transaction:
**Answer:** Execution Time
**Explanation:** Execution time measures the active duration of the transaction.

---

**Question 46**
An schedule is called view serializable if it is view equivalent to a:
**Answer:** Serial Schedule
**Explanation:** View serializability requires equivalence to a serial schedule of the identical transactions.

---

**Question 47**
Under SQL isolation levels, the high-end level that completely prevents dirty reads, non-repeatable reads, and phantom reads is:
**Answer:** SERIALIZABLE
**Explanation:** SERIALIZABLE provides full transaction isolation, preventing all standard concurrency anomalies.

---

**Question 48**
If a transaction updates A and B, a system crash before the writes persist requires which log recovery action?
**Answer:** Undo
**Explanation:** The recovery manager runs "Undo" operations to roll back uncommitted transactions and restore the database to a consistent state.

---

**Question 49**
Two read operations from different transactions accessing the same record do not:
**Answer:** Conflict
**Explanation:** Read-read operations do not conflict with each other because neither modifies the database.

---

**Question 50**
A database transaction is designed as a logical unit of program:
**Answer:** Execution
**Explanation:** A transaction is defined fundamentally as a logical unit of program execution that accesses and updates data.
