### Week 11: Database Recovery System

**Question 1**
What is the primary purpose of database recovery?
A. Increase query speed
B. Reduce storage size
C. Restore database to a consistent state after failure
D. Remove duplicate tuples

**Answer:** C
**Explanation:** The primary goal of database recovery is to restore the database to a consistent state after a system failure, safeguarding transaction durability and overall system correctness.

---

**Question 2**
Which ACID property is mainly supported by recovery mechanisms?
A. Isolation
B. Atomicity and Durability
C. Consistency only
D. Availability

**Answer:** B
**Explanation:** Recovery mechanisms primarily ensure Atomicity (by rolling back uncommitted/aborted transactions) and Durability (by making sure committed transaction effects survive failures).

---

**Question 3**
A transaction transfers ₹500 from A to B. System crashes after deducting from A but before adding to B. This violates:
A. Isolation
B. Durability
C. Atomicity
D. View serializability

**Answer:** C
**Explanation:** Atomicity dictates that either all actions of a transaction execute fully, or none do. A crash in the middle violates this "all-or-nothing" rule.

---

**Question 4**
Which of the following is a media failure?
A. Deadlock
B. RAM failure
C. Disk head crash
D. Incorrect input

**Answer:** C
**Explanation:** Media failure refers to damage to persistent non-volatile storage, such as a physical head crash or bad sectors on a hard drive.

---

**Question 5**
Which recovery mechanism maintains a sequence of log records?
A. Shadow paging
B. Log-based recovery
C. Hash indexing
D. Lock manager

**Answer:** B
**Explanation:** Log-based recovery coordinates all transaction operations by registering them in sequential logs stored on stable storage.

---

**Question 6**
The log record `<Ti start>` indicates:
A. Transaction abort
B. Checkpoint creation
C. Beginning of transaction Ti
D. End of recovery

**Answer:** C
**Explanation:** The log record `<Ti start>` specifies the exact moment when transaction Ti begins its execution cycle.

---

**Question 7**
Before executing `write(X)`, the log stores:
A. Only new value
B. Only old value
C. Old and new values
D. Transaction timestamp only

**Answer:** C
**Explanation:** For complete support of undo/redo, the log record for writing item X must record both the previous (old) value and the subsequent (new) value.

---

**Question 8**
In the log record `<Ti, X, V1, V2>`, V1 represents:
A. New value of X
B. Block number
C. Old value of X
D. Checkpoint ID

**Answer:** C
**Explanation:** In a standard logging tuple `<Ti, X, V1, V2>`, V1 represents the old value (prior to write) and V2 represents the new value (after write).

---

**Question 9**
Immediate database modification allows:
A. Updates only after commit
B. Updates before commit
C. No logging
D. Only redo operations

**Answer:** B
**Explanation:** Immediate modification allows uncommitted updates to be written directly to the physical storage while the transaction is still running (before it commits).

---

**Question 10**
Deferred modification performs actual database updates:
A. Before logging
B. During transaction execution
C. Only after commit
D. After checkpoint only

**Answer:** C
**Explanation:** Deferred modification does not write updates directly to the database disk blocks while the transaction is active; all physical changes are deferred until after the transaction successfully commits.

---

**Question 11**
Which statement is TRUE for Write-Ahead Logging (WAL)?
A. Database is written before log
B. Log must be written before database item
C. Logs are optional
D. Checkpoint occurs before commit

**Answer:** B
**Explanation:** WAL mandates that before a database block can be written/flushed to disk, any log records associated with updates on that block must already reside securely on non-volatile stable storage.

---

**Question 12**
A transaction is considered committed when:
A. Database pages are written to disk
B. Commit log record reaches stable storage
C. Transaction starts execution
D. Checkpoint occurs

**Answer:** B
**Explanation:** The canonical transition to a committed state is defined by the moment when the `<Ti commit>` log record has been successfully written to stable storage.

---

**Question 13**
Which operation restores OLD values?
A. Redo
B. Commit
C. Undo
D. Checkpoint

**Answer:** C
**Explanation:** Undo refers to reverting updates on uncommitted/aborted transactions to the previous, consistent (old) state.

---

**Question 14**
Which operation restores NEW values?
A. Undo
B. Redo
C. Rollback
D. Abort

**Answer:** B
**Explanation:** Redo refers to re-executing updates from committed transactions to ensure their modifications are permanently recorded in the physical database.

---

**Question 15**
Which technique is less commonly used compared to log-based recovery?
A. Undo logging
B. Shadow paging
C. WAL
D. Redo logging

**Answer:** B
**Explanation:** Shadow paging is a hardware/file-system-intensive technique that is less commonly used today in modern commercial databases compared to log-based (WAL) architectures.

---

**Question 16**
Strict Two-Phase Locking helps recovery by:
A. Increasing deadlocks
B. Allowing dirty reads
C. Preventing overwrite of uncommitted data
D. Avoiding logs

**Answer:** C
**Explanation:** Strict 2PL holds exclusive locks until transaction completion, preventing other transactions from executing dirty reads or overwriting uncommitted changes, making recovery and rollbacks significantly simpler.

