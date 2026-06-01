### IDB Official Practice Paper

**Question 1** (select all that apply)
Regarding data abstraction and data independence:
A. The physical level describes how data is actually stored using complex data structures.
B. The view level is the highest level and can enforce security by hiding parts of the schema.
C. Physical data independence means the logical schema can be changed without affecting physical storage.
D. Logical data independence means the logical schema can change without rewriting application programs.

**Answer:** A, B, D
**Explanation:** Statement C is incorrect because physical data independence means the physical schema can be changed without altering the logical schema.

---

**Question 2** (select all that apply)
About schema vs. instance:
A. A database schema is the overall design and changes only rarely.
B. A database instance is the data stored at a particular moment.
C. A schema is analogous to the runtime values of program variables.
D. An instance is analogous to type declarations in a program.

**Answer:** A, B
**Explanation:** In fact, the analogy is reversed: a schema is analogous to type declarations in a program, and an instance is analogous to the runtime values of program variables.

---

**Question 3**
The ability to change the physical schema without altering the logical schema is called __________.

**Answer:** physical data independence
**Explanation:** Physical data independence shields the logical level from physical layout modifications.

---

**Question 4**
A database __________ is the overall design, while a database __________ is the data stored at a given moment.

**Answer:** schema; instance
**Explanation:** The schema is the persistent blueprint of the database, whereas the instance represents the transient state of the data.

---

**Question 5**
The highest level of abstraction, which can hide parts of the database from users for security, is the __________ level.

**Answer:** view
**Explanation:** The view level allows customized and secure projections of the database for different user profiles.

---

**Question 6** (select all that apply)
Which statements about relational-algebra operators are correct?
A. The selection operator chooses tuples (rows) satisfying a predicate.
B. The projection operator chooses attributes (columns) and removes duplicate tuples.
C. The Cartesian product of relations with m and n tuples yields m x n tuples.
D. The natural join requires that the two relations have no attribute names in common.

**Answer:** A, B, C
**Explanation:** Natural join works strictly on the common attributes between the relations (attributes with identical names).

---

**Question 7** (select all that apply)
For R(A,B,C,D) with FDs A->B, B->C, D->A which are correct?
A. D is a candidate key.
B. A is a candidate key.
C. The closure D+={A,B,C,D}.
D. The closure A+={A,B,C}.

**Answer:** A, C, D
**Explanation:** A is not a candidate key because its closure A+ is {A,B,C}, which fails to include D. On the other hand, D is a candidate key because D+ = {A,B,C,D}.

---

**Question 8**
In relational algebra, the operator that selects rows is __________ and the operator that selects columns is __________.

**Answer:** selection (sigma); projection (pi)
**Explanation:** Selection (sigma) selects tuples, and projection (pi) selects attributes.

---

**Question 9**
A minimal superkey is called a __________ key.

**Answer:** candidate
**Explanation:** A candidate key is a superkey with no redundant attributes (its proper subsets cannot be superkeys).

---

**Question 10**
For R(A,B,C,D) with A->B, B->C, D->A, the single candidate key is __________.

**Answer:** D
**Explanation:** Only D has a closure that includes all attributes {A,B,C,D}.

---

**Question 11** (select all that apply)
Which statements about SQL are correct?
A. The WHERE clause filters rows before grouping; HAVING filters groups after aggregation.
B. COUNT(*) counts all rows, including those with NULLs.
C. An ordinary (virtual) view stores its result physically on disk.
D. A correlated subquery references a variable from the enclosing outer query.

**Answer:** A, B, D
**Explanation:** Ordinary/virtual views are not physically stored on disk; only materialized views are physically persistent.

---

**Question 12** (select all that apply)
Which statements about SQL aggregates and nested queries are correct?
A. AVG ignores NULL values.
B. '> ALL (subquery)' is true when the value exceeds every value returned by the subquery.
C. EXISTS returns true if its subquery returns at least one row.
D. NOT EXISTS returns true if its subquery returns at least one row.

**Answer:** A, B, C
**Explanation:** NOT EXISTS is true if and only if the subquery returns zero rows.

---

**Question 13**
A view whose result is pre-computed and physically stored is a __________ view.

