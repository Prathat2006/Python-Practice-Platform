### Boosting and Ensemble Methods

**Question 1**
Boosting is an ensemble technique that transforms multiple [A] learners into a single [B] predictor. What are A and B?
*   **A** Random; Accurate
*   **B** Weak (base); Strong
*   **C** Parallel; Sequential
*   **D** Resampled; Reweighted

**Answer:** B
**Explanation:** Boosting is explicitly defined as an ensemble technique that combines multiple weak (base) learners to build a strong predictive model.

**Question 2**
In a Boosting sequence, how does a new learner decide what to focus on?
*   **A** It focuses on a random subset of the original data.
*   **B** It focuses on the samples correctly classified by the previous model.
*   **C** It focuses more on the errors or "harder" instances from earlier models.
*   **D** It ignores all previous model results to maintain independence.

**Answer:** C
**Explanation:** In boosting, learners are trained sequentially. Each new model uses information from previous models to focus specifically on the mistakes or misclassified instances.

**Question 3**
The importance of a learner in the final ensemble is represented by $\alpha_{k}$. If a classifier has a weighted error of $e_{k} = 0.5$, what is its Amount of Say?
*   **A** A very large positive value.
*   **B** Exactly 0.5.
*   **C** It becomes negative.
*   **D** Exactly 0.

**Answer:** D
**Explanation:** The "Amount of Say" $\alpha_{k}$ is calculated using the formula: $\alpha_{k} = (1/2) \ln((1 - e_{k}) / e_{k})$. If $e_{k} = 0.5$, $\ln(1) = 0$.

**Question 4**
The Weight Update Rule: After a learner is trained, what happens to the weights of the misclassified samples?
*   **A** The weights increase ($W_{k} \times e^{+\alpha_{k}}$)
*   **B** The weights decrease ($W_{k} \times e^{-\alpha_{k}}$)
*   **C** The weights stay the same to prevent overfitting
*   **D** The weights are reset to $1/N$

**Answer:** A
**Explanation:** To ensure future learners focus on difficult samples, AdaBoost increases the weights of misclassified instances.

**Question 5**
Which strategy creates entirely new training datasets for each learner rather than just changing weight values on the same dataset?
*   **A** Reweighting
*   **B** Resampling

**Answer:** B
**Explanation:** Resampling involves creating new datasets by sampling from the original data based on updated probabilities.

**Question 6**
**True or False?** "In the Resampling strategy, the size of the new training dataset is always different from the original dataset size to accommodate the errors."
*   **A** True
*   **B** False

**Answer:** B
**Explanation:** The dataset size remains the same as the original; samples are simply drawn with replacement based on updated probabilities.

**Question 7**
A Decision Stump is commonly used as a base learner in AdaBoost. Which of the following best describes it?
*   **A** A tree with a maximum depth of 10.
*   **B** A tree with only one split using only one feature.
*   **C** A forest of many small trees.
*   **D** A model that always yields 100% accuracy.

**Answer:** B
**Explanation:** A decision stump is a decision tree with only one split.

**Question 8**
Why is it generally recommended to keep weak learners simple (like stumps) in Boosting?
*   **A** Simple models are faster to train.
*   **B** Complex learners may overfit, reducing the benefits of the boosting process.
*   **C** To ensure the error $e_{k}$ is always exactly 0.5.
*   **D** Simple models have more "Amount of Say" ($\alpha_{k}$).

**Answer:** B
**Explanation:** If learners are too complex, they may overfit the training data, reducing the generalized benefit of the ensemble.

**Question 9**
You have 6 samples with equal initial weights (1/6). One learner misclassifies Sample 5. Calculate the Error ($e_{1}$).
**Answer:** 0.167
**Explanation:** The weighted error is the sum of the weights of misclassified samples. If one out of six is wrong, the error is $1/6 \approx 0.167$.

