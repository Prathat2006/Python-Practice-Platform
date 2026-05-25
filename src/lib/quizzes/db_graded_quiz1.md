### Graded Quiz - 1

**Question 1**
A banking database uses strict two-phase locking and write-ahead logging. Transaction Tl debits account A and credits account B, while T2 reads A to compute interest. Tl updates A and B but crashes before commit. T2 was blocked until A was released. After recovery, logs show partial updates of T1. Which behavior is correct after recovery?
A. T2 reads partial data
B. T1 updates persist due to WAL
C. T1 is undone completely and consistency restored
D. Deadlock occurs after restart

**Answer:** C
**Explanation:** Since T1 crashed before committing, it must be rolled back (undone) completely during recovery to preserve database consistency, ensuring that partial, uncommitted changes are discarded.

---

**Question 2**
A university stores student data where schema rarely changes but records update every semester. A developer proposes modifying schema frequently for flexibility. However, query optimization relies heavily on schema stability. Which reasoning best justifies keeping schema unchanged?
A. Schema improves indexing
B. Schema depends on data size
C. Schema stores data values
D. Schema defines structure independent of instance

**Answer:** D
**Explanation:** The schema defines the structural layout and rules of the database, design definitions that must remain stable and separate from the highly dynamic database instances (actual student records update) to permit queries to compile and execute efficiently.

---

**Question 3**
An employee table stores address as a single attribute containing multiple fields. Queries filtering by city are slow despite indexing. The DBA suspects normalization issues affecting query performance. Which violation explains this issue?
A. 2NF violation
B. 1NF violation due to non-atomic values
C. BCNF violation
D. 3NF violation

**Answer:** B
**Explanation:** Storing multiple distinct items (street, city, zip code) inside a single field violates First Normal Form (1NF) non-atomic domains, which complicates index operations and makes partial filters extremely slow.

---

**Question 4**
A query compares salary values including NULL using conditions like salary > 50000. Some rows are unexpectedly excluded. The developer assumes NULL behaves like zero. Which explanation correctly describes the issue?
A. NULL ignored automatically
B. NULL equals zero
C. NULL results in UNKNOWN comparison outcome
D. NULL causes syntax error

**Answer:** C
**Explanation:** In SQL three-valued logic, any comparison with NULL (like salary > 50000 where salary is NULL) yields the value UNKNOWN, which evaluates to false for query filters.

---

**Question 5**
A relation R(A,B,C) has dependencies A -> B and B -> C. A student claims A -> C should not be assumed since not explicitly given. Another applies inference rules. Which is correct?
A. A -> C is invalid
B. A -> C is valid via transitivity
C. Only B -> C is valid
D. No inference allowed

**Answer:** B
**Explanation:** Armstrong's transitivity rule states that if A -> B and B -> C, then the functional dependency A -> C is logically implied and valid.

---

**Question 6**
A table is indexed using a B+ tree. One query retrieves records in a price range, while another fetches a single record by ID. Disk I/O is expensive. Which operation benefits most and why?
A. Both equal
B. Neither benefits
C. Range query due to ordered leaf nodes
D. Exact match due to hashing

**Answer:** C
**Explanation:** B+ tree indexes maintain sorted leaf nodes connected as a linked list, making sequential range queries incredibly fast because the disk head only needs to traverse contiguous blocks.

---

**Question 7**
A dense index improves lookup speed but causes high storage overhead and slow insertions. DBA considers sparse indexing. Under what condition will sparse indexing work correctly?
A. Data sorted on index key
B. Data random
C. Data hashed
D. Data unsorted

**Answer:** A
**Explanation:** Sparse indexing requires that the data file is physically ordered/sorted on the index search key. This allows the DBMS to search the index to find the closest starting record and scan sequentially from there.

---

**Question 8**
A B+ tree node overflows and splits. This causes recursive propagation up the tree. Under what condition will root split occur?
A. Leaf overflow only
B. Data duplication
C. Parent nodes overflow recursively
D. Key deletion

**Answer:** C
**Explanation:** When sibling nodes split recursively all the way to the top of the tree, the entry must be inserted into the root, causing the root node to overflow and split, which increases the height of the B+ tree by one level.

