### Introduction to Databases: IIT Jodhpur Mega Quiz (1-80)

**Question 1**
A candidate key is:
A. Always minimal and unique
B. Always chosen as primary key
C. May contain redundant attributes
D. Must be composite

**Answer:** A
**Explanation:** A candidate key is a minimal superkey; that is, a set of attributes that uniquely identifies tuples, with no redundant attributes (no subset is also a superkey). One of the candidate keys is selected as the primary key.

---

**Question 2**
Which operation may increase the number of tuples?
A. Selection
B. Projection
C. Cartesian Product
D. Rename

**Answer:** C
**Explanation:** Selection and Projection can only reduce or keep the same number of tuples. Rename only changes naming schema, retaining the same tuple count. Cartesian Product of relations R and S yields |R| * |S| tuples, which can be larger than either of the individual sizes (provided both are non-empty and at least one is greater than 1).

---

**Question 3**
If relation R has 10 tuples and S has 20 tuples, then |R × S| equals:
A. 10
B. 20
C. 30
D. 200

**Answer:** D
**Explanation:** The Cartesian product (R × S) of a relation R with 10 tuples and a relation S with 20 tuples has 10 * 20 = 200 tuples.

---

**Question 4**
Which SQL clause is evaluated after GROUP BY?
A. WHERE
B. HAVING
C. FROM
D. DISTINCT

**Answer:** B
**Explanation:** The logical execution order of SQL clauses is: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY. Therefore, HAVING is evaluated after GROUP BY.

---

**Question 5**
COUNT(column) differs from COUNT(*) because:
A. COUNT(column) ignores NULLs
B. COUNT(*) ignores NULLs
C. Both are identical
D. COUNT(column) counts duplicates only

**Answer:** A
**Explanation:** `COUNT(column)` returns the count of non-NULL values in that specific column, whereas `COUNT(*)` counts all rows in the table, including those containing NULL values.

---

**Question 6**
A dense index contains:
A. Entry for every block
B. Entry for every record
C. Only root entries
D. Only leaf entries

**Answer:** B
**Explanation:** A dense index has an index entry for every search-key value (and thus, every distinct record) in the data file.

---

**Question 7**
Sparse indexing requires:
A. File to be unordered
B. Secondary index
C. Ordered data file
D. Hash organization

**Answer:** C
**Explanation:** A sparse index only contains entries for some search-key values (typically one per block). This requires the data file to be physically sorted/ordered on that search-key so we can locate boundaries.

---

**Question 8**
In a B+ tree, actual records are usually stored in:
A. Root
B. Internal nodes
C. Leaf nodes
D. Overflow pages

**Answer:** C
**Explanation:** In a B+ tree index, internal and root nodes only store search-key values and child-pointers to guide navigation. The actual data records (or pointers to them) are strictly stored in the leaf nodes.

---

**Question 9**
For B+ trees, range queries are efficient because:
A. Root contains all keys
B. Leaves are linked
C. Internal nodes are linked
D. Hashing is used

**Answer:** B
**Explanation:** The leaf nodes of a B+ tree are chained together in a doubly or singly linked list. This allows efficient sequential traversal (range scanning) once the start key of the range is located.

---

**Question 10**
Hash indices are best suited for:
A. Range search
B. Ordered traversal
C. Equality search
D. Prefix search

**Answer:** C
**Explanation:** Hash functions randomize search-key distribution across buckets, enabling extremely fast O(1) equality lookup (point searches) but making range searches and ordered traversals impossible/extremely slow.

---

**Question 11**
Bucket overflow in hashing may occur due to:
A. Uniform distribution
B. Skewed distribution
C. Sorted insertion
D. Secondary indexing

**Answer:** B
**Explanation:** A skewed distribution where many key values map to the same hash bucket (hash collision or highly repetitive keys) causes bucket overflow, degrading hash efficiency.

---

**Question 12**
Extendible hashing uses:
A. Local depth only
B. Global depth only
C. Directory + depths
D. Overflow chains only

**Answer:** C
**Explanation:** Extendible hashing employs a directory of bucket pointers along with a global depth (for directory sizing) and local depth (for individual bucket sizing and splitting).

---

**Question 13**
If Local Depth < Global Depth and bucket overflows:
A. Directory doubles
B. Bucket splits only
C. Entire file reorganizes
D. Hash function changes

**Answer:** B
**Explanation:** When local depth is strictly less than global depth, multiple directory entries point to the same physical bucket. An overflow split requires only splitting the bucket, incrementing its local depth, and updating the pointers; the directory does NOT need to double.

