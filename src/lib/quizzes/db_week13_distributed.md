### Week 13: Distributed Database Systems

**Question 1**
A distributed database system consists of:
A. Sites sharing one CPU
B. Independent sites with no physical sharing
C. Only replicated databases
D. One centralized server

**Answer:** B
**Explanation:** A distributed database system consists of multiple logically interrelated databases distributed over a computer network, with independent sites that do not physically share memory or CPU hardware.

---

**Question 2**
In a homogeneous distributed system:
A. Every site uses different DBMS software
B. Sites are unaware of each other
C. All sites use identical software
D. Transactions are not distributed

**Answer:** C
**Explanation:** In a homogeneous distributed database system, all sites run identical database management system (DBMS) software and are fully aware of each other, presenting a unified view to users.

---

**Question 3**
Which issue is common in heterogeneous systems?
A. Lack of storage
B. Schema differences
C. No transaction support
D. No query execution

**Answer:** B
**Explanation:** Heterogeneous distributed database systems use different DBMS softwares, schemas, and query languages across various sites. Translating queries and addressing schema differences/semantic discrepancies are primary bottlenecks.

---

**Question 4**
Full replication means:
A. One fragment at one site
B. Relation stored only at coordinator
C. Relation stored at all sites
D. Data split without copies

**Answer:** C
**Explanation:** Full replication means a complete copy of the relation or database is stored at every single site/node in the distributed database system.

---

**Question 5**
Which is an advantage of replication?
A. Eliminates update cost
B. Improves availability
C. Removes concurrency issues
D. Prevents fragmentation

**Answer:** B
**Explanation:** Replication greatly improves system availability because if one site fails, replicated copies of the data can still be read or updated at other functional sites.

---

**Question 6**
Which is a disadvantage of replication?
A. Reduced fault tolerance
B. Increased update cost
C. No local access
D. No parallelism

**Answer:** B
**Explanation:** Replicating data increases update cost as every single write operation must be propagated to and committed on all sites holding a replica of that item to maintain consistency.

---

**Question 7**
In horizontal fragmentation:
A. Schema is divided column-wise
B. Tuples are divided across fragments
C. Keys are removed
D. Relations are duplicated

**Answer:** B
**Explanation:** Horizontal fragmentation splits a global relation row-by-row, keeping the full schema (columns) intact but distributing different subsets of tuples (rows) among various fragments.

---

**Question 8**
Vertical fragmentation divides:
A. Tuples
B. Relations randomly
C. Schema attributes
D. Transactions

**Answer:** C
**Explanation:** Vertical fragmentation divides a relation column-wise, splitting the schema attributes into smaller subsets of columns across different fragments.

---

**Question 9**
In vertical fragmentation, all fragments must contain:
A. Timestamp
B. Candidate key
C. Log file
D. Foreign key only

**Answer:** B
**Explanation:** To guarantee lossless join reconstruction of a vertically fragmented relation, every fragment must retain a common candidate key (usually the primary key) to link columns back together.

---

**Question 10**
Which relational algebra operator is mainly used in horizontal fragmentation?
A. Projection
B. Selection
C. Join
D. Cartesian product

**Answer:** B
**Explanation:** Horizontal fragmentation divides a relation using the selection ($\sigma$) operator to isolate rows based on descriptive conditions.

---

**Question 11**
Which operator is mainly used in vertical fragmentation?
A. Projection
B. Difference
C. Selection
D. Division

**Answer:** A
**Explanation:** Vertical fragmentation divides a relation using the projection ($\Pi$) operator to isolate different fields or columns of the table schema.

---

**Question 12**
Fragmentation transparency means users are unaware of:
A. Transaction logs
B. Data fragmentation details
C. SQL syntax
D. Deadlocks

**Answer:** B
**Explanation:** Fragmentation transparency means users can write standard SQL queries as if the database is not fragmented, leaving the system to map query components to appropriate physical fragments underneath.

---

**Question 13**
Replication transparency hides:
A. Number and location of replicas
B. SQL execution plans
C. Fragment schemas
D. Lock tables

**Answer:** A
**Explanation:** Replication transparency shields standard users from the existence and layout of redundant replicas, executing and synchronizing read/write requests automatically without user configuration.

---

**Question 14**
Which component starts distributed transactions?
A. Buffer manager
B. Local transaction manager
C. Transaction coordinator
D. Recovery daemon

