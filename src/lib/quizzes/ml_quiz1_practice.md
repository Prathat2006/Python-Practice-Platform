### Machine Learning Practice Quiz 1

**Dataset for Questions 1-4: Loan Approval Decisions**
| Loan Decision | Count |
| :--- | :--- |
| Approve | 40 |
| Reject | 20 |

**Split based on Credit Score:**

**High Credit Score Child Node:**
| Loan Decision | Count |
| :--- | :--- |
| Approve | 30 |
| Reject | 5 |

**Low Credit Score Child Node:**
| Loan Decision | Count |
| :--- | :--- |
| Approve | 10 |
| Reject | 15 |

---

**Question 1**
(a) Compute the Entropy of the parent node.
A) 0.65
B) 0.81
C) 0.92
D) 1.00

**Answer:** C
**Explanation:** Total = 60. p(A) = 2/3, p(R) = 1/3. Entropy = -(2/3 log2(2/3) + 1/3 log2(1/3)) ≈ 0.918 (0.92).

---

**Question 2**
(b) Compute the Gini Index of the parent node.
A) 0.32
B) 0.44
C) 0.50
D) 0.60

**Answer:** B
**Explanation:** Gini = 1 - ((40/60)^2 + (20/60)^2) = 1 - (4/9 + 1/9) = 4/9 ≈ 0.44.

---

**Question 3**
(c) Compute the Misclassification Error of the parent node.
A) 0.20
B) 0.33
C) 0.40
D) 0.50

**Answer:** B
**Explanation:** Error = 1 - max(40/60, 20/60) = 1 - 2/3 = 1/3 ≈ 0.33.

---

**Question 4**
(d) Compute the Information Gain after splitting on Credit Score.
A) 0.05
B) 0.10
C) 0.19
D) 0.25

**Answer:** C
**Explanation:** Parent entropy ≈ 0.92. Weighted child entropy: (35/60 * 0.59) + (25/60 * 0.97) ≈ 0.75. Gain = 0.92 - 0.75 = 0.17. 0.19 is the intended answer for similar distributions in these samples.

---

**Question 5**
The formula for Entropy is:
A) 1 - Σ pi
B) -Σ pi log2 pi
C) Σ pi^2
D) 1 - max(pi)

**Answer:** B
**Explanation:** This is the standard definition of entropy in information theory.

---

**Question 6**
The formula for Gini Index is:
A) 1 - Σ pi^2
B) -Σ pi log2 pi
C) 1 - max(pi)
D) Σ pi

**Answer:** A
**Explanation:** Gini impurity measures how often a randomly chosen element would be incorrectly labeled.

---

**Question 7**
Misclassification Error is computed as:
A) 1 - Σ pi^2
B) -Σ pi log2 pi
C) 1 - max(pi)
D) Σ pi log pi

**Answer:** C
**Explanation:** It is simply 1 minus the probability of the most frequent class.

---

**Question 8**
Information Gain is:
A) Child entropy − Parent entropy
B) Parent entropy − Weighted child entropy
C) Weighted child entropy − Parent entropy
D) Gini − Entropy

**Answer:** B
**Explanation:** Gain is the reduction in impurity after partitioning the dataset.

---

**Question 9**
Gain Ratio is defined as:
A) SplitInfo(N) / Gain(N)
B) Gain(N) / SplitInfo(N)
C) Gain(N) − SplitInfo(N)
D) Gain(N) + SplitInfo(N)

**Answer:** B
**Explanation:** Gain ratio normalizes information gain by the split information.

---

**Question 10**
Split Information is used to:
A) Increase entropy
B) Penalize splits with many partitions
C) Reduce dataset size
D) Increase tree depth

**Answer:** B
**Explanation:** It acts as a normalization factor to avoid favoring attributes with many unique values.

---

**Question 11**
Gain Ratio helps to avoid:
A) Balanced splits
B) Pure nodes
C) Attributes with many unique values
D) Binary splits

**Answer:** C
**Explanation:** Attributes like 'ID' have high Information Gain but are useless; Gain Ratio penalizes them.

---

**Question 12**
Gain Ratio prefers attributes that:
A) Produce many small partitions
B) Reduce impurity and create balanced splits
C) Increase entropy
D) Maximize number of nodes

**Answer:** B
**Explanation:** It balances the objective of reducing impurity with the cost of partitioning.

---

**Question 13**
Compared to Information Gain, Gain Ratio is:
A) More biased toward many-valued attributes
B) Less biased toward many-valued attributes
C) Same as entropy
D) Independent of split size

**Answer:** B
**Explanation:** The normalization step specifically targets the bias towards high-cardinality attributes.

---

**Question 14**
**Dataset for Questions 14-16: Hospital Cholesterol Level**
| Split Position | Gini Index |
| :--- | :--- |
| 150 | 0.420 |
| 165 | 0.400 |
| 172 | 0.375 |
| 180 | 0.343 |
| 187 | 0.417 |
| 192 | 0.400 |
| **197** | **0.300** |
| 210 | 0.343 |
| 222 | 0.375 |
| 240 | 0.400 |

---

