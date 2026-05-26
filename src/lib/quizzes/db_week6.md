### Week 6: Hashing & Hash Indices

**Question 1**
In hashing, a bucket usually represents:
A. A relation
B. A disk block storing one or more records
C. An index page only
D. A transaction

**Answer:** B
**Explanation:** A bucket represents a physical block or storage unit on disk that contains one or more database records.

---

**Question 2**
Hash function h maps:
A. Buckets → keys
B. Keys → records
C. Search-key values → bucket addresses
D. Pages → memory

**Answer:** C
**Explanation:** A hash function takes search-key values as arguments and maps them to bucket addresses in memory or on disk.

---

**Question 3**
Static hashing uses:
A. Dynamic number of buckets
B. Fixed set of bucket addresses
C. Infinite buckets
D. Linked lists only

**Answer:** B
**Explanation:** Under static hashing schemes, the total address space and the number of buckets are fixed when the index or file is initialized.

---

**Question 4**
Which operation directly uses the hash function?
A. Search only
B. Insert only
C. Delete only
D. Search, insert and delete

**Answer:** D
**Explanation:** All key manipulation operations (searching, inserting, and deleting records) require hashing the search-key value to locate the corresponding storage bucket.

---

**Question 5**
Collision in hashing means:
A. Same key stored twice
B. Different keys mapped to same bucket
C. Two indexes created
D. Bucket becomes empty

**Answer:** B
**Explanation:** A collision occurs when two or more distinct search-key values are mapped to the exact same bucket address by the hash function.

---

**Question 6**
A desirable property of a hash function is:
A. Sequential mapping
B. Uniform distribution
C. Reverse sorting
D. Compression

**Answer:** B
**Explanation:** An ideal hash function maps search-keys uniformly across all buckets, minimizing collision rates.

---

**Question 7**
Worst-case hash function:
A. Maps evenly
B. Maps all keys to one bucket
C. Creates overflow pages
D. Uses binary trees

**Answer:** B
**Explanation:** A worst-case hash function maps all search-key values to a single bucket, causing severe bucket overflow and rendering lookup speed O(N) rather than O(1).

---

**Question 8**
Bucket overflow occurs mainly due to:
A. Extra memory
B. Insufficient buckets
C. Empty records
D. Sorted insertion

**Answer:** B
**Explanation:** Bucket overflow occurs when there are insufficient buckets or skewed distributions (collisions), causing the number of records mapped to a bucket to exceed that bucket's physical record capacity.

---

**Question 9**
Overflow handling in static hashing commonly uses:
A. AVL Trees
B. Overflow chains/pages
C. Stack
D. Queue

**Answer:** B
**Explanation:** Closed hashing systems handle bucket overflows by chaining extra blocks (overflow pages) sequentially to the primary bucket block.

---

**Question 10**
In page_number = h(value) mod N, N usually should be:
A. Composite
B. Prime
C. Even
D. Odd only

**Answer:** B
**Explanation:** Selecting N as a prime number reduces systematic patterns and periodicities in mapped hash results, yielding a more uniform distribution.

---

**Question 11**
Dynamic hashing solves:
A. Deadlock
B. Fixed bucket limitation
C. SQL joins
D. Transactions

**Answer:** B
**Explanation:** Dynamic hashing methodologies dynamically adjust database bucket and directory sizes to prevent long overflow chains from degrading search operations as the database grows.

---

**Question 12**
Extendable hashing uses:
A. Entire hash value always
B. Prefix/suffix bits of hash value
C. Linked list traversal
D. Sequential search

**Answer:** B
**Explanation:** Extendible hashing uses a prefix or suffix of i bits of the calculated hash to map keys to bucket addresses via a pointer directory.

---

**Question 13**
Directory size in extendable hashing is:
A. N
B. i
C. 2^i
D. i²

**Answer:** C
**Explanation:** A pointer directory of global depth i consists of exactly 2^i relative directory indexes/pointers.

---

**Question 14**
Global depth represents:
A. Number of records
B. Number of buckets
C. Number of bits used for indexing
D. Overflow pages

**Answer:** C
**Explanation:** Global depth represents the number of prefix/suffix bits utilized by the directory to index the bucket structure.

---

**Question 15**
If bucket overflows and i = ij:
A. Split only
B. Double directory size
C. Delete bucket
D. Merge buckets

**Answer:** B
**Explanation:** If a bucket overflows and its local depth ij equals the global depth i, splitting the bucket requires doubling the size of the directory by incrementing the global depth i by one.

---

**Question 16**
Local depth refers to:
A. Hash size
B. Bucket-specific depth
C. Disk depth
D. Tree level

**Answer:** B
**Explanation:** Local depth is associated with an individual bucket and represents the number of hash bits matching the search keys contained within that specific bucket.

---

