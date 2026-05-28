### Week 10: Concurrency Control and Deadlock Management

**Question 1**
What is the primary purpose of concurrency control?
A. Reduce storage size
B. Enforce isolation among conflicting transactions
C. Compress database pages
D. Eliminate indexing

**Answer:** B
**Explanation:** The primary goal of concurrency control is to coordinate concurrent execution of transactions to enforce isolation among conflicting transactions and preserve overall database consistency.

---

**Question 2**
Which lock mode allows both read and write operations?
A. Shared lock
B. Read lock
C. Exclusive lock
D. Intent lock

**Answer:** C
**Explanation:** An exclusive lock (X-lock) allows reads and writes and prevents other transactions from accessing the item concurrently.

---

**Question 3**
Which lock mode permits multiple transactions to read the same item simultaneously?
A. Exclusive lock
B. Shared lock
C. Update lock
D. Binary lock

**Answer:** B
**Explanation:** A shared lock (S-lock) is compatible with other shared locks, allowing multiple concurrent reads on the same database block.

---

**Question 4**
Two transactions both holding shared locks on X is:
A. Illegal
B. Deadlock
C. Compatible
D. Serializable violation

**Answer:** C
**Explanation:** Shared locks are compatible with each other, so multiple transactions can read-lock the same data item simultaneously.

---

**Question 5**
Which pair definitely conflicts?
A. S-lock and S-lock
B. Read and Read
C. X-lock and S-lock
D. No operation pair conflicts

**Answer:** C
**Explanation:** An exclusive lock conflicts with any other lock, including a shared lock, because it demands sole access.

---

**Question 6**
In Two-Phase Locking (2PL), the growing phase allows:
A. Only unlocks
B. Only commits
C. Acquiring locks only
D. Rollbacks only

**Answer:** C
**Explanation:** In the growing phase of 2PL, a transaction can only obtain/acquire locks and cannot release any locks.

---

**Question 7**
In the shrinking phase of 2PL:
A. New locks can be acquired
B. Only unlock operations occur
C. Writes are forbidden
D. Reads are forbidden

**Answer:** B
**Explanation:** In the shrinking phase of 2PL, locks can only be released (unlocked) and no new locks can be acquired under any circumstances.

---

**Question 8**
Which protocol guarantees conflict serializability?
A. FIFO scheduling
B. Two-Phase Locking
C. Random locking
D. Round-robin scheduling

**Answer:** B
**Explanation:** The Two-Phase Locking (2PL) protocol ensures that the precedence graph of any valid schedule produced is acyclic, thereby guaranteeing conflict serializability.

---

**Question 9**
Conservative 2PL prevents deadlock by:
A. Releasing locks early
B. Timestamp ordering
C. Locking all required items before execution
D. Ignoring conflicts

**Answer:** C
**Explanation:** Conservative 2PL avoids deadlocks by requiring each transaction to lock all of its needed data items before beginning execution. If any lock is unavailable, it acquires none and waits.

---

**Question 10**
Strict 2PL releases locks:
A. Before writes
B. During growing phase
C. After transaction commits/aborts
D. Immediately after reads

**Answer:** C
**Explanation:** Strict 2PL holds all of its exclusive (write) locks until the transaction is fully finished (committed or aborted) to prevent cascading rollbacks.

---

**Question 11**
Deadlock occurs when:
A. Transactions commit together
B. Transactions cyclically wait for each other
C. Only reads occur
D. Shared locks are used

**Answer:** B
**Explanation:** A deadlock represents a circular loop of wait dependencies where two or more transactions indefinitely wait for each other to release locks.

---

**Question 12**
Which graph is used for deadlock detection?
A. B+ tree
B. ER graph
C. Wait-for graph
D. Dependency tree

**Answer:** C
**Explanation:** In a wait-for graph, nodes represent transactions, and directed edges represent wait relationships, used specifically to detect deadlocks.

---

**Question 13**
A cycle in a wait-for graph indicates:
A. Serializability
B. Deadlock
C. Recovery
D. Replication

**Answer:** B
**Explanation:** A directed cycle in a wait-for graph is the definitive mathematical model indicating a deadlock state.

---