---

**Question 9**
A hashing system distributes keys unevenly causing some buckets to overflow heavily while others remain empty. Performance degrades significantly. What is the fundamental issue?
A. Sorted keys
B. Low memory
C. Poor hash function violating uniformity
D. Too many buckets

**Answer:** C
**Explanation:** A proper hash function must fulfill uniform distribution properties to map input keys evenly across the bucket spaces, preventing skewed clustering and overflow chains.

---

**Question 10**
A static hashing system has fixed buckets. As database grows, overflow chains increase and performance degrades. Why does this specifically affect search time?
A. Hash computation slower
B. Sequential traversal of overflow chains required
C. Sorting overhead
D. Memory leak

**Answer:** B
**Explanation:** When buckets collide and exceed capacity in static hashing, keys are chained. Retrieving these elements requires sequentially searching the slow overflow chain link-by-link, degrading lookup performance from O(1) closer to O(N).

---

**Question 11**
A banking system crashes after debiting account A but before crediting account B. After recovery, money is lost. Which ACID property failed?
A. Atomicity
B. Durability
C. Isolation
D. Consistency

**Answer:** A
**Explanation:** Atomicity ensures that a transaction completes entirely or not at all. If the debit completes but the credit fails, the partial state indicates a failure of atomicity.

---

**Question 12**
A transaction commits successfully but data is lost after crash due to missing logs. Which property is violated?
A. Atomicity
B. Consistency
C. Isolation
D. Durability

**Answer:** D
**Explanation:** Durability guarantees that committed transactions survive subsequent system failures. If committed records are lost after a crash, durability has been violated.

---

**Question 13**
Two transactions interleave such that final result differs from any serial order. Which issue has occurred?
A. View serializable
B. Safe execution
C. Conflict non-serializable schedule
D. Deadlock

**Answer:** C
**Explanation:** Non-serializable schedules allow uncoordinated concurrent execution that compromises dependency ordering and produces states inconsistent with any sequential order.

---

**Question 14**
A scheduler allows unrestricted interleaving of operations, leading to inconsistent database states. Which property must be enforced to prevent this?
A. Indexing
B. Serializability
C. Parallelism
D. Logging

**Answer:** B
**Explanation:** Ensuring that concurrent transaction schedules are serializable preserves safety by guaranteeing that their outcome is identical to some purely serial execution of those transactions.

---

**Question 15**
Transaction T1 writes data and T2 reads it before Tl commits. Later T1 aborts. What anomaly occurs?
A. Lost update
B. Phantom read
C. Dirty read
D. Deadlock

**Answer:** C
**Explanation:** A dirty read occurs when a transaction reads uncommitted data written by another transaction that subsequently rolls back.

---

**Question 16**
A schedule cannot be converted into a serial schedule using conflict swaps but still produces correct results. Which type is this?
A. Conflict serializable
B. Not serializable
C. Strict schedule
D. View serializable

**Answer:** D
**Explanation:** View serializability is a broader category than conflict serializability; it allows schedules that are correct but cannot be built solely with non-conflicting adjacent operation swaps, often involving blind writes.

---

**Question 17**
A hash index performs poorly for range queries like price between 500 and 1000. Why?
A. Requires sorting
B. No ordering of keys
C. High collisions
D. Overflow chains

**Answer:** B
**Explanation:** A hash index distributes key-value pairs randomly across hash buckets, meaning keys lose their relative ordering. Consequently, searching for sequential ranges requires scanning the entire table.

---

**Question 18**
A multi-level index reduces disk I/O for large datasets. How does it achieve this?
A. Avoids B+ tree
B. Reduces storage
C. Reduces search depth
D. Eliminates hashing

**Answer:** C
**Explanation:** High fan-out at outer-level indexes filters vast records, mapping to few sub-index levels and keeping search tree depth small. This ensures only a few index disk page reads are needed.

---

**Question 19**
Two transactions update same account concurrently and final balance is incorrect. Logs show both executed correctly individually. Which ACID property failed?
A. Durability
B. Consistency
C. Atomicity
D. Isolation

