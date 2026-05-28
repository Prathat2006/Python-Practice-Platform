### Week 9: Concurrency Control and Locking Protocols

**Question 1**
What is the primary purpose of concurrency control?
A. Reduce storage space
B. Enforce isolation among conflicting transactions
C. Increase redundancy
D. Eliminate indexes

**Answer:** B
**Explanation:** The primary goal of concurrency control is to coordinate concurrent execution of transactions, ensuring database isolation (from ACID properties) and protecting overall consistency when multiple transactions execute concurrently.

---

**Question 2**
Which lock mode allows both reading and writing?
A. Shared lock
B. Read lock
C. Exclusive lock
D. Intent lock

**Answer:** C
**Explanation:** An exclusive lock (X-lock) allows both reading and writing (updating) on the locked data item, ensuring that no other transactions can modify or read the data concurrently.

---

**Question 3**
Multiple transactions can simultaneously hold which type of lock on the same data item?
A. Exclusive lock
B. Shared lock
C. Update lock
D. Binary lock

**Answer:** B
**Explanation:** Shared locks (S-locks) are compatible with other shared locks. Multiple transactions can simultaneously hold shared locks to read the same data item.

---

**Question 4**
Which operation is NOT allowed when a transaction already holds an X-lock on item X?
A. Another X-lock on X
B. Read by same transaction
C. Write by same transaction
D. Unlock operation

**Answer:** A
**Explanation:** An exclusive lock (X-lock) creates a strict exclusive state. No other transaction can be granted any lock (including another X-lock) on that same data item until the current lock is released.

---

**Question 5**
In Two-Phase Locking (2PL), the phase where locks are acquired is called:
A. Shrinking phase
B. Serial phase
C. Growing phase
D. Waiting phase

**Answer:** C
**Explanation:** During the growing phase of 2PL, a transaction can acquire locks but cannot release any. Once a lock is released, the transaction enters the shrinking phase.

---

**Question 6**
During the shrinking phase of 2PL:
A. New locks can be acquired
B. Locks are released
C. Transactions commit automatically
D. Only shared locks are allowed

**Answer:** B
**Explanation:** In the shrinking phase of 2PL, a transaction is only permitted to release locks and is strictly forbidden from acquiring any new locks.

---

**Question 7**
Which property is guaranteed by Two-Phase Locking?
A. View serializability
B. Conflict serializability
C. Recoverability only
D. Cascadelessness only

**Answer:** B
**Explanation:** Basic Two-Phase Locking (2PL) guarantees conflict serializability because its locking rules prevent any cycles from forming in the precedence graph.

---

**Question 8**
Which locking protocol prevents deadlocks by locking all needed items before execution begins?
A. Strict 2PL
B. Basic 2PL
C. Conservative 2PL
D. Timestamp ordering

**Answer:** C
**Explanation:** Conservative 2PL (or static 2PL) requires a transaction to acquire all its needed locks before starting its execution. If any needed lock is unavailable, the transaction holds no locks and waits, preventing deadlocks entirely.

---

**Question 9**
In Strict Two-Phase Locking, locks are released:
A. Immediately after use
B. Before write operation
C. After transaction commits/aborts
D. During growing phase

**Answer:** C
**Explanation:** Strict 2PL requires all exclusive locks (X-locks) to be held until the transaction commits or aborts. Rigorous 2PL requires all locks (both S and X) to be held until commit/abort.

---

**Question 10**
Deadlock occurs when:
A. Two transactions commit together
B. Transactions wait indefinitely for each other
C. A transaction aborts
D. Shared locks are used

**Answer:** B
**Explanation:** A deadlock is a state where each transaction in a set is waiting for an item held by another transaction in that set, resulting in an indefinite wait.

---

**Question 11**
A wait-for graph contains:
A. Data items as vertices
B. Locks as vertices
C. Transactions as vertices
D. Buffers as vertices

**Answer:** C
**Explanation:** In a wait-for graph (WFG) used for deadlock detection, transactions represent the vertices (nodes), and directed edges indicate waiting dependencies.

---

**Question 12**
A cycle in a wait-for graph indicates:
A. Recoverability
B. Deadlock
C. Serializability
D. Cascading rollback

**Answer:** B
**Explanation:** A directed cycle in the wait-for graph indicates that there is a circular waiting dependency among transactions, meaning a deadlock exists.

---

**Question 13**
Which deadlock prevention scheme is non-preemptive?
A. Wound-wait
B. Wait-die
C. Timeout scheme
D. Strict 2PL