**Answer:** C
**Explanation:** The transaction coordinator starts the execution of a distributed transaction, divides it into subtransactions, and coordinates the eventual commit or abort process.

---

**Question 15**
The local transaction manager is responsible for:
A. Global commit decisions only
B. Local logging and concurrency control
C. Network routing
D. Fragmentation transparency only

**Answer:** B
**Explanation:** Each site has a local transaction manager that processes subtransaction actions, takes charge of local logging, and handles local locking/concurrency control.

---

**Question 16**
Which failure occurs when a network splits into disconnected subsystems?
A. Link failure
B. Message corruption
C. Network partition
D. Deadlock

**Answer:** C
**Explanation:** A network partition splits the network into two or more disjoint sub-networks that cannot communicate with each other, though nodes within each sub-network remain functional.

---

**Question 17**
The industry-standard distributed commit protocol is:
A. Strict 2PL
B. Timestamp ordering
C. Two-Phase Commit
D. Thomas Write Rule

**Answer:** C
**Explanation:** The Two-Phase Commit (2PC) protocol is the industry standard for ensuring transaction atomicity across multiple participants in distributed systems.

---

**Question 18**
In 2PC, the coordinator writes which log record before asking participants?
A. `<commit T>`
B. `<abort T>`
C. `<prepare T>`
D. `<redo T>`

**Answer:** C
**Explanation:** At the beginning of the commit phase, the coordinator writes a `<prepare T>` record to its stable log before sending prepare requests to all participants.

---

**Question 19**
A participant sends `<ready T>` when:
A. It crashes
B. It can commit safely
C. It aborts transaction
D. Coordinator fails

**Answer:** B
**Explanation:** When a participant decides it is able to safely commit the transaction (meaning its actions are completed and logged to persistent stable storage), it registers `<ready T>` in its local log and votes ready to the coordinator.

---

**Question 20**
In 2PC, a transaction commits only if:
A. One site votes ready
B. Majority votes ready
C. All participants vote ready
D. Coordinator alone decides

**Answer:** C
**Explanation:** Transaction atomicity in 2PC dictates that a transaction commits *if and only if* every single participating node votes ready to commit. A single abort vote forces a global abort.

---

**Question 21**
If any participant votes abort during 2PC:
A. Transaction still commits
B. Coordinator waits forever
C. Transaction aborts
D. Data is replicated

**Answer:** C
**Explanation:** Under the all-or-nothing property of distributed commit protocol, if even a single participant votes abort, the coordinator must immediately abort the entire global transaction.

---

**Question 22**
Which protocol is more resilient but more expensive than 2PC?
A. 2PL
B. Timestamp ordering
C. Three-Phase Commit
D. WAL

**Answer:** C
**Explanation:** The Three-Phase Commit (3PC) protocol extends 2PC to eliminate the blocking problem under fail-stop failure scenarios. However, it requires an extra communication phase, making it more expensive.

---

**Question 23**
In the fail-stop model:
A. Failed sites send corrupted messages
B. Failed sites stop functioning completely
C. Transactions auto-commit
D. Logs are deleted

**Answer:** B
**Explanation:** Under the fail-stop failure model, a node behaves correctly until it crashes, at which point it completely stops active execution and sending messages.

---

**Question 24**
Which failure is generally indistinguishable from network partition?
A. Deadlock
B. Site failure
C. Serialization failure
D. Dirty read

**Answer:** B
**Explanation:** A site failure is extremely difficult to distinguish from a network partition or a link failure, as both result in the absolute absence of communication from that node.

---

**Question 25**
Which issue is a major drawback of 2PC?
A. No atomicity
B. No concurrency
C. Blocking problem
D. No logging

**Answer:** C
**Explanation:** The blocking problem is the primary downside of 2PC. If the coordinator crashes while participants are in the ready state, the participants are blocked from committing or aborting independently and must wait indefinitely.

---

### Section B: Multiple-Select Questions

**Question 26**
Which are advantages of replication? (Select all that apply)
A. Availability
B. Reduced data transfer
C. Parallel query processing
D. Elimination of concurrency control

**Answer:** A, B, C
**Explanation:** Data replication provides high availability (A), allows queries to resolve locally without importing remote records (B), and permits parallel, distributed query execution (C). It actually increases concurrency control complexity (D is false).