**Answer:** D
**Explanation:** The Isolation property keeps concurrent operations isolated from each other. If updates collide and overwrite each other (lost updates), isolation has failed.

---

**Question 20**
A recovery system ensures committed transactions persist while incomplete ones are undone. Which mechanism guarantees this?
A. Write-ahead logging
B. Indexing
C. Buffering
D. Scheduling

**Answer:** A
**Explanation:** Write-Ahead Logging (WAL) requires recording updates in secure, disk-persisted log entries before updating the actual database data pages on disk, enabling complete recovery during system failure.

---

**Question 21**
A relation R(A,B,C,D) has functional dependencies A -> B and C -> D. A student claims {A, C} is a candidate key, while another claims {A, C, D} is also a candidate key. Considering minimality and uniqueness, which is correct?
A. Only {A, C, D} is candidate key
B. None are candidate keys
C. Both are candidate keys
D. Only {A, C} is candidate key

**Answer:** D
**Explanation:** A candidate key must be a minimal superkey. Since {A, C} already determines all columns (A -> B, C -> D, and A,C -> A,B,C,D), adding D to form {A, C, D} violates the minimality constraint.

---

**Question 22**
A database is normalized into 3NF to reduce redundancy. However, queries now require multiple joins leading to higher execution time. The DBA considers denormalization. What is the main benefit of denormalization in this case?
A. Reduces storage
B. Eliminates redundancy completely
C. Improves query performance
D. Avoids indexing

**Answer:** C
**Explanation:** Denormalization intentionally adds redundant data back into tables to decrease execution times of complex queries by reducing the number of expensive join operations.

---

**Question 23**
A table contains millions of records frequently queried using range conditions on attribute A. DBA must choose between hash index and B+ tree index. Disk I/O is critical. Which choice is optimal?
A. B+ tree due to ordered structure
B. Hash index due to O(1)
C. Both equal
D. No index needed

**Answer:** A
**Explanation:** For range conditions, a B+ tree is significantly more efficient than a hash index. Leaf nodes in a B+ tree are sorted and sequentially chained, reducing disk seek overhead for range scans.

---

**Question 24**
A dense index is created on a large table, but insertion performance degrades significantly. DBA considers sparse indexing. Why does sparse indexing improve insertion performance?
A. Less memory only
B. Faster search
C. Sorted data
D. Fewer index entries need updates

**Answer:** D
**Explanation:** A sparse index contains entries only for some blocks of data rather than every single record. Consequently, during insertions, fewer index pointers need to be modified or reshuffled.

---

**Question 25**
A B+ tree has order m and stores large dataset. Despite data growth, tree height increases slowly. Which property is responsible for this?
A. High fan-out
B. Hashing
C. Sequential access
D. Compression

**Answer:** A
**Explanation:** The high fan-out (maximum child pointers per node) of a B+ tree ensures that the tree is very wide but extremely shallow, allowing logarithmic search complexity with high branch density.

---

**Question 26**
In a B+ tree, leaf nodes are linked together. A developer questions its necessity. Why is this structure important?
A. Faster insertion
B. Efficient range queries
C. Reduced memory
D. Avoid splitting

**Answer:** B
**Explanation:** Linking B+ tree leaf nodes together creates a doubly or singly-linked list, allowing fast ordered sequential range traversal without having to traverse parent index branches repeatedly.

---

**Question 27**
A hash function maps keys unevenly causing heavy clustering. Some buckets overflow while others are empty. Which property is violated?
A. Determinism
B. Simplicity
C. Uniform distribution
D. Efficiency

**Answer:** C
**Explanation:** Good hash design requires uniform distribution where all hash values are mapped uniformly across buckets to avoid collisions and skew.

---

**Question 28**
A static hashing system suffers from long overflow chains as data grows. DBA switches to extendible hashing. What improvement does this bring?
A. Eliminates hashing
B. Removes collisions completely
C. Dynamically adjusts bucket count
D. Reduces key size

**Answer:** C
**Explanation:** Extendible hashing employs a directory of pointers that can double or half, dynamically resizing bucket capacities to accommodate data scaling without rehashing everything.

---