---

**Question 17**
Which storage is assumed to survive system crashes?
A. Cache memory
B. Main memory
C. Stable storage
D. CPU registers

**Answer:** C
**Explanation:** Stable storage is a theoretical model of storage designed to withstand all hardware, media, and physical failures (usually implemented using redundant media and mirroring).

---

**Question 18**
In deferred modification, recovery generally requires:
A. Undo only
B. Redo only
C. Both undo and redo
D. Neither undo nor redo

**Answer:** B
**Explanation:** Since deferred modification never writes uncommitted values to disk, active/uncommitted transactions do not need to be undone (no undo). Only committed transaction modifications need to be verified or reapplied (redo only).

---

**Question 19**
Immediate modification may require:
A. Redo only
B. Undo only
C. Both undo and redo
D. No recovery action

**Answer:** C
**Explanation:** Since immediate modification can write uncommitted data to disk and might not have written committed data, both undo (for uncommitted transactions) and redo (for committed transactions) are required during recovery.

---

**Question 20**
Which failure is caused by incorrect synchronization?
A. Media failure
B. Transaction failure
C. Disk crash
D. Power disruption

**Answer:** B
**Explanation:** Incorrect synchronization, deadlock, and logical programming bugs are standard causes of internal transaction failures.

---

**Question 21**
What does stable storage mainly ensure?
A. Faster indexing
B. Permanent preservation of logs
C. Deadlock prevention
D. Query optimization

**Answer:** B
**Explanation:** Stable storage guarantees high availability and redundancy to permanently preserve transactional log history and data through failures.

---

**Question 22**
Output of database blocks in immediate modification can occur:
A. Only before commit
B. Only after commit
C. Any time before or after commit
D. Never before checkpoint

**Answer:** C
**Explanation:** Under immediate modification, updated database pages (disk buffer blocks) can be output to persistent disk storage at any time, both before or after the transaction officially commits.

---

**Question 23**
Which recovery operation scans log backward?
A. Redo
B. Undo
C. Commit
D. Checkpoint

**Answer:** B
**Explanation:** Undo processing scans the transaction log backward (from end to start) to rollback active transactions in reverse chronological order.

---

**Question 24**
Which recovery operation scans log forward?
A. Undo
B. Abort
C. Redo
D. Rollback

**Answer:** C
**Explanation:** Redo processing scans the transaction log forward (from start to end) to re-simulate and save the correct updates in chronological order.

---

**Question 25**
Which log record marks successful completion?
A. `<Ti abort>`
B. `<Ti end>`
C. `<Ti commit>`
D. `<checkpoint>`

**Answer:** C
**Explanation:** The official commit log record `<Ti commit>` represents the successful completion of transaction Ti.

---

**Question 26**
Which of the following improves efficiency by postponing disk writes?
A. Frequent flushing
B. Buffering updates
C. Deadlock detection
D. Timestamp ordering

**Answer:** B
**Explanation:** Buffering updates in database memory blocks reduces physical disk I/O, writing back blocks in batches for high throughput.

---

**Question 27**
Which failure type includes OS faults?
A. Media failure
B. Transaction failure
C. System failure
D. Logical failure

**Answer:** C
**Explanation:** System failure includes operating system crashes, hardware lockups, core dumps, or power outages where volatile memory (RAM) is lost but non-volatile disks survive.

---

**Question 28**
A checkpoint mainly helps to:
A. Increase concurrency
B. Reduce recovery time
C. Eliminate logs
D. Prevent deadlocks

**Answer:** B
**Explanation:** A checkpoint flushes all dirty memory buffers to disk, ensuring that log records prior to the checkpoint do not need to be processed during system restarts, highly reducing recovery time.

---

**Question 29**
During redo, the system writes:
A. V1 to X
B. V2 to X
C. NULL to X
D. Initial value to X

**Answer:** B
**Explanation:** Redoing a write(X) operation sets the value of data item X to its recorded new value (V2).

---

**Question 30**
During undo, the system writes:
A. V2 to X
B. Current value to log
C. V1 to X
D. Checkpoint value to X

**Answer:** C
**Explanation:** Undoing a write(X) operation reverts the value of data item X to its saved old value (V1).

---

### Section B: Multiple-Select Questions

**Question 31**
Which are valid failure categories? (Select all that apply)
A. Transaction failure
B. System failure
C. Media failure
D. Query optimization failure

**Answer:** A, B, C
**Explanation:** Main failure categories are Transaction failures (logical errors, deadlocks) (A), System failures (RAM loss, crash) (B), and Media failures (disk damage) (C). Query optimization (D) is an execution technique, not a failure.

---

**Question 32**
Which are advantages of postponed disk writes? (Select all that apply)
A. Faster commits
B. Reduced total writes
C. Immediate consistency checks
D. Batch processing of updates

**Answer:** A, B, D
**Explanation:** Postponing writes to disk buffers yields faster commit cycles (A), heavily lowers disk I/O (B), and leverages batch processing advantages (D). It does not provide immediate physical disk checks (C).

---