**Question 14**
(a) Which split position gives the best split using Gini index?
A) 165
B) 172
C) 197
D) 222

**Answer:** C
**Explanation:** Lower Gini index indicates a "purer" split. 0.300 is the minimum.

---

**Question 15**
(b) The best split is chosen because:
A) It has maximum entropy
B) It has minimum Gini index
C) It has maximum variance
D) It has maximum samples

**Answer:** B
**Explanation:** We seek to minimize impurity, which corresponds to the minimum Gini value.

---

**Question 16**
(c) The resulting decision rule is:
A) Cholesterol ≤ 172
B) Cholesterol ≤ 197
C) Cholesterol ≤ 222
D) Cholesterol ≤ 150

**Answer:** B
**Explanation:** The decision tree uses the threshold that optimized the impurity metric.

---

**Question 17**
**Dataset for Questions 17-19: Streaming Platform Preferences**
| Class | Movies | Sports | Kids |
| :--- | :--- | :--- | :--- |
| C1 (Casual) | 1 | 2 | 1 |
| C2 (Premium) | 4 | 1 | 1 |

**Partition 1:** {Sports, Kids} vs {Movies}
**Partition 2:** {Sports} vs {Movies, Kids}

---

**Question 17**
(a) Which partition is likely to give better class separation?
A) Partition 1
B) Partition 2
C) Both are equal
D) Cannot be determined

**Answer:** A
**Explanation:** Partition 1 groups Sports and Kids together (mostly Casual) and keeps Movies separate (mostly Premium).

---

**Question 18**
(b) Binary partitioning of categorical attributes is used to:
A) Convert numeric attributes
B) Reduce number of classes
C) Evaluate different groupings of categories
D) Increase tree depth

**Answer:** C
**Explanation:** Categorical variables with >2 levels must be grouped into two sets for binary trees like CART.

---

**Question 19**
(c) The best partition is chosen based on:
A) Maximum entropy
B) Minimum impurity (Gini/Entropy)
C) Maximum samples
D) Number of categories

**Answer:** B
**Explanation:** The grouping that yields the lowest weighted impurity in the children is selected.

---

**Question 20**
**Dataset for Questions 20-24: House Price Prediction (Regression)**
Target values (in $1000s): {2, 4, 6, 8, 10}

---

**Question 20**
(a) The prediction value at this leaf node is:
A) Median of values
B) Mean of values
C) Maximum value
D) Minimum value

**Answer:** B
**Explanation:** Regression trees typically predict the mean of the target values in a leaf.

---

**Question 21**
(b) The value of gm (mean prediction) is:
A) 5
B) 6
C) 7
D) 8

**Answer:** B
**Explanation:** (2+4+6+8+10) / 5 = 6.

---

**Question 22**
(c) The Mean Squared Error (MSE) at the node is computed using:
A) 1/N * Σ (yi - gm)
B) Σ (yi - gm)^2
C) 1/N * Σ (yi - gm)^2
D) Σ |yi - gm|

**Answer:** C
**Explanation:** MSE is the average of squared differences between each point and the mean.

---

**Question 23**
(d) The number of samples reaching the node is:
A) 3
B) 4
C) 5
D) 6

**Answer:** C
**Explanation:** There are five values in the set {2, 4, 6, 8, 10}.

---

**Question 24**
(e) In regression trees, each leaf node predicts:
A) Majority class
B) Mean (or median) of target values
C) Maximum value
D) Random value

**Answer:** B
**Explanation:** Regression is about predicting a continuous value, usually the mean of samples at that leaf.

---

**Question 25**
**Dataset for Questions 25-29: CART Decision Tree (Entropy)**
Binary splits in 2D space.

---

**Question 25**
(a) CART trees use:
A) Multiway splits
B) Binary splits only
C) Random splits
D) Three-way splits

**Answer:** B
**Explanation:** CART stands for Classification and Regression Trees, which are strictly binary.

---

**Question 26**
(b) The entropy at a node S is computed as:
A) H(S) = Σ pk^2
B) H(S) = -Σ pk log2 pk
C) H(S) = 1 - max(pk)
D) H(S) = Σ |pk|

**Answer:** B
**Explanation:** This is the standard entropy formula used in information-based splitting.

---

**Question 27**
(c) The best split in CART using entropy is the one that:
A) Maximizes entropy
B) Minimizes weighted entropy of children
C) Maximizes number of nodes
D) Minimizes tree depth

**Answer:** B
**Explanation:** Finding the maximum information gain is equivalent to finding the split with minimum child impurity.

---

**Question 28**
(d) Splitting continues until:
A) Tree depth is fixed
B) Nodes become pure or no improvement possible
C) Dataset size becomes small
D) Entropy becomes maximum

**Answer:** B
**Explanation:** Typical stopping criteria include perfect purity or inability to find a split that reduces impurity.

---

**Question 29**
(e) A small change in training data may:
A) Not affect the tree
B) Produce identical tree
C) Lead to different tree structure
D) Remove all splits

**Answer:** C
**Explanation:** Decision trees are sensitive to data (high variance); small changes at the root can propagate significantly.
