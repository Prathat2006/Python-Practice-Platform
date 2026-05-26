### Week 7: Transactions & Concurrency

**Question 1**
A transaction is best defined as:
A. Collection of tables
B. Unit of program execution accessing/updating data
C. SQL query only
D. Database schema

**Answer:** B
**Explanation:** A transaction is a program unit that accesses and potentially updates various data items. It must be treated as a single, indivisible unit of execution.

---

**Question 2**
In the fund transfer example, which operation reduces balance of account A?
A. read(A)
B. write(B)
C. A := A − 50
D. read(B)

**Answer:** C
**Explanation:** While `read(A)` retrieves the value from disk and `write(A)` saves it, the arithmetic re-assignment step `A := A - 50` is the actual operation performing the reduction of the balance of account A in memory.

---

**Question 3**
If a crash occurs after `write(A)` but before `write(B)`, which ACID property prevents partial updates?
A. Consistency
B. Isolation
C. Atomicity
D. Durability

**Answer:** C
**Explanation:** Atomicity guarantees "all-or-nothing" execution. If a transaction fails mid-way, all partial database state modifications must be completely undone (rolled back).

---

**Question 4**
Which ACID property guarantees committed data survives crashes?
A. Isolation
B. Atomicity
C. Durability
D. Consistency

**Answer:** C
**Explanation:** Durability ensures that once a transaction successfully completes (commits), its updates are permanently written to persistent storage (disk) and will not be lost even if a system crash occurs immediately afterward.

---

**Question 5**
Consistency primarily means:
A. Transactions execute slowly
B. Database moves between valid states
C. Data never changes
D. Locks are released

**Answer:** B
**Explanation:** Consistency ensures that a transaction, running in isolation, takes the database from one valid, consistent state satisfying all integrity constraints to another valid consistent state.

---

**Question 6**
Which ACID property hides intermediate transaction results?
A. Durability
B. Isolation
C. Consistency
D. Atomicity

**Answer:** B
**Explanation:** Isolation ensures that concurrently running transactions do not see each other's half-finished, intermediate states. Each transaction executes as if it were the only one running.

---

**Question 7**
A transaction that completed all statements but is not permanently saved is:
A. Active
B. Failed
C. Partially Committed
D. Aborted

**Answer:** C
**Explanation:** A transaction enters the **partially committed** state after its final statement has been executed, but its actual updates are still residing in volatile buffers and have not been flushed/written to disk.

---

**Question 8**
Rollback restores database to:
A. Future state
B. Previous consistent state
C. Random state
D. Latest read state

**Answer:** B
**Explanation:** Rolling back an aborted or failed transaction requires undoing all of its operations, restoring the database to the consistent state it occupied before the transaction began.

---

**Question 9**
Which command permanently saves transaction changes?
A. BEGIN
B. SAVE
C. COMMIT
D. END

**Answer:** C
**Explanation:** The `COMMIT` command signals successful completion of the transaction and forces its changes to be durably written to stable secondary storage.

---

**Question 10**
Which component decides transaction timing and ordering?
A. Recovery Manager
B. Scheduler
C. Buffer Manager
D. Transaction Logger

**Answer:** B
**Explanation:** The **scheduler** (concurrency-control manager) coordinates the interleaved execution of concurrent transactions, ensuring serializability and avoiding concurrency anomalies.

---

**Question 11**
Which component performs undo/redo after failure?
A. Scheduler
B. Recovery Manager
C. Buffer Manager
D. Transaction Manager

**Answer:** B
**Explanation:** The **Recovery Manager** parses the write logs (undones and redones) after a database crash to reconstruct a consistent database state.

---

**Question 12**
Lost Update occurs because:
A. Reading old value then overwriting
B. Commit too early
C. Buffer overflow
D. Missing schema

**Answer:** A
**Explanation:** A Lost Update occurs when transaction T1 reads a value, T2 reads the same old value, T2 writes an updated value, and then T1 blind-writes its own update, effectively wiping out T2's write.

---

**Question 13**
Dirty Read occurs when:
A. Reading committed value
B. Reading uncommitted value
C. Reading multiple rows
D. Reading NULL

**Answer:** B
**Explanation:** A dirty read represents a concurrency anomaly where transaction T1 reads a data item that has been modified by an uncommitted transaction T2, which subsequently aborts.

---

**Question 14**
Inconsistent Analysis occurs because:
A. Mixed old and new values are read
B. Table missing PK
C. Duplicate rows
D. No GROUP BY

**Answer:** A
**Explanation:** Inconsistent Analysis (or non-repeatable/phantom read) happens when a query reads a balance or aggregated values while concurrent transactions update some of those balances, leading to an inconsistent summation.

---

**Question 15**
Which schedule runs one transaction completely before another?
A. Serializable
B. Parallel
C. Serial
D. Distributed

**Answer:** C
**Explanation:** A **serial** schedule executes all operations of a single transaction consecutively, without any interleaved operations from other concurrent transactions.

---