**Answer:** materialized
**Explanation:** Materialized views physically cache query results on disk to boost search performance.

---

**Question 14**
To filter groups based on an aggregate value, SQL uses the __________ clause.

**Answer:** HAVING
**Explanation:** The HAVING clause operates on grouped and aggregated tuples.

---

**Question 15**
A subquery that uses a variable from the query enclosing it is called a __________ subquery.

**Answer:** correlated
**Explanation:** Correlated subqueries depend on outer query contexts and are executed row-by-row.

---

**Question 16** (select all that apply)
Which statements about indices are correct?
A. A dense index has one entry per search-key value present in the file.
B. A sparse index can be used only if the file is ordered (clustered) on the search key.
C. A secondary index may be sparse.
D. Multilevel indexing places a sparse index over an inner index to reduce block accesses.

**Answer:** A, B, D
**Explanation:** Secondary indices must be dense because the data file is not sorted by the secondary search key.

---

**Question 17** (select all that apply)
Which statements about index organization are correct?
A. A file can have at most one clustering (primary) index.
B. A secondary index must be dense.
C. For the same file, a sparse index occupies fewer blocks than a dense index.
D. A sparse index has one entry per record.

**Answer:** A, B, C
**Explanation:** Sparse indices store one entry per block, not per record, which dramatically cuts down block overhead.

---

**Question 18**
A file of 900,000 records with a blocking factor of 30 records/block occupies __________ data blocks.

**Answer:** 30,000
**Explanation:** 900,000 / 30 = 30,000 blocks.

---

**Question 19**
With 256 index entries per block, a DENSE primary index on that file requires __________ blocks.

**Answer:** 3516
**Explanation:** Ceil(900,000 / 256) = 3516 blocks.

---

**Question 20**
A SPARSE primary index (one entry per data block) on that file requires __________ blocks.

**Answer:** 118
**Explanation:** Ceil(30,000 / 256) = 118 blocks.

---

**Question 21**
A second-level sparse index built over the 118 first-level index blocks requires __________ block(s).

**Answer:** 1
**Explanation:** Ceil(118 / 256) = 1 block.

---

**Question 22** (select all that apply)
For a B+-tree of order n=5 (max 4 keys/leaf, max 5 pointers/internal node):
A. A non-root internal node has between 3 and 5 children.
B. A leaf holds between 2 and 4 search-key values.
C. The root must have at least 3 children.
D. Every path from the root to a leaf has the same length.

**Answer:** A, B, D
**Explanation:** The root must have at least 2 children or be a single leaf node.

---

**Question 23** (select all that apply)
Which statements about B+-tree insertion are correct?
A. Inserting into a full leaf forces the leaf to split.
B. On a split, a separator key is propagated (copied) up to the parent.
C. A split may cascade up to the root and increase the tree's height.
D. Inserting keys in sorted order keeps nodes about two-thirds full.

**Answer:** A, B, C
**Explanation:** Inserting keys in pre-sorted order leaves nodes exactly half full, while random insertions keep them around 2/3 full.

---

**Question 24**
Inserting 1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42 into an empty order-4 B+-tree yields a tree of height __________ levels.

**Answer:** 3
**Explanation:** Inserting these 12 keys splits leaves and cascades upward, elevating the tree to exactly 3 levels.

---

**Question 25**
In a B+-tree of order n, every internal node other than the root has at least __________ children.

**Answer:** ceil(n/2)
**Explanation:** By definition of B+ trees, internal nodes must maintain floor and ceiling properties for balanced storage bounds.

---

**Question 26**
If every node of a full B+-tree is exactly full, the probability that one random insertion splits the root is __________.

**Answer:** 1
**Explanation:** An insertion into a completely full B+ tree triggers splits all the way back up, inevitably splitting the root.

---

**Question 27**
The leaf nodes of a B+-tree are linked in key order to support __________ queries efficiently.

**Answer:** range
**Explanation:** The linked leaf nodes permit chronological scan of values without re-traversing internal parent branches.

---

