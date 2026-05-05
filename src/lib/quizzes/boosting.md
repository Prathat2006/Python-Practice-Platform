### Boosting Practice Questions

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
*   **C** It focuses more on the errors or 'harder' instances from earlier models.
*   **D** It ignores all previous model results to maintain independence.

**Answer:** C
**Explanation:** In boosting, learners are trained sequentially. Each new model uses information from previous models to focus specifically on the mistakes or misclassified instances.

**Question 3**
Why is it generally recommended to keep weak learners simple (like stumps) in Boosting?
*   **A** Simple models are faster to train.
*   **B** Complex learners may overfit, reducing the benefits of the boosting process.
*   **C** To ensure the error is always exactly 0.5.
*   **D** Simple models have more 'Amount of Say'

**Answer:** B
**Explanation:** If the learners are too complex, they may overfit the training data, which reduces the overall effectiveness and accuracy benefits of the ensemble.

**Question 4**
How does the weight update rule work in AdaBoost for misclassified samples?
*   **A** The weights increase
*   **B** The weights decrease
*   **C** The weights stay the same to prevent overfitting
*   **D** The weights are reset to 1/N

**Answer:** A
**Explanation:** To ensure future learners focus on difficult samples, AdaBoost increases the weights of misclassified instances.

**Question 5**
Which strategy creates entirely new training datasets for each learner rather than just changing weight values on the same dataset?
*   **A** Reweighting
*   **B** Resampling
*   **C** Both
*   **D** Neither

**Answer:** B
**Explanation:** The Resampling strategy involves creating new datasets by sampling from the original data based on probabilities.
