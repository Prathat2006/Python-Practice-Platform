### Week 4

**Question 1**
In the Producer-Consumer problem, the producer:
A) Removes data from buffer
B) Generates data and puts it into buffer
C) Schedules CPU processes
D) Allocates memory

**Answer:** B

---

**Question 2**
In the Producer-Consumer problem, the consumer:
A) Produces data
B) Compiles data
C) Takes data from shared buffer
D) Creates processes

**Answer:** C

---

**Question 3**
The producer should not add data when the buffer is:
A) Empty
B) Shared
C) Locked
D) Full

**Answer:** D

---

**Question 4**
The consumer should not remove data when the buffer is:
A) Full
B) Empty
C) Circular
D) Locked

**Answer:** B

---

**Question 5**
A race condition occurs when:
A) Two processes execute independently
B) Multiple processes access shared data concurrently causing inconsistent results
C) A process terminates early
D) CPU utilization is low

**Answer:** B

---

**Question 6**
Which operation is vulnerable to race conditions?
A) counter++
B) counter--
C) Both a and b
D) File deletion

**Answer:** C

---

**Question 7**
A critical section is a segment of code where:
A) Processes are terminated
B) Shared data is accessed or modified
C) CPU scheduling occurs
D) Memory is swapped

**Answer:** B

---

**Question 8**
When one process is in its critical section:
A) Other processes must terminate
B) No other process may enter its critical section
C) All interrupts are disabled forever
D) Context switching stops permanently

**Answer:** B

---

**Question 9**
The critical section problem aims to design:
A) Memory allocation schemes
B) Deadlock prevention only
C) A protocol for process synchronization
D) CPU scheduling algorithms

**Answer:** C

---

**Question 10**
Which section requests permission to enter the critical section?
A) Exit section
B) Remainder section
C) Entry section
D) Waiting section

**Answer:** C

---

**Question 11**
Mutual exclusion means:
A) Multiple processes can execute critical sections simultaneously
B) Only one process can execute in its critical section at a time
C) CPU is allocated equally
D) Memory is shared freely

**Answer:** B

---

**Question 12**
Progress requirement states that:
A) Processes must terminate quickly
B) Selection of next process cannot be postponed indefinitely
C) CPU utilization must be 100%
D) Waiting time must be zero

**Answer:** B

---

**Question 13**
Bounded waiting ensures:
A) Infinite waiting is allowed
B) A process waits forever
C) A limit exists on waiting time before entering critical section
D) Memory is allocated equally

**Answer:** C

---

**Question 14**
Peterson’s solution is designed for:
A) One process
B) Two processes
C) Multiple CPUs only
D) File systems

**Answer:** B

---

**Question 15**
Peterson’s solution assumes load and store instructions are:
A) Delayed
B) Atomic
C) Cached
D) Scheduled

**Answer:** B

---

**Question 16**
In Peterson’s solution, the variable `turn` indicates:
A) CPU burst length
B) Which process may enter the critical section
C) Page number
D) Process ID

**Answer:** B

---

**Question 17**
In Peterson’s solution, `flag[i] = true` means:
A) Process Pi has terminated
B) Process Pi is waiting for I/O
C) Process Pi is ready to enter the critical section
D) Process Pi is suspended

**Answer:** C

---

**Question 18**
Peterson’s solution guarantees:
A) Only mutual exclusion
B) Only progress
C) Mutual exclusion, progress, and bounded waiting
D) Deadlock only

**Answer:** C

---

**Question 19**
A mutex lock is mainly used to:
A) Improve disk speed
B) Protect critical sections
C) Replace memory pages
D) Schedule processes

**Answer:** B

---

**Question 20**
To use a mutex lock, a process must first:
A) signal()
B) release()
C) acquire()
D) abort()

**Answer:** C

---

**Question 21**
Calls to acquire() and release() must be:
A) Delayed
B) Atomic
C) Cached
D) Recursive

**Answer:** B

---

**Question 22**
Busy waiting in mutex locks is also called:
A) Paging
B) Starvation
C) Spinlock
D) Deadlock

**Answer:** C

---

**Question 23**
A semaphore is:
A) A file system
B) A synchronization tool
C) A CPU scheduler
D) A cache mechanism

**Answer:** B

---

**Question 24**
Semaphore operations are:
A) open() and close()
B) wait() and signal()
C) read() and write()
D) push() and pop()

**Answer:** B

---

**Question 25**
The wait() operation on semaphore:
A) Increases semaphore value
B) Decreases semaphore value
C) Deletes semaphore
D) Resets semaphore

**Answer:** B

---

**Question 26**
The signal() operation on semaphore:
A) Decreases semaphore value
B) Terminates process
C) Increases semaphore value
D) Locks CPU

**Answer:** C

---

**Question 27**
A binary semaphore can take values:
A) 0 and 1 only
B) Any integer
C) Negative values only
D) Floating-point values

**Answer:** A

---

**Question 28**
A binary semaphore is similar to:
A) Paging
B) Mutex lock
C) FCFS scheduling
D) Virtual memory

**Answer:** B

---

**Question 29**
A counting semaphore can have:
A) Only value 1
B) Only value 0
C) Unrestricted integer values
D) Floating-point values

**Answer:** C

---

**Question 30**
Deadlock occurs when:
A) Processes terminate successfully
B) Processes wait indefinitely for events caused by each other
C) CPU utilization increases
D) Memory is deallocated

**Answer:** B

---

**Question 31**
Starvation means:
A) Infinite CPU speed
B) Indefinite blocking of a process
C) Disk corruption
D) Process synchronization

**Answer:** B

---

**Question 32**
Which is NOT a necessary condition for deadlock?
A) Mutual exclusion
B) Hold and wait
C) Paging
D) Circular wait

**Answer:** C

---

**Question 33**
The hold-and-wait condition means:
A) Processes hold resources while requesting additional ones
B) Processes release all resources immediately
C) Processes never wait
D) Processes terminate frequently

**Answer:** A

---

**Question 34**
Circular wait occurs when:
A) Processes execute sequentially
B) Processes wait for resources held by each other in a cycle
C) Memory becomes full
D) CPU bursts increase

**Answer:** B

---

**Question 35**
Deadlock prevention works by:
A) Ensuring at least one necessary condition cannot hold
B) Increasing CPU utilization only
C) Using only paging
D) Removing semaphores

**Answer:** A

---

**Question 36**
Deadlock avoidance requires:
A) No additional information
B) Maximum resource requirements in advance
C) CPU replacement algorithms
D) Cache optimization

**Answer:** B

---

**Question 37**
A system is in a safe state if:
A) Deadlock has occurred
B) There exists a safe execution sequence for all processes
C) No resources exist
D) All processes are blocked

**Answer:** B

---

**Question 38**
If a system is in an unsafe state:
A) Deadlock is impossible
B) Deadlock may occur
C) CPU utilization becomes zero
D) Memory leaks disappear

**Answer:** B

---

**Question 39**
Banker’s Algorithm is mainly used for:
A) CPU scheduling
B) Deadlock avoidance
C) File protection
D) Disk formatting

**Answer:** B

---

**Question 40**
In Banker’s Algorithm, each process must declare:
A) Its page table
B) Maximum resource needs in advance
C) CPU burst time only
D) File permissions

**Answer:** B
