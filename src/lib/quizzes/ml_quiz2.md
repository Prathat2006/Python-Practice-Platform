### Machine Learning Quiz 2

**Question 1**
A hospital builds a liver disease prediction model using 103 patient records and applies 5-fold cross-validation. Which statement is correct?
A) 3 folds will have 21 samples, 2 folds will have 20 samples
B) Each sample appears twice in validation
C) Each sample is used only once in training
D) All folds must have exactly 20 samples

**Answer:** A
**Explanation:** 103 divided by 5 is 20 with a remainder of 3. Therefore, 3 folds will contain 21 samples and 2 folds will contain 20 samples.

---

**Question 2**
A fintech startup evaluates a fraud detection model:
- Fold A: 90% (100 samples)
- Fold B: 80% (50 samples)
- Fold C: 70% (25 samples)
- Fold D: 60% (25 samples)
What is the correct overall accuracy?
A) 85%
B) 81.25%
C) 80%
D) 75%

**Answer:** B
**Explanation:** Total correct predictions = (0.90 * 100) + (0.80 * 50) + (0.70 * 25) + (0.60 * 25) = 90 + 40 + 17.5 + 15 = 162.5. Total samples = 200. Overall accuracy = 162.5 / 200 = 81.25%.

---

**Question 3**
A medical AI pipeline normalizes the entire dataset before splitting into folds, leading to unusually high validation accuracy. What is the issue?
A) Data leakage
B) High variance
C) Underfitting
D) Class imbalance

**Answer:** A
**Explanation:** Normalizing before splitting means information from the validation set "leaks" into the training process, incorrectly boosting validation accuracy.

---

**Question 4**
An autonomous driving model shows:
- Train error = 2%
- Validation error = 35%
What is happening?
A) Underfitting due to high bias
B) Overfitting due to high variance
C) Noise dominance
D) Perfect generalization

**Answer:** B
**Explanation:** A very low training error but high validation error is the classic sign of an overfitted model with high variance.

---

**Question 5**
An e-commerce system increases dataset size from 1,000 to 1,000,000 users, reducing overfitting. Why?
A) Bias decreases
B) Noise disappears
C) Variance reduces
D) Model simplifies automatically

**Answer:** C
**Explanation:** Having more data helps the model generalize better, which effectively reduces its variance and mitigates overfitting.

---

**Question 6**
In AdaBoost, a weak learner has error $e = 0.5$. What is $\alpha$?
A) 1
B) 0
C) Negative
D) Very large

**Answer:** B
**Explanation:** $\alpha = \frac{1}{2} \ln(\frac{1-e}{e})$. If $e=0.5$, then $\ln(1) = 0$, so $\alpha = 0$.

---

**Question 7**
A weak learner has error $e = 0.2$. Compute $\alpha$.
A) $\approx 0.35$
B) $\approx 0.69$
C) $\approx 0$
D) $\approx 1.39$

**Answer:** B
**Explanation:** $\alpha = \frac{1}{2} \ln(\frac{1-0.2}{0.2}) = \frac{1}{2} \ln(4) \approx \frac{1}{2} (1.386) \approx 0.69$.

---

**Question 8**
In AdaBoost, a sample is misclassified repeatedly. What happens to its weight?
A) Increases exponentially
B) Remains constant
C) Becomes zero
D) Decreases linearly

**Answer:** A
**Explanation:** Misclassified samples have their weights multiplied by $e^\alpha$, causing them to grow exponentially with repeated misclassifications.

---

**Question 9**
A weak learner has error $e = 0.49$. What is its role?
A) Strong contributor
B) Dominates ensemble
C) Moderate contributor
D) Almost useless

**Answer:** D
**Explanation:** An error of 0.49 is extremely close to random guessing (0.5), making its $\alpha$ weight near zero; hence it is almost useless.

---

**Question 10**
A classifier achieves $e = 0$ in boosting. What happens?
A) Training continues unchanged
B) $\alpha \to \infty$
C) Model weakens
D) $\alpha = 0$

**Answer:** B
**Explanation:** If $e \to 0$, $\frac{1-e}{e} \to \infty$, so $\alpha \to \infty$. The learner is perfect.

---

**Question 11**
An engineer replaces decision stumps with deep trees in AdaBoost. What is most likely?
A) Guaranteed improvement
B) Overfitting increases
C) Variance decreases
D) No change

**Answer:** B
**Explanation:** AdaBoost relies on weak learners (high bias, low variance). Deep trees are strong learners (low bias, high variance), so boosting them often leads to overfitting.

---

**Question 12**
Why does boosting outperform bagging in some cases?
A) Reduced bias only
B) Larger datasets
C) Sequential error correction
D) Independent training