**Question 28** (select all that apply)
Which statements about static hashing and overflow are correct?
A. Overflow chaining (closed hashing) links additional buckets in a linked list.
B. Skew can cause some buckets to overflow even while others still have free space.
C. Static hashing automatically adapts its hash function as the file grows.
D. Closed hashing handles deletions better than open hashing for database files.

**Answer:** A, B, D
**Explanation:** Adapting hash functions dynamically is characteristic of extendible/dynamic hashing, not static hashing.

---

**Question 29** (select all that apply)
Which statements about extendable (dynamic) hashing are correct?
A. The bucket-address table doubles when an overflowing bucket's local depth equals the global depth.
B. A bucket whose local depth is less than the global depth can split without doubling the table.
C. The number of table entries pointing to bucket j is 2^(i-j).
D. Extendable hashing eliminates the need for overflow buckets in all cases.

**Answer:** A, B, C
**Explanation:** Extendible hashing doesn't completely eliminate overflow buckets when many identical keys share a hash value.

---

**Question 30**
Static hashing with M=5 buckets of capacity 3, h(k)=k mod 5, inserting 12, 7, 25, 18, 33, 10, 5, 22, 14 needs __________ overflow buckets.

**Answer:** 0
**Explanation:** All keys map to buckets without exceeding the capacity of 3 records per bucket.

---

**Question 31**
Inserting records with hash prefixes 000, 001, 010, 011, 100, 101 (capacity 2, starting global depth 1) ends at global depth __________.

**Answer:** 2
**Explanation:** The keys trigger splits that push the global depth to exactly 2.

---

**Question 32**
With nr = 10,000 records and fr = 20 records/bucket, the rule nB = (nr/fr) x (1 + d) with d = 0.2 recommends __________ buckets.

**Answer:** 600
**Explanation:** (10,000 / 20) * 1.2 = 600 buckets.

---

**Question 33** (select all that apply)
Which correctly describe the ACID properties?
A. Atomicity ensures all-or-nothing execution.
B. Consistency ensures the database moves from one consistent state to another.
C. Isolation ensures concurrent transactions do not interfere.
D. Durability guarantees the effects of uncommitted transactions are saved permanently.

**Answer:** A, B, C
**Explanation:** Durability only guarantees that committed transaction side-effects survive system failures.

---

**Question 34** (select all that apply)
Which statements about schedule classes are correct?
A. Every cascadeless schedule is recoverable.
B. Every recoverable schedule is cascadeless.
C. A strict schedule is both cascadeless and recoverable.
D. Reading data written by an uncommitted transaction risks cascading rollback.

**Answer:** A, C, D
**Explanation:** A recoverable schedule does not have to be cascadeless; cascadelessness is a strictly stronger requirement.

---

**Question 35**
The transaction property guaranteeing that committed changes survive crashes is __________.

**Answer:** durability
**Explanation:** Durability guarantees persistence of committed updates even during subsequent crashes.

---

**Question 36**
A schedule in which no transaction reads data written by an uncommitted transaction is __________ schedule.

**Answer:** cascadeless
**Explanation:** Cascadeless schedules protect against cascading abort cascades.

---

**Question 37**
If Tj reads a value written by Ti, a __________ schedule requires Ti to commit before Tj commits.

**Answer:** recoverable
**Explanation:** A recoverable schedule structures commits to preserve transactional logical dependencies.

---

**Question 38** (select all that apply)
Which statements about conflicts and conflict serializability are correct?
A. Two operations conflict if they belong to different transactions, access the same item, and at least one is a write.
B. Two reads of the same item conflict.
C. Two writes of the same item by different transactions conflict.
D. A schedule is conflict serializable if and only if its precedence graph is acyclic.

**Answer:** A, C, D
**Explanation:** Read-read operations do not conflict because they do not modify any shared database state.

---

**Question 39** (select all that apply)
Which statements about view serializability are correct?
A. Every conflict-serializable schedule is view serializable.
B. Every view-serializable schedule is conflict serializable.
C. Blind writes characterize schedules that are view- but not conflict-serializable.
D. Deciding view serializability of an arbitrary schedule is NP-hard.

**Answer:** A, C, D
**Explanation:** View serializability is a larger class of schedules; not every view-serializable schedule is conflict-serializable.

---