**Question 16**
Transactions accessing disjoint data:
A. Always interfere
B. Can safely run concurrently
C. Must rollback
D. Cannot commit

**Answer:** B
**Explanation:** Because the disjoint sets share no read/write access conflicts on any singular data item, they can be scheduled in parallel without any threat of concurrency problems.

---

**Question 17**
Transaction state immediately after rollback:
A. Active
B. Failed
C. Aborted
D. Committed

**Answer:** C
**Explanation:** Once the transaction manager has undone (rolled back) all operations, the transaction enters the **aborted** state, after which it can either be restarted or killed.

---

**Question 18**
Committed transaction means:
A. Stored only in RAM
B. Permanently reflected
C. Executing
D. Waiting

**Answer:** B
**Explanation:** A transaction in the **committed** state guarantees that its log and modifications have been written permanently to storage and will survive subsequent computer power losses or operating system crashes.

---

**Question 19**
Which scheduling concept allows concurrency but same result as serial?
A. Recovery
B. Serializability
C. Buffering
D. Logging

**Answer:** B
**Explanation:** **Serializability** is the core database scheduling criterion ensuring that any concurrent execution yields identical results to some serial execution of those transactions.

---

**Question 20**
Order of execution in serial scheduling:
A. Never matters
B. Sometimes changes final output
C. Causes deadlock
D. Prevents commit

**Answer:** B
**Explanation:** While every serial schedule is consistent by definition, different execution orders (e.g., T1 then T2 versus T2 then T1) may produce different final result values in the database, depending on which transaction gets scheduled first.

---

**Question 21**
Which are ACID properties? (Select all that apply)
A. Atomicity
B. Consistency
C. Isolation
D. Distribution

**Answer:** A, B, C
**Explanation:** ACID is the premier acronym representing Atomicity, Consistency, Isolation, and Durability constraints. Distribution is a system deployment model, not an ACID property.

---

**Question 22**
Transaction failure may happen due to: (Select all that apply)
A. Hardware failure
B. System crash
C. Constraint violation
D. SQL comments

**Answer:** A, B, C
**Explanation:** Failures can stem from user/program logical aborts (e.g., constraint triggers, double-spend checking), system/concurrency deadlocks, or physical power failures and CPU crashes. SQL comments do not cause crashes.

---

**Question 23**
Rollback may occur after: (Select all that apply)
A. Crash
B. Abort
C. Integrity violation
D. Successful commit

**Answer:** A, B, C
**Explanation:** If a system crashes, an transaction executes an abort, or checks catch an integrity constraint violation, a rollback is executed. Once a transaction is successfully **committed**, it can never be rolled back.

---

**Question 24**
Transaction states include: (Select all that apply)
A. Active
B. Failed
C. Aborted
D. Distributed

**Answer:** A, B, C
**Explanation:** Standard transaction lifecycle states include: Active, Partially Committed, Committed, Failed, and Aborted.

---

**Question 25**
Recovery manager responsibilities: (Select all that apply)
A. Undo
B. Redo
C. Restore consistency
D. Schedule transactions

**Answer:** A, B, C
**Explanation:** The recovery unit uses transaction logging histories to execute undones (rolling back active/failed processes) and redones (restoring committed updates). Scheduling is handled by the concurrency control engine.

---

**Question 26**
Which statements about durability are true? (Select all that apply)
A. Changes survive crash
B. Works after commit
C. Prevents dirty reads
D. Uses persistent storage

**Answer:** A, B, D
**Explanation:** Durability takes effect post-commit, ensuring data persists over crashes. It relies on non-volatile, stable storage blocks. Prevention of dirty reads is an Isolation concern.

---

**Question 27**
Isolation prevents: (Select all that apply)
A. Dirty intermediate visibility
B. Concurrent execution entirely
C. Wrong partial reads
D. Interference

**Answer:** A, C, D
**Explanation:** Isolation hides uncommitted intermediate results from concurrent transactions, avoiding interference. It does not prevent concurrent execution entirely (which is what concurrency controllers aim to maximize).

---

**Question 28**
Concurrency problems covered: (Select all that apply)
A. Lost Update
B. Dirty Read
C. Inconsistent Analysis
D. Deadlock

**Answer:** A, B, C
**Explanation:** Classic scheduling interference anomalies include Lost Updates, Dirty Reads, and Inconsistent Analysis. Deadlock is a concurrency controller state, not an interference anomaly in query outputs.

---

**Question 29**
Parallel execution allowed when: (Select all that apply)
A. Read-only transactions
B. Disjoint datasets
C. Same row writes
D. Independent access

**Answer:** A, B, D
**Explanation:** Concurrent transactions can execute in parallel if they are read-only, access entirely separate database items (disjoint), or have mutually independent workloads. Writing to the exact same row introduces a write-write conflict, preventing direct uncoordinated parallel schedules.

---

**Question 30**
Which statements are true for serial scheduling? (Select all that apply)
A. No concurrency anomalies
B. One transaction at a time
C. Highest concurrency
D. Order still matters

