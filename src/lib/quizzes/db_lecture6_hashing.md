### Lecture 6: Static and Extendable Hashing

**Question 1**
In hashing, a bucket represents:
A. Direct memory reference pointers but no actual disk blocks
B. A relational table schema in memory
C. A physical disk block storing one or more records
D. A leaf node in a B+ Tree

**Answer:** C
**Explanation:** A bucket is a unit of storage that represents one or more records. It is usually mapped directly to a physical storage disk block.

---

**Question 2**
What does a hash function h map?
A. Storage bucket addresses to search-key values
B. Search-key values directly to storage bucket addresses
C. Relational datasets to primary index key lists
D. Binary strings to physical CPU register indices

**Answer:** B
**Explanation:** A hash function h takes search-key value as input and maps it to a corresponding bucket address where target record resides.

---

**Question 3**
Which of the following is a key characteristic of Static Hashing?
A. The number of bucket addresses remains completely fixed
B. The directory structure automatically doubles on bucket split
C. Global depth must match local depth of all bucket units
D. Overflow blocks are never required because keys redistribute

**Answer:** A
**Explanation:** In static hashing, the database maps search-keys to a fixed set of bucket addresses. This makes it vulnerable to performance degradation if records grow.

---

**Question 4**
In a hashing system, what is "collision"?
A. Two records sharing the exact same primary search key
B. Two different search keys hashing to the exact same bucket address
C. A database transaction failing to commit before lock timeout
D. An index pointer referencing an deleted disk block

**Answer:** B
**Explanation:** A collision occurs when two distinct search keys output the same hash value, pointing to the same storage bucket.

---

**Question 5**
Which of the following properties describes a "uniform" hash function?
A. It maps every key to the first bucket address
B. Each bucket is assigned the same number of keys on average across the entire domain
C. Keys are mapped in strictly ascending sequence
D. The hashing speed is constant regardless of key size

**Answer:** B
**Explanation:** Uniformity guarantees that hash values are distributed evenly representing an equal probability of assigning keys to each bucket.

---

**Question 6**
Which hashing property ensures that key distribution is independent of any existing patterns in search-key values?
A. Uniformity
B. Randomness
C. Consistency
D. Non-overlapping

**Answer:** B
**Explanation:** Randomness ensures that the hash function maps keys such that the distribution is random and unaffected by any physical patterns or ordering in search-key values.

---

**Question 7**
Under static hashing, what occurs if an inserted record hashes to a bucket that has no remaining capacity?
A. The record is discarded and transaction rolls back
B. An overflow bucket is chained via a linked list
C. The hash table automatically doubles its container capacity
D. The system forces a B+ Tree split transition

**Answer:** B
**Explanation:** Overflow chaining is used in static hashing: if a bucket fills, an overflow bucket is appended to that bucket using pointers.

---

**Question 8**
What is "skew" in the context of hash-index distributions?
A. Fast operations on even keys and latency on odd keys
B. Discrepancy where some buckets receive much more records than others
C. Height imbalance of directory pointers
D. Overlapping bucket boundaries

**Answer:** B
**Explanation:** Skew occurs when distribution is non-uniform, causing some buckets to be heavily loaded while others remain empty.

---

**Question 9**
In Extendable Hashing, what does the directory consist of?
A. A linked list of overflow disk pages
B. A dynamic array of bucket pointers
C. A balanced search tree representing index segments
D. An static allocation matrix

**Answer:** B
**Explanation:** The extendable hashing directory is an array of pointers referencing actual physical storage buckets. It is indexable via hash key suffixes/prefixes.

---

**Question 10**
In Extendable Hashing, what does the "Global Depth" (GD) represent?
A. The size of the largest overflow chain
B. The maximum height of the hash tree structure
C. The number of bits of the hash value used to index the directory
D. The number of records stored inside the primary bucket

**Answer:** C
**Explanation:** Global Depth defines how many bits of hash value suffix (or prefix) are used to determine directory indexes. For GD = d, the directory size is 2^d.

---

**Question 11**
In Extendable Hashing, what does the "Local Depth" (LD) of a bucket represent?
A. The number of bits of the hash value currently shared by all keys inside that bucket
B. The total number of keys currently stored within the bucket
C. The relative distance from the root block
D. The physical disk sector index of the bucket