**Question 29**
In extendible hashing, a bucket overflows and its local depth equals global depth. What must be done next?
A. Delete bucket
B. Increase global depth
C. Merge buckets
D. Rehash entire file

**Answer:** B
**Explanation:** When local depth equals global depth, splitting a bucket requires doubling the size of the directory of pointers, which is achieved by increasing the global depth by one.

---

**Question 30**
A transaction partially completes and then fails due to crash. After recovery, changes are undone using logs. Which mechanism ensures this?
A. Commit protocol
B. Checkpoint only
C. Indexing
D. Rollback using undo logs

**Answer:** D
**Explanation:** Undoing incomplete updates during database recovery transitions the system back to its last committed state by running transactional rollback operations with UNDO logs.

---

**Question 31**
A schedule allows concurrent execution but ensures no transaction reads uncommitted data. However, it may not be serializable. What type of schedule is this?
A. Serializable schedule
B. Strict schedule
C. Recoverable schedule
D. Cascading schedule

**Answer:** B
**Explanation:** A strict schedule guarantees that no transaction can read or write data items until the transaction that previously updated those items has committed or aborted.

---

**Question 32**
Transaction T1 writes data, and T2 reads it before Tl commits. Later T1 aborts. What issue occurs?
A. Dirty read
B. Deadlock
C. Phantom read
D. Lost update

**Answer:** A
**Explanation:** When T2 reads uncommitted records written by T1, and T1 subsequently aborts, T2 is reading inconsistent "dirty data" that logically never existed in the database.

---

**Question 33**
A precedence graph of a schedule contains a cycle. What conclusion can be drawn about the schedule?
A. Strict
B. Serializable
C. Conflict serializable
D. Not conflict serializable

**Answer:** D
**Explanation:** If there is a cycle in the precedence/serialization graph (e.g., T1 -> T2 -> T1), it indicates contradictory dependency orders, indicating the schedule is not conflict-serializable.

---

**Question 34**
A transaction reads rows satisfying a condition. Another transaction inserts new rows matching that condition before the first completes. What anomaly occurs?
A. Phantom read
B. Deadlock
C. Dirty read
D. Lost update

**Answer:** A
**Explanation:** A phantom read occurs when a transaction runs a query to find a set of rows satisfying a condition, but discovers newly inserted transactions matching those constraints during a subsequent read.

---

**Question 35**
A system ensures committed transactions survive crash using logs. Which mechanism provides this guarantee?
A. Logging and recovery
B. Locking
C. Scheduling
D. Indexing

**Answer:** A
**Explanation:** Logging mechanisms (Write-Ahead-Logs, Redo histories) paired with a recovery engine guarantee that committed transactions are successfully replayed after unexpected power loss or crash events.

---

**Question 36**
A query optimizer chooses between index scan and full table scan. For low selectivity conditions, which is preferred?
A. Hashing
B. Full table scan
C. Index scan
D. Sorting

**Answer:** B
**Explanation:** Low selectivity implies that a query matches a huge percentage of records in a table. In this case, an index scan is slower than a sequential full table scan because index traversal introduces random disk seek overhead for thousands of addresses.

---

**Question 37**
A relation is decomposed into BCNF, but some dependencies cannot be enforced without joins. What drawback is observed?
A. Increased storage
B. Dependency loss
C. Redundancy
D. Reduced normalization

**Answer:** B
**Explanation:** BCNF guarantees the highest degree of normalization to eliminate functional anomalies, but unlike 3NF, BCNF decompositions do not always preserve dependency constraints (dependency loss).

---

**Question 38**
A hash index is efficient for equality queries but not for range queries. What is the main reason?
A. Requires sorting
B. High memory usage
C. No ordering of keys
D. Complex function

**Answer:** C
**Explanation:** A hash function maps keys to buckets randomly with no regard to sorting order. Ranges (like X > 50) have keys scattered across arbitrary buckets, rendering the index useless for ranges.

---

**Question 39**
A transaction system uses two-phase locking. Transactions acquire locks and release them only after commit. What property is guaranteed?
A. Faster execution
B. Conflict serializability
C. Deadlock prevention
D. No rollback

