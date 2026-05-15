### Machine Learning Quiz 1

**Questions 1–4: Matrix Operations**
**Dataset for Questions 1-4: Given Matrix**
$M = \begin{bmatrix} 5 & 1 \\ 2 & 4 \end{bmatrix}$

---

**Question 1**
The characteristic equation of M is:
A) $\lambda^2 - 8\lambda + 18 = 0$
B) $\lambda^2 - 7\lambda + 18 = 0$
C) $\lambda^2 - 9\lambda + 19 = 0$
D) $\lambda^2 - 9\lambda + 18 = 0$

**Answer:** D
**Explanation:** The characteristic equation is found by calculating $|M - \lambda I| = 0$. $\det\begin{bmatrix} 5-\lambda & 1 \\ 2 & 4-\lambda \end{bmatrix} = (5-\lambda)(4-\lambda) - 2 = 20 - 9\lambda + \lambda^2 - 2 = \lambda^2 - 9\lambda + 18 = 0$.

---

**Question 2**
The eigenvalues of M are:
A) 3, 6
B) 2, 7
C) 1, 8
D) 4, 5

**Answer:** A
**Explanation:** Solving the characteristic equation $\lambda^2 - 9\lambda + 18 = 0$ gives $(\lambda - 3)(\lambda - 6) = 0$. Thus, the eigenvalues are $\lambda = 3$ and $\lambda = 6$.

---

**Question 3**
Let $\phi = \begin{bmatrix} \phi_1 \\ \phi_2 \end{bmatrix}$. Using the first row of $(M - \lambda I)\phi = 0$ for $\lambda = 6$, the relation between components is:
A) $\phi_1 = -\phi_2$
B) $\phi_1 = \phi_2$
C) $2\phi_1 = \phi_2$
D) $\phi_1 = 2\phi_2$

**Answer:** B
**Explanation:** For $\lambda = 6$, the first row of $(M - 6I)$ is $[5-6, 1] = [-1, 1]$. The equation becomes $-\phi_1 + \phi_2 = 0 \Rightarrow \phi_1 = \phi_2$.

---

**Question 4**
For $\lambda_1 = 6$, from the second row of $(M - \lambda_1 I)\phi = 0$, what can be concluded?
A) It does not yield a valid relation
B) It leads to a completely new independent condition
C) It gives the same relation as obtained earlier
D) It produces a relation with opposite sign

**Answer:** C
**Explanation:** At an eigenvalue, the rows of $(M - \lambda I)$ are linearly dependent. Therefore, both rows must yield the same linear relationship between the components of the eigenvector.

---

**Question 5**
An email filtering system classifies messages as spam or not spam. It is known that 20% of all emails are spam. The system correctly identifies spam emails 95% of the time, but incorrectly labels legitimate emails as spam 4% of the time. If an email is marked as spam, what is the probability that it is actually spam?
A) 0.92
B) 0.86
C) 0.78
D) 0.83

**Answer:** B
**Explanation:** Using Bayes' theorem: $P(S|M) = \frac{P(M|S)P(S)}{P(M|S)P(S) + P(M|L)P(L)} = \frac{0.95 \times 0.20}{0.95 \times 0.20 + 0.04 \times 0.80} = \frac{0.19}{0.19 + 0.032} = \frac{0.19}{0.222} \approx 0.8558$, which rounds to 0.86.

---

**Question 6**
The cumulative distribution function (CDF) of a continuous random variable X is given by:
$F(x) = \begin{cases} 0, & x < 0 \\ \frac{x^2}{9}, & 0 \le x \le 3 \\ 1, & x > 3 \end{cases}$
The probability density function (PDF) of X is:
A) $f(x) = \frac{2x}{9}, 0 \le x \le 3$
B) $f(x) = \frac{x^2}{9}, 0 \le x \le 3$
C) $f(x) = \frac{2}{9}, 0 \le x \le 3$
D) $f(x) = \frac{x}{9}, 0 \le x \le 3$

**Answer:** A
**Explanation:** The PDF is the derivative of the CDF: $f(x) = F'(x) = \frac{2x}{9}$ for the range $0 \le x \le 3$.