**Answer:** A
**Explanation:** Local Depth indicates the number of bits of hash values that determined the assignment of keys into this specific bucket. It is always less than or equal to GD.

---

**Question 12**
If Global Depth (GD) is 3, what is the maximum number of entries in the directory array?
A. 3
B. 6
C. 8
D. 9

**Answer:** C
**Explanation:** A directory with global depth GD holds exactly 2^GD entries. 2^3 = 8.

---

**Question 13**
Suppose a bucket with Local Depth LD = 2 overflows. If the Global Depth GD is 3, what structural change is triggered first?
A. The directory size doubles to 16 entries
B. It is split into two buckets, each with LD = 3, and directory pointers are updated without doubling
C. An overflow page is appended and both bucket and directory remain unchanged
D. The global depth of the entire index is decremented by 1

**Answer:** B
**Explanation:** Since LD (2) is strictly less than GD (3), the bucket can be split and its keys re-hashed with LD incremented to 3. The directory does not double because the existing entries are sufficient to accommodate the split pointer.

---

**Question 14**
When does the directory in an Extendable Hashing scheme double in size?
A. When any bucket splits and its original Local Depth was equal to the current Global Depth (LD = GD)
B. When the total number of records exceeds directory slot boundaries
C. When any bucket reaches capacity limit and its Local Depth is strictly less than Global Depth
D. When an overflow chain has more than 3 elements

**Answer:** A
**Explanation:** If LD = GD, splitting the bucket requires incrementing local depth to LD + 1 (which becomes greater than GD). Therefore, the directory must double (GD incremented by 1) to support indexing with more bits.

---

**Question 15**
If Global Depth is 4 and a bucket has Local Depth 2, how many directory entries point to this specific bucket?
A. 1
B. 2
C. 4
D. 8

**Answer:** C
**Explanation:** The number of directory entries pointing to a bucket with local depth LD is 2^(GD - LD). Here, 2^(4 - 2) = 2^2 = 4 entries point to it.

---

**Question 16**
What is a major advantage of Extendable Hashing over Static Hashing?
A. It performs range queries with high efficiency
B. It guarantees that the hash table size never changes
C. Space is allocated dynamically, matching database growth without chaining long overflow lines
D. It completely eliminates CPU mathematical computation time

**Answer:** C
**Explanation:** Extendable Hashing allows the index structure to grow and shrink dynamically, avoiding performance degradation from long overflow chains.

**Question 17**
In modern systems, why is hashing usually preferred over B+ Trees for point queries?
A. Hashing naturally supports sorted ranges
B. Point lookup on hash structures usually requires only 1 I/O operation (or near 1), compared to root-to-leaf paths
C. Hashing utilizes less RAM cache space
D. Hash structures never experience key collisions on insert

**Answer:** B
**Explanation:** Point lookups in hashing locate the correct bucket directly using the hash function, typically requiring a single disk block access. B+ tree traversal requires navigating several tree levels.

---

**Question 18**
What happens to the remaining bucket pointers when the directory doubles in an Extendable Hashing split?
A. Re-allocated to completely new storage blocks
B. For each original entry, two directory slots in the doubled directory now target the exact same unchanged bucket
C. They are cleared to NULL until new inserts arrive
D. They are re-hashed using a secondary salt function

**Answer:** B
**Explanation:** Doubling the directory creates new entries. Unsplit buckets are referenced by two pointers instead of one, corresponding to the new bit combinations.

---

**Question 19**
A hashing structured index cannot support range queries efficiently because:
A. The hash function randomizes the physical order of database keys across bucket units
B. Overflow pages are too small to store ranges
C. The directory size cannot accommodate sorted pointers
D. Disk blocks must remain unorganized for security reasons

**Answer:** A
**Explanation:** Hash functions randomize search-key values, so consecutive keys fall into randomly scattered buckets. This requires searching the entire table for clean range ranges.

---

**Question 20**
What is the effect of having excessively large buckets in a hash index design?
A. The directory doubles more frequently
B. Each bucket read requires traversing and searching through more records, increasing CPU and I/O costs inside blocks
C. Collisions are completely eliminated from the hash table
D. The Global Depth remains capped at 1