**Answer:** B
**Explanation:** Two-Phase Locking (2PL) establishes a growing phase (locking data) and a shrinking phase (releasing locks). This protocol guarantees conflict-serializable schedules.

---

**Question 40**
A deadlock occurs when two transactions wait indefinitely for each other. Which condition is responsible?
A. Circular wait
B. High memory
C. Sequential execution
D. No locking

**Answer:** A
**Explanation:** Deadlock is caused by a circular wait condition in which Transaction 1 holds Resource X and waits for Resource Y, while Transaction 2 holds Resource Y and waits for Resource X.

---

**Question 41**
A relation R(A,B,C,D) satisfies A -> B and B -> C, but D is independent. A student claims {A} is a candidate key because it determines B and C. Another argues D must be included. Considering closure, minimality, and uniqueness, which is correct?
A. {A, D} is candidate key
B. Both are candidate keys
C. None are candidate keys
D. {A} is candidate key

**Answer:** A
**Explanation:** Since attribute D is completely independent, its value cannot be determined by {A}. The minimal candidate key must include D. Thus, the closure of {A, D} correctly identifies the superkey {A, B, C, D}.

---

**Question 42**
A database normalized into 3NF reduces redundancy but now complex queries require multiple joins. Query latency increases significantly in real-time applications. DBA suggests partial denormalization. What is the main trade-off involved?
A. Data consistency vs redundancy
B. Indexing vs hashing
C. Concurrency vs recovery
D. Performance vs redundancy

**Answer:** D
**Explanation:** The fundamental trade-off during database denormalization is exchange of storage space and redundancy control (re-introducing redundant records) to gain massive performance and speed boots for read-heavy operations.

---

**Question 43**
A B+ tree index is used for a large dataset. During heavy insert workload, multiple node splits propagate upward and occasionally increase tree height. What is the worst-case structural effect of insertion?
A. Data duplication
B. Tree imbalance
C. Node deletion
D. Tree height increases by one

**Answer:** D
**Explanation:** Insertion only causes node splitting recursively to the parent nodes. At worst, this splits the root node, which increases the total height of the B+ tree by exactly one level. Tree balance remains perfectly intact.

---

**Question 44**
A database uses clustering index on attribute A. Queries accessing consecutive values of A are significantly faster. What is the key reason behind this improvement?
A. Data stored sequentially on disk
B. Index compression
C. Reduced memory usage
D. Hashing improves locality

**Answer:** A
**Explanation:** A clustering index physically orders the actual tables on disk in alignment with the index keys. Consecutive ranges can therefore be retrieved with extremely fast, contiguous, sequential disk page fetches.

---

**Question 45**
A hash index uses chaining for collision handling. As data grows, chains become long and degrade performance. Which technique best solves this issue while keeping hashing?
A. Sorting
B. Static hashing
C. Extendible hashing
D. Linear probing

**Answer:** C
**Explanation:** Dynamic hashing methodologies like Extendible hashing double the directory size and split individual buckets dynamically, maintaining O(1) searches without degrading into long chains.

---

**Question 46**
In extendible hashing, multiple directory entries point to the same bucket. What does this indicate about global and local depth?
A. Both equal always
B. Global depth > local depth
C. No relation
D. Global depth < local depth

**Answer:** B
**Explanation:** If global depth represents d, and local depth represents p, then if d > p, there will be 2^(d-p) separate directory slots pointing directly to that same shared bucket.

---

**Question 47**
A transaction writes multiple values but fails before commit. System uses undo logging. During recovery, what happens to these values?
A. Ignored
B. Persist permanently
C. Committed automatically
D. Rolled back to previous values

**Answer:** D
**Explanation:** Undo logging contains old-value descriptors that are applied step-by-step during recovery to roll back incomplete transaction changes to their prior consistent values.

---

**Question 48**
A schedule is recoverable but not cascadeless. Transactions read uncommitted data but commit after the writer commits. What risk still exists?
A. Phantom read
B. Lost update
C. Cascading abort
D. Deadlock

**Answer:** C
**Explanation:** If a schedule is not cascadeless, aborting Transaction 1 triggers cascading aborts, requiring the system to roll back Transactions 2, 3, etc. that read uncommitted data from Transaction 1.