**Answer:** B
**Explanation:** The wait-die scheme is a non-preemptive scheme where an older transaction is allowed to wait, and a younger transaction simply dies (aborts and restarts with its original timestamp), preventing younger transactions from preempting older ones.

---

**Question 14**
In the wait-die scheme:
A. Younger waits for older
B. Older waits for younger
C. Both always wait
D. Both always rollback

**Answer:** B
**Explanation:** In wait-die, if Ti requests a resource held by Tj: if Ti is older than Tj (TS(Ti) < TS(Tj)), then Ti is allowed to wait. If Ti is younger (TS(Ti) > TS(Tj)), Ti dies (rolls back).

---

**Question 15**
In wound-wait scheme:
A. Younger transaction wounds older
B. Older transaction forces rollback of younger
C. Transactions never rollback
D. Younger always waits

**Answer:** B
**Explanation:** Wound-wait is a preemptive scheme. If an older transaction Ti requests a resource held by a younger transaction Tj, Ti "wounds" Tj (forces Tj to abort and roll back).

---

**Question 16**
Timestamp ordering protocol guarantees:
A. Deadlock possibility
B. Freedom from deadlock
C. View serializability only
D. No rollbacks

**Answer:** B
**Explanation:** The Timestamp Ordering (TO) protocol decides transaction serialization order before execution using unique timestamps. Because transactions are rolled back if they violate this order instead of waiting, the TO protocol is completely free from deadlocks.

---

**Question 17**
W-timestamp(Q) represents:
A. Smallest timestamp writing Q
B. Largest timestamp reading Q
C. Largest timestamp writing Q
D. Commit time of Q

**Answer:** C
**Explanation:** W-timestamp(Q) stores the largest/youngest timestamp value of any transaction that successfully executed a write(Q) operation.

---

**Question 18**
R-timestamp(Q) represents:
A. Largest timestamp reading Q
B. Smallest timestamp writing Q
C. Abort timestamp
D. Commit timestamp

**Answer:** A
**Explanation:** R-timestamp(Q) stores the largest/youngest timestamp value of any transaction that successfully executed a read(Q) operation.

---

**Question 19**
In timestamp ordering, a transaction Ti is rolled back on read(Q) if:
A. TS(Ti) > R-timestamp(Q)
B. TS(Ti) ≤ W-timestamp(Q)
C. TS(Ti) = R-timestamp(Q)
D. TS(Ti) < R-timestamp(Q)

**Answer:** B
**Explanation:** If Ti issues read(Q) but TS(Ti) < W-timestamp(Q), it is trying to read a value that has already been overwritten by a younger transaction (which should have happened *after* Ti in serial order). Thus, the read is rejected and Ti rolls back.

---

**Question 20**
Thomas’ Write Rule allows:
A. Ignoring obsolete writes
B. Ignoring obsolete reads
C. Ignoring commits
D. Ignoring rollbacks

**Answer:** A
**Explanation:** Thomas' Write Rule is an optimization of the basic timestamp ordering protocol. If a transaction Ti issues write(Q) but TS(Ti) < W-timestamp(Q), instead of rolling back Ti, the system simply ignores the "obsolete" write since it would be overwritten anyway.

---

### Section B: Multiple-Select Questions

**Question 21**
Which of the following are goals of concurrency control? (Select all that apply)
A. Preserve consistency
B. Resolve read-write conflicts
C. Increase redundancy
D. Enforce isolation

**Answer:** A, B, D
**Explanation:** Concurrency control aims to preserve database integrity and consistency (A), manage conflicting operations such as read-write or write-write (B), and enforce proper isolation (D). It does not mean to increase redundancy (C).

---

**Question 22**
Shared lock permits: (Select all that apply)
A. Reading data
B. Writing data
C. Multiple readers
D. Concurrent writers

**Answer:** A, C
**Explanation:** A Shared lock (S-lock) allows transactions to read data items (A) and is compatible with other S-locks, enabling multiple readers (C). It does not permit writing (B) or concurrent writing (D).

---

**Question 23**
Exclusive lock permits: (Select all that apply)
A. Reading
B. Writing
C. Multiple writers
D. Shared access by others

**Answer:** A, B
**Explanation:** An Exclusive lock (X-lock) permits both reading (A) and writing (B) of a data item. Because it is exclusive, no other transaction can hold any lock on the same item, meaning multiple writers (C) and shared access (D) are strictly blocked.

---

