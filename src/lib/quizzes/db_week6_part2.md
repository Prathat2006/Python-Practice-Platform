### Week 6 - Part 2: Hash Indexing & Extendible Hashing

**Question 1**
Extendable hashing directory has **GD = 3**. Bucket B has **LD = 1** and is referenced by 4 directory entries. Bucket B overflows. What happens first?
A. Directory doubles to size 16
B. Split bucket only; directory unchanged
C. Merge bucket
D. Create overflow page immediately

**Answer:** B
**Explanation:** Since the local depth (LD = 1) is strictly less than the global depth (GD = 3), when bucket B overflows, we only need to split the bucket and update the local depth of the split buckets (increasing LD to 2). No directory expansion is required because the directory size is already 2^3 = 8, which can easily map separate pointers to the split buckets.

---

**Question 2**
A bucket has capacity = 2. Current bucket contents: `001 → [9,17]`. Insert key whose hash suffix is also `001`. If GD=LD=3, minimum structural change is:
A. Overflow page
B. Split + double directory
C. Split bucket only
D. No split needed

**Answer:** B
**Explanation:** Since GD = LD = 3 and the bucket with capacity 2 already contains two values with suffix `001` (9 and 17 in binary have suffix `001`, e.g., 9 = 1001_2, 17 = 10001_2), inserting another key with suffix `001` leads to an overflow. Because GD = LD, splitting the bucket requires doubling the directory size (increasing global depth to 4).

---

**Question 3**
Suppose multiple directory entries point to one bucket. This implies:
A. GD < LD
B. GD = LD
C. GD > LD
D. LD = 0 only

**Answer:** C
**Explanation:** Under extendible hashing, when the global directory depth (GD) is strictly greater than a bucket's local depth (LD), there will be exactly 2^(GD - LD) directory entries mapping to that single physical bucket.

---

**Question 4**
Static hashing becomes inefficient primarily because:
A. Search becomes logarithmic
B. Overflow chains increase access cost
C. Keys become unordered
D. Directory grows

**Answer:** B
**Explanation:** Since the bucket count is constant in static hashing, data growth triggers frequent collisions that must be handled by building long chained overflow blocks, changing individual lookup complexities from average-case O(1) closer to O(N).

---

**Question 5**
Which condition guarantees directory expansion?
A. Bucket overflow AND GD=LD
B. Bucket overflow AND GD>LD
C. Bucket empty
D. Collision occurs

**Answer:** A
**Explanation:** A directory expansion is required when a bucket overflows and its local depth (LD) is equal to the global depth (GD).

---

**Question 6**
A hash index is most unsuitable for:
A. Exact lookup
B. Equality query
C. Range query
D. Key insertion

**Answer:** C
**Explanation:** Hash functions map search-key values pseudo-randomly to buckets with no regard to ordering, making sequential range scans extremely slow and inefficient.

---

**Question 7**
If bucket capacity is unlimited:
A. Extendable hashing unnecessary
B. Collisions disappear
C. Directory removed
D. Local depth fixed

**Answer:** A
**Explanation:** If bucket structures had unlimited capacity, they would never overflow, rendering dynamic resizing directory frameworks completely useless.

---

**Question 8**
In extendable hashing, actual buckets are fewer than directory entries because:
A. Multiple entries may share bucket
B. Hash compresses keys
C. Collisions removed
D. Bucket size fixed

**Answer:** A
**Explanation:** When buckets run with local depth less than global depth (LD < GD), multiple distinct entry slots inside the pointer directory point to the same physical bucket.

---

**Question 9**
A bucket split occurs but directory size remains unchanged. Which is TRUE?
A. GD increased
B. GD > old LD
C. GD = new LD
D. All buckets split

**Answer:** B
**Explanation:** A bucket splits without doubling the directory size if and only if its original local depth was strictly less than the global directory depth (old LD < GD).

---

**Question 10**
Worst possible static hash function complexity approaches:
A. O(log n)
B. O(1)
C. O(n)
D. O(n log n)

**Answer:** C
**Explanation:** In the worst-case scenario, a poorly designed hash function maps all keys to the exact same bucket, making the data structure equivalent to a single unsorted linked list with O(N) lookup.

---

**Question 11**
Repeated insertion into same bucket primarily increases:
A. Locality
B. Overflow probability
C. Global depth
D. Key uniqueness

**Answer:** B
**Explanation:** Repeated inserts with keys hashing to the same directory bucket will saturate that bucket's physical block capacity, leading straight to a bucket overflow.

---

**Question 12**
Directory doubling changes:
A. Bucket capacity
B. Number of directory pointers
C. Hash function
D. Record size

**Answer:** B
**Explanation:** Expanding the directory doubles the active directory indices (number of pointers from 2^d to 2^(d+1)), but does not change the physical capacity limits of individual buckets.

---

**Question 13**
If GD=4 and LD=2, bucket is referenced by:
A. 2 entries
B. 4 entries
C. 8 entries
D. 16 entries