---

**Question 49**
Two transactions update the same data item without proper locking. Final result reflects only one update. Which anomaly occurs?
A. Lost update
B. Phantom read
C. Deadlock
D. Dirty read

**Answer:** A
**Explanation:** If both Transaction 1 and Transaction 2 update a value concurrently without isolation locks, the update of the first transaction is overwritten and lost.

---

**Question 50**
A precedence graph has multiple edges but no cycle. What does this imply?
A. Strict schedule
B. Deadlock
C. Conflict serializable
D. Not serializable

**Answer:** C
**Explanation:** Precedence charts without a cycle can be sorted topologically, indicating the concurrent schedule is conflict-serializable.

---

**Question 51**
A transaction reads same data twice and gets different values because another transaction updated it in between. What anomaly is this?
A. Non-repeatable read
B. Phantom read
C. Dirty read
D. Lost update

**Answer:** A
**Explanation:** A non-repeatable read occurs when a transaction reads a record, and executing the identical read statement a second time yields modified/different values due to an intermediate committed transaction write.

---

**Question 52**
A query optimizer ignores an available index and performs full table scan instead. What is the most likely reason?
A. Index missing
B. Sorting needed
C. Low selectivity condition
D. High memory

**Answer:** C
**Explanation:** When a query matches a massive percentage of rows in a table (low selectivity), fetching records via the index increases disk latency due to the overhead of random disk pointer jumps. In this scenario, running a sequential table scan is faster.

---

**Question 53**
A multi-level index reduces search complexity significantly. What is the main benefit of this hierarchical structure?
A. Sequential scan
B. Hashing
C. Reduced storage
D. Logarithmic search time

**Answer:** D
**Explanation:** Standard hierarchical indexes structure searches as tree traversals. Multiplying branches at each level speeds up index queries, reducing search costs from linear scans to logarithmic lookups.

---

**Question 54**
A B+ tree supports both equality and range queries efficiently. Which property enables this?
A. Hashing
B. Ordered keys with linked leaves
C. Random storage
D. Compression

**Answer:** B
**Explanation:** B+ tree indexes maintain sorted leaf nodes connected as a linked list, allowing efficient sequential range traversal after locating the first match with logarithmic search.

---

**Question 55**
A transaction system enforces strict 2PL. Locks are released only after commit. What additional guarantee does this provide?
A. Deadlock prevention
B. No rollback
C. Faster execution
D. Cascadeless schedule

**Answer:** D
**Explanation:** Under Strict 2PL, write locks are held until the transaction commits, ensuring that no other transactions read uncommitted dirty modifications. This eliminates cascading rollbacks.

---

**Question 56**
A deadlock detection algorithm finds a cycle in the wait-for graph. What is the correct resolution?
A. Increase memory
B. Restart system
C. Ignore cycle
D. Abort one transaction

**Answer:** D
**Explanation:** Once a wait-for cycle is detected, the deadlock is broken by selecting a victim transaction and aborting it to free its held locks, allowing other threads to complete.

---

**Question 57**
A database ensures consistency by enforcing constraints before and after transactions. Which ACID property is responsible?
A. Isolation
B. Consistency
C. Durability
D. Atomicity

**Answer:** B
**Explanation:** Consistency guarantees that any transaction preserves the integrity and consistency constraints (foreign keys, check rules) defined across tables in the database schema.

---

**Question 58**
A hash function maps keys uniformly, yet collisions occur. Why?
A. Sorting required
B. Limited bucket space
C. Data duplication
D. Poor design

**Answer:** B
**Explanation:** Collisions are inevitable because database inputs outnumber the physical bucket capacity allocated inside memory systems.

---

**Question 59**
A schedule is both conflict and view serializable. What does this imply?
A. Non-deterministic
B. Incorrect execution
C. Always correct result
D. Depends on data

**Answer:** C
**Explanation:** If a concurrent execution is conflict and view serializable, it is logically equivalent to some sequential run of those transactions, which guarantees a consistent state.

---

**Question 60**
A checkpoint is used in recovery systems. What is its main purpose?
A. Increase memory
B. Delete logs
C. Reduce recovery time
D. Prevent crash