**Question 14**
Which deadlock prevention scheme is non-preemptive?
A. Wound-wait
B. Wait-die
C. Timeout
D. Strict 2PL

**Answer:** B
**Explanation:** The wait-die scheme is a non-preemptive deadlock prevention scheme where younger transactions abort and roll back ("die") instead of preempting older ones.

---

**Question 15**
In wait-die scheme:
A. Younger waits for older
B. Older waits for younger
C. Everyone waits
D. Nobody rolls back

**Answer:** B
**Explanation:** In wait-die, if transaction Ti requests a resource held by Tj: Ti waits if and only if TS(Ti) < TS(Tj) (Ti is older than Tj). If Ti is younger than Tj (TS(Ti) > TS(Tj)), Ti dies/rolls back. So older waits for younger, while younger dies.

---

**Question 16**
In wound-wait scheme:
A. Older transaction aborts
B. Younger transaction wounds older
C. Older transaction forces rollback of younger
D. Deadlocks are allowed

**Answer:** C
**Explanation:** Wound-wait is preemptive. If an older transaction requests a resource held by a younger transaction, the older transaction "wounds" the younger transaction, forcing it to roll back and release the resource.

---

**Question 17**
Starvation means:
A. Transaction never starts
B. Transaction repeatedly waits/rolls back indefinitely
C. Database crash
D. Buffer overflow

**Answer:** B
**Explanation:** Starvation is the indefinite nesting where a transaction is continuously delayed/aborted because other transactions are repeatedly prioritized over it.

---

**Question 18**
Timestamp ordering protocol serializes transactions based on:
A. Lock order
B. Arrival timestamps
C. File size
D. Page numbers

**Answer:** B
**Explanation:** Under the timestamp ordering protocol, transaction serialization order is decided in advance using unique arrival timestamps assigned to each transaction at startup.

---

**Question 19**
W-timestamp(Q) represents:
A. Oldest read timestamp
B. Latest successful write timestamp on Q
C. Earliest write timestamp
D. Latest commit timestamp

**Answer:** B
**Explanation:** W-timestamp(Q) records the largest timestamp value of any transaction that successfully executed a write(Q) operation.

---

**Question 20**
R-timestamp(Q) stores:
A. Latest successful read timestamp on Q
B. Oldest read timestamp
C. Number of reads
D. Rollback count

**Answer:** A
**Explanation:** R-timestamp(Q) records the largest timestamp value of any transaction that successfully executed a read(Q) operation.

---

**Question 21**
Timestamp ordering protocol is:
A. Deadlock-prone
B. Deadlock-free
C. Based on locks only
D. Cascadeless always

**Answer:** B
**Explanation:** Because transaction scheduling relies on comparisons of assigned timestamps rather than wait states, cycles and deadlocks are completely eliminated.

---

**Question 22**
If TS(Ti) < W-timestamp(Q), then write(Q) in basic timestamp ordering:
A. Is accepted
B. Is delayed
C. Causes rollback of Ti
D. Is ignored automatically

**Answer:** C
**Explanation:** If TS(Ti) is less than W-timestamp(Q), it has attempted to write an obsolete value. Under basic timestamp ordering, the transaction Ti is aborted and rolled back.

---

**Question 23**
Thomas’ Write Rule modifies:
A. 2PL
B. Strict scheduling
C. Timestamp ordering
D. Deadlock graph

**Answer:** C
**Explanation:** Thomas' Write Rule is an optimization designed specifically for the timestamp ordering protocol.

---

**Question 24**
Thomas’ Write Rule ignores:
A. All reads
B. Obsolete writes
C. Shared locks
D. Commits

**Answer:** B
**Explanation:** Instead of rolling back transactional operations that violate the write order, Thomas' Write Rule simply ignores the obsolete write because it would be overwritten anyway.

---

**Question 25**
Which protocol may not guarantee recoverable schedules?
A. Timestamp ordering
B. Strict 2PL
C. Conservative 2PL
D. Shared locking

**Answer:** A
**Explanation:** Basic timestamp ordering executes writes without waiting for commits, allowing dirty reads. Unless special safeguards are implemented, non-recoverable schedules can occur.

---

### Section B: Multiple-Select Questions