**Question 17**
Extendable hashing reduces:
A. Directory size
B. Bucket splitting cost
C. Entire file reorganization
D. Query optimization

**Answer:** C
**Explanation:** Rather than reorganizing the complete physical data file when the disk scales, extendible hashing expands directory pointers and splits single overflowing buckets locally.

---

**Question 18**
Hash indices are generally:
A. Primary only
B. Secondary only
C. Clustered only
D. Tree-based

**Answer:** B
**Explanation:** While B+ Trees are commonly chosen for primary sorted indexing, Hash indices are typically utilized for fast secondary search key lookups.

---

**Question 19**
Actual number of buckets in extendable hashing:
A. Always = 2^i
B. Can be less than 2^i
C. Greater than 2^i
D. Infinite

**Answer:** B
**Explanation:** Because multiple directory entries can point to the same physical bucket (whenever the local depth of a bucket is less than the global depth), the actual number of buckets is typically less than 2^i.

---

**Question 20**
Dynamic hashing includes:
A. B+ Tree
B. Extendible hashing
C. Binary Search
D. Merge Sort

**Answer:** B
**Explanation:** Extendible hashing and linear hashing are the two main types of dynamic hashing.

---

**Question 21**
Ideal hash function properties: (Select all that apply)
A. Uniform
B. Random
C. Deterministic
D. Sequential

**Answer:** A, B, C
**Explanation:** An ideal hash function should distribute keys uniformly across buckets with a pseudo-random spread. It must also be deterministic so that hashing a key always yields the same bucket address. It is not sequential.

---

**Question 22**
Bucket overflow can happen because: (Select all that apply)
A. Non-uniform hashing
B. Duplicate search keys
C. Insufficient buckets
D. Sorted records

**Answer:** A, B, C
**Explanation:** Skewed mappings (non-uniformity), many identical duplicate search keys mapping to the same hash, or a lack of total bucket space can all cause overflowing buckets.

---

**Question 23**
Static hashing problems: (Select all that apply)
A. Performance degrades as DB grows
B. Space waste if DB shrinks
C. Expensive reorganization
D. Automatic resizing

**Answer:** A, B, C
**Explanation:** Since static hashing uses a fixed number of buckets, growing databases eventually degrade into search-slowing overflow chains, while shrinking databases result in underutilized memory. Resolving this requires rebuilding the complete hash workspace.

---

**Question 24**
Extendable hashing supports: (Select all that apply)
A. Bucket splitting
B. Bucket coalescing
C. Directory expansion
D. Overflow handling

**Answer:** A, B, C, D
**Explanation:** Extendible hashing supports splitting buckets on overflow, double directory expansion, and page rollbacks (coalescing/merging) when elements are deleted. It also handles overflow using chained blocks if directory expansion constraints are reached.

---

**Question 25**
Insert process in extendable hashing: (Select all that apply)
A. Compute hash
B. Use directory
C. Locate bucket
D. Split if needed

**Answer:** A, B, C, D
**Explanation:** To insert into an extendible hash table, the system hashes the key, inspects directory index pointers, locates the target bucket, writes the record, and splits the bucket if an overflow occurs.

---

**Question 26**
Hash indices can be used for: (Select all that apply)
A. File organization
B. Index creation
C. Record access
D. Sorting

**Answer:** A, B, C
**Explanation:** Hashing is highly effective for structuring physical files, creating secondary indexes, and locating individual records. Hashing is useless for sorting, because it distributes keys pseudo-randomly.

---

**Question 27**
During bucket split: (Select all that apply)
A. Records redistributed
B. Local depth updated
C. Directory may double
D. Hash function removed

**Answer:** A, B, C
**Explanation:** Splitting an overflowing bucket requires redistributing existing records between the split nodes, incrementing their local depth counters, and occasionally doubling the directory size.

---

**Question 28**
Dynamic hashing techniques: (Select all that apply)
A. Extendible hashing
B. Linear hashing
C. B Tree
D. Heap file

**Answer:** A, B
**Explanation:** Extendible and Linear hashing represent dynamic, auto-resizing hash schemes. B-Trees are balanced tree indexes, and heap files represent unsorted, unindexed file organizations.

---

**Question 29**
Multiple directory entries may: (Select all that apply)
A. Point to same bucket
B. Increase local depth
C. Reduce actual buckets
D. Cause collisions

**Answer:** A, C
**Explanation:** Directory pointers share references to the same bucket when its local depth is strictly less than the global directory depth. This minimizes the total number of physical buckets.

---

**Question 30**
Extendable hashing advantages: (Select all that apply)
A. Avoids full reorganization
B. Faster expansion
C. Efficient bucket growth
D. No hashing needed

**Answer:** A, B, C
**Explanation:** Extendible hashing accommodates growing datasets by dynamically splitting buckets and expanding the pointer directory, avoiding complete file re-indexing or static overflows.

