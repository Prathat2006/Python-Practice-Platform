### Week 8: Transaction Serializability

**Question 1**
Two instructions conflict only if:
A. They belong to same transaction
B. They access same item and at least one is write
C. They both are reads
D. They occur consecutively

**Answer:** B
**Explanation:** Two instructions from different transactions conflict if and only if they access the exact same data item and at least one of them is a write operation.

---

**Question 2**
Which pair does **NOT** conflict?
A. read(X), write(X)
B. write(X), read(X)
C. read(X), read(X)
D. write(X), write(X)

**Answer:** C
**Explanation:** Two read operations on the same data item do not conflict because they do not modify the state of the data.

---

**Question 3**
A schedule is conflict serializable if:
A. It equals a serial schedule exactly
B. It can be transformed into a serial schedule by swapping non-conflicting instructions
C. It contains only reads
D. It contains no commits

**Answer:** B
**Explanation:** By definition, a schedule is conflict serializable if we can obtain an equivalent serial schedule by swapping adjacent, non-conflicting instructions.

---

**Question 4**
If a precedence graph contains a cycle:
A. Schedule is recoverable
B. Schedule is serializable
C. Schedule is not conflict serializable
D. Schedule is view serializable

**Answer:** C
**Explanation:** The presence of a cycle in the precedence graph implies there is a conflict loop, meaning the schedule is not conflict serializable.

---

**Question 5**
Which serializability type is more general?
A. Conflict serializability
B. View serializability
C. Recoverability
D. Cascadeless

**Answer:** B
**Explanation:** View serializability is a more general correctness criterion. Every conflict serializable schedule is view serializable, but there are view serializable schedules (with blind writes) that are not conflict serializable.

---

**Question 6**
Conflict equivalence is based on:
A. Commit order
B. Read/write ordering
C. Number of transactions
D. Lock order

**Answer:** B
**Explanation:** Conflict equivalence is determined by the sequence of conflicting read/write instructions. Two schedules are conflict equivalent if they involve the same transactions and order all conflicting instructions in the same way.

---

**Question 7**
A precedence graph contains:
A. Data items as nodes
B. Transactions as nodes
C. Operations as nodes
D. Locks as nodes

**Answer:** B
**Explanation:** In a precedence graph (or serialization graph), each transaction in the schedule is represented as a vertex (node).

---

**Question 8**
Topological sorting is applied when:
A. Graph has cycle
B. Graph is disconnected
C. Graph is acyclic
D. Graph has self-loop

**Answer:** C
**Explanation:** Topological sorting can only be performed on a Directed Acyclic Graph (DAG) to determine an equivalent serial execution order.

---

**Question 9**
Which schedule is guaranteed to preserve consistency?
A. Any concurrent schedule
B. Serializable schedule
C. Random schedule
D. Nonrecoverable schedule

**Answer:** B
**Explanation:** A serializable schedule is functionally equivalent to a serial execution. Since individual transactions preserve database consistency, a serializable schedule is guaranteed to preserve consistency.

---

**Question 10**
Blind writes are mainly associated with:
A. Conflict serializable schedules
B. View serializable but not conflict serializable schedules
C. Recoverable schedules
D. Cascadeless schedules

**Answer:** B
**Explanation:** Blind writes (writing a data item without reading/viewing it first) allow certain schedules to be view-serializable even if they are not conflict-serializable.

---

**Question 11**
A recoverable schedule requires:
A. Read before commit
B. Writer commits before reader commits
C. Reader commits first
D. No writes

**Answer:** B
**Explanation:** In a recoverable schedule, if transaction Tj reads data written by Ti, then Ti must commit before Tj commits. This ensures Tj can roll back if Ti aborts.

---

**Question 12**
Cascading rollback occurs when:
A. Multiple transactions commit together
B. One abort forces dependent transactions to abort
C. Deadlock occurs
D. Graph has cycle

**Answer:** B
**Explanation:** Cascading rollback (or cascading abort) refers to the phenomenon where the abort of one transaction (Ti) cascades and aborts other active uncommitted transactions (Tj) that have read uncommitted data written by Ti.

---

**Question 13**
Which is stronger?
A. Recoverable
B. Cascadeless
C. Conflict Serializable
D. View Serializable

**Answer:** B
**Explanation:** Cascadelessness is a stronger safety condition than recoverability. Every cascadeless schedule is recoverable, but not every recoverable schedule is cascadeless.

---

**Question 14**
In a cascadeless schedule:
A. Commit occurs before dependent read
B. Read occurs before write
C. Commit order irrelevant
D. Rollback impossible

**Answer:** A
**Explanation:** In a cascadeless schedule, transactions are only allowed to read committed data. Thus, the writing transaction must commit before any dependent read can occur.