---

**Question 14**
Atomicity ensures:
A. Correct results
B. All-or-none execution
C. Isolation of reads
D. Permanent storage

**Answer:** B
**Explanation:** The Atomicity property of ACID ensures that either all operations of a transaction are executed successfully or none of them are reflected in the database.

---

**Question 15**
Which ACID property is violated if a committed transaction disappears after crash?
A. Atomicity
B. Consistency
C. Isolation
D. Durability

**Answer:** D
**Explanation:** Durability guarantees that once a transaction commits, its updates are permanently recorded in the database and will survive any subsequent system crashes.

---

**Question 16**
A transaction after executing its last statement enters:
A. Failed
B. Active
C. Partially Committed
D. Aborted

**Answer:** C
**Explanation:** A transaction is in the 'partially committed' state immediately after execution of its final statement, prior to completion of the commit processes like flushing the transactions' log buffers to non-volatile storage.

---

**Question 17**
Lost Update anomaly occurs when:
A. Dirty data is read
B. Update overwrites another update
C. Transaction aborts
D. Disk crashes

**Answer:** B
**Explanation:** Lost Update occurs when two concurrent transactions read a value, modify it, and write it back. One write overwrites the other write without including its changes, thus losing the earlier update.

---

**Question 18**
Dirty Read is another name for:
A. Lost update
B. Cascading rollback
C. Uncommitted dependency
D. View serializability

**Answer:** C
**Explanation:** A dirty read represents an "uncommitted dependency", where one transaction reads a modification made by another concurrent transaction that hasn't committed yet.

---

**Question 19**
Two read operations on same item:
A. Always conflict
B. Never conflict
C. Conflict if serializable
D. Conflict if committed

**Answer:** B
**Explanation:** Read operations do not modify the database. Therefore, two read operations on the same data item by different transactions never conflict.

---

**Question 20**
Conflict serializability is tested using:
A. B+ tree
B. Wait-for graph
C. Precedence graph
D. ER diagram

**Answer:** C
**Explanation:** Conflict serializability is analyzed by constructing a Precedence Graph (also called a serialization or conflict graph) where nodes are transactions and directed edges are conflicting operations.

---

**Question 21**
A schedule is conflict serializable iff:
A. It is recoverable
B. Graph is cyclic
C. Graph is acyclic
D. Graph is complete

**Answer:** C
**Explanation:** A schedule is conflict serializable if and only if its precedence (conflict) graph is acyclic (contains no cycles).

---

**Question 22**
View serializability is:
A. Easier to test than conflict serializability
B. NP-complete to test
C. Equivalent to recoverability
D. Impossible to achieve

**Answer:** B
**Explanation:** While testing conflict serializability is in P (using topological sort for cycle detection on precedence graphs), testing view serializability is NP-complete due to the exponential combinations of blind writes.

---

**Question 23**
Blind writes are associated with:
A. Conflict serializable schedules only
B. View serializable but not conflict serializable schedules
C. Recoverable schedules
D. Cascadeless schedules

**Answer:** B
**Explanation:** View serializable schedules that are NOT conflict serializable are structurally possible only if they contain one or more blind writes (writing an item without reading it first).

---

**Question 24**
Recoverable schedules require:
A. Reads before commits
B. Writer commits before reader commits
C. Reader commits first
D. No reads allowed

**Answer:** B
**Explanation:** A schedule is recoverable if, for each pair of transactions Ti and Tj such that Tj reads a data item previously written by Ti, Ti commits before Tj commits.

---

**Question 25**
Every cascadeless schedule is:
A. Non-recoverable
B. Recoverable
C. Serializable only
D. Deadlock free

**Answer:** B
**Explanation:** Cascadelessness is a stronger restriction than recoverability. Every cascadeless schedule is guaranteed to be recoverable.

---

**Question 26**
An X-lock permits:
A. Read only
B. Write only
C. Read and write
D. Neither

**Answer:** C
**Explanation:** An exclusive lock (X-lock) on a data item permits both read and write operations by the transaction holding the lock.

---

**Question 27**
Two transactions can simultaneously hold:
A. X-lock and X-lock
B. X-lock and S-lock
C. S-lock and S-lock
D. None

**Answer:** C
**Explanation:** Shared locks (S-locks) are compatible with each other, so multiple transactions can simultaneously hold shared locks on the same data item. Exclusive locks (X-locks) are incompatible with both S-locks and other X-locks.