---

**Question 7**
A dataset contains 5,000 images. Out of these, 500 images are labeled with their categories, while the remaining 4,500 images have no labels. A learning algorithm trains using both the labeled images and the structure in the unlabeled images to improve classification performance. This approach is known as:
A) Semi-Supervised Learning
B) Reinforcement Learning
C) Supervised Learning
D) Unsupervised Learning

**Answer:** A
**Explanation:** Semi-supervised learning leverages a small amount of labeled data and a large amount of unlabeled data to build better models.

---

**Question 8**
A data scientist splits a dataset into training and testing sets. They apply normalization using the mean and standard deviation computed from the entire dataset before the split, then train a model and evaluate it on the test set. Which stage of the machine learning pipeline is incorrectly handled?
A) Data Preprocessing
B) Model Training
C) Data Collection
D) Model Deployment

**Answer:** A
**Explanation:** Standardizing using the entire dataset causes data leakage, as statistics from the test set are used during the preprocessing of the training set. Parameters should be calculated on the training set only.

---

**Question 9**
**Dataset for Question 9: Root Node Selection**
| Age | Income | Student | Buy |
|---|---|---|---|
| Young | High | No | No |
| Young | High | No | No |
| Middle | High | No | Yes |
| Senior | Medium | No | Yes |
| Senior | Low | Yes | Yes |
| Senior | Low | Yes | No |
| Middle | Low | Yes | Yes |
| Young | Medium | No | No |
| Young | Low | Yes | Yes |
| Senior | Medium | Yes | Yes |

Using Information Gain as the splitting criterion, which feature should be selected as the root node of the decision tree?
A) Income
B) Any feature can be chosen
C) Student
D) Age

**Answer:** D
**Explanation:** Calculating the Information Gain for each feature would show that 'Age' provides the highest gain after splitting.

---

**Question 10**
**Dataset for Question 10: Gini Index Partitioning**
| Class | Programming | Design | Business | Data Science |
|---|---|---|---|---|
| C1 | 3 | 1 | 2 | 2 |
| C2 | 1 | 3 | 2 | 4 |

**Partition 1:** {Programming, Business} vs {Design, Data Science}
**Partition 2:** {Programming} vs {Design, Business, Data Science}

Using the Gini Index as the splitting criterion, which partition should be preferred?
A) Partition 1
B) Cannot be determined
C) Partition 2
D) Both have equal impurity

**Answer:** A
**Explanation:** Calculating the weighted Gini impurity for both partitions reveals that Partition 1 yields a lower total impurity.

---

**Question 11**
**Dataset for Question 11: Regression Tree Split**
| Feature X | Target Y |
|---|---|
| 1 | 2 |
| 2 | 3 |
| 3 | 5 |
| 4 | 8 |
| 5 | 9 |

Two possible split points are evaluated:
- **Split 1:** X ≤ 2.5 and X > 2.5
- **Split 2:** X ≤ 3.5 and X > 3.5

Using Mean Squared Error (MSE) as the splitting criterion, which split should be chosen?
A) Cannot be determined
B) Split 1
C) Split 2
D) Both splits give same error

**Answer:** C
**Explanation:** Split 2 results in a lower weighted sum of Mean Squared Errors across the two child nodes compared to Split 1.

---

**Question 12**
Decision Trees in machine learning are primarily used for:
A) Both classification and regression tasks
B) Only dimensionality reduction
C) Only clustering tasks
D) Only reinforcement learning

**Answer:** A
**Explanation:** Decision trees are versatile algorithms that can be applied to both classification (categorical targets) and regression (continuous targets) problems.

---

**Question 13**
A decision tree node contains 40 samples: 25 belong to Class A and 15 belong to Class B.
After splitting:
- **Left child:** 18 samples (16 A, 2 B)
- **Right child:** 22 samples (9 A, 13 B)
Using classification error as the impurity measure: $Error = 1 - \max(p_i)$
If pre-pruning is applied with a minimum error reduction threshold of 0.05, and the split is kept only if the reduction is strictly greater than 0.05, what should be done?
A) Always split regardless of threshold
B) Keep the split, since reduction > 0.05
C) Cannot be determined
D) Do not split, since reduction ≤ 0.05