**Answer:** B
**Explanation:** While larger buckets reduce split frequencies, they increase sequential scanning time inside the bucket to identify the correct record.

---

### Section B: Multiple-Select Questions (Select all that apply)

**Question 21**
Which of the following are design goals of a robust hash function? (Select all that apply)
A. Distributing hash values uniformly across all buckets
B. Guaranteeing that consecutive keys always map to consecutive buckets
C. Minimizing collisions to prevent overflow chaining
D. Adapting dynamically to match the exact size of the database

**Answer:** A, C
**Explanation:** Robust hash functions aim for uniformity and collision minimization. Range preservation (B) is not a goal and contradicts randomized distribution.

---

**Question 22**
Which options can cause structural skew in hashing indexes? (Select all that apply)
A. Having many records share identical search key attributes
B. Utilizing an ineffective hash function that maps key values to limited indices
C. The database system running under concurrent write transactions
D. Designing buckets to store only physical pointers rather than complete record blocks

**Answer:** A, B
**Explanation:** Skew is caused by duplicate key values (multiple identical key insertions) or poorly designed hash functions. Transaction lock contentions do not affect hash distribution patterns.

---

**Question 23**
In Extendable Hashing, which statements are true when a bucket splits? (Select all that apply)
A. The local depth of the split bucket must increase by 1
B. The global depth of the directory must double
C. Pointers must be updated to separate keys with the new significant bit
D. Keys in the overflowing bucket are redistributed between the old bucket and a newly allocated bucket

**Answer:** A, C, D
**Explanation:** Splitting increments the bucket's local depth and redistributes keys. The directory doubles only if the original local depth of the split bucket is equal to global depth.

---

**Question 24**
Which of the following are drawbacks of Extendable Hashing? (Select all that apply)
A. The directory size can grow very large if the hash values are skewed
B. Doubling the directory requires reallocating the directory array, which can be expensive at massive scales
C. Traversing the directory adds an extra layer of pointer dereferencing
D. It cannot resolve collisons, so it eventually degrades to static hashing

**Answer:** A, B, C
**Explanation:** Extendable hashing suffers from directory size issues if keys skew, array allocation overhead at huge scales, and dereferencing costs. It resolves collisions through dynamic splits.

---

**Question 25**
Which of the following hashing components are stored on disk? (Select all that apply)
A. Data buckets storing actual target relations
B. The hash function mathematical formulas
C. The index directory array in large-scale Extendable Hashing implementations
D. The transaction active lock tables

**Answer:** A, C
**Explanation:** Buckets and directories are persisted on disk. The hash function is part of compiled executable program logic, and locks are managed dynamically in RAM.

---

**Question 26**
Identify the differences between B+ Tree and Extendable Hashing: (Select all that apply)
A. B+ Tree supports efficient range queries, whereas Extendable Hashing does not
B. B+ Tree point lookups grow logarithmically, while Extendable Hashing point queries are typically constant O(1)
C. B+ Tree has overflow blocks but Extendable Hashing never uses them
D. B+ Tree is balanced dynamically, while Extendable Hashing relies on directory splits

**Answer:** A, B, D
**Explanation:** B+ Trees are ideal for ranges and have O(log N) depth. Extendable Hashing maps points in O(1) and splits directories/buckets. Extendable hashing may occasionally use overflow chains in cases of duplicate keys.

---

**Question 27**
Which of the following parameters are used to determine if a directory should resize? (Select all that apply)
A. The Global Depth (GD) of the directory
B. The Local Depth (LD) of the overflowing bucket
C. The number of records in the index
D. The CPU core execution frequency of the database node

**Answer:** A, B
**Explanation:**resizing/doubling the directory occurs when a split is triggered on a bucket where LD = GD.

---

**Question 28**
What features make Linear Hashing different from Extendable Hashing? (Select all that apply)
A. Linear Hashing does not require a directory array
B. Linear Hashing splits buckets in a structural round-robin order rather than split-only-on-overflow
C. Linear Hashing never has overflow pages
D. Linear Hashing uses families of hash functions h_0, h_1, etc.

**Answer:** A, B, D
**Explanation:** Linear hashing avoids directory arrays, splits buckets systematically using a pointer, and implements multiple hash functions to transition between levels. It does use overflow pages.

---