---

**Question 28**
Two-phase locking guarantees:
A. Deadlock freedom
B. Conflict serializability
C. View serializability only
D. Recoverability only

**Answer:** B
**Explanation:** The basic Two-Phase Locking (2PL) protocol guarantees conflict serializability, though it does not prevent deadlocks or cascading rollbacks.

---

**Question 29**
Strict 2PL releases locks:
A. Immediately after read
B. During shrinking phase
C. At commit/abort
D. Before write

**Answer:** C
**Explanation:** Strict Two-Phase Locking (Strict 2PL) requires that all exclusive locks (X-locks) held by a transaction must be retained until the transaction commits or aborts.

---

**Question 30**
Deadlock exists iff:
A. Lock table full
B. Wait-for graph has cycle
C. Timestamp repeats
D. Schedule serializable

**Answer:** B
**Explanation:** Deadlock detection systems construct a Wait-For Graph. A state of deadlock exists if and only if this directed graph contains a cycle.

---

**Question 31**
In wait-die scheme:
A. Older waits for younger
B. Younger waits for older
C. Everyone waits
D. Older rolls back

**Answer:** A
**Explanation:** The wait-die scheme is a non-preemptive deadlock prevention protocol: if Ti requests a lock held by Tj, Ti is allowed to wait only if Ti is older than Tj. If Ti is younger, Ti dies (aborts/rolls back). Thus, older waits for younger.

---

**Question 32**
In wound-wait:
A. Younger wounds older
B. Older wounds younger
C. No rollbacks occur
D. Deadlocks occur

**Answer:** B
**Explanation:** In the wound-wait scheme (a preemptive deadlock prevention protocol): if Ti requests a lock held by Tj, Ti is allowed to wait if Ti is younger than Tj. If Ti is older, Ti wounds/preempts Tj (forcing Tj to abort). Thus, older wounds younger.

---

**Question 33**
Write-Ahead Logging requires:
A. Data page before log
B. Log before data page
C. Simultaneous write
D. Root before leaf

**Answer:** B
**Explanation:** The Write-Ahead Logging (WAL) protocol requires that a log record describing a modification must be written to stable storage before the corresponding dirty data page is written to disk.

---

**Question 34**
Undo operation restores:
A. New value
B. Old value
C. Checkpoint value
D. Hash value

**Answer:** B
**Explanation:** The Undo operation uses the old/before-image stored in the log records to restore the data items to their original values prior to the aborted transaction.

---

**Question 35**
Checkpointing mainly reduces:
A. Deadlocks
B. Log size processed during recovery
C. Lock contention
D. Hash collisions

**Answer:** B
**Explanation:** Checkpointing regularly flushes dirty buffers to stable disk, bounding the distance back we must search in the log upon crash recovery, which significantly reduces recovery time.

---

**Question 36**
A weak entity must have:
A. Candidate key
B. Identifying relationship
C. No attributes
D. Multiple owners

**Answer:** B
**Explanation:** A weak entity set does not have a primary key of its own and must be bound to an identifying/owner entity set via an identifying relationship (represented by a double diamond).

---

**Question 37**
A multivalued attribute is represented by:
A. Rectangle
B. Diamond
C. Double ellipse
D. Double rectangle

**Answer:** C
**Explanation:** In ER diagrams, multivalued attributes (attributes that can hold multiple values for a single entity instance, like phone numbers) are represented by a double ellipse.

---

**Question 38**
In ER-to-relational mapping, a 1:N relationship places FK on:
A. 1-side
B. N-side
C. Both sides
D. Relationship only

**Answer:** B
**Explanation:** In a one-to-many (1:N) relationship, the primary key of the 1-side is placed as a Foreign Key in the relation representing the N-side to preserve the relationship with minimal schema duplication.

---

**Question 39**
Full replication means:
A. One copy per relation
B. Relation stored at all sites
C. No fragmentation
D. One site only

**Answer:** B
**Explanation:** Full replication in distributed databases means that a complete copy of the relation/database is stored at every single site/node in the network.

---

**Question 40**
2PC commits transaction if:
A. Any participant votes YES
B. Coordinator votes YES
C. All participants vote READY
D. Majority votes YES

**Answer:** C
**Explanation:** In the Two-Phase Commit (2PC) protocol, the coordinator commits the transaction if and only if ALL participant sites respond with a "READY" (YES) vote in the voting phase. If any site votes "ABORT" (NO), the transaction is aborted globally.

