### Week 3

**Question 1**
CPU scheduling is mainly concerned with:
A) Disk formatting
B) Selecting which process gets the CPU
C) Compiling programs
D) Encrypting memory

**Answer:** B

---

**Question 2**
Maximum CPU utilization is obtained with:
A) Single-tasking
B) Multiprogramming
C) Paging
D) Segmentation

**Answer:** B

---

**Question 3**
A process execution cycle generally consists of:
A) CPU burst and I/O burst
B) Fetch and decode
C) Compile and execute
D) Read and write

**Answer:** A

---

**Question 4**
In CPU scheduling, the main concern is:
A) Disk speed
B) CPU burst distribution
C) Keyboard input
D) File size

**Answer:** B

---

**Question 5**
CPU utilization means:
A) Keeping the CPU as busy as possible
B) Minimizing memory usage
C) Reducing file size
D) Increasing disk partitions

**Answer:** A

---

**Question 6**
Throughput refers to:
A) Number of interrupts generated
B) Number of processes completed per unit time
C) Memory allocated to processes
D) Disk access speed

**Answer:** B

---

**Question 7**
Turnaround time is calculated as:
A) Arrival Time − Completion Time
B) Completion Time − Arrival Time
C) Burst Time − Waiting Time
D) Waiting Time + Response Time

**Answer:** B

---

**Question 8**
Waiting time is the amount of time a process spends:
A) Executing on CPU
B) In the ready queue
C) In I/O operations
D) In memory allocation

**Answer:** B

---

**Question 9**
Response time measures:
A) Total execution time
B) Time until first response is produced
C) Disk transfer speed
D) CPU burst length

**Answer:** B

---

**Question 10**
Which is NOT an optimization criterion of scheduling?
A) Maximum throughput
B) Minimum waiting time
C) Maximum turnaround time
D) Minimum response time

**Answer:** C

---

**Question 11**
FCFS stands for:
A) First-Come First-Served
B) Fastest CPU First Scheduling
C) First CPU First Switch
D) Fixed Cycle First Serve

**Answer:** A

---

**Question 12**
FCFS scheduling executes processes based on:
A) Shortest burst time
B) Highest priority
C) Arrival order
D) Least memory usage

**Answer:** C

---

**Question 13**
A disadvantage of FCFS scheduling is:
A) Starvation
B) Convoy effect
C) Deadlock
D) Thrashing

**Answer:** B

---

**Question 14**
SJF scheduling selects the process with:
A) Highest priority
B) Shortest CPU burst
C) Earliest arrival time
D) Maximum memory usage

**Answer:** B

---

**Question 15**
SJF scheduling is considered optimal because it gives:
A) Maximum response time
B) Minimum average waiting time
C) Maximum throughput only
D) Minimum CPU utilization

**Answer:** B

---

**Question 16**
The major difficulty with SJF scheduling is:
A) Too many interrupts
B) Knowing the next CPU burst length
C) Lack of memory
D) Excessive context switching

**Answer:** B

---

**Question 17**
The preemptive version of SJF is called:
A) FCFS
B) Round Robin
C) Shortest-Remaining-Time-First
D) Multilevel Queue

**Answer:** C

---

**Question 18**
CPU burst prediction commonly uses:
A) Paging
B) Exponential averaging
C) Encryption
D) Spooling

**Answer:** B

---

**Question 19**
In exponential averaging, α is commonly set to:
A) 0
B) 1
C) ½
D) 2

**Answer:** C

---

**Question 20**
Priority scheduling allocates CPU to the process with:
A) Largest burst time
B) Smallest priority integer
C) Largest memory usage
D) Highest waiting time

**Answer:** B

---

**Question 21**
In priority scheduling, starvation means:
A) CPU crash
B) Low-priority processes may never execute
C) Memory leak
D) Disk corruption

**Answer:** B

---

**Question 22**
Aging is used in priority scheduling to:
A) Increase CPU speed
B) Prevent starvation
C) Reduce memory usage
D) Increase burst time

**Answer:** B

---

**Question 23**
Round Robin scheduling uses:
A) Priority queue
B) Time quantum
C) Linked list only
D) Disk partitioning

**Answer:** B

---

**Question 24**
In Round Robin scheduling, a process is preempted after:
A) Completion of all jobs
B) Time quantum expires
C) Memory becomes full
D) Disk interrupt occurs

**Answer:** B

---

**Question 25**
Typical time quantum in RR scheduling is:
A) 1–2 seconds
B) 10–100 milliseconds
C) 10 minutes
D) 1 hour

**Answer:** B

---

**Question 26**
If the time quantum is very large, RR scheduling behaves like:
A) SJF
B) FIFO/FCFS
C) Priority scheduling
D) Multilevel Queue

**Answer:** B

---

**Question 27**
If the time quantum is too small, RR scheduling suffers from:
A) Starvation
B) High context-switch overhead
C) Deadlock
D) Fragmentation

**Answer:** B

---

**Question 28**
Timer interrupts in RR scheduling occur:
A) After process termination
B) Every quantum
C) During disk failure
D) After memory allocation

**Answer:** B

---

**Question 29**
In Multilevel Queue scheduling, processes are:
A) Dynamically moved between queues
B) Permanently assigned to a queue
C) Randomly scheduled
D) Stored only on disk

**Answer:** B

---

**Question 30**
In Multilevel Queue scheduling, foreground processes commonly use:
A) FCFS
B) RR
C) SJF
D) Priority only

**Answer:** B

---

**Question 31**
Background processes in Multilevel Queue scheduling commonly use:
A) RR
B) FCFS
C) SRTF
D) Paging

**Answer:** B

---

**Question 32**
A disadvantage of fixed-priority Multilevel Queue scheduling is:
A) Thrashing
B) Starvation
C) Paging faults
D) Cache miss

**Answer:** B

---

**Question 33**
In Multilevel Feedback Queue (MLFQ), processes can:
A) Only move upward
B) Move between queues
C) Never change queues
D) Use only FCFS

**Answer:** B

---

**Question 34**
New jobs in MLFQ are usually assigned to:
A) Lowest-priority queue
B) Middle queue
C) Top-priority queue
D) FCFS queue

**Answer:** C

---

**Question 35**
In MLFQ, if a job uses its entire time slice:
A) It terminates immediately
B) Its priority is reduced
C) It gets higher priority
D) It is blocked forever

**Answer:** B

---

**Question 36**
Interactive jobs in MLFQ generally:
A) Finish quickly in higher queues
B) Stay permanently in lowest queue
C) Cause deadlock
D) Disable scheduling

**Answer:** A

---

**Question 37**
CPU-bound jobs in MLFQ are generally:
A) Removed from the system
B) Pushed to lower queues
C) Given highest priority forever
D) Converted into I/O jobs

**Answer:** B

---

**Question 38**
In the MLFQ example, queue Q0 uses RR with quantum:
A) 4 ms
B) 8 ms
C) 16 ms
D) 32 ms

**Answer:** B

---

**Question 39**
In the MLFQ example, queue Q2 uses:
A) RR
B) Priority scheduling
C) FCFS
D) SJF

**Answer:** C

---

**Question 40**
Poor scheduling in AI/ML workloads can cause:
A) GPU pipeline stalls
B) Reduced file permissions
C) Disk partition failure
D) Elimination of CPU bursts

**Answer:** A
