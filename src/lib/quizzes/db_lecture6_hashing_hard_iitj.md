### Lecture 6: Advanced IITJ-Style Hashing Challenges

**Question 1**
An Extendable Hashing directory has Global Depth GD = 3. Bucket B has Local Depth LD = 1 and is currently referenced by 4 separate directory entries. Bucket B overflows. What structural update happens first?
A. The directory doubles in size to 16 entries (GD becomes 4) before splitting
B. Bucket B is split into two buckets, each with Local Depth LD = 2, and the pointing directory entries are split 2 and 2 without doubling the directory
C. An overflow page is appended to Bucket B, and directory remains entirely unchanged
D. The system fails and throws a disk write constraint exception

**Answer:** B
**Explanation:** Since the Local Depth of the overflowing bucket B (LD = 1) is strictly less than the Global Depth (GD = 3), no directory doubling is needed. The bucket is split into two, its LD increments to 2, and the 4 pointing directory entries are partitioned: 2 will point to the original bucket, and 2 will point to the newly allocated bucket.

---

**Question 2**
A bucket in an Extendable Hashing system has slot capacity c = 2. Current bucket contents are:
`001 -> [9, 17]`
Insert key 25 whose hash suffix is also `001`. If current Global Depth GD = 3 and Local Depth LD = 3, what is the minimum structural outcome after insertion?
A. Allocate an overflow page directly to host the key, with GD and LD remaining 3
B. Split the bucket, increase LD to 4, double the directory to GD = 4, and redistribute keys [9, 17, 25] based on 4-bit suffixes
C. Split the bucket, increment LD to 4, but do not double the directory
D. The system rejects the key value as duplicate entry

**Answer:** B
**Explanation:** Here, the bucket is full (9 and 17 already occupy the 2 slots). The new key 25 also hashes to the same bucket because its suffix is `001`. Since LD = GD = 3, splitting this bucket requires incrementing local depth to 4, which exceeds GD. Hence, the directory must double to size 2^4 = 16 (GD = 4) to index utilizing 4 bits, and keys are re-distributed.

---

**Question 3**
Suppose multiple directory entries index a bucket. If this bucket splits, how does the system identify which directory slots need to be diverted to point to the newly allocated bucket?
A. By scanning all physical buckets on disk sequentially
B. By partitioning the pointing directory pointers according to the new high bit of the suffix (at index LD + 1)
C. By resetting all directory pointers to NULL and performing a full scan reload
D. By applying a secondary hash algorithm h_2 on all table rows

**Answer:** B
**Explanation:** The directory pointers targeting the original bucket are split evenly based on the value of the new significant bit (the (LD+1)-th bit). Pointers with '0' in that bit position continue pointing to the original bucket, while those with '1' are updated to point to the new bucket.

---

**Question 4**
Under what specific condition can a bucket split in Extendable Hashing result in an overflow chain page instead of clean key redistribution?
A. When the Global Depth has exceeded its maximum hard ceiling of 32 bits
B. When all keys currently residing in the full bucket, plus the key being inserted, share the exact same hash value (or share prefixes beyond the maximum allowable hash length)
C. When the number of slots in the bucket is an odd integer
D. When the transaction lock table is fully saturated

**Answer:** B
**Explanation:** If all keys in the overflowing bucket, along with the incoming key, have identical hash outputs, then splitting the bucket and increasing local depth will never separate them: they will keep hashing to the exact same bucket regardless of depth. In this pathological case, the system must append an overflow page to hold the keys.

---

**Question 5**
In a database utilizing Static Hashing, we store N records in B buckets using a uniform hash function. If we double the number of physical buckets to 2B, how many elements of the old hash table will need to be reallocated/rehashed on average?
A. 0%
B. 50%
C. Almost 100% of the records
D. Only the records residing in the first bucket

**Answer:** C
**Explanation:** In static hashing, the bucket index is typically computed as `h(key) % B`. Changing the divisor to `2B` will change the computed target bucket for almost all records (except for those where `h(key) % B < B` and the remainder maps identically). On average, nearly 100% of database keys must be rehashed and migrated.

---

**Question 6**
Why is the worst-case directory size in Extendable Hashing considered exponential in terms of the number of records stored?
A. Because each record requires its own unique directory index
B. If a set of inserted keys shares a long common hash suffix, the directory must double repeatedly (increasing GD) to separate them, generating 2^GD slots even if the total number of records is very small
C. The directory array contains complete heavy rows of the relational table
D. Each bucket split automatically triggers a mandatory doubling of the entire database

**Answer:** B
**Explanation:** If a subset of keys has highly skewed hashes that cluster together, the directory must increase its global depth to a high value to separate those adjacent keys. This can lead to exponential directory growth relative to the active database size.

---

**Question 7**
How does Linear Hashing avoid the sudden "doubling spikes" and memory overheads associated with Extendable Hashing directory structures?
A. It completely outlaws splits and forces open-addressing loops
B. It implements dynamic pre-allocation of buffer caches
C. It splits buckets sequentially, one by one (determined by a split pointer), rather than splitting ONLY the specific bucket that overflowed, thereby increasing table capacity in a controlled linear style
D. It leverages B+ tree internal branch pages to index hash nodes

**Answer:** C
**Explanation:** Linear Hashing grows linearly by splitting buckets in a systematic round-robin order. Crucially, the bucket that splits is NOT necessarily the one that just overflowed; instead, it is designated by a sequential split pointer. This steady split process avoids directory structures entirely.

---

**Question 8**
In Extendable Hashing, if Global Depth GD = 6, and a bucket's Local Depth is LD = 3, what fractional share of all directory entries point to this specific bucket?
A. 1/2
B. 1/4
C. 1/8
D. 1/16

**Answer:** C
**Explanation:** The total number of directory entries is 2^GD = 2^6 = 64. The number of entries pointing to this bucket is 2^(GD - LD) = 2^(6 - 3) = 2^3 = 8. The fractional share of entries pointing to it is 8 / 64 = 1/8.

---

**Question 9**
Suppose an Extendable Hash table uses the suffix (last significant bits) of the hash to index the directory. If GD = 2 and LD of all buckets is 2, the current directory slots are [00, 01, 10, 11]. Insert a key that hashes to suffix `00` when the bucket `00` is already full. After the split, which of the following is true?
A. GD becomes 3, directory doubles to 8 slots, and buckets split
B. GD remains 2, and directory is unchanged
C. Bucket `00` splits into `00` and `10`, with LD = 3
D. Both GD and LD of all buckets are set to 4

**Answer:** A
**Explanation:** Since GD = LD = 2, and we insert into a full bucket `00`, we must split. LD of the split bucket becomes 3. Since new LD (3) > current GD (2), the directory must double, and GD becomes 3 (holding 8 slots).

---

**Question 10**
In an Extendable Hash index, if the directory is small enough to fit completely in RAM, what is the maximum number of disk I/O operations required to perform a point lookup?
A. Constant 1 disk access
B. Logarithmic based on tree depth
C. In worst cases, up to 10 block traversals
D. Always 0 index reads

**Answer:** A
**Explanation:** If the directory array fits fully in RAM memory, locating a target key only requires checking the index suffix in memory (0 disk I/O), dereferencing the pointer, and issuing exactly 1 disk I/O read to fetch the matching physical bucket block from disk.