**Question 40**
A schedule is conflict serializable if and only if its precedence graph is __________.

**Answer:** acyclic
**Explanation:** An acyclic precedence graph ensures there exists a clear topological sequence of operations.

---

**Question 41**
A serial order consistent with the precedence graph is obtained by __________ sorting.

**Answer:** topological
**Explanation:** Topological sort lists transactions in the order required to resolve dependent edges.

---

**Question 42**
A write of an item performed without a preceding read of that item is called a __________ write.

**Answer:** blind
**Explanation:** Blind writes occur when a transaction writes a field without checking its previous value first.

---

**Question 43**
The rule that ignores an obsolete write (TS < W-timestamp) instead of rolling it back is the __________ Write Rule.

**Answer:** Thomas'
**Explanation:** Thomas' Write Rule allows outdated write requests to be ignored, facilitating greater concurrency.

---

**Question 44** (select all that apply)
Which statements about two-phase locking (2PL) are correct?
A. A transaction has a growing phase (acquire locks) and a shrinking phase (release locks).
B. 2PL guarantees conflict-serializable schedules.
C. 2PL by itself guarantees freedom from deadlock.
D. Strict 2PL holds all exclusive locks until commit, preventing cascading rollbacks.

**Answer:** A, B, D
**Explanation:** 2PL cannot guarantee deadlock-freedom. Transactions can easily block each other indefinitely.

---

**Question 45** (select all that apply)
Which statements about deadlock handling are correct?
A. A deadlock exists if and only if the wait-for graph contains a cycle.
B. Wait-die (non-preemptive): an older transaction waits; a younger one is rolled back.
C. Wound-wait (preemptive): an older transaction rolls back the younger holder.
D. The timestamp-ordering protocol can itself cause deadlocks.

**Answer:** A, B, C
**Explanation:** Timestamp ordering is intrinsically deadlock-free since transactions never sleep while holding resources.

---

**Question 46**
The point at which a transaction acquires its final lock under 2PL is called the __________.

**Answer:** lock point
**Explanation:** The lock point marks the transition boundary from the growing phase to the shrinking phase.

---

**Question 47**
With timestamps T1=5, T2=10, T3=15 under wait-die, when T3 requests an item held by T2, T3 is __________.

**Answer:** rolled back
**Explanation:** Since T3 is younger than T2, it is not allowed to wait and dies (rolled back).

---

**Question 48**
Under wound-wait, when T1 requests an item held by T2, T2 is __________.

**Answer:** rolled back
**Explanation:** T1 (older) wounds T2 (younger), forcing T2 to abort/roll back.

---

**Question 49**
Given W-timestamp(Q) = 20 and R-timestamp(Q) = 25, a write(Q) by a transaction with TS=22 is __________.

**Answer:** rejected
**Explanation:** Since TS < R-timestamp(Q), the data item was already read by a younger transaction, so the write must be rejected.

---

**Question 50** (select all that apply)
Which statements about log-based recovery are correct?
A. An update log record has the form (Ti, Xj, old-value, new-value).
B. Write-ahead logging requires the log record to reach stable storage before the database is modified.
C. A transaction with a start record but no commit/abort record must be redone.
D. A transaction with both a start and a commit record must be redone.

**Answer:** A, B, D
**Explanation:** Transactions that started but never committed or aborted must be undone (not redone).

---

**Question 51** (select all that apply)
Which statements about checkpoints and recovery phases are correct?
A. A checkpoint reduces the amount of log that must be examined during recovery.
B. The redo phase scans the log forward from the last checkpoint.
C. The undo phase scans the log backward.
D. Compensation (redo-only) records must themselves be undone after a crash.

**Answer:** A, B, C
**Explanation:** Compensation log records (CLRs) represent undo efforts and must never be undone themselves to avoid infinite loops.

---

**Question 52**
The rule requiring a log record to reach stable storage before the database modification is __________ logging.

**Answer:** write-ahead
**Explanation:** WAL protocol secures data against unexpected restarts by flushing transaction details beforehand.

---

**Question 53**
With a checkpoint after every failed transaction, 4 new log entries between checkpoints, and a failure at every 4th of n transactions, the total log entries processed is about __________.