**Question 26**
Which of the following are goals of concurrency control? (Select all that apply)
A. Preserve consistency
B. Resolve read-write conflicts
C. Reduce RAM size
D. Enforce isolation

**Answer:** A, B, D
**Explanation:** Concurrency control guarantees correct multi-user interaction by preserving consistency (A), resolving read-write and write-write conflicts (B), and enforcing proper isolation levels (D).

---

**Question 27**
Which statements about shared locks are true? (Select all that apply)
A. Multiple transactions may hold them simultaneously
B. Writes are allowed with shared lock
C. Shared locks are for reading
D. Exclusive lock cannot coexist with shared lock

**Answer:** A, C, D
**Explanation:** Shared locks are for read-only actions (C) and are fully compatible with each other, enabling multiple concurrent readers (A), but they strictly conflict with exclusive write locks (D).

---

**Question 28**
Which are characteristics of exclusive locks? (Select all that apply)
A. Allow writes
B. Allow concurrent shared locks
C. Only one X-lock can exist
D. Allow reads and writes

**Answer:** A, C, D
**Explanation:** Exclusive locks allow both reading and writing (A, D). They are mutually exclusive, meaning no other transaction can hold any lock on that item concurrently, so only one can exist at a time (C).

---

**Question 29**
Which operations conflict? (Select all that apply)
A. read(Q), write(Q)
B. write(Q), read(Q)
C. write(Q), write(Q)
D. read(Q), read(Q)

**Answer:** A, B, C
**Explanation:** Conflict occurs between two operations from different transactions if and only if they target the same data item and at least one is a write (A, B, C). Two read operations do not conflict (D).

---

**Question 30**
Which are phases of 2PL? (Select all that apply)
A. Growing phase
B. Shrinking phase
C. Commit phase
D. Recovery phase

**Answer:** A, B
**Explanation:** Two-Phase Locking separates lock management into two distinct phases: a growing phase where locks are acquired (A), and a shrinking phase where locks are released (B).

---

**Question 31**
Which statements about strict 2PL are true? (Select all that apply)
A. Locks released after commit/abort
B. Most commonly used 2PL variant
C. Prevents deadlocks completely
D. Supports recoverability better than basic 2PL

**Answer:** A, B, D
**Explanation:** Strict Two-Phase Locking prevents cascading aborts by holding all write locks until transaction completion (A), which ensures recoverability (D), and is widely used (B). It does not prevent deadlocks (C).

---

**Question 32**
Which situations may cause bucket starvation-like transaction starvation? (Select all that apply)
A. Continuous rollback of same transaction
B. Infinite granting of S-locks to others
C. Deadlock cycle
D. Power failure

**Answer:** A, B
**Explanation:** Starvation is triggered when a transaction is repeatedly chosen as a deadlock victim (A) or when newer read requests continuously skip ahead of an exclusive lock request (B).

---

**Question 33**
Which are deadlock prevention techniques? (Select all that apply)
A. Wait-die
B. Wound-wait
C. Timeout
D. Checkpointing

**Answer:** A, B, C
**Explanation:** Wait-die (A), wound-wait (B), and timeout-based thresholds (C) are standard techniques used to prevent, avoid, or handle deadlocks. Checkpointing is for recovery, not deadlock prevention.

---

**Question 34**
Which are properties of wait-die? (Select all that apply)
A. Older waits for younger
B. Younger rolls back for older
C. Preemptive
D. Non-preemptive

**Answer:** A, B, D
**Explanation:** Wait-die is non-preemptive (D). Older transactions are permitted to wait for younger ones (A), but younger transactions roll back ("die") on conflict (B).

---

**Question 35**
Which are properties of wound-wait? (Select all that apply)
A. Older wounds younger
B. Younger may wait for older
C. Preemptive
D. Older always waits

**Answer:** A, B, C
**Explanation:** Wound-wait is a preemptive scheme (C). Older transactions preempt or "wound" younger ones to seize resources (A), whereas younger transactions wait for older ones (B).

---

**Question 36**
Which are true regarding timestamp ordering? (Select all that apply)
A. Uses transaction timestamps
B. Guarantees serializability
C. Transactions wait for locks
D. Deadlock-free