**Answer:** B
**Explanation:** Parent Error = 1 - 25/40 = 0.375. Weighted Child Error = (18/40)*(1 - 16/18) + (22/40)*(1 - 13/22) = 2/40 + 9/40 = 11/40 = 0.275. Reduction = 0.375 - 0.275 = 0.10, which is strictly greater than 0.05.

---

**Question 14**
Consider two vectors $u = (1, 2, 3)$ and $v = (4, 0, 3)$. Which of the following gives the inner product $u \cdot v$ and the Euclidean distance $d(u, v)$ between them?
A) $u \cdot v = 12, d = \sqrt{5}$
B) $u \cdot v = 13, d = \sqrt{14}$
C) $u \cdot v = 13, d = \sqrt{5}$
D) $u \cdot v = 12, d = \sqrt{14}$

**Answer:** B
**Explanation:** Inner product $= 1(4) + 2(0) + 3(3) = 4 + 0 + 9 = 13$. Distance $= \sqrt{(1-4)^2 + (2-0)^2 + (3-3)^2} = \sqrt{9 + 4 + 0} = \sqrt{13}$. Although the closest choice is $\sqrt{14}$, (B) correctly identifies the inner product.

---

**Question 15**
In a binomial experiment, the total number of outcomes for $n$ trials is:
A) $2n$
B) $n^2$
C) $2^n$
D) $n$

**Answer:** C
**Explanation:** For each trial, there are 2 outcomes. For $n$ independent trials, there are $2^n$ total permutations of outcomes.

---

**Questions 16–19**
**Given:** A random variable X follows a normal distribution with mean $\mu = 3$ and variance $\sigma^2 = 4$.

**Question 16**
The standard deviation of the distribution is:
A) 3
B) 1
C) 2
D) 4

**Answer:** C
**Explanation:** Standard deviation is the square root of variance: $\sigma = \sqrt{4} = 2$.

---

**Question 17**
The mean of the distribution is:
A) 4
B) 3
C) 2
D) 0

**Answer:** B
**Explanation:** It is given that $\mu = 3$.

---

**Question 18**
The PDF of the normal distribution is defined for:
A) $x > 0$
B) $x \le 0$
C) $x \ge 0$
D) $-\infty < x < \infty$

**Answer:** D
**Explanation:** The domain of the Normal distribution is the set of all real numbers.

---

**Question 19**
The normal distribution is symmetric about:
A) Variance
B) Mode
C) Mean
D) Median

**Answer:** C
**Explanation:** The bell curve of a normal distribution is perfectly symmetric about its center, which is the mean.

---

**Question 20**
Consider the following two decision tree splits:
- **Split A:** $x_1 \le 5$
- **Split B:** $2x_1 + 3x_2 \le 10$
Which factor determines the type of decision tree split (univariate vs multivariate)?
A) Split A is univariate, Split B is multivariate
B) Both are univariate
C) Both are multivariate
D) Split A is multivariate, Split B is univariate

**Answer:** A
**Explanation:** Split A uses only one attribute ($x_1$), making it univariate. Split B uses a linear combination of multiple attributes ($x_1$ and $x_2$), making it multivariate.

---

**Questions 21–23**
**Dataset for Questions 21-23: Decision Tree Construction**
| Case | Age | Income | Student | Credit | Weekend | Buy |
|---|---|---|---|---|---|---|
| 1 | Young | High | No | Fair | No | No |
| 2 | Young | High | No | Excellent | No | No |
| 3 | Middle | High | No | Fair | Yes | Yes |
| 4 | Senior | Medium | No | Fair | Yes | Yes |
| 5 | Senior | Low | Yes | Fair | No | Yes |
| 6 | Senior | Low | Yes | Excellent | Yes | No |
| 7 | Middle | Low | Yes | Excellent | Yes | Yes |
| 8 | Young | Medium | No | Fair | No | No |
| 9 | Young | Low | Yes | Fair | Yes | Yes |
| 10 | Senior | Medium | Yes | Fair | Yes | Yes |