**Answer:** n
**Explanation:** Bounding checkpoint scopes means the size of logs evaluated is linear to execution counts.

---

**Question 54**
With strictly sequential execution and the checkpoint taken after the failed transaction completes, the expected active-list size |L| is __________.

**Answer:** 0
**Explanation:** Completed fail recovery clears out active items immediately on checkpoints, resulting in zero active states.

---

**Question 55**
After the redo phase, transactions that neither committed nor finished rolling back are placed on the __________ list.

**Answer:** undo
**Explanation:** During recovery, active transactions that were active before failure are marked for undo processing.

---

**Question 56** (select all that apply)
Which statements about the ER model are correct?
A. A weak entity set cannot be uniquely identified by its own attributes alone.
B. A weak entity's primary key = owner's primary key + the weak entity's discriminator.
C. A multivalued attribute is mapped to a separate relation.
D. A relationship instance is uniquely identified by its descriptive attributes.

**Answer:** A, B, C
**Explanation:** A relationship instance is uniquely identified by the keys of the participating entity sets, not by its own descriptive attributes.

---

**Question 57** (select all that apply)
Which statements about reducing an ER schema to relations are correct?
A. A many-to-one relationship can be folded into the relation on the 'many' side.
B. A many-to-many relationship maps to a separate relation whose key is the union of the entity keys.
C. A one-to-one relationship must always remain a separate, non-mergeable relation.
D. A weak entity's relation includes the owner's primary key as a foreign key.

**Answer:** A, B, D
**Explanation:** A one-to-one relationship can be cleanly folded/merged into either of the participating entities' relations.

---

**Question 58**
An entity that cannot be uniquely identified by its own attributes alone is a __________ entity.

**Answer:** weak
**Explanation:** Weak entities carry identifying relationships with strong owners to resolve identity.

---

**Question 59**
R(OrderID, CustID, CustName, ProductID, PName, Qty) with standard functional dependencies has candidate key __________.

**Answer:** {OrderID, ProductID}
**Explanation:** Both variables are required to generate closures identifying the remaining elements cleanly.

---

**Question 60**
Because non-key attributes partially depend on parts of that composite key, R is in __________ normal form only.

**Answer:** 1NF
**Explanation:** Partial functional dependencies violate 2NF, leaving the relation strictly in 1NF.

---

**Question 61**
A many-to-many relationship is mapped to a __________ relation.

**Answer:** separate
**Explanation:** Mapping M:N relationships creates a customized bridge relation using outer keys.

---

**Question 62** (select all that apply)
Which statements about distributed transactions and 2PC are correct?
A. A global transaction accesses data at several sites; a local transaction at only one.
B. In Phase 1 the coordinator sends 'prepare' and each participant replies 'ready' or 'abort'.
C. A single abort vote forces the whole transaction to abort.
D. 2PC is non-blocking even when the coordinator fails.

**Answer:** A, B, C
**Explanation:** 2PC is notoriously blocking when the coordinator crashes. Coherence cannot be solved locally among active agents once ready.

---

**Question 63** (select all that apply)
Which statements about 2PC failure handling and 3PC are correct?
A. After sending 'ready T', a site must obey the coordinator's final decision.
B. Coordinator failure in 2PC can cause the blocking problem.
C. 3PC avoids blocking assuming no network partition and at most k site failures.
D. 3PC is widely used in practice because of its low overhead.

**Answer:** A, B, C
**Explanation:** 3PC is rarely used in practice due to excessive communication rounds and message overhead.

---

**Question 64**
With 5 participants and 4 messages each, 2PC exchanges __________ messages; over 4 sequential rounds at 5 ms each it takes __________ ms.

**Answer:** 20
**Explanation:** 5 * 4 = 20 messages exchanged during coordinated phases.

---

**Question 65**
A data item replicated at 5 sites (each up with probability 0.9), available if at least 3 are up, has availability approximately __________.

**Answer:** 0.9914
**Explanation:** Evaluated using binomial probability distributions for independent trials.

---

**Question 66**
If a participant does not crash (0.98), votes YES (0.95), and its vote is not lost (0.99), the probability its YES is delivered is __________.