---

**Question 31**
Hashing is efficient for: (Select all that apply)
A. Equality search
B. Exact lookup
C. Range query
D. Insert

**Answer:** A, B, D
**Explanation:** Hashing is highly efficient for exact matches (O(1) lookups) and inserts, but it holds no ordering metrics, which makes it inefficient for range queries.

---

**Question 32**
Static hashing insertion may require: (Select all that apply)
A. Overflow page
B. Bucket search
C. Sequential scan in bucket
D. Tree traversal

**Answer:** A, B, C
**Explanation:** Inserting into a static hash table requires locating the appropriate bucket, scanning for empty slots, and appending an overflow page if the main bucket block is full. No tree traversal is performed.

---

**Question 33**
Hash functions commonly operate on: (Select all that apply)
A. Binary representation
B. Search keys
C. Character encoding
D. Heap order

**Answer:** A, B, C
**Explanation:** Hash calculations ingest binary blocks, string character sets, and search keys to produce hashed integers. Heap files are unrelated to hashed indexes.

---

**Question 34**
Directory doubling occurs when: (Select all that apply)
A. Global depth = local depth
B. Bucket overflow
C. Split required
D. Hash deleted

**Answer:** A, B, C
**Explanation:** Doubling the directory occurs during an insert when a bucket overflows, requiring a split, and its local depth matches the global directory depth.

---

**Question 35**
Coalescing means: (Select all that apply)
A. Bucket merge
B. Reduce buckets
C. Directory shrink possible
D. Overflow increase

**Answer:** A, B, C
**Explanation:** Deleting records can cause sibling buckets to merge (coalesce), which reduces the total number of active buckets and can potentially trigger a reduction in global depth (directory shrink).

---

**Question 36**
A ______ is a unit of storage containing one or more records.

**Answer:** bucket
**Explanation:** A bucket holds multiple consecutive records aligned physically in block-level storage.

---

**Question 37**
Hash function maps search-key values to ______.

**Answer:** bucket addresses
**Explanation:** The target output space of a database hash function is the list of directory or physical bucket addresses.

---

**Question 38**
Collision means multiple keys map to the same ______.

**Answer:** bucket
**Explanation:** When multiple different search key values hash to the same bucket block address, it is called a collision.

---

**Question 39**
Bucket overflow can be reduced but never completely ______.

**Answer:** eliminated
**Explanation:** Because input key domains typically far exceed the physical address ranges of buckets, collisions and subsequent overflows can never be completely eliminated.

---

**Question 40**
Dynamic hashing changes number of ______ dynamically.

**Answer:** buckets
**Explanation:** Dynamic hashing schemes increase or decrease the bucket inventory automatically to handle data size fluctuations.

---

**Question 41**
Extendable hashing typically generates ______-bit hash values.

**Answer:** 32
**Explanation:** Standard hash engines calculate 32-bit (or b-bit) integer hashes, using a slice of prefix/suffix bits to index directory boundaries.

---

**Question 42**
Directory size in extendable hashing equals ______.

**Answer:** 2^i
**Explanation:** With a global directory depth represented by parameter i, the pointer directory size is computed as 2^i.

---

**Question 43**
Bucket-specific depth is called ______ depth.

**Answer:** local
**Explanation:** The local depth parameter ij tracks the hash value prefix bit size shared by elements in that specific bucket.

---

**Question 44**
Overall directory depth is called ______ depth.

**Answer:** global
**Explanation:** The overall depth variable i denoting prefix bits used for indexing the directory is known as global depth.

---

**Question 45**
Hash indices store search keys with associated ______.

**Answer:** pointers
**Explanation:** Hash indices map structural search key values to record pointer coordinates.

---

**Question 46**
Extendable hashing avoids complete file ______.

**Answer:** reorganization
**Explanation:** By re-allocating directories and single bucket splits cleanly, extendible hashing prevents expensive full data file reorganization.

---

**Question 47**
Multiple directory entries may point to one ______.

**Answer:** bucket
**Explanation:** When a bucket's local depth is lower than the global depth (ij < i), multiple pointers from the directory map to this single physical bucket.

---

**Question 48**
Insertion into a full bucket may trigger bucket ______.

**Answer:** split
**Explanation:** Inserting structured keys into capacity-saturated buckets forces the engine to split the overflowing bucket.

---

**Question 49**
Extendable hashing may use bucket ______ after deletion.

**Answer:** merge
**Explanation:** Removing transaction elements frees space, permitting the system to trigger bucket merges with adjacent brother buckets.

---

**Question 50**
An ideal hash function should be uniform and ______.

**Answer:** random
**Explanation:** Good hash function design guarantees key uniform distribution and random-like partition spreads throughout bucket structures.