**Question 24**
Which are true about Two-Phase Locking? (Select all that apply)
A. Has growing phase
B. Has shrinking phase
C. Guarantees conflict serializability
D. Prevents all deadlocks automatically

**Answer:** A, B, C
**Explanation:** Standard 2PL consists of a growing phase (A) and a shrinking phase (B). It is mathematically proven to guarantee conflict serializable schedules (C). However, simple 2PL does not prevent deadlocks (D); specialized variants or deadlock detection are needed.

---

**Question 25**
Which locking protocols are variations of 2PL? (Select all that apply)
A. Basic 2PL
B. Conservative 2PL
C. Strict 2PL
D. Thomas Write Rule

**Answer:** A, B, C
**Explanation:** Basic, Conservative, and Strict 2PL are all standard variants of the Two-Phase Locking protocol (A, B, C). Thomas Write Rule (D) is a timestamp-ordering protocol modification, not a locking variant.

---

**Question 26**
Which situations may cause starvation? (Select all that apply)
A. Repeated rollback of same transaction
B. Endless granting of S-locks while X-lock waits
C. Immediate commits
D. Deadlock victim repeatedly chosen

**Answer:** A, B, D
**Explanation:** Starvation happens when a transaction is indefinitely postponed. It can be caused by repeatedly choosing the same transaction as a rollback victim (A, D), or by constantly granting new shared locks to readers while an exclusive lock request is waiting in line (B).

---

**Question 27**
Which are deadlock prevention techniques? (Select all that apply)
A. Wait-die
B. Wound-wait
C. Timeout scheme
D. Precedence graph

**Answer:** A, B, C
**Explanation:** Wait-die (A), wound-wait (B), and timeouts (C) are methods to prevent, avoid, or handle deadlocks. A precedence graph (D) is used for testing conflict serializability, not for preventing deadlocks.

---

**Question 28**
Which statements about wait-die are true? (Select all that apply)
A. Older transaction may wait
B. Younger transaction rolls back
C. It is preemptive
D. Starvation avoided using original timestamp

**Answer:** A, B, D
**Explanation:** In wait-die, if an older transaction requests an item held by a younger one, it is allowed to wait (A). If a younger transaction requests an item held by an older one, it rolls back ("dies") (B). It is non-preemptive (C is false). When restarted, the transaction keeps its original timestamp to prevent starvation (D).

---

**Question 29**
Which statements about wound-wait are correct? (Select all that apply)
A. Older transaction wounds younger
B. Younger may wait
C. It is non-preemptive
D. May have fewer rollbacks than wait-die

**Answer:** A, B, D
**Explanation:** Wound-wait is a preemptive scheme where older transactions wound younger ones to seize resources (A). Younger transactions are allowed to wait for older ones (B). Because younger transactions are only preempted when an older one actually needs their resource, it generally causes fewer rollbacks than wait-die (D). It is preemptive (C is false).

---

**Question 30**
Timestamp ordering protocol: (Select all that apply)
A. Uses timestamps for serialization order
B. Avoids deadlocks
C. Uses locks
D. May not be recoverable

**Answer:** A, B, D
**Explanation:** Timestamp ordering schedules transactions based on unique timestamps (A). Since transactions block/rollback instead of waiting, deadlock is avoided (B). It does not use locks (C is incorrect). It can produce nonrecoverable schedules unless enhanced with commit dependencies (D).

---

**Question 31**
Which can happen in timestamp ordering? (Select all that apply)
A. Rollbacks
B. Cascading rollbacks
C. Deadlocks
D. Nonrecoverable schedules

**Answer:** A, B, D
**Explanation:** Since the basic timestamp ordering protocol doesn't require locking, deadlocks are impossible (C falls). However, transactions might still be rolled back (A) which can trigger cascading rollbacks (B), and schedules may be nonrecoverable unless strict rules are added (D).

---

**Question 32**
Thomas’ Write Rule: (Select all that apply)
A. Modifies timestamp ordering
B. Ignores obsolete writes
C. Eliminates timestamps
D. Reduces unnecessary rollbacks

**Answer:** A, B, D
**Explanation:** Thomas' Write Rule is an optimization of the standard timestamp-ordering concurrency control protocol (A) that ignores obsolete writes instead of rolling them back (B, D). It still relies on transaction timestamps (C is incorrect).

---

**Question 33**
Which are components of wait-for graph? (Select all that apply)
A. Transactions as nodes
B. Directed edges
C. Data blocks as nodes
D. Waiting dependency edges