---

**Question 41**
Which are ACID properties? (Select all that apply)
A. Atomicity
B. Consistency
C. Isolation
D. Distribution

**Answer:** A, B, C
**Explanation:** The classical ACID properties are Atomicity, Consistency, Isolation, and Durability. Distribution is a feature of distributed database systems, not an ACID property.

---

**Question 42**
Which may cause bucket overflow? (Select all that apply)
A. Insufficient buckets
B. Skewed keys
C. Uniform hashing
D. Many identical keys

**Answer:** A, B, D
**Explanation:** Bucket overflow can occur due to static design insufficiency (too few buckets), key skew (hash collisions where different search keys hash to the same bucket), or data skew (many records having the exact same search key value). Uniform hashing is designed to distribute keys evenly to *prevent* overflows.

---

**Question 43**
Ideal hash function characteristics: (Select all that apply)
A. Uniform
B. Random
C. Ordered
D. Collision-free

**Answer:** A, B
**Explanation:** In database hash indexing, a good hash function should be uniform (distributing search keys evenly across buckets) and random (keys are assigned to buckets independently of any patterns). They are inherently unordered and cannot be guaranteed to be absolutely collision-free in practice.

---

**Question 44**
Concurrency anomalies include: (Select all that apply)
A. Lost Update
B. Dirty Read
C. Inconsistent Analysis
D. Deadlock

**Answer:** A, B, C
**Explanation:** Lost Update, Dirty Read (Reading Uncommitted Data), and Inconsistent Analysis (Non-repeatable read / Phantom read) are primary concurrent transactional anomalies. Deadlock is a state in locking mechanisms, not a transactional data read/write anomaly itself.

---

**Question 45**
Conflicting pairs are: (Select all that apply)
A. Read(X), Read(X)
B. Read(X), Write(X)
C. Write(X), Read(X)
D. Write(X), Write(X)

**Answer:** B, C, D
**Explanation:** In transaction scheduling, two operations conflict if they are issued by different transactions, refer to the exact same data item, and at least one of them is a Write operation. (Read-Read does not conflict).

---

**Question 46**
Conflict equivalent schedules can be obtained by swapping: (Select all that apply)
A. Conflicting instructions
B. Non-conflicting instructions
C. Consecutive non-conflicting instructions
D. Arbitrary instructions

**Answer:** B, C
**Explanation:** Two schedules are conflict equivalent if they can be transformed into one another by a series of swaps of non-conflicting (or consecutive non-conflicting) instructions. Swapping conflicting or arbitrary instructions can change the meaning of the schedule.

---

**Question 47**
Recoverable schedules prevent: (Select all that apply)
A. Reading uncommitted data
B. Committing dependent transaction first
C. Inconsistent commit order
D. Dirty reads

**Answer:** B, C
**Explanation:** Recoverable schedules do not prevent dirty reads or reading uncommitted data altogether; they simply restrict the commit sequence. If Tj reads data written by Ti, Ti must commit before Tj commits, preventing Tj from committing first and ensuring a consistent commit hierarchy.

---

**Question 48**
Advantages of strict 2PL: (Select all that apply)
A. Serializable
B. Cascadeless
C. Easier recovery
D. Deadlock-free

**Answer:** A, B, C
**Explanation:** Strict 2PL guarantees conflict serializability and produces cascadeless schedules (because exclusive locks are held until commit, protecting uncommitted writes from being read). Cascadelessness makes recovery much easier because we avoid cascading rollbacks. However, Strict 2PL can still suffer from deadlocks.

---

**Question 49**
Deadlock prevention techniques: (Select all that apply)
A. Wait-die
B. Wound-wait
C. Conservative 2PL
D. Checkpointing

**Answer:** A, B, C
**Explanation:** Deadlock prevention schemes include non-preemptive timestamp schemes (wait-die), preemptive timestamp schemes (wound-wait), and conservative locking schemes (like acquiring all locks upfront). Checkpointing is a recovery-saving technique.

---

**Question 50**
Timestamp ordering may: (Select all that apply)
A. Rollback transactions
B. Avoid deadlocks
C. Produce nonrecoverable schedules
D. Use waiting