**Answer:** A, B, D
**Explanation:** Serial schedules completely run transactions sequentially, eliminating concurrency anomalies. However, they yield the lowest concurrency throughput, and the exact evaluation order still matters contextually.

---

**Question 31**
Serializable schedules: (Select all that apply)
A. Equivalent to some serial schedule
B. Always serial physically
C. Preserve correctness
D. Allow controlled concurrency

**Answer:** A, C, D
**Explanation:** Serializable schedules are not necessarily physically serial; they interleave operations to optimize performance but produce the exact logical results of some serial schedule, preserving database correctness.

---

**Question 32**
Aborted transaction may: (Select all that apply)
A. Restart
B. Be killed
C. Commit automatically
D. Rollback

**Answer:** A, B, D
**Explanation:** An aborted transaction must be rolled back first. Afterward, the system can either restart it (if the failure was transient, e.g., concurrency deadlock) or kill/terminate it (if it contained a logical error, e.g., division by zero).

---

**Question 33**
Transaction manager: (Select all that apply)
A. Begins transactions
B. Commits transactions
C. Coordinates components
D. Detects SQL syntax

**Answer:** A, B, C
**Explanation:** The transaction manager initializes, coordinates, and resolves (commits or rolls back) transactions. It is not responsible for parsing raw SQL syntax (handled by the SQL compiler).

---

**Question 34**
Buffer manager: (Select all that apply)
A. Moves data RAM↔Disk
B. Supports durability
C. Handles lock timing
D. Works with recovery

**Answer:** A, B, D
**Explanation:** The buffer manager coordinates physical file pages between volatile main memory and stable disk storage. It plays a critical role in recovery and durability by flushing data blocks to disk, but does not manage logical locking schedules.

---

**Question 35**
Which situations indicate inconsistency? (Select all that apply)
A. Debit applied but credit missing
B. Constraint violated
C. Partial update visible
D. Correct commit

**Answer:** A, B, C
**Explanation:** Violating a constraint, publishing intermediate changes, or completing only a fraction of a monetary balance transaction are all textbook examples of database inconsistency.

---

**Question 36**
A transaction is a unit of program ______.

**Answer:** execution
**Explanation:** A transaction is the standard logical unit of database program execution.

---

**Question 37**
ACID property ensuring all-or-nothing execution is ______.

**Answer:** atomicity
**Explanation:** Atomicity ensures that either all updates associated with a transaction are committed to the database, or none are.

---

**Question 38**
Committed changes surviving crashes refers to ______.

**Answer:** durability
**Explanation:** Durability guarantees that committed changes reside on non-volatile, stable storage.

---

**Question 39**
The command used to undo transaction changes is ______.

**Answer:** rollback
**Explanation:** Executing a `ROLLBACK` command reverts the state changes made during an active transaction.

---

**Question 40**
State after final statement but before permanent save: ______.

**Answer:** partially committed
**Explanation:** A transaction resides in the partially committed state after executing its last instruction.

---

**Question 41**
Reading uncommitted data causes ______ problem.

**Answer:** dirty read
**Explanation:** Reading temporary, uncommitted changes made by another concurrently executing transaction is known as a dirty read.

---

**Question 42**
Overwriting another transaction’s update causes ______ anomaly.

**Answer:** lost update
**Explanation:** The blind overwriting of uncommitted values results in a lost update anomaly.

---

**Question 43**
Transactions should move DB from one ______ state to another.

**Answer:** consistent
**Explanation:** Each transaction is assumed to start with a consistent database state and terminate leaving the database in a consistent state.

---

**Question 44**
The component responsible for concurrency timing is ______.

**Answer:** scheduler
**Explanation:** The scheduler (concurrency-control subsystem) enforces the serializability/timing of concurrent active requests.

---

**Question 45**
A transaction that cannot continue enters ______ state.

**Answer:** failed
**Explanation:** A transaction enters the failed state when normal execution can no longer proceed.

---

**Question 46**
Execution of transactions one-by-one is called ______ scheduling.

**Answer:** serial
**Explanation:** Running T1 to completion, then T2 to completion, is called serial scheduling.

---

**Question 47**
Concurrent schedule equivalent to serial schedule is called ______.

**Answer:** serializable
**Explanation:** A schedule is called serializable if its concurrent executions share logical equivalence with a serial schedule.

---

**Question 48**
Intermediate transaction results must be hidden due to ______.

**Answer:** isolation
**Explanation:** Isolation enforces absolute partition parameters so concurrent actions remain blind to each other's in-progress state.

---

**Question 49**
Undoing an aborted transaction is called ______.

**Answer:** rollback
**Explanation:** Reversing/rolling back operations of aborted transactions washes away temporary modifications from database blocks.

---

**Question 50**
Read-only transactions generally ______ interfere with each other.

**Answer:** do not
**Explanation:** Read-only transactions have no write conflicts, so they can run concurrently without interfering with each other.