**Answer:** 0.92169
**Explanation:** 0.98 * 0.95 * 0.99 = 0.92169.

---

**Question 67**
The situation where active sites must wait for a crashed coordinator to recover is the __________ problem.

**Answer:** blocking
**Explanation:** Active ready entities are blocked from committing or aborting while waiting for coordinator restarts.

---

**Question 68** (select all that apply)
Course Registration: Student(SID, Name), Section (SecID, CID, InstructorID), Instructor(InstructorID, Name), and Enroll(SID, SecID, Grade). Which integrity constraints are valid for this design?
A. Enroll.SID is a foreign key referencing Student.SID.
B. Enroll.SecID is a foreign key referencing Section.SecID.
C. (SID, SecID) is the primary key of Enroll.
D. Section.InstructorID is allowed to reference a non-existent instructor.

**Answer:** A, B, C
**Explanation:** Section.InstructorID must reference a valid instructor in the Instructor table, enforcing referential integrity.

---

**Question 69**
In Enroll(SID, SecID, Grade), the primary key is __________.

**Answer:** {SID, SecID}
**Explanation:** The combination of candidate attributes establishes absolute uniqueness for enroll transactions.

---

**Question 70**
The rule 'a student may enroll in a given section at most once' is enforced by the __________ on Enroll.

**Answer:** primary key
**Explanation:** Designating {SID, SecID} as primary prevents matching duplicates.

---

**Question 71** (select all that apply)
A clustered file has 2,000,000 records at 40 records/block (50,000 data blocks); each index block holds 200 entries. Which statements are correct?
A. A dense primary index needs 10,000 blocks.
B. A sparse primary index needs 250 blocks.
C. Built as a multilevel sparse index, the second level needs 2 blocks.
D. The multilevel index reaches a single top block in just 2 levels.

**Answer:** A, B, C
**Explanation:** Multilevel sparse index has first level = 250 blocks, second level = Ceil(250/200) = 2 blocks, and third level = Ceil(2/200) = 1 block. Thus, it needs 3 levels.

---

**Question 72**
For that file, the top level of the multilevel sparse index has __________ block.

**Answer:** 1
**Explanation:** Indexing scales hierarchically until resolving to a single root node on top.

---

**Question 73**
A key lookup using the 3-level sparse index plus one data-block read costs __________ block accesses.

**Answer:** 4
**Explanation:** 3 index block reads + 1 data block read = 4 block accesses.

---

**Question 74** (select all that apply)
A B+-tree (internal nodes up to 4 children, leaves up to 3 keys) is perfectly full at height 3. Ten distinct random keys are inserted one by one. Which statements are correct?
A. The very first insertion is certain to split a leaf.
B. Because every internal node is also full, that split propagates to the root.
C. The probability that at least one of the ten insertions splits the root is 1.
D. After the ten insertions the height of the tree is unchanged.

**Answer:** A, B, C
**Explanation:** Since every node is full, any split rolls up to the root, guaranteeing a root split and height increment.

---

**Question 75**
For a B+-tree with fanout about 100 indexing 1,000,000 records, a single lookup needs about __________ block reads.

**Answer:** 4
**Explanation:** Log_100(1,000,000) = 3 parent levels + 1 data block lookup = 4 blocks.

---

**Question 76** (select all that apply)
Extendable hashing with bucket capacity 4 receives 14 uniformly distributed records (starting from global depth 1). Which statements are correct?
A. After all insertions the structure reaches global depth 2.
B. Four buckets are sufficient to hold the 14 records.
C. A successful search costs about one bucket access (after consulting the directory).
D. Static hashing with 4 buckets of capacity 4 would be guaranteed to avoid overflow.

**Answer:** A, B, C
**Explanation:** Static hashing can still suffer overflow due to key distribution skew regardless of total capacity.

---

**Question 77**
With global depth 2, the extendable-hashing directory (bucket-address table) has __________ entries.

**Answer:** 4
**Explanation:** Size of directory = 2^GlobalDepth = 2^2 = 4 entries.

---