**Answer:** A, B, D
**Explanation:** Timestamp ordering assigns chronological timestamps to coordinate transactions (A) and guarantees conflict serializability (B). Because transactions update immediately or rollback instead of blocking, deadlocks are avoided entirely (D).

---

**Question 37**
Which timestamp checks may cause rollback? (Select all that apply)
A. TS(Ti) <= W-timestamp(Q) during read
B. TS(Ti) < R-timestamp(Q) during write
C. TS(Ti) < W-timestamp(Q) during write
D. TS(Ti) > R-timestamp(Q) during read

**Answer:** A, B, C
**Explanation:** Read fails if the item was written by a younger transaction (A). Write fails if a younger transaction has already read (B) or written (C) the item.

---

**Question 38**
Which are advantages of timeout deadlock prevention? (Select all that apply)
A. Simple implementation
B. Impossible starvation
C. Deadlocks avoided
D. Easy timeout selection always

**Answer:** A, C
**Explanation:** Timeout schemes are exceptionally clean and simple to implement (A) and deadlocks are avoided by aborting stagnant requests (C), but choosing the optimal timeout limit can be difficult and starvation can happen.

---

**Question 39**
Which are true about wait-for graphs? (Select all that apply)
A. Vertices represent transactions
B. Edges represent waiting dependencies
C. Cycles imply deadlock
D. Used for indexing

**Answer:** A, B, C
**Explanation:** Wait-for graphs map circular dependencies amongst transactions. Vertices represent transactions (A) and edges represent dependencies (B). If a directed cycle is found, a deadlock is present (C).

---

**Question 40**
Which protocols may involve transaction rollback? (Select all that apply)
A. Wait-die
B. Wound-wait
C. Timestamp ordering
D. Thomas’ Write Rule

**Answer:** A, B, C
**Explanation:** Wait-die, wound-wait, and standard timestamp ordering all roll back transactions on conflict (A, B, C). Thomas' Write Rule avoids rollback of obsolete writes by simply ignoring operations (D).

---

### Section C: Fill-in-the-Blank Questions

**Question 41**
A lock that permits only reading is called a ________ lock.
**Answer:** shared
**Explanation:** A shared lock allows a transaction to read but not update a data item.

---

**Question 42**
A lock that allows both read and write is called an ________ lock.
**Answer:** exclusive
**Explanation:** An exclusive lock guarantees sole write and read access to a data item.

---

**Question 43**
In 2PL, acquiring locks occurs during the ________ phase.
**Answer:** growing
**Explanation:** In Two-Phase Locking, the growing phase allows acquiring new locks but not releasing any.

---

**Question 44**
Releasing locks occurs during the ________ phase.
**Answer:** shrinking
**Explanation:** During the shrinking phase of Two-Phase Locking, a transaction can only release existing locks and cannot obtain new ones.

---

**Question 45**
A cyclic waiting condition among transactions is called a ________.
**Answer:** deadlock
**Explanation:** A deadlock arises when transactions have cyclic wait dependencies, trapping them in an perpetual wait state.

---

**Question 46**
The graph used for deadlock detection is called a ________ graph.
**Answer:** wait-for
**Explanation:** A wait-for graph is used where vertices correspond to transactions and edges indicate waiting dependencies.

---

**Question 47**
Conservative 2PL prevents deadlock by locking all required data items before ________ begins.
**Answer:** execution
**Explanation:** Conservative Two-Phase Locking prevents deadlock by requiring a transaction to lock all desired items before execution starts.

---

**Question 48**
In timestamp ordering, ________-timestamp(Q) stores the latest successful write timestamp.
**Answer:** W
**Explanation:** W-timestamp(Q) stores the largest/youngest timestamp value of any transaction that successfully executed write(Q).

---

**Question 49**
Thomas’ Write Rule ignores obsolete ________ operations.
**Answer:** write
**Explanation:** Thomas' Write Rule ignores obsolete write operations rather than aborting the transaction.

---

**Question 50**
Timestamp ordering protocols are free from ________ because transactions never wait.
**Answer:** deadlock
**Explanation:** Timestamp ordering protocols are free from deadlock because transactions are either immediately allowed or rolled back instead of waiting.