**Answer:** C
**Explanation:** Checkpoints flush memory blocks to disk and log active transaction statuses, reducing recovery time by limiting how far back the recovery subsystem must scan the logs.

---

**Question 61**
A relation R(A,B,C,D) has functional dependencies A -> B, B -> C, and C -> D. A student concludes that since A determines all attributes transitively, it must be the only candidate key. Another argues that redundancy or hidden dependencies might allow others. Considering minimality and closure, what is correct?
A. Multiple candidate keys exist
B. {A, B} is candidate key
C. Only A is candidate key
D. No candidate key exists

**Answer:** C
**Explanation:** Since {A}+ determines all attributes (A -> B -> C -> D) and no subset of {A} can be a candidate key, {A} is the unique minimal candidate key for relation R.

---

**Question 62**
A relation is decomposed into BCNF to remove anomalies. However, enforcing some functional dependencies now requires joining multiple tables. Query cost increases significantly. What is the fundamental trade-off here?
A. Dependency preservation loss
B. Increased redundancy
C. Reduced concurrency
D. Loss of normalization

**Answer:** A
**Explanation:** BCNF guarantees the highest degree of normalization to eliminate functional anomalies, but unlike 3NF, BCNF decompositions do not always preserve dependency constraints (dependency loss).

---

**Question 63**
A query workload frequently retrieves records sorted by attribute A and performs range queries. DBA considers replacing clustering index with hash index for faster lookup. Disk I/O is high. What is the best decision?
A. Remove indexing
B. Use hash index for faster equality
C. Use bitmap index
D. Keep clustering index for sequential access

**Answer:** D
**Explanation:** Replacing a clustering index with a hash index would degrade range performance because hash indexes do not maintain physical directory order, which is necessary for fast sequential disk scans.

---

**Question 64**
A B+ tree has very high fan-out due to large block size. As data grows, tree height remains small. What is the key advantage of this property?
A. Slower insertion
B. Memory overhead
C. Increased collisions
D. Reduced disk I/O during search

**Answer:** D
**Explanation:** A wider branching factor (fan-out) minimizes index depth, allowing the system to locate key lookups with fewer disk page reads.

---

**Question 65**
During deletion in B+ tree, a node underflows. System first tries redistribution before merging. Why is redistribution preferred?
A. Prevents overflow
B. Faster than search
C. Reduces memory
D. Avoids structural changes in tree

**Answer:** D
**Explanation:** Borrowing keys from adjacent siblings (redistribution) avoids the overhead of node merging, which can propagate structural changes up to parent levels.

---

**Question 66**
A hash index shows poor performance despite uniform distribution of keys. Analysis reveals frequent directory expansion and rehashing. What is the likely cause?
A. No collisions
B. Dynamic hashing overhead
C. Sorted keys
D. Static hashing limitation

**Answer:** B
**Explanation:** Frequent sizing and rehashing indicate high overhead from extendible dynamic hashing, which double the index directories when directories are small.

---

**Question 67**
In extendible hashing, global depth increases from d to d+1. What happens to directory size?
A. Remains constant
B. Doubles
C. Becomes random
D. Halves

**Answer:** B
**Explanation:** Modern extendible hash directories map entries using binary index sequences. Increasing global depth by 1 bit doubles the size of the pointer directory (from 2^d to 2^(d+1)).

---

**Question 68**
A transaction writes data and commits, but system crashes before log is flushed to disk. After recovery, changes are lost. Which rule was violated?
A. Two-phase locking
B. Checkpointing
C. Serializability
D. Write-ahead logging

**Answer:** D
**Explanation:** Write-Ahead Logging (WAL) requires recording updates in secure, disk-persisted log entries before updating the actual database data pages on disk, enabling complete recovery during system failure.

---

**Question 69**
A schedule ensures that no transaction reads uncommitted data, but it may still not be serializable. Which type of schedule is this?
A. Strict
B. Serializable
C. Recoverable
D. Cascadeless

**Answer:** D
**Explanation:** A cascadeless schedule guarantees that transactions only read committed changes, preventing cascading rollbacks. However, it does not guarantee serializability.