**Answer:** C
**Explanation:** Boosting trains models sequentially, aggressively correcting the errors made by previous models, which often yields better absolute performance than bagging.

---

**Question 13**
A genomics model must select only a few relevant genes. Which method is best?
A) L1 regularization
B) No regularization
C) L2 regularization
D) Dropout

**Answer:** A
**Explanation:** L1 regularization (Lasso) promotes sparsity, effectively zeroing out the weights of irrelevant features, which acts as feature selection.

---

**Question 14**
A model uses L2 regularization. What happens to weights?
A) Increase
B) Become zero exactly
C) Randomize
D) Shrink smoothly

**Answer:** D
**Explanation:** L2 regularization (Ridge) penalizes large weights, causing them to shrink smoothly towards zero but rarely reaching exactly zero.

---

**Question 15**
If $\lambda$ is extremely large:
A) Variance increases
B) Overfitting increases
C) Model underfits
D) Noise reduces

**Answer:** C
**Explanation:** A very large regularization parameter penalizes weights heavily, leading to a model that is too simple to capture the underlying pattern (underfitting / high bias).

---

**Question 16**
Given weights $[2, -3, 1]$, compute L1 penalty.
A) 5
B) 6
C) 9
D) 14

**Answer:** B
**Explanation:** The L1 penalty is the sum of absolute values: $|2| + |-3| + |1| = 2 + 3 + 1 = 6$.

---

**Question 17**
Given weights $[2, -3, 1]$, compute L2 penalty.
A) 6
B) 5
C) $\sqrt{14}$
D) 14

**Answer:** D
**Explanation:** The L2 penalty (without squaring root, standard sum of squared weights) is $2^2 + (-3)^2 + 1^2 = 4 + 9 + 1 = 14$.

---

**Question 18**
Model A: Train Error = 5%, Validation Error = 6%
Model B: Train Error = 1%, Validation Error = 25%
Which is better?
A) Model A
B) Both equal
C) Model B
D) Cannot decide

**Answer:** A
**Explanation:** Model A generalizes much better (validation error is close to training error), whereas Model B is heavily overfitted.

---

**Question 19**
A learning curve shows both training and validation errors are high. What does this indicate?
A) Underfitting
B) Overfitting
C) Optimal model
D) Data leakage

**Answer:** A
**Explanation:** When both errors are high, the model is unable to learn the underlying trend of the data, which indicates underfitting.

---

**Question 20**
Why can irreducible error never be eliminated?
A) Poor optimization
B) Small dataset
C) Wrong algorithm
D) Inherent randomness in data

**Answer:** D
**Explanation:** Irreducible error comes from noise and inherent variability in the problem itself, which no model can predict out.

---

**Dataset for Questions 21-37: AdaBoost Case Study — Tumor Detection Model**

**Features:**
- F1: Cell Color (Red/Blue)
- F2: Shape (Round/Square)
- F3: Size (Big/Small)

**Target:**
- Yes → Cancerous
- No → Non-cancerous

| Sample | F1 | F2 | F3 | Class |
| :--- | :--- | :--- | :--- | :--- |
| S1 | Red | Round | Big | Yes |
| S2 | Red | Square | Big | No |
| S3 | Red | Square | Small | No |
| S4 | Blue | Round | Big | Yes |
| S5 | Blue | Round | Small | No |
| S6 | Blue | Square | Small | No |

---

**Question 21**
Initial weight assigned to each sample is:
A) 1/6
B) 1/5
C) 1/4
D) 1

**Answer:** A
**Explanation:** There are 6 samples. In AdaBoost, initial weights are uniformly distributed: $w_i = 1/N = 1/6$.

---

**Question 22**
Total sum of initial weights equals:
A) 6
B) Depends on data
C) 0.5
D) 1

**Answer:** D
**Explanation:** The weights form a probability distribution, which means their sum must always equal 1.

---

**Question 23**
A decision stump is trained on feature F2. The prediction rule is:
A) Round → No, Square → Yes
B) Big → Yes, Small → No
C) Round → Yes, Square → No
D) Red → Yes, Blue → No

**Answer:** C
**Explanation:** Looking at the data, samples with Round (S1, S4, S5) have two Yes and one No. Samples with Square (S2, S3, S6) are all No. Therefore, "Round → Yes, Square → No" is the best rule for feature F2.

---

**Question 24**
Number of misclassified samples:
A) 3
B) 2
C) 0
D) 1

**Answer:** D
**Explanation:** Using the rule "Round → Yes, Square → No", S5 (Round, No) is predicted as Yes, making it the only misclassification.

---

**Question 25**
Weighted error $e$ is:
A) 0.25
B) 0.10
C) 0.167
D) 0.50

**Answer:** C
**Explanation:** Because initial weights are equal, $e = \text{misclassified} / N = 1 / 6 \approx 0.167$.