---

**Question 27**
Which are disadvantages of replication? (Select all that apply)
A. Increased update cost
B. Concurrency complexity
C. Loss of availability
D. Replica inconsistency risk

**Answer:** A, B, D
**Explanation:** Major drawbacks of replication include increased overhead for routing updates to all replicas (A), complex multi-node transaction coordination (B), and issues with temporary or long-term replica inconsistency (D). It increases data availability (C is false).

---

**Question 28**
Which statements about homogeneous distributed systems are TRUE? (Select all that apply)
A. All sites use identical software
B. Sites cooperate fully
C. Appears as one unified system
D. Schemas always differ

**Answer:** A, B, C
**Explanation:** In homogeneous systems, all sites run identical DBMS software (A), collaborate to process incoming requests (B), and present themselves to users as a single centralized system (C). Schemas match (D is false).

---

**Question 29**
Which are types of data distribution? (Select all that apply)
A. Replication
B. Fragmentation
C. Combined approach
D. Serialization

**Answer:** A, B, C
**Explanation:** Distribution strategies include Replication (storing copies) (A), Fragmentation (splitting parts) (B), or a hybrid/combined partition schema (C). Serialization is a concurrency protocol concept.

---

**Question 30**
Which are transparency issues in distributed DBMS? (Select all that apply)
A. Fragmentation transparency
B. Replication transparency
C. Location transparency
D. Conflict serializability transparency