---

**Question 15**
Checking view serializability is:
A. Polynomial
B. NP-complete
C. Constant time
D. Impossible

**Answer:** B
**Explanation:** Determining whether an arbitrary concurrent schedule is view serializable is an NP-complete problem.

---

**Question 16**
read(Q), write(Q) creates:
A. No conflict
B. Conflict
C. Blind write
D. Dependency only

**Answer:** B
**Explanation:** A read followed by a write (or vice-versa) on the same data item Q by different transactions constitutes a conflict because they cannot be arbitrarily reordered.

---

**Question 17**
Which statement is TRUE?
A. Every view serializable schedule is conflict serializable
B. Every conflict serializable schedule is view serializable
C. None are related
D. Recoverability implies serializability

**Answer:** B
**Explanation:** Conflict serializability is a strict subset of view serializability. All conflict serializable schedules are view serializable.

---

**Question 18**
If T2 reads value written by T1 and T1 aborts before commit:
A. Schedule remains recoverable
B. T2 may need rollback
C. T2 commits immediately
D. Serial schedule generated

**Answer:** B
**Explanation:** Since T2 is dependent on an uncommitted value written by T1, if T1 aborts, T2 is left with uncommitted/dirty data and must also be rolled back (aborted) to maintain consistency.

---

**Question 19**
Precedence graph edge Ti → Tj means:
A. Tj executed first
B. Ti must appear before Tj
C. Ti commits first
D. Tj aborts

**Answer:** B
**Explanation:** An edge Ti -> Tj indicates that Ti has a conflicting operation that occurred before a conflicting operation in Tj, which means Ti must precede Tj in any equivalent serial execution schedule.

---

**Question 20**
Conflict serializability ignores:
A. Reads
B. Writes
C. Computation between reads/writes
D. Transactions

**Answer:** C
**Explanation:** Conflict serializability analyzes schedules based solely on the ordering of read and write actions, completely ignoring the specific arithmetic or logical computations occurring inside transactions.

---

### Section B: Multiple-Select Questions

**Question 21**
Which of the following represent conflicting pairs of operations on the same data item from different transactions? (Select all that apply)
A. read(X), write(X)
B. write(X), write(X)
C. read(X), read(X)
D. write(X), read(X)

**Answer:** A, B, D
**Explanation:** Two instructions from different transactions conflict if they access the same item and at least one is a write. Hence, Read-Write (A), Write-Write (B), and Write-Read (D) are conflicting pairs. Read-Read (C) does not conflict.

---

**Question 22**
Which of the following characterises a conflict serializable schedule? (Select all that apply)
A. It has an acyclic precedence graph
B. It can be transformed into a serial schedule by swapping adjacent non-conflicting instructions
C. It must be a serial schedule
D. It preserves the database consistency

**Answer:** A, B, D
**Explanation:** Conflict serializable schedules are equivalent to some serial schedule via non-conflicting swaps (B), resulting in an acyclic precedence graph (A). Like serial schedules, they are guaranteed to preserve database integrity and consistency (D). They do not have to be strictly serial in execution (C).

---