**Answer:** A, B, C
**Explanation:** Basic Timestamp Ordering (TO) rolls back violating transactions (causing cascading rollbacks) and does not involve waiting (which means it's naturally deadlock-free). Since it permits reading uncommitted writes without commit coordination, it can produce non-recoverable schedules unless fortified.

---

**Question 51**
Which are recovery actions? (Select all that apply)
A. Undo
B. Redo
C. Checkpoint
D. Projection

**Answer:** A, B, C
**Explanation:** Logging-based recovery schemes use Undo (reverting transaction side-effects) and Redo (re-applying committed transactions' changes) at system restart. Checkpoints are taken periodically to limit the log-parsing scope. Projection is a relational algebra query operation.

---

**Question 52**
Log records include: (Select all that apply)
A. Start
B. Commit
C. Old/New values
D. Primary keys only

**Answer:** A, B, C
**Explanation:** Active logs contain structural status markers (start, commit, abort) and quantitative state details (old/before value and new/after value) for updated elements, rather than just primary key values.

---

**Question 53**
Weak entities: (Select all that apply)
A. Are existence dependent
B. Have identifying relationship
C. Have total participation
D. Exist independently

**Answer:** A, B, C
**Explanation:** Weak entitites cannot exist independently. They are existence-dependent on an owner entity set, linked via an identifying relationship, and have total/mandatory participation regarding the owner relationship.

---

**Question 54**
Composite attributes may include: (Select all that apply)
A. Name
B. Address
C. Age
D. Phone Number Set

**Answer:** A, B
**Explanation:** Composite attributes are nested attributes that can be subdivided into smaller, independent sub-components (e.g., Name into FirstName and LastName, Address into Street, City, ZIP). Age is simple and derived. Phone Number Set is a multivalued attribute.

---

**Question 55**
Many-to-many relationships generally require: (Select all that apply)
A. Separate relation after mapping
B. Foreign key on one side only
C. Keys from participating entities
D. Relationship attributes

**Answer:** A, C
**Explanation:** In ER-to-Relational mapping, a many-to-many (M:N) relationship MUST be mapped to a separate, new relation (A). Its schema will fundamentally include the primary keys of both participating entity sets as a composite foreign key (C).

---

**Question 56**
Advantages of replication: (Select all that apply)
A. Availability
B. Parallelism
C. Faster local access
D. Cheaper updates

**Answer:** A, B, C
**Explanation:** Storing multiple database copies across various sites increases system availability, speeds up local reads, and enables parallel querying. However, updates become substantially more expensive because we must propagate changes to all replicated nodes.

---

**Question 57**
Horizontal fragmentation: (Select all that apply)
A. Splits tuples
B. Uses selection-like partitioning
C. Preserves schema
D. Splits attributes

**Answer:** A, B, C
**Explanation:** Horizontal fragmentation divides a relation into tuples (subsets) using selection-like predicates. Every fragment retains the exact same schema (attributes) of the original relation.

---

**Question 58**
Vertical fragmentation: (Select all that apply)
A. Splits attributes
B. Requires common key
C. Uses tuple-id often
D. Splits tuples only

**Answer:** A, B, C
**Explanation:** Vertical fragmentation splits a relation's attributes into fragments. To ensure lossless join reconstruction, each fragment must share a common key (like the primary key) (B) or use internal system-defined tuple-ids (C).

---

**Question 59**
Transparency in distributed DBMS includes: (Select all that apply)
A. Fragmentation transparency
B. Replication transparency
C. Location transparency
D. Serializability transparency

**Answer:** A, B, C
**Explanation:** Distribution transparency focuses on shielding users from the details of distribution, including horizontal/vertical fragmentation (A), multi-site replication (B), and node location (C). Serializability is a concurrency consistency property, not a distribution transparency.

---

**Question 60**
Coordinator failure in 2PC may cause: (Select all that apply)
A. Blocking
B. Immediate commit
C. Waiting participants
D. Deadlock elimination

**Answer:** A, C
**Explanation:** Coordinator failure in Two-Phase Commit is blocking. If the coordinator crashes while participants have voted READY and are waiting, the participants must wait (block) in limbo, holding locks indefinitely until the coordinator recovers.

---

**Question 61**
A B+ tree internal node stores: (Select all that apply)
A. Search keys
B. Record pointers
C. Child pointers
D. Data records

**Answer:** A, C
**Explanation:** Internal nodes inside a B+ tree store only search-key values (A) and pointers to their child nodes (C) to guide search traffic. Actual record pointers and data records are restricted to the leaf nodes.

---

**Question 62**
Hash index is generally efficient for: (Select all that apply)
A. Equality search
B. Exact match
C. Range search
D. Ordered traversal

**Answer:** A, B
**Explanation:** Hash functions transform keys into bucket coordinates, meaning they excel at point queries, including equality lookups (A) and exact matching (B). They are ineffective for range queries or ordered traverses because the hash space is randomized.

---

**Question 63**
Checkpoint record contains: (Select all that apply)
A. Active transaction list
B. Global depth
C. Log position
D. Transaction states

**Answer:** A, C
**Explanation:** Checkpoint log records write out an active transaction table detailing all transactions active at that moment (A) and their most recent log sequence numbers/positions (C). They contain no Extendible Hashing metadata.

---

**Question 64**
Conditions for deadlock: (Select all that apply)
A. Hold and wait
B. Circular wait
C. Mutual exclusion
D. No preemption

**Answer:** A, B, C, D
**Explanation:** The four standard Coffman conditions that must hold simultaneously for a deadlock to occur are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.

---

**Question 65**
In distributed databases, data may be: (Select all that apply)
A. Replicated
B. Fragmented
C. Both replicated and fragmented
D. Necessarily centralized

**Answer:** A, B, C
**Explanation:** Distributed DB designs can employ full/partial replication, horizontal/vertical fragmentation, or combinations of both (replicated fragments).

---

**Question 66**
A transaction that has completed all statements but not yet committed is called __________.

**Answer:** Partially Committed
**Explanation:** After execution of the final statement, the transaction is in the 'partially committed' state prior to flushing its log buffers to non-volatile disk.

---

**Question 67**
The ACID property responsible for hiding intermediate results is __________.

**Answer:** Isolation
**Explanation:** Isolation ensures that the concurrent execution of transactions leaves the database in the same state as if they were executed sequentially. Active intermediate results are concealed from concurrent reads.

---

**Question 68**
The graph used to test conflict serializability is called the __________ graph.

**Answer:** Precedence
**Explanation:** A Precedence Graph (also called serialization or conflict graph) is drawn to find if a schedule is conflict serializable.

---

**Question 69**
A schedule whose precedence graph contains a cycle is __________ serializable.

**Answer:** Not Conflict
**Explanation:** If a cycle is present in the precedence graph, the schedule is not conflict serializable.

---

**Question 70**
In strict two-phase locking, locks are released only after __________ or abort.

**Answer:** Commit
**Explanation:** Strict 2PL demands that exclusive write locks (X-locks) be held until the transaction finishes completely via a commit or an abort.

---

**Question 71**
The log record written when a transaction begins is __________.

**Answer:** Start
**Explanation:** The system records a `<T, start>` log record as soon as transaction T begins execution.

---

**Question 72**
Undo writes the __________ value back to the database.

**Answer:** Old
**Explanation:** The Undo recovery action restores the state by copying the 'Old/Before-image' of the modified database item from the log.

---

**Question 73**
Redo writes the __________ value back to the database.

**Answer:** New
**Explanation:** The Redo recovery action ensures durability by copying the 'New/After-image' value of database items to make sure committed actions are fully applied.

---

**Question 74**
A weak entity is represented by a __________ rectangle.

**Answer:** Double
**Explanation:** Weak entity sets are represented by double-lined rectangles in standard ER diagrams.

---

**Question 75**
A multivalued attribute is represented by a __________ ellipse.

**Answer:** Double
**Explanation:** Multivalued attributes are drawn using double-lined ellipses.

---

**Question 76**
In extendible hashing, the directory size equals __________.

**Answer:** 2^Global Depth
**Explanation:** If the global depth is d, the directory has 2^d entries pointing to physical hash buckets.

---

**Question 77**
A bucket split that requires directory doubling occurs when Local Depth equals __________ Depth.

**Answer:** Global
**Explanation:** If local depth of the overflowing bucket equals the global depth, we must double the directory size and increment the global depth.

---

**Question 78**
A distributed transaction is coordinated by the transaction __________.

**Answer:** Coordinator
**Explanation:** The coordinator node directs distributed transactions, managing the 2PC protocol phases (Prepare and Commit).

---

**Question 79**
The first phase of 2PC is called the __________ phase.

**Answer:** Prepare
**Explanation:** Under Two-Phase Commit, Phase 1 is the Prepare/Voting phase, in which the coordinator requests all cohorts to vote READY or ABORT.

---

**Question 80**
A fully replicated database stores a copy of the entire database at __________ sites.

**Answer:** All
**Explanation:** Full replication means a complete copy of the unified database is stored and maintained across all network sites.