**Question 33**
Which information may exist in a log record? (Select all that apply)
A. Transaction ID
B. Old value
C. New value
D. Index height

**Answer:** A, B, C
**Explanation:** Transaction logging includes transaction IDs (A), target elements, previous/old values (B), and subsequent/new values (C). Index heights (D) are structural B+ tree properties, not log attributes.

---

**Question 34**
Which statements about immediate modification are TRUE? (Select all that apply)
A. Uncommitted updates may reach disk
B. WAL is required
C. Recovery may need undo
D. Updates occur only after commit

**Answer:** A, B, C
**Explanation:** Immediate modification permits updating disk buffers before committing (A). Write-Ahead Logging (WAL) is strictly required to enable potential undo recovery if a crash occurs (B, C). Updates are not delayed until after commit (D).

---

**Question 35**
Which statements about deferred modification are TRUE? (Select all that apply)
A. Updates occur after commit
B. Redo may be required
C. Undo generally unnecessary
D. Updates occur before logging

**Answer:** A, B, C
**Explanation:** In deferred modification, updates are written to disk only after a commit is written to logs (A). Redo actions might be needed during recovery (B), but since uncommitted changes are never written to disk, undo operations are never required (C). All updates are logged first (D is false).

---

**Question 36**
Which operations are part of recovery processing? (Select all that apply)
A. Undo
B. Redo
C. Rollback
D. Rehashing

**Answer:** A, B, C
**Explanation:** The recovery unit executes Undo (A), Redo (B), and Rollback (C) procedures. Rehashing (D) is a hash index scaling step.

---

**Question 37**
Which statements are TRUE about checkpoints? (Select all that apply)
A. They reduce recovery work
B. They eliminate logging
C. They store recovery information
D. They improve restart performance

**Answer:** A, C, D
**Explanation:** Checkpoints periodically save memory blocks to disk. This reduces the amount of log records that must be audited during recovery (A, D), and adds stable recovery landmarks (C). They do not eliminate logging (B).

---

**Question 38**
Which are characteristics of Strict 2PL in recovery? (Select all that apply)
A. Holds exclusive locks till commit/abort
B. Prevents dirty reads
C. Allows overwriting uncommitted data
D. Simplifies undo recovery

**Answer:** A, B, D
**Explanation:** Strict 2PL holds write locks until completion (A), ruling out dirty reads (B) and uncommitted write conflicts. This makes undo recoveries and rollbacks extremely straightforward (D).

---

**Question 39**
Which components may be affected by system failure? (Select all that apply)
A. RAM
B. OS
C. CPU execution state
D. Disk platter damage only

**Answer:** A, B, C
**Explanation:** A system failure clears volatile registers and RAM (A), stops runtime OS operations (B), and resets active CPU state (C). Physical disk platter damage (D) represents media failure, not standard system failure.

---

**Question 40**
Which statements regarding WAL are TRUE? (Select all that apply)
A. Log record must reach stable storage first
B. Database page can be written before log
C. Supports recovery
D. Used in immediate modification

**Answer:** A, C, D
**Explanation:** Write-Ahead Logging requires flushing update logs to stable storage prior to flushing changed database sectors (A, C, D). Writing the database page first (B) directly violates WAL principles.

---

### Section C: Fill-in-the-Blank Questions

**Question 41**
Recovery restores the database to the last ________ state.
**Answer:** consistent
**Explanation:** Database recovery aims to restore integrity to the last confirmed consistent structure.

**Question 42**
A sequence of recovery records maintained on stable storage is called a ________.
**Answer:** log
**Explanation:** The log holds all transaction details sequentially to aid database recovery.

**Question 43**
In `<Ti, X, V1, V2>`, V2 represents the ________ value.
**Answer:** new
**Explanation:** V2 corresponds to the subsequent or updated (new) value of the data Block X.

**Question 44**
The recovery operation that restores old values is called ________.
**Answer:** undo
**Explanation:** Undo reverses any unguided or unfinished transaction actions back to their original state.

**Question 45**
The recovery operation that reapplies new values is called ________.
**Answer:** redo
**Explanation:** Redo enforces the correct completed updates on disk.

**Question 46**
In deferred modification, database updates are postponed until ________.
**Answer:** commit
**Explanation:** Deferred modification preserves absolute safety by staying unwritten on database disks until committing.

**Question 47**
WAL stands for Write-________ Logging.
**Answer:** Ahead
**Explanation:** Write-Ahead Logging dictates logging updates prior to saving modifications.

**Question 48**
A transaction reaches commit point when its commit log record reaches ________ storage.
**Answer:** stable
**Explanation:** Commit states undergo final approval when the log entry reaches unalterable stable storage.

**Question 49**
A checkpoint is mainly used to reduce ________ time.
**Answer:** recovery
**Explanation:** Checkpoints decrease reboot/restart durations by eliminating ancient log processing requirements.

**Question 50**
Strict Two-Phase Locking prevents access to ________ updates.
**Answer:** uncommitted
**Explanation:** Strict Two-Phase Locking halts dirty reads or updates, simplifying recoverability.