**Question 23**
What are the formal conditions for Schedule S and Schedule S' to be view equivalent? (Select all that apply)
A. They must share the same initial reads (if T_i reads initial value in S, it must do so in S')
B. They must share the exact same read-from relation (if T_i reads value written by T_j in S, it must do so in S')
C. They must share the same final write operations (if T_i performs final write on Q in S, it must do so in S')
D. They must share the exact same transaction commit sequence and timestamps

**Answer:** A, B, C
**Explanation:** View equivalence is defined by three conditions: initial reads (A), read-from dependencies (B), and final writes (C). Commit sequence and timestamp order (D) do not dictate view equivalence.

---

**Question 24**
Which of the following statements about Recoverable schedules are correct? (Select all that apply)
A. They prevent dirty commits (a transaction committing after reading dirty data that might abort)
B. They require the writer transaction Ti to commit before the reading transaction Tj commits
C. They can still exhibit cascading rollbacks
D. They are always cascadeless schedules

**Answer:** A, B, C
**Explanation:** Recoverable schedules prevent dirty commits by forcing the writer Ti to commit before reader Tj (A, B). However, since dirty reads can still occur, an abort can propagate, leading to cascading rollbacks (C). Thus, not all recoverable schedules are cascadeless (D).

---

**Question 25**
Which properties describe a Cascadeless schedule? (Select all that apply)
A. It prevents cascading rollbacks entirely
B. It is always a subset of recoverable schedules
C. It allows transactions to perform dirty reads on uncommitted data
D. It requires the writing transaction to commit before its written data can be read by other transactions

**Answer:** A, B, D
**Explanation:** Cascadeless schedules eliminate cascade rollbacks (A) by forbidding dirty reads (C). All cascadeless schedules are recoverable (B), and they require a write to commit before any other transaction is allowed to read that item (D).

---

**Question 26**
In a transaction schedule, precedence graph edges Ti → Tj are created by which conflicting executions on a shared data item? (Select all that apply)
A. Read-Write (Ti reads before Tj writes)
B. Write-Read (Ti writes before Tj reads)
C. Write-Write (Ti writes before Tj writes)
D. Read-Read (Ti reads before Tj reads)

**Answer:** A, B, C
**Explanation:** An edge Ti -> Tj is drawn if Ti executes a conflicting instruction prior to Tj's conflicting instruction on the same data item. This occurs for Read-Write (A), Write-Read (B), and Write-Write (C). Read-Read (D) does not conflict.

---

**Question 27**
Which statements about Serializable schedules are correct? (Select all that apply)
A. They are functionally equivalent to some serial execute order of the same transactions
B. They are guaranteed to preserve overall database consistency
C. They require only a single active transaction to run at any given time
D. They allow multiple transactions to execute concurrently for better system throughput

**Answer:** A, B, D
**Explanation:** Serializability ensures concurrent schedules yield the same state as a serial run, preserving consistency (A, B) while permitting high concurrency and throughput (D). They do not require running transactions in isolation (C).

---

**Question 28**
Identify the true statements about View Serializable schedules: (Select all that apply)
A. They include all conflict serializable schedules as a subset
B. They can contain blind writes
C. They are computationally easier to test than conflict serializable schedules
D. Some view serializable schedules are non-conflict serializable

**Answer:** A, B, D
**Explanation:** Conflict serializability is a strict subset of view serializability (A). View serializable schedules allow blind writes (B) which can result in non-conflict serializable patterns (D). Testing view serializability is NP-complete, which is harder than conflict testing (C).

---

**Question 29**
A cycle in the precedence graph of a concurrent schedule implies: (Select all that apply)
A. The schedule is definitely NOT conflict serializable
B. The graph has no valid topological sorting order
C. The schedule is mathematically impossible to be view serializable
D. The schedule is invalid and cannot be executed by the DBMS

**Answer:** A, B
**Explanation:** A cycle in the precedence graph means the schedule cannot be conflict serializable (A) and has no topological sorting (B). However, some schedules with cycles might still be view serializable if they involve blind writes (so C is incorrect). The DBMS can execute such schedules, though lock or timestamp managers usually prevent them to protect consistency (D is incorrect).

---

**Question 30**
Which problems does a Recoverable schedule prevent? (Select all that apply)
A. Dirty commits (when a reader commits before the writer, making rollback of the reader impossible if the writer aborts)
B. Cascading rollbacks
C. Reading uncommitted data
D. Inconsistent/corrupted committed states due to aborted transactions

**Answer:** A, D
**Explanation:** Recoverability prevents dirty commits, ensuring we can safely abort and roll back any uncommitted transactions without violating durability for committed transactions (A, D). It does NOT prevent cascading rollbacks (B) or dirty reads (C).

---

**Question 31**
Under conflict equivalence, which operations can be swapped without changing the schedule's outcome? (Select all that apply)
A. Swapping two conflicting instructions from different transactions
B. Swapping two non-conflicting instructions from different transactions
C. Swapping any two adjacent operations within the same transaction
D. Swapping operations on different data items from different transactions

**Answer:** B, D
**Explanation:** Non-conflicting adjacent operations can be swapped under conflict equivalence (B). This includes operations on different data items (D). Adjacent conflicting instructions (A) or operations within the same transaction (C) cannot be swapped.

---

**Question 32**
When analyzing a schedule for conflict or view serializability, which aspects of a transaction are typically ignored? (Select all that apply)
A. Local calculations and variable assignments in memory
B. Read instructions from disk
C. Write instructions to disk
D. Relational buffer and lock calculations

**Answer:** A, D
**Explanation:** Schedule analysis focuses entirely on read and write sequences from disk blocks. It ignores internal computational transformations (A) as well as buffering/lock calculations (D).

---

**Question 33**
The three primary conditions of view equivalence focus strictly on which elements? (Select all that apply)
A. Initial read operations on any data item
B. Final write operations on any data item
C. The read-from source of any read operation
D. The commit timestamps and commit sequence

**Answer:** A, B, C
**Explanation:** View equivalence conditions are based on initial reads (A), final writes (B), and read-from relations (C). Commit timestamps (D) are irrelevant.

---

**Question 34**
Which of the following are true regarding Topological sorting in serializability analysis? (Select all that apply)
A. It produces a valid equivalent serial execution order
B. It requires a Directed Acyclic Graph (DAG)
C. It can be used to detect whether a schedule is recoverable
D. It utilizes the precedence graph as input

**Answer:** A, B, D
**Explanation:** Topological sorting converts an acyclic precedence graph (DAG) into a serial transaction list (A, B, D). It is not used to evaluate recoverability (C).

---

**Question 35**
If a schedule is recoverable but NOT cascadeless, which of the following are true? (Select all that apply)
A. It is a mathematically possible schedule
B. It allows dirty reads (uncommitted reads)
C. It allows rollback propagation (cascading rollbacks)
D. It guarantees that cascading aborts will never happen

**Answer:** A, B, C
**Explanation:** This is highly possible (A) and occurs when we permit dirty reads (B). Because transactions can read uncommitted data, an abort of the writer forces the rollback of the readers, propagating cascading rollbacks (C). It does not guarantee that aborts will never happen (D).

---

### Section C: Fill-in-the-Blank Questions

**Question 36**
Two instructions from different transactions conflict if they access the same data item and at least one of them is a ________.
**Answer:** write
**Explanation:** A conflict occurs on a shared data item when at least one of the concurrent instructions is a write operation.

---

**Question 37**
A concurrent schedule that is equivalent to some serial schedule is called ________.
**Answer:** serializable
**Explanation:** A schedule is serializable if its final database state is equivalent to a serial execution layout where transactions are executed one after another.

---

**Question 38**
The directed graph used for testing conflict serializability is called a ________ graph.
**Answer:** precedence
**Explanation:** The precedence graph (also known as a serialization graph) is built with transactions as vertices and conflicts as signed edges to test for serializability.

---

**Question 39**
A schedule is conflict serializable if and only if there is no ________ in its precedence graph.
**Answer:** cycle
**Explanation:** A directed cycle in the precedence graph implies inconsistent cross-dependencies, meaning the schedule is not conflict serializable.

---

**Question 40**
Determining whether an arbitrary concurrent schedule is view serializable belongs to the computational complexity class ________.
**Answer:** NP-complete
**Explanation:** Testing for view serializability (which allows blind writes) is classified as NP-complete.

---

**Question 41**
Every conflict serializable schedule is also ________ serializable.
**Answer:** view
**Explanation:** Conflict serializability is a strict subset of view serializability; therefore, any conflict-serializable schedule is view-serializable.

---

**Question 42**
If Tj reads a data value written by Ti, then for the schedule to be recoverable, the commit of Tj must occur after the commit of ________.
**Answer:** Ti
**Explanation:** Recoverability mandates that the writing transaction (Ti) must commit before any dependent reading transaction (Tj) is allowed to commit.

---

**Question 43**
The failure of a single transaction forcing several other uncommitted dependent transactions to roll back is called a ________ rollback.
**Answer:** cascading
**Explanation:** Cascading rollback is a performance hazard where a single transaction failure triggers a chain reaction of rollbacks across other transactions.

---

**Question 44**
Schedules in which transactions are only permitted to read committed data are called ________ schedules.
**Answer:** cascadeless
**Explanation:** Cascadeless schedules prevent cascading rollbacks by ensuring that transactions never perform dirty reads of uncommitted data.

---

**Question 45**
In a precedence graph constructed for serializability analysis, database transactions are represented as ________.
**Answer:** vertices
**Explanation:** Transactions are represented as vertices (nodes), while conflicting operations define directed edges between them.

---

**Question 46**
Topological sorting can be performed only on a directed ________ graph.
**Answer:** acyclic
**Explanation:** Topological sorting requires a Directed Acyclic Graph (DAG) to determine a valid linear sequential operation.

---

**Question 47**
Schedules that contain ________ writes may be view serializable but not conflict serializable.
**Answer:** blind
**Explanation:** Blind writes (operations that write an item without reading it first) allow schedules with cyclic schemas to be view serializable.

---

**Question 48**
Because they do not modify any records, a read(Q) followed by another read(Q) are ________ instructions.
**Answer:** non-conflicting
**Explanation:** Two read operations do not modify the database state, so they never conflict and can be reordered freely.

---

**Question 49**
Conflict serializability is determined solely by analyzing read and ________ operations.
**Answer:** write
**Explanation:** Conflict serializability is analyzed purely on the sequence and ordering of read and write commands.

---

**Question 50**
Because they allow cascading rollbacks, recoverable schedules are ________ than cascadeless schedules.
**Answer:** weaker
**Explanation:** Recoverability is a weaker condition than cascadelessness. Every cascadeless schedule is recoverable, but not all recoverable schedules are cascadeless.