**Answer:** B
**Explanation:** The number of directory entries pointing to a single bucket is 2^(GD - LD) = 2^(4 - 2) = 2^2 = 4 entries.

---

**Question 14**
Extendable hashing attempts to avoid:
A. Sequential scans
B. Full file reorganization
C. Binary search
D. Tree balancing

**Answer:** B
**Explanation:** Dynamic extendible hashing allocates directories and single bucket splits in-place, neutralizing the need for full physical data file reorganization when disk volumes match growth.

---

**Question 15**
Which statement is FALSE?
A. Hash indices support insertion
B. Dynamic hashing supports shrinking
C. Extendable hashing never splits buckets
D. Hash functions should be uniform

**Answer:** C
**Explanation:** Extendible hashing relies heavily on splitting full buckets into two child buckets upon overflow, making option C false.

---

**Question 16**
Overflow may occur due to: (Select all that apply)
A. Non-uniform hash distribution
B. Duplicate search keys
C. Small number of buckets
D. Directory overflow

**Answer:** A, B, C
**Explanation:** Non-uniform distributions (skewed hashing), numerous duplicate search keys mapping to the same hash, or setting too few total buckets relative to key space are the primary causes of overflows. Directory overflow is not a mechanism since the directory can expand.

---

**Question 17**
If GD increases: (Select all that apply)
A. Directory doubles
B. Buckets always double
C. Existing bucket pointers duplicate
D. Local depths automatically change

**Answer:** A, C
**Explanation:** Increasing GD doubles the pointer directory size. The pointers to existing buckets that did not split are duplicated so that both directory indices refer to the same physical bucket. Local depths of buckets do not automatically change; they only change when a bucket actually splits.

---

**Question 18**
Bucket split operation includes: (Select all that apply)
A. Allocate new bucket
B. Increase LD
C. Redistribute records
D. Recompute insertion

**Answer:** A, B, C
**Explanation:** Splitting an overflowing bucket requires allocating a new sibling bucket block, updating/incrementing the local depth (LD) of the split buckets, and redistributing the records between the two buckets based on the extra hash bit.

---

**Question 19**
Static hashing drawbacks: (Select all that apply)
A. Space waste
B. Expensive resizing
C. Overflow chains
D. Automatic merge

**Answer:** A, B, C
**Explanation:** Static hashing uses fixed bucket pools, causing memory waste if tables shrink or creating search-slowing overflow chains if databases expand. Fixing this requires a highly expensive full-file database reorganization, and there is no automatic merging of buckets.

---

**Question 20**
Which operations use hash computation? (Select all that apply)
A. Lookup
B. Insert
C. Delete
D. Split

**Answer:** A, B, C
**Explanation:** Lookups, insertions, and deletions must calculate the hash value of the key to identify active bucket addresses in O(1) time. Splitting uses the already computed hash bits to redistribute records.

---

**Question 21**
For ideal hash behavior: (Select all that apply)
A. Uniformity
B. Random distribution
C. Equal load expectation
D. Sorted output

**Answer:** A, B, C
**Explanation:** An ideal hash function should map keys uniformly and pseudo-randomly across buckets, maximizing load balance and avoiding clustering. Hashing does not produce sorted output.

---

**Question 22**
Directory shrinking requires: (Select all that apply)
A. Bucket merge
B. Coalescing
C. Reduced active buckets
D. Empty directory

**Answer:** A, B, C
**Explanation:** Shrinking directories requires that all buckets have their local depths below the global depth (LD < GD), typically achieved by merging adjacent sibling buckets (coalescing) and reducing the active bucket inventory.

---

**Question 23**
During insertion overflow: (Select all that apply)
A. Bucket split possible
B. Directory expansion possible
C. Reinsert records
D. Hash recomputation

**Answer:** A, B
**Explanation:** If an insert triggers a bucket overflow, the system may split the bucket and potentially double the directory if local depth meets global depth limits. Existing records are redistributed, but we do not rehash the entire file.

---

**Question 24**
Hash index structures may act as: (Select all that apply)
A. Secondary index
B. File organization
C. Lookup accelerator
D. Join algorithm

**Answer:** A, B, C
**Explanation:** Hashing styles can serve as secondary database indices, drive primary hash file organizations, and accelerate constant-time lookups. A hash join is an algorithm, but not a hash index structure itself.

---

**Question 25**
Conditions affecting bucket occupancy: (Select all that apply)
A. Key distribution
B. Bucket capacity
C. Hash function quality
D. Local depth

**Answer:** A, B, C
**Explanation:** Physical bucket occupancy is determined by the input key distribution, structural bucket limits (capacity), and hash function quality in splitting values uniformly.

---

**Question 26**
When GD > LD: (Select all that apply)
A. Multiple directory entries point same bucket
B. Split possible without doubling
C. Directory shrink impossible
D. Bucket duplication exists