**Question 29**
In Extendable Hashing, if Global Depth (GD) is 5 and Local Depth (LD) is 3, which of the following are true? (Select all that apply)
A. The directory has exactly 32 pointers
B. There are exactly 4 separate directory entries pointing to this bucket
C. The bucket must split immediately because LD is smaller than GD
D. The bucket shares keys with other entries that match the same 3-bit prefix/suffix

**Answer:** A, B, D
**Explanation:** Directory size is 2^5 = 32. The number of pointers to this bucket is 2^(5 - 3) = 2^2 = 4. The bucket is stable and does not split until it overflows.

---

**Question 30**
Which of the following techniques are used to handle overflows in Static Hashing? (Select all that apply)
A. Overflow chaining (linked lists of blocks)
B. Open addressing (linear probing)
C. Double hashing
D. Increasing directory level recursively

**Answer:** A, B, C
**Explanation:** Static hashing handles overflows via chaining or open addressing strategies (linear probing, quadratic probing, double hashing). It does not use directory arrays.

---

**Question 31**
Which statements about hash indices are correct? (Select all that apply)
A. A hash index can be secondary or primary
B. Hash indices work well with SQL equality predicates like `WHERE age = 21`
C. Hash indices are always sparse
D. Hash indices utilize hash functions to find the search block directly

**Answer:** A, B, D
**Explanation:** Hash indices are optimal for point lookups (equality) and direct mapping. They can be secondary or primary, but they are typically dense (storing pointers to every key) to avoid scan lookups.

---

**Question 32**
Suppose multiple directory entries point to a single bucket. If this bucket splits, what updates occur? (Select all that apply)
A. A new bucket page is allocated on disk
B. The local depth of the split bucket is incremented
C. Half of the pointing directory entries are updated to reference the new bucket address
D. The system must double the directory size

**Answer:** A, B, C
**Explanation:** On split when LD < GD, the local depth is incremented and a new bucket block is allocated. The pointing directory slots are partitioned, and half now point to the new bucket. No doubling occurs because LD was strictly less than GD.

---

**Question 33**
A hash index can degrade in performance due to: (Select all that apply)
A. Suboptimal hash function causing high collisions
B. Extreme duplicate keys that all hash to the same value
C. System growing much larger than the static bucket configuration
D. Selecting a high global depth in advance

**Answer:** A, B, C
**Explanation:** Collision chains, high duplicate volumes, and fixed bucket capacities in a growing database are primary sources of hashing performance degradation.

---

**Question 34**
When designing an Extendable Hashing system, what bits of the hash can be used to index? (Select all that apply)
A. The most significant bits (prefix)
B. The least significant bits (suffix)
C. Middle bits of the hashed key string
D. Fully encrypted block hashes only

**Answer:** A, B
**Explanation:** Both prefixes (most significant bits) and suffixes (least significant bits) are valid and commonly used in hashing directory index distributions.

---

**Question 35**
Which of the following events can happen during an insert operation in Extendable Hashing? (Select all that apply)
A. A record is placed in an existing bucket with remaining slot capacity
B. A bucket splits but the directory stays the same size
C. A bucket splits and the directory doubles in size
D. An overflow block is chained because all key suffixes in that bucket are identical

**Answer:** A, B, C, D
**Explanation:** These are all valid scenarios during insertions. If all keys inside a full bucket share the exact same hash suffix/prefix value, splitting will not help because they will still hash to the same bucket. In such rare identical-hash scenarios, an overflow chain page must be allocated.

---

**Question 36**
The size of a database hash bucket can be determined by: (Select all that apply)
A. The file sector size of the underlying physical storage disk
B. The expected size of records being indexed
C. The local depth parameter of the database system
D. The memory buffer page dimensions

**Answer:** A, B, D
**Explanation:** Bucket size is determined by storage disk pages, record sizes, and buffer configurations (not the local depth).

---

**Question 37**
Which of the following queries can benefit from a hash index? (Select all that apply)
A. `SELECT * FROM student WHERE id = 'S102'`
B. `SELECT * FROM student WHERE id > 'S100' AND id < 'S200'`
C. `SELECT * FROM student WHERE department = 'CSE'`
D. `SELECT * FROM student ORDER BY name`