---

**Question 26**
Amount of say $\alpha$ is approximately:
A) 0
B) 0.4
C) 0.8
D) 1.5

**Answer:** C
**Explanation:** $\alpha = \frac{1}{2}\ln(\frac{1-0.167}{0.167}) = \frac{1}{2}\ln(5) \approx \frac{1}{2}(1.61) \approx 0.8$.

---

**Question 27**
Which sample will receive the highest updated weight?
A) S3
B) S1
C) S5
D) S6

**Answer:** C
**Explanation:** S5 was the only misclassified sample, so its weight will be increased (multiplied by $e^\alpha$), while correctly classified samples' weights decrease.

---

**Question 28**
Weight update for misclassified samples follows:
A) Divide by $\alpha$
B) Multiply by $e^{-\alpha}$
C) Multiply by $e^{+\alpha}$
D) No change

**Answer:** C
**Explanation:** Misclassified samples have their weights increased by multiplying by $e^\alpha$ to force the next learner to focus on them.

---

**Question 29**
After normalization, which statement is true?
A) Misclassified sample gets highest probability
B) Weights sum to more than 1
C) Correct samples dominate
D) All weights become equal

**Answer:** A
**Explanation:** Since S5's weight was increased and others decreased, after normalization, S5 will have the highest individual weight/probability.

---

**Question 30**
In roulette wheel sampling, a random number selects:
A) Random feature
B) Smallest weight sample
C) Largest weight sample always
D) Sample whose cumulative range contains the number

**Answer:** D
**Explanation:** This is standard roulette wheel selection, creating ranges proportional to sample weights to sample them randomly with bias.

---

**Question 31**
If a random number 0.5 is generated, which sample is most likely selected?
A) S5
B) S1
C) S6
D) S2

**Answer:** A
**Explanation:** Because S5 was misclassified, its weight constitutes a large block of the normalized weights (0.5), meaning it occupies a huge portion of the cumulative distribution.

---

**Question 32**
Why does S5 appear multiple times in resampled dataset?
A) It is removed
B) It is easiest sample
C) It has highest weight
D) Random chance only

**Answer:** C
**Explanation:** When drawing with replacement according to weights, the sample with the highest weight will logically be drawn the most times.

---

**Question 33**
What is the purpose of resampling in AdaBoost?
A) Focus on difficult samples
B) Remove noise
C) Increase bias
D) Reduce dataset size

**Answer:** A
**Explanation:** By giving higher weights to misclassified samples (or effectively resampling them repeatedly), we force the next model to focus on these harder instances.

---

**Question 34**
If a sample is repeatedly misclassified:
A) It is removed
B) Its weight increases
C) Its weight decreases
D) It becomes irrelevant

**Answer:** B
**Explanation:** Misclassification causes consecutive multiplications with $e^\alpha$, continuously increasing the sample's weight.

---

**Question 35**
In the next iteration, the model focuses more on:
A) Random samples
B) Easy samples
C) All equally
D) Hard samples

**Answer:** D
**Explanation:** Higher sample weights (or repeated presence in resampled data) enforce attention on the samples the ensemble failed on previously.

---

**Question 36**
Final AdaBoost prediction is based on:
A) Weighted sum of learners
B) Simple majority vote
C) First learner only
D) Random prediction

**Answer:** A
**Explanation:** The combined classifier takes the sign of a weighted sum (using $\alpha_t$) of the individual weak learners' predictions.

---

**Question 37**
If weighted sum is positive, final class is:
A) -1
B) Undefined
C) 0
D) +1

**Answer:** D
**Explanation:** In binary classification formulating targets as $\{-1, 1\}$, a positive weighted sum means the prediction stands for the positive class (+1).

---

**Question 38**
If error $e = 0.5$, then $\alpha$ is:
A) 0
B) Negative
C) Large
D) Approaches infinity

**Answer:** A
**Explanation:** If $e=0.5$, $\frac{1-e}{e} = 1$, and $\ln(1) = 0$, so $\alpha$ equals 0.

---

**Question 39**
If error $e = 0$, then $\alpha$ is:
A) Negative
B) Small
C) 0
D) Approaches infinity

**Answer:** D
**Explanation:** If $e \rightarrow 0$, $(1-e)/e \rightarrow \infty$, and $\ln(\infty) \rightarrow \infty$, so $\alpha$ goes to infinity.

---

**Question 40**
Why are decision stumps preferred in AdaBoost?
A) High accuracy
B) Keep learners weak and prevent overfitting
C) Increase variance
D) Reduce computation only

**Answer:** B
**Explanation:** AdaBoost reduces bias; therefore it works best with weak learners that have high bias and low variance, preventing the combined model from overfitting.