---

**Question 70**
Two transactions access same data item. One performs read, another performs write concurrently without locks. What type of conflict is this?
A. Read-write conflict
B. No conflict
C. Write-write
D. Read-read

**Answer:** A
**Explanation:** Conflicts arise if at least one concurrent transaction writes to a data item, which includes read-write (RW) and write-read (WR) conflicts.

---

**Question 71**
A schedule is view serializable but not conflict serializable. What special condition allows this?
A. No writes
B. No transactions
C. Blind writes present
D. No reads

**Answer:** C
**Explanation:** Blind writes occur when a transaction writes to a data item without reading its previous value. This allows some correct schedules to avoid dependency cycles and achieve view serializability.

---

**Question 72**
A database experiences frequent deadlocks due to locking. DBA switches to timestamp ordering. What advantage does this provide?
A. Avoids deadlocks by ordering transactions
B. Reduces memory
C. Improves indexing
D. Eliminates conflicts

**Answer:** A
**Explanation:** Timestamp ordering assigns strict, monotonically increasing timestamps to transactions to serialize conflicts. This completely prevents deadlocks since waiting transactions can only block in one direction.

---

**Question 73**
A transaction repeatedly reads same data and gets different values due to concurrent updates. Which isolation level fails to prevent this?
A. Serializable
B. Repeatable read
C. Strict
D. Read committed

**Answer:** D
**Explanation:** Under the Read Committed isolation level, writers can modify rows after a transaction has read them, which can result in non-repeatable read anomalies.

---

**Question 74**
A query optimizer selects hash join instead of nested loop join for large datasets. What is the main reason?
A. Faster for large inputs
B. Simpler algorithm
C. Avoids indexing
D. Less memory

**Answer:** A
**Explanation:** Hash joins are highly efficient for massive volume equi-joins because they hash the smaller relation into memory, avoiding the quadratic complexity of nested loop lookups.

---

**Question 75**
A database uses bitmap index on a low-cardinality attribute like gender. Why is this efficient?
A. Compact representation and fast bit operations
B. Uses hashing
C. No indexing needed
D. Sorted structure

**Answer:** A
**Explanation:** Low cardinality fields can be represented compactly as bit vectors, which allows the DBMS to perform incredibly fast intersections and unions using CPU bitwise operators.

---

**Question 76**
A recovery mechanism redoes committed transactions after crash while undoing incomplete ones. Which logging strategy supports this?
A. Two-phase commit
B. Redo logging
C. Undo logging
D. Locking

**Answer:** B
**Explanation:** Redo logging records committed modifications to allow the recovery manager to reapply these changes after a crash to restore the database state.

---

**Question 77**
A system uses strict 2PL but still encounters deadlocks. What additional mechanism is required?
A. Logging
B. Deadlock detection or prevention
C. Indexing
D. Hashing

**Answer:** B
**Explanation:** Implementing 2PL cannot stop circular dependencies from forming. To prevent indefinite hangs, the database must run a deadlock detection algorithm or enforce lock timeouts.

---

**Question 78**
A B+ tree supports insertion, deletion, and search efficiently even for large datasets. What is the time complexity of these operations?
A. O(n log n)
B. O(log n)
C. O(1)
D. O(n)

**Answer:** B
**Explanation:** The balanced height structure of a B+ tree guarantees that insertions, deletions, and key updates have logarithmic time complexity, O(log N).

---

**Question 79**
A hash index is used in a system that frequently performs range queries. Performance degrades significantly. What is the best alternative?
A. B+ tree index
B. Static hashing
C. Extendible hashing
D. Linear search engines

**Answer:** A
**Explanation:** Hash systems do not preserve ordering, making them inefficient for range lookups. Replacing them with a ordered B+ tree index restores efficient range scans.

---

**Question 80**
A crash recovery process identifies some transactions to undo and others to redo. What determines this classification?
A. Commit status in logs
B. Memory usage
C. Index type
D. Transaction size

**Answer:** A
**Explanation:** During recovery, the system scans logs to identify committed transactions (to redo) and active/uncommitted transactions (to undo) to restore transactional consistency.