**Answer:** A, C
**Explanation:** Hash indices only accelerate point (equality) queries. Range queries (B) and ordering (D) cannot utilize hash tables efficiently.

---

**Question 38**
If an Extendable Hash directory has doubled, what is true? (Select all that apply)
A. The new Global Depth is old Global Depth + 1
B. The new index directory size is twice the old index directory size
C. Every bucket in the system has duplicated its Local Depth
D. The hash function must map keys to larger bit strings than before

**Answer:** A, B
**Explanation:** Resizing increments GD by 1 and doubles the directory slots. Bucket local depths remain unchanged except for the split bucket that triggered the resize.

---

**Question 39**
In Extendable Hashing, what conditions indicate a bucket is pointed to by exactly one directory entry? (Select all that apply)
A. Local Depth of that bucket is equal to the Global Depth (LD = GD)
B. Local Depth of that bucket is 0
C. Global Depth of the directory is 0
D. The bucket has accumulated more than 10 overflow chains

**Answer:** A, C
**Explanation:** When LD = GD, 2^(GD - LD) = 2^0 = 1, meaning exactly one pointer targets this bucket. If GD = 0, there is only 1 entry in the directory.

---

**Question 40**
Which of the following statements about linear hashing are true? (Select all that apply)
A. It splits buckets sequentially from the first to the last in a systematic phase
B. It dynamically allocates directory cells during splits
C. It handles overflow pages using chaining
D. It has predictable, controlled growth overhead compared to the directory-doubling event in extendable hashing

**Answer:** A, C, D
**Explanation:** Linear hashing splits round-robin using a pointer, uses overflow chaining, and grows linearly without incurring massive doubling costs. It does not use directories.

---

### Section C: Fill-in-the-Blank Questions

**Question 41**
If an Extendable Hashing directory has Global Depth GD = 5, the total number of entries in the directory is:
**Answer:** 32
**Explanation:** Directory size is 2^GD. 2^5 = 32 entries.

---

**Question 42**
If Global Depth is 5 and a bucket has Local Depth 3, the number of directory entries pointing to this bucket is:
**Answer:** 4
**Explanation:** Pointers = 2^(GD - LD). 2^(5 - 3) = 2^2 = 4 entries point to this bucket.

---

**Question 43**
The minimum Local Depth of a bucket in an Extendable Hashing system with Global Depth GD = 4 is:
**Answer:** 0
**Explanation:** Local Depth can be as low as 0, in which case all 2^4 = 16 directory entries point to this single bucket.

---

**Question 44**
If a bucket has Local Depth LD = 3 and it splits, its new Local Depth will be:
**Answer:** 4
**Explanation:** Splitting a bucket increases its Local Depth by exactly 1 level.

---

**Question 45**
Suppose a hash table has 10 buckets in a static hashing layout. If the hash function distributes keys perfectly uniformly, and we insert 120 records, each bucket will contain exactly how many records?
**Answer:** 12
**Explanation:** Uniform distribution ensures equal records per bucket. 120 / 10 = 12 records.

---

**Question 46**
If an Extendable Hashing directory has 128 slots, its Global Depth is:
**Answer:** 7
**Explanation:** 2^GD = 128 => GD = log2(128) = 7.

---

**Question 47**
In Extendable Hashing, if GD = 3, and a bucket has LD = 3, how many directory entries point to it?
**Answer:** 1
**Explanation:** 2^(GD - LD) = 2^(3 - 3) = 2^0 = 1 directory entry.

---

**Question 48**
If our hash function outputs a 32-bit integer, what is the maximum possible Global Depth we can support before running out of hash bits?
**Answer:** 32
**Explanation:** Since the hash value has 32 bits, we can index the directory using at most 32 bits.

---

**Question 49**
Consider an Extendable Hashing directory of size 64. If one bucket has Local Depth 6, how many directory entries point to it?
**Answer:** 1
**Explanation:** GD = log2(64) = 6. Pointers = 2^(GD - LD) = 2^(6 - 6) = 1.

---

**Question 50**
In an Extendable Hashing scheme, if we insert a key that hashes to a full bucket where LD < GD, the number of entries in the directory after the split will be increased by how many slots?
**Answer:** 0
**Explanation:** Since LD < GD, the bucket is split without doubling the directory. Therefore, the directory size remains unchanged, and 0 slots are added.
