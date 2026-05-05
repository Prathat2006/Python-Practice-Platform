### Week 9 - Cross-Validation & Imbalance

**Question 1**
What is the primary purpose of a validation dataset during model development?
*   **A** To train the model on unseen patterns
*   **B** To tune hyperparameters and detect overfitting during training
*   **C** To provide the final unbiased estimate of model performance
*   **D** To augment minority class samples

**Answer:** B
**Explanation:** The validation set is used during development for model selection, hyperparameter tuning, and detecting overfitting — not for final evaluation.

**Question 2**
In K-Fold Cross-Validation with K = 5, how many times is the model trained in total?
*   **A** 1
*   **B** 3
*   **C** 5
*   **D** 10

**Answer:** C
**Explanation:** With K = 5, the model is trained exactly 5 times. Each time a different fold serves as the validation set while the remaining 4 folds are used for training.

**Question 3**
Leave-One-Out Cross-Validation (LOOCV) is a special case of K-Fold where K equals:
*   **A** The number of features
*   **B** The number of classes
*   **C** The number of samples (N)
*   **D** 10

**Answer:** C
**Explanation:** LOOCV is K-Fold where K = N (number of samples). Each iteration uses one sample as the test set and all remaining N−1 samples for training.

**Question 4**
When handling class imbalance, balancing techniques should be applied to:
*   **A** The entire dataset before any splitting
*   **B** Only the training set
*   **C** Training and validation sets equally
*   **D** Only the test set

**Answer:** B
**Explanation:** Balancing techniques must only be applied to training data. Validation and test sets must remain untouched to ensure a fair and unbiased evaluation of real-world performance.

**Question 5**
Which technique creates new synthetic samples between existing minority class data points rather than simply duplicating them?
*   **A** Undersampling
*   **B** Class weighting
*   **C** SMOTE
*   **D** Data augmentation

**Answer:** C
**Explanation:** SMOTE (Synthetic Minority Over-sampling Technique) generates new samples by interpolating between existing minority class points, reducing overfitting compared to simple duplication.