**Answer:** A, B, D
**Explanation:** A wait-for graph (WFG) consists of transactions as vertices/nodes (A) and directed edges (B) representing waiting dependencies (Ti -> Tj means Ti is waiting for Tj to release a lock) (D). It does not contain data blocks as nodes (C).

---

**Question 34**
Which actions may occur during deadlock recovery? (Select all that apply)
A. Rollback victim transaction
B. Partial rollback
C. Total rollback
D. Commit all transactions

**Answer:** A, B, C
**Explanation:** When a deadlock is detected, the database recovery manager selects a victim transaction (A) and performs either a partial rollback (B) or a total rollback (C). Commit all transactions (D) is impossible because they are stuck in a circular block.

---

**Question 35**
Which are true for strict 2PL? (Select all that apply)
A. Locks held till commit/abort
B. Prevents cascading rollbacks
C. Guarantees conflict serializability
D. Eliminates need for locks

**Answer:** A, B, C
**Explanation:** Strict 2PL holds all exclusive locks until the transaction commits/aborts (A). Keeping these locks prevents uncommitted data from being read, which prevents cascading rollbacks (B). It also guarantees conflict serializable schedules (C). It heavily relies on locks (D is incorrect).

---

### Section C: Fill-in-the-Blank Questions

**Question 36**
A lock that allows only reading is called a ________ lock.
**Answer:** shared
**Explanation:** A shared lock (or read lock) allows a transaction to read but not update a data item.

---

**Question 37**
A lock that allows reading and writing is called an ________ lock.
**Answer:** exclusive
**Explanation:** An exclusive lock (or write lock) guarantees sole access to write and read a data block.

---

**Question 38**
In Two-Phase Locking, acquiring locks occurs during the ________ phase.
**Answer:** growing
**Explanation:** In the growing phase, a transaction is permitted to acquire new locks but cannot release any.

---

**Question 39**
Releasing locks occurs during the ________ phase.
**Answer:** shrinking
**Explanation:** During the shrinking phase, a transaction can only release existing locks and cannot obtain new ones.

---

**Question 40**
A situation where transactions wait forever for each other is called ________.
**Answer:** deadlock
**Explanation:** A deadlock arises when transactions have cyclic wait dependencies, trapping them in an perpetual wait state.

---

**Question 41**
A cycle in a wait-for graph indicates a ________.
**Answer:** deadlock
**Explanation:** A directed cycle in a wait-for graph is the definitive mathematical representation of a deadlock.

---

**Question 42**
Conservative 2PL prevents deadlocks by locking all data items before ________ begins.
**Answer:** execution
**Explanation:** Conservative 2PL forces transactions to acquire all needed locks at start-up, preventing deadlocks by removing the hold-and-wait condition.

---

**Question 43**
In wait-die scheme, younger transactions are ________ back.
**Answer:** rolled
**Explanation:** In wait-die, if a younger transaction requests a resource held by an older one, it is killed/rolled back.

---

**Question 44**
In wound-wait scheme, older transactions may force ________ of younger transactions.
**Answer:** rollback
**Explanation:** In wound-wait, an older transaction wounds (preempts and forces a rollback of) a younger transaction holding the required lock.

---

**Question 45**
Timestamp ordering protocol serializes transactions using ________.
**Answer:** timestamps
**Explanation:** Timestamp ordering executes transactions in accordance with their assigned transaction start-up timestamps.

---

**Question 46**
The largest timestamp of successful write(Q) is stored in ________-timestamp(Q).
**Answer:** W
**Explanation:** W-timestamp(Q) stores the largest/youngest timestamp of any transaction that wrote to data block Q.

---

**Question 47**
The largest timestamp of successful read(Q) is stored in ________-timestamp(Q).
**Answer:** R
**Explanation:** R-timestamp(Q) stores the largest/youngest timestamp of any transaction that read from data block Q.

---

**Question 48**
Timestamp ordering protocol is free from ________.
**Answer:** deadlock
**Explanation:** Because transactions in TO are immediately rolled back on conflicting violations instead of waiting, the TO protocol is free from deadlock.

---

**Question 49**
Thomas’ Write Rule ignores obsolete ________ operations.
**Answer:** write
**Explanation:** Thomas' Write Rule discards outdated write operations that would be completely overwritten by subsequent writes, avoiding costly rollbacks.

---

**Question 50**
In strict 2PL, unlocking happens only after transaction ________ or aborts.
**Answer:** commits
**Explanation:** Strict Two-Phase Locking enforces that locks be held until the transaction fully commits or aborts to guarantee recoverability and block cascade aborts.