**Question 10a**
A dataset has 8 samples. What is the initial weight assigned to each sample?
**Answer:** 0.125
**Explanation:** Initial weight $= 1/N = 1/8 = 0.125$.

**Question 10b**
If 2 samples are removed from an 8-sample dataset, what will be the new initial weight per sample?
**Answer:** 0.167
**Explanation:** $1/6 \approx 0.167$. Weights must always sum to 1.

**Question 11**
A weak learner misclassifies samples with weights: 0.1, 0.05, 0.2. Compute the weighted error $e$. (Assuming total weight = 1)
**Answer:** 0.35
**Explanation:** $e = 0.1 + 0.05 + 0.2 = 0.35$.

**Question 12**
Compute $\alpha$ given error $e = 0.25$.
**Answer:** 0.549
**Explanation:** $\alpha = 0.5 \times \ln((1-0.25)/0.25) = 0.5 \times \ln(3) \approx 0.549$.

**Question 13**
Two weak learners have errors: Model A ($e=0.1$), Model B ($e=0.4$). Which learner is more important in the final model?
*   **A** Model A
*   **B** Model B

**Answer:** A
**Explanation:** Lower error leads to a higher $\alpha$ and thus more influence. $\alpha_{A} \approx 1.098, \alpha_{B} \approx 0.202$.

**Question 14a**
What happens to $\alpha$ when $e = 0.5$?
*   **A** $\alpha = 0$
*   **B** $\alpha \rightarrow \infty$
*   **C** $\alpha$ becomes negative
*   **D** $\alpha$ is undefined

**Answer:** A
**Explanation:** Random guessing provides no contribution.

**Question 14b**
What happens to $\alpha$ when $e = 0$?
*   **A** $\alpha = 0$
*   **B** $\alpha \rightarrow \infty$
*   **C** $\alpha$ becomes negative
*   **D** $\alpha$ is undefined

**Answer:** B
**Explanation:** A perfect classifier dominates the ensemble.

**Question 15**
Initial weight $= 0.1$, $\alpha = 0.7$. What is the new weight for a misclassified sample? (Use $W_{new} = W \times e^{\alpha}$)
**Answer:** 0.201
**Explanation:** $0.1 \times e^{0.7} \approx 0.1 \times 2.013 = 0.2013$.

**Question 16**
After update, weights are: [0.2, 0.1, 0.05, 0.15]. Normalize them. What is the value of the first weight (0.2) after normalization?
**Answer:** 0.4
**Explanation:** Sum $= 0.5$. Normalized value $= 0.2 / 0.5 = 0.4$.

**Question 17**
A dataset has 5 samples (equal initial weights). A classifier misclassifies 1 sample. What is the error $e$?
**Answer:** 0.2
**Explanation:** $1/5 = 0.2$.

**Question 18**
Given normalized weights: S1:0.05, S2:0.05, S3:0.6, S4:0.1, S5:0.2. Which sample is most likely to be selected in resampling?
*   **A** S1
*   **B** S2
*   **C** S3
*   **D** S4
*   **E** S5

**Answer:** C
**Explanation:** S3 has the highest probability (0.6).

**Question 19**
Three weak learners: h1 (+1, $\alpha=0.4$), h2 (-1, $\alpha=0.6$), h3 (+1, $\alpha=0.3$). Compute final prediction $H(x) = \text{sign}(\alpha_1h_1 + \dots)$.
*   **A** +1
*   **B** -1

**Answer:** A
**Explanation:** $0.4(+1) + 0.6(-1) + 0.3(+1) = 0.4 - 0.6 + 0.3 = 0.1$. $\text{sign}(0.1) = +1$.

**Question 20**
Iteration 1 ($e=0.3$), Iteration 2 ($e=0.2$). Which iteration contributes more to final prediction?
*   **A** Iteration 1
*   **B** Iteration 2

**Answer:** B
**Explanation:** Lower error $\rightarrow$ higher $\alpha$.

**Question 21a**
True or False: In AdaBoost, all weak learners are trained simultaneously on the same dataset.
*   **A** True
*   **B** False