**Question 78** (select all that apply)
A schedule's precedence graph contains the single cycle T1 -> T2 -> T1. Which statements are correct?
A. The schedule is not conflict serializable.
B. If the conflicting writes are blind writes, the schedule may still be view serializable.
C. Applying Thomas' Write Rule can let an obsolete write be skipped, effectively treating the schedule as serializable.
D. A topological sort of this graph yields a valid serial order.

**Answer:** A, B, C
**Explanation:** A cyclic graph has no topological sequence ordering and cannot be sorted.

---

**Question 79**
A schedule whose precedence graph is cyclic but whose conflicting operations are blind writes may still be __________ serializable.

**Answer:** view
**Explanation:** View serializability handles blind writes gracefully through relaxed state checks.

---

**Question 80** (select all that apply)
A recovery scheme takes a checkpoint after every failed transaction; failures occur at every 4th transaction. For the k-th failure the recovery manager processes (6k - 2) log entries. Which statements are correct?
A. At the 1st failure it processes 4 log entries.
B. At the 3rd failure it processes 16 log entries.
C. The number of entries processed grows linearly with k.
D. The number of entries processed is independent of k.

**Answer:** A, B, C
**Explanation:** Processing logs increases linearly with k because 6k - 2 scales directly with execution rounds.

---

**Question 81**
Using 6k - 2, the recovery manager processes __________ log entries at the 5th failure.

**Answer:** 28
**Explanation:** (6 * 5) - 2 = 28.

---

**Question 82** (select all that apply)
For a logistics schema: Warehouse handles Shipment (1:M), Employee manages Warehouse (1:1), Warehouse stores Product (M:N, attribute Quantity), with weak entity Dependent identified by Employee. Which reductions are correct?
A. 'handles' (1:M) is folded into Shipment as a WID foreign key.
B. 'stores' (M:N) becomes a separate relation Stores (WID, PID, Quantity) with key (WID, PID).
C. 'manages' (1:1) can be merged into either Warehouse or Employee.
D. The Dependent relation needs no foreign key to Employee.

**Answer:** A, B, C
**Explanation:** Dependent has a identifying owner context and requires the primary key of the Employee as a foreign key.

---

**Question 83** (select all that apply)
R(OrderID, ProductID, CustID, CustName, PName, Qty) with OrderID->CustID; CustID->CustName; ProductID->PName; {OrderID, ProductID}->Qty. Which statements are correct?
A. The candidate key is {OrderID, ProductID}.
B. R violates 2NF because of partial dependencies on parts of the key.
C. CustName is transitively dependent on the key via CustID.
D. R is already in BCNF.

**Answer:** A, B, C
**Explanation:** R has partial dependencies (e.g. OrderID->CustID depends partially on candidate key {OrderID, ProductID}), violation of 2NF and hence strictly in 1NF only.

---

**Question 84**
The primary key of the weak-entity relation Dependent(EID, DepName, Age) is __________.

**Answer:** {EID, DepName}
**Explanation:** Weak entity primary keys include owner identities plus local discriminating features.

---

**Question 85**
Splitting (CustID, CustName) into its own relation removes a __________ dependency.

**Answer:** transitive
**Explanation:** Removing indirect paths secures database integrity against deletion anomalies.

---

**Question 86** (select all that apply)
A coordinator runs 2PC with 6 participants (4 messages each). Which statements are correct?
A. The total number of messages exchanged is 24.
B. A single abort vote forces a global abort.
C. If the coordinator crashes after participants have voted ready, those participants block.
D. The protocol completes in just 2 message rounds.

**Answer:** A, B, C
**Explanation:** Two-Phase commit completes by cycling 4 sequential communication rounds.

---

**Question 87**
Extending the per-participant YES-delivery probability 0.92169 to 4 participants, with coordinator survival 0.97 and each commit message delivered 0.99: P(global commit) = 0.92169^4 x 0.97 x 0.99^4 ~ __________.

**Answer:** 0.6724
**Explanation:** Yields approximately 0.6724 under the specified compounding constraints.

---

**Question 88**
A data item replicated at 4 sites (each up with probability 0.95), available if at least 2 are up, has availability __________.

**Answer:** 0.9995
**Explanation:** Availability matches the binomial probability of at least 2 successes out of 4 trials, calculating to 0.9995.