**Answer:** A, B
**Explanation:** When global depth exceeds local depth (GD > LD), multiple directory entries point to the same physical bucket. An insert overflow in this bucket can be resolved with a local split and LD update without doubling the directory.

---

**Question 27**
Bucket overflow handling techniques: (Select all that apply)
A. Overflow chaining
B. Dynamic split
C. Reorganization
D. Extendable hashing

**Answer:** A, B, D
**Explanation:** Relational engines manage overflows using sequential list chaining (static hashing) or dynamic bucket splitting/directory extensions (extendible/dynamic hashing).

---

**Question 28**
Extendable hashing supports: (Select all that apply)
A. Expansion
B. Shrinking
C. Coalescing
D. Dynamic buckets

**Answer:** A, B, C, D
**Explanation:** Dynamic extendible structures support directory expansion and shrinking, coalescing/merging of sibling buckets, and dynamic allocation of blocks.

---

**Question 29**
Directory stores: (Select all that apply)
A. Bucket addresses
B. Records
C. Keys
D. Local depth indirectly

**Answer:** A
**Explanation:** The directory in extendible hashing contains only memory or disk pointers to physical bucket blocks. It does not store raw records, search-keys, or local depths of buckets.

---

**Question 30**
Increasing GD always increases: (Select all that apply)
A. Directory entries
B. Memory cost
C. Buckets
D. Pointer count

**Answer:** A, B, D
**Explanation:** Incrementing GD always doubles the directory size (from 2^i to 2^(i+1)), which increases directory space complexity/memory cost and list index pointer counts. It does not automatically allocate or increase the number of physical buckets.

---

**Question 31**
Initial: `GD=1`, `0 → B0 []`, `1 → B1 []`. Insert: `3, 7, 5` (which map to binary hashes ending in `3 = ...11`, `7 = ...11`, `5 = ...01`, so all map to suffix `1` since initial GD=1). Since bucket capacity is 2, inserting the third key `5` (all ending in bit `1` to bucket B1) triggers an overflow/split. What is the final GD?

**Answer:** 2
**Explanation:** Under GD=1 and bucket size 2, inserting keys 3, 7, 5 (all ending in 1) overflows bucket B1. Since LD(B1) = GD = 1, we must double the directory by increasing GD to 2 and splitting B1 into B10 (keys in B1 ending in '01', i.e., 5) and B11 (keys ending in '11', i.e., 3 and 7). B0 remains referenced by directory indices ending in '00' and '10'. Final GD is 2.

---

**Question 32**
If GD=3 and LD=2, number of directory entries referencing bucket = ?

**Answer:** 2
**Explanation:** The number of directory index slots mapping to a single bucket resides as 2^(GD - LD) = 2^(3 - 2) = 2^1 = 2 entries.

---

**Question 33**
Maximum actual buckets possible for GD=4?

**Answer:** 16
**Explanation:** A directory of global depth i = 4 has 2^4 = 16 index cells. At most, each index cells maps to a unique bucket (LD = GD = 4), yielding a maximum of 16 actual buckets.

---

**Question 34**
Minimum actual buckets possible for GD=3?

**Answer:** 2
**Explanation:** The absolute minimum number of physical buckets in a valid functioning extendible directory is 2 (excluding the initial empty 1-bucket startup), representing the two child blocks split from the root.

---

**Question 35**
Directory size when GD=5?

**Answer:** 32
**Explanation:** The directory size is computed as 2^(GD) = 2^5 = 32 entries.

---

**Question 36**
If bucket split changes LD from 2→3 and GD=4, bucket pointer count changes from ____ to ____.

**Answer:** 4 to 2
**Explanation:** Initially, with GD=4 and LD=2, the bucket is referenced by 2^(4-2) = 4 directory entries. After splitting, the LD increases to 3, meaning each split bucket is now referenced by 2^(4-3) = 2 directory entries.

---

**Question 37**
Starting GD=2, insertions trigger two consecutive directory doublings. Final GD?

**Answer:** 4
**Explanation:** Every single directory doubling increments the global depth GD by 1. Thus, starting from GD=2, two doublings transition GD sequentially: 2 → 3 → 4.

---

**Question 38**
For GD=4 and LD=1, bucket aliases = ?

**Answer:** 8
**Explanation:** The number of directory entry pointers (aliases) referencing that single physical bucket equals 2^(GD - LD) = 2^(4 - 1) = 2^3 = 8.

---

**Question 39**
A directory of size 32 corresponds to GD = ?

**Answer:** 5
**Explanation:** Since directory size equals 2^(GD), a size of 32 represents 2^5 = 32, so global depth GD = 5.

---

**Question 40**
If actual buckets = 8 and GD=5, directory sharing exists? (Yes/No)

**Answer:** Yes
**Explanation:** Yes, because a directory with GD=5 has 2^5 = 32 pointer slots. Since there are only 8 actual buckets, at least some buckets must have LD < 5, meaning multiple directory cells share pointers referencing those buckets.