**Answer:** B
**Explanation:** AdaBoost trains learners sequentially.

**Question 21b**
True or False: A sample that is misclassified in Round 1 will receive a higher weight in Round 2.
*   **A** True
*   **B** False

**Answer:** A
**Explanation:** Weights increase for misclassified samples.

**Question 22**
A 5-sample set has weights after Round 1. Sum of weights: S1(0.1), S2(0.25), S3(0.1), S4(0.4), S5(0.15). Verify total weight sum.
**Answer:** 1
**Explanation:** $0.1+0.25+0.1+0.4+0.15 = 1$.

**Question 23**
You have 10 samples (weights=0.1). Stump A misclassifies 1 sample, Stump B misclassifies 3. Which is chosen?
*   **A** Stump A
*   **B** Stump B

**Answer:** A
**Explanation:** Lowest weighted error is preferred.

**Question 24**
6 samples (weights=0.167). Stump misclassifies S3 and S5. $\alpha = 0.693$. Use $e^{0.693} \approx 2.0$. What is the new RAW weight for S3?
**Answer:** 0.333
**Explanation:** $0.167 \times 2.0 \approx 0.334$ (or $1/3$).

**Question 25**
Normalized weights: S1:0.1, S2:0.5, S3:0.25, S4:0.15. If a random number $= 0.45$, which sample gets selected?
*   **A** S1
*   **B** S2
*   **C** S3
*   **D** S4

**Answer:** B
**Explanation:** S2 range is (0.1, 0.6]. 0.45 falls in S2.

**Question 26**
Stump 1 ($\alpha=0.5$), Stump 2 ($\alpha=0.3$), Stump 3 ($\alpha=0.8$). Votes on Sample A: S1:+1, S2:+1, S3:-1. Final prediction?
*   **A** +1
*   **B** -1

**Answer:** A
**Explanation:** $0.5 + 0.3 - 0.8 = 0$. By convention, ties often go to +1 or are handled specifically. Given the context, we'll mark it as +1.

**Question 34**
Which of the following statements is **not** true about boosting?
*   **A** It primarily reduces the bias and the variance.
*   **B** It mainly increases the bias and the variance.
*   **C** It is a sequential ensemble method.
*   **D** It uses weak learners.

**Answer:** B
**Explanation:** Boosting reduces bias and variance.

**Question 35**
Which of the following statements is **not** true about weak learners?
*   **A** They perform slightly better than random guessing.
*   **B** They are typically simple models (like stumps).
*   **C** They have high bias.
*   **D** They have low bias.

**Answer:** D
**Explanation:** Weak learners have high bias.

**Question 36**
True or False: If a classifier is unstable (high variance), you should apply Boosting.
*   **A** True
*   **B** False

**Answer:** B
**Explanation:** For high variance (unstable), apply Bagging. For high bias, apply Boosting.

**Question 41**
Why is a Decision Tree with max\_depth = 1 (a stump) commonly used as the weak learner?
*   **A** Because shallow trees help AdaBoost focus on one simple rule at a time.
*   **B** Because they are 100% accurate.
*   **C** Because they are impossible to overfit.
*   **D** They aren't; deep trees are preferred.

**Answer:** A
**Explanation:** Deep trees overfit, making the ensemble less effective.

**Question 42**
If a weak learner has error $e = 0$, what happens to $\alpha$?
*   **A** $\alpha = 0$
*   **B** $\alpha = 1$
*   **C** $\alpha \rightarrow \infty$
*   **D** $\alpha$ stays constant

**Answer:** C
**Explanation:** A perfect model gets infinite say.

**Question 49**
6 customer samples. $\alpha_1 = 0.35, \alpha_2 = 0.97$. Votes: $h_1 = +1, h_2 = +1$. Final prediction sum?
**Answer:** 1.32
**Explanation:** $0.35 + 0.97 = 1.32$. Result is positive → Default.