**Answer:** A, B, C
**Explanation:** Standard transparencies designed to simplify user queries in a distributed setup include Fragmentation transparency (A), Replication transparency (B), and Location transparency (the user doesn't need to specify which node holds the record) (C). Conflict serializability is an internal isolation measure, not a user transparency issue.

---

**Question 31**
Which are responsibilities of a transaction coordinator? (Select all that apply)
A. Start distributed transaction
B. Distribute subtransactions
C. Coordinate commit/abort
D. Manage disk buffering

**Answer:** A, B, C
**Explanation:** The transaction coordinator initiates global transactions (A), schedules subtransaction work units to participant nodes (B), and governs the global commit or abort protocols (C). Disk buffering (D) is handled locally.

---

**Question 32**
Which failures are handled by communication/network protocols? (Select all that apply)
A. Message loss
B. Link failure
C. Dirty reads
D. Cascading rollback

**Answer:** A, B
**Explanation:** Network-level failures like lost packets (A) or snapped transmission links (B) are managed by distributed communication layers. Dirty reads and rollbacks are transaction and concurrency phenomena.

---

**Question 33**
Which statements about vertical fragmentation are TRUE? (Select all that apply)
A. Schema is split into smaller schemas
B. Common key required
C. Projection operation is used
D. Tuples are selected row-wise only

**Answer:** A, B, C
**Explanation:** Vertical fragmentation splits a table schema column-wise into smaller sub-schemas (A). Each fragment must contain a common key to allow join reconstruction (B), and division is performed using projections (C). Row-wise selection is horizontal fragmentation.

---

**Question 34**
Which actions occur in Phase 1 of 2PC? (Select all that apply)
A. Coordinator sends prepare messages
B. Participant writes `<ready T>`
C. Participant may send abort vote
D. Coordinator broadcasts commit decision

**Answer:** A, B, C
**Explanation:** In Phase 1 (voting phase), the coordinator initiates a vote by sending prepare commands (A). Every participant must verify and log its local status, either writing `<ready T>` to state ready (B) or voting abort (C). Broadcommit occurs in Phase 2 (D).

---

**Question 35**
During Phase 2 of 2PC: (Select all that apply)
A. Coordinator records final decision
B. Decision becomes irrevocable after stable storage write
C. Participants execute local commit/abort
D. Participants vote ready

**Answer:** A, B, C
**Explanation:** In Phase 2 (decision phase), the coordinator writes its overall global decision (commit/abort) to stable log storage (A), making it irrevocable (B). The coordinator then instructs participants to complete their local actions (C). Participant voting (D) takes place in Phase 1.

---

**Question 36**
If a recovering site finds `<commit T>` in its log: (Select all that apply)
A. Execute redo(T)
B. Execute undo(T)
C. Transaction committed earlier
D. Consult coordinator mandatory

**Answer:** A, C
**Explanation:** Finding `<commit T>` inside the local recovery log guarantees that the transaction was already successfully committed by this participant (C). Therefore, the recovering site simply runs a local redo(T) to guarantee disk persistence (A). Consulting the coordinator is not required.

---

**Question 37**
If log contains `<ready T>` during recovery: (Select all that apply)
A. Site must consult coordinator
B. Transaction definitely aborted
C. Transaction definitely committed
D. Site cannot decide independently immediately

**Answer:** A, D
**Explanation:** A `<ready T>` status means the participant finished its Phase 1 work but did not log a final decision before crashing. The node cannot decide independently whether to commit or abort (D), and must consult the coordinator or peer sites to discover the final verdict (A).

---

**Question 38**
Blocking problem in 2PC occurs when: (Select all that apply)
A. Coordinator fails
B. Participants only have ready records
C. Participants must wait
D. All sites already have commit record

**Answer:** A, B, C
**Explanation:** The blocking problem is triggered when the coordinator crashes (A) while participants have voted ready but haven't received the coordinator's verdict yet (B). This forces participants to wait in a blocked, unresolved state until communication is restored (C). If all sites already have a commit record, the transaction is solved (D is false).

---

**Question 39**
Which statements about horizontal fragmentation are TRUE? (Select all that apply)
A. Tuples distributed across fragments
B. Selection operator commonly used
C. Supports locality of access
D. Splits attributes column-wise

**Answer:** A, B, C
**Explanation:** Horizontal fragmentation divides tuples row-by-row (A), leverages selection operators to subdivide records (B), and keeps relevant records close to their most frequent usage site to improve locality (C). Column-wise split refers to vertical fragmentation.

---

**Question 40**
Which are advantages of fragmentation? (Select all that apply)
A. Parallel processing
B. Localized access efficiency
C. Better scalability
D. Automatic deadlock prevention

**Answer:** A, B, C
**Explanation:** Fragmentation splits dataset tables to promote localized access speed (B), enables parallel processing of single queries across fragments (A), and supports server scaling (C). It does not automatically prevent deadlocks (D).

---

### Section C: Fill-in-the-Blank Questions

**Question 41**
In a distributed DBMS, a relation stored redundantly at multiple sites is called ________.
**Answer:** replicated
**Explanation:** Data replication holds duplicate records of relational structures at distinct node locations.

---

**Question 42**
The protocol ensuring all sites either commit or abort together is called ________.
**Answer:** Two-Phase Commit
**Explanation:** Two-Phase Commit is a distributed consensus standard that guarantees all nodes apply identical transaction decisions.

---

**Question 43**
In vertical fragmentation, all fragments must contain a common ________.
**Answer:** candidate key
**Explanation:** Retaining a shared candidate key allows reconstructing the complete columns via loss-less joins.

---

**Question 44**
A network splitting into disconnected subsystems is called ________.
**Answer:** network partition
**Explanation:** A network partition disconnects nodes, creating separate isolated subgroups that cannot communicate with each other.

---

**Question 45**
The coordinator writes `<________ T>` before sending prepare messages.
**Answer:** prepare
**Explanation:** Writing `<prepare T>` to local log is the first step of Phase 1 before distributed polling.

---

**Question 46**
In 2PC, the final decision becomes irrevocable after being forced to ________ storage.
**Answer:** stable
**Explanation:** Writing the decision to non-volatile stable storage makes the global verdict permanent.

---

**Question 47**
The transaction manager maintaining logs at each site is called the ________ transaction manager.
**Answer:** local
**Explanation:** The local transaction manager oversees the logging and conflict tracking at its own physical node.

---

**Question 48**
Fragmentation that divides tuples row-wise is called ________ fragmentation.
**Answer:** horizontal
**Explanation:** Horizontal fragmentation divides logical tables horizontally using selection parameters.

---

**Question 49**
Fragmentation that divides schema attributes column-wise is called ________ fragmentation.
**Answer:** vertical
**Explanation:** Vertical fragmentation segments tables vertically by dividing schema attributes into separate fragments.

---

**Question 50**
In distributed databases, the major drawback of 2PC where participants wait indefinitely is called the ________ problem.
**Answer:** blocking
**Explanation:** If the coordinator halts permanently during the active step, the participant nodes are left in the ready state indefinitely, causing a bottleneck known as the blocking problem.