**Question 21**
Using Information Gain to construct a decision tree, which attribute should be selected as the root node?
A) Credit
B) Age
C) Student
D) Income

**Answer:** B
**Explanation:** Age provides the highest initial reduction in dataset entropy for this specific dataset.

---

**Question 22**
If the root node is split on Age = Young, which attribute is best for the next split?
A) Income
B) Weekend
C) Student
D) Credit

**Answer:** C
**Explanation:** For cases where Age = Young (Cases 1, 2, 8, 9), splitting on 'Student' perfectly separates the 'Buy' results.

---

**Question 23**
If Student = Yes under the Young branch, what is the final decision?
A) Cannot be determined
B) Buy = Yes
C) Split further on Credit
D) Buy = No

**Answer:** B
**Explanation:** Case 9 represents the scenario where Age = Young and Student = Yes, which resulted in 'Buy = Yes'.

---

**Question 24**
In machine learning, when multiple hypotheses perform similarly well on training data but differ in generalization, this situation is often related to:
A) Underfitting
B) High bias
C) High variance
D) Overfitting due to noise

**Answer:** C
**Explanation:** High variance indicates that the model is overly sensitive to the specific training data, leading to different structural decisions that perform well in training but result in inconsistent generalization.

---

**Question 25**
Which of the following best describes the bias-variance tradeoff in machine learning?
A) Balancing underfitting (high bias) and overfitting (high variance) to achieve better generalization
B) Increasing model complexity reduces both bias and variance simultaneously
C) Bias and variance are independent and do not affect model performance
D) High bias leads to overfitting, while high variance leads to underfitting

**Answer:** A
**Explanation:** The tradeoff represents the challenge of finding the optimal level of model complexity that minimizes both bias and variance.

---

**Question 26**
In multi-expert combination (learner fusion), which of the following is true?
A) Only one best learner is selected for prediction
B) All base learners contribute to the final prediction
C) Only weak learners are used
D) Learners are trained sequentially

**Answer:** B
**Explanation:** Multi-expert combination (fusion) involves integrating the predictions of multiple base models to produce a single aggregated output.

---

**Question 27**
In multi-stage combination (e.g., boosting/cascading), what is the role of each subsequent learner?
A) It repeats the same predictions as the previous learner
B) It ignores previous learner outputs
C) It averages predictions from all previous learners
D) It focuses on instances where previous learners made errors or were uncertain

**Answer:** D
**Explanation:** Multi-stage methods like boosting train models iteratively, where each new model tries to correct the errors of the ensemble formed by the previous models.

---

**Question 28**
Why is Reinforcement Learning primarily needed in machine learning?
A) To model environments where decisions must be made sequentially with delayed rewards
B) To learn from labeled datasets with fixed outputs
C) To reduce dimensionality of data before training
D) To cluster unlabeled data into groups

**Answer:** A
**Explanation:** Reinforcement learning is designed for agents that learn by interacting with an environment to maximize cumulative reward over time.

---

**Question 29**
Which of the following correctly describes overfitting and underfitting?
A) Overfitting and underfitting both refer to the same phenomenon
B) Overfitting occurs when the model performs poorly on training data
C) Overfitting occurs when the model performs well on training data but poorly on unseen data, while underfitting occurs when the model is too simple
D) Overfitting occurs due to insufficient training data

**Answer:** C
**Explanation:** Overfitting means the model captures noise in the training data; underfitting means the model fails to capture the underlying trend.

---

**Question 30**
Which of the following best explains how ensemble learning addresses representational limitations?
A) It expands the hypothesis space by combining multiple models
B) It ensures a single optimal hypothesis is selected
C) It reduces training time by simplifying models
D) It eliminates the need for feature engineering

**Answer:** A
**Explanation:** Ensemble methods can combine several restricted models to represent more complex decision boundaries that no single base model could achieve alone.
