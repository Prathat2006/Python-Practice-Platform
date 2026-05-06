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
Which of the following are valid reasons to prefer Stratified K-Fold over standard K-Fold? (Select all that apply)
*   **A** The dataset has a severe class imbalance
*   **B** You want each fold to reflect the original class distribution
*   **C** You want faster computation
*   **D** You want to avoid biased evaluation on imbalanced data

**Answer:** A, B, D
**Explanation:** Stratification ensures that each fold is representative of the whole dataset's class distribution, which is crucial for imbalanced data.

**Question 4**
Leave-One-Out Cross-Validation (LOOCV) is a special case of K-Fold where K equals:
*   **A** The number of features
*   **B** The number of classes
*   **C** The number of samples (N)
*   **D** 10

**Answer:** C
**Explanation:** LOOCV is K-Fold where K = N (number of samples). Each iteration uses one sample as the test set and all remaining N−1 samples for training.

**Question 5**
A dataset has 900 normal samples and 100 fraud samples. A model that always predicts 'Normal' achieves 90% accuracy. Which statements are true? (Select all that apply)
*   **A** The model has learned a useful pattern
*   **B** Accuracy is a misleading metric here
*   **C** The model detects 0% of fraud cases
*   **D** This is a class imbalance problem

**Answer:** B, C, D
**Explanation:** Accuracy is very high because of the majority class, but the model completely fails at the task it was designed for (detecting fraud).

**Question 6**
Which technique creates new synthetic samples between existing minority class data points rather than simply duplicating them?
*   **A** Undersampling
*   **B** Class weighting
*   **C** SMOTE
*   **D** Data augmentation

**Answer:** C
**Explanation:** SMOTE (Synthetic Minority Over-sampling Technique) generates new samples by interpolating between existing minority class points, reducing overfitting compared to simple duplication.

**Question 7**
When handling class imbalance, balancing techniques should be applied to:
*   **A** The entire dataset before any splitting
*   **B** Only the training set
*   **C** Training and validation sets equally
*   **D** Only the test set

**Answer:** B
**Explanation:** Balancing techniques must only be applied to training data. Validation and test sets must remain untouched to ensure a fair and unbiased evaluation of real-world performance.

**Question 8**
Which of the following are limitations of cross-validation? (Select all that apply)
*   **A** Computationally expensive due to multiple training runs
*   **B** Cannot be used with small datasets
*   **C** May produce optimistic estimates if data is not representative
*   **D** Does not completely eliminate overfitting

**Answer:** A, C, D
**Explanation:** CV is expensive. It also cannot fix bias if the original data isn't representative, and while it helps detect overfitting, it doesn't prevent it automatically.

**Question 9**
You have a very small dataset of 50 medical images. Which cross-validation strategy is most appropriate?
*   **A** Standard K-Fold with K=3
*   **B** Leave-One-Out Cross-Validation
*   **C** Standard K-Fold with K=5, no stratification
*   **D** A single 80/20 train-test split

**Answer:** B
**Explanation:** For very small datasets, LOOCV is often used to maximize the amount of training data in each iteration.

**Question 10**
In a 5-Fold CV experiment, the confusion matrices across folds give: Average TP=41, TN=49.2, FP=5.2, FN=4.6. What is the approximate overall accuracy?
*   **A** 82%
*   **B** 88%
*   **C** 90.2%
*   **D** 76%

**Answer:** C
**Explanation:** Accuracy = (TP + TN) / (TP + TN + FP + FN) = (41 + 49.2) / (41 + 49.2 + 5.2 + 4.6) = 90.2 / 100 = 90.2%.

**Question 11**
Which techniques can be used to handle class imbalance in a training dataset? (Select all that apply)
*   **A** Undersampling the majority class
*   **B** Oversampling the minority class
*   **C** Applying class weights during training
*   **D** Removing the minority class entirely

**Answer:** A, B, C
**Explanation:** Undersampling, oversampling, and class weighting are standard approaches.

**Question 12**
Leave-P-Out (LPO) cross-validation becomes computationally expensive primarily because:
*   **A** P is always very large
*   **B** The number of all possible combinations of P samples grows rapidly
*   **C** It requires data augmentation at each step
*   **D** Models must be trained on fewer samples each time

**Answer:** B
**Explanation:** The number of ways to pick P items out of N grows combinatorially.

**Question 13**
A dataset has 18,000 majority class samples and 2,000 minority class samples. After random undersampling, both classes have 2,000 samples. What is the main risk of this approach?
*   **A** The model will overfit the minority class
*   **B** Potentially useful majority class information is permanently discarded
*   **C** The minority class gets duplicated
*   **D** Validation accuracy becomes unreliable

**Answer:** B
**Explanation:** Undersampling removes data from the majority class, which might contain important patterns or representative samples.

**Question 14**
Which of the following statements about data augmentation are correct? (Select all that apply)
*   **A** It generates new variations of existing data using transformations
*   **B** It is most commonly applied to image datasets
*   **C** It can help balance the minority class by creating more samples
*   **D** It always involves duplicating existing samples without modification

**Answer:** A, B, C
**Explanation:** Augmentation involves transformations (crop, rotate, etc.) to create diversity, not just simple duplication.

**Question 15**
What distinguishes class weighting from oversampling as a strategy for handling imbalance?
*   **A** Class weighting changes the dataset size; oversampling does not
*   **B** Class weighting penalises errors on the minority class more heavily without altering the dataset
*   **C** Oversampling works only for neural networks; class weighting works for all models
*   **D** Class weighting removes majority class samples

**Answer:** B
**Explanation:** Class weighting adjusts the loss function's sensitivity rather than changing the data distribution.

**Question 16**
In K-Fold Cross-Validation, why are odd values of K generally preferred for classification tasks?
*   **A** Odd K always produces higher accuracy
*   **B** Odd K reduces training time significantly
*   **C** Odd K reduces the chance of ties when combining predictions via majority voting
*   **D** Even K values are not mathematically valid

**Answer:** C
**Explanation:** Using an odd number of models helps avoid a split vote in binary classification.

**Question 17**
Which of the following are true about dataset splitting when class imbalance is present? (Select all that apply)
*   **A** Balancing should only be applied to the training split
*   **B** The test set must remain untouched to give a fair performance estimate
*   **C** Stratified splitting ensures each split maintains the original class ratio
*   **D** It is acceptable to apply SMOTE before splitting to save time

**Answer:** A, B, C
**Explanation:** Never apply synthetic generation (SMOTE) before splitting, as it leaks information from what will become the test set into the training set.

**Question 18**
A model trained on a highly imbalanced dataset achieves 95% accuracy. Which metric is most informative for evaluating its ability to detect the minority class?
*   **A** Overall accuracy
*   **B** Training loss
*   **C** Recall (sensitivity) for the minority class
*   **D** Number of training epochs

**Answer:** C
**Explanation:** Recall/Sensitivity tells you what percentage of the actual minority cases were correctly identified.

**Question 19**
Which of the following are advantages of K-Fold Cross-Validation over a single train/test split? (Select all that apply)
*   **A** Every data point is used for both training and validation across folds
*   **B** It provides a more reliable estimate of model performance
*   **C** It completely eliminates the risk of overfitting
*   **D** It reduces bias introduced by a single arbitrary split

**Answer:** A, B, D
**Explanation:** CV is better at using all data and reducing dependency on a specific split, though it doesn't eliminate overfitting.

**Question 20**
Which cross-validation method should be chosen when the dataset is large and computational resources are limited?
*   **A** Leave-One-Out Cross-Validation
*   **B** Leave-P-Out Cross-Validation
*   **C** Standard K-Fold with K=5 or K=10
*   **D** Stratified K-Fold with K=50

**Answer:** C
**Explanation:** LOOCV/LPO are extremely expensive. Simple K-fold with small K is the most practical.

**Question 21**
A 10-Fold CV experiment produces the following per-fold accuracies: 88, 91, 85, 90, 87, 92, 89, 86, 90, 88. What is the mean accuracy across all folds?
*   **A** 88.6%
*   **B** 89.0%
*   **C** 88.0%
*   **D** 90.0%

**Answer:** A
**Explanation:** (88+91+85+90+87+92+89+86+90+88)/10 = 886/10 = 88.6%.

**Question 22**
Which of the following describe correct steps in preparing a dataset before model training? (Select all that apply)
*   **A** Scan through the data at least once to understand its contents
*   **B** Handle missing values wherever possible
*   **C** Apply balancing techniques to the test set to improve evaluation scores
*   **D** Check for label noise in the annotations

**Answer:** A, B, D
**Explanation:** Never balance the test set.

**Question 23**
You have 103 samples and you perform 5-fold cross validation. How many samples per fold? (Approximate)
*   **A** 20
*   **B** 21
*   **C** 20 for some, 21 for others
*   **D** 5

**Answer:** C
**Explanation:** 103 / 5 = 20 remainder 3. So 3 folds will have 21 samples and 2 folds will have 20 samples.

**Question 24**
You perform 4-fold CV with accuracies: Fold 1: 90% (100 samples), Fold 2: 80% (50 samples), Fold 3: 70% (25 samples), Fold 4: 60% (25 samples). What is the weighted overall accuracy?
*   **A** 75%
*   **B** 81.25%
*   **C** 85%
*   **D** 70%

**Answer:** 81.25%
**Explanation:** Total samples = 200. Weighted sum = (0.9*100) + (0.8*50) + (0.7*25) + (0.6*25) = 90 + 40 + 17.5 + 15 = 162.5. Accuracy = 162.5 / 200 = 0.8125.

**Question 25**
Why should you normalize data inside each fold of K-fold CV rather than before the split?
*   **A** It's faster
*   **B** To prevent data leakage where validation data info influences training parameters
*   **C** Because normalization only works on small datasets
*   **D** It doesn't matter, either way is fine

**Answer:** B
**Explanation:** If you normalize the whole set, the global mean/std are calculated using data from the validation folds, leaking info into the training process.

**Question 26**
Dataset size = 10,000. How many models are trained in Leave-One-Out Cross-Validation (LOOCV)?
*   **A** 1
*   **B** 5
*   **C** 10,000
*   **D** 100

**Answer:** C
**Explanation:** LOOCV trains N models, where N is the number of samples.

**Question 27**
Compare LOOCV vs K-fold (K=5). Which statement is true?
*   **A** LOOCV has lower bias and higher variance.
*   **B** K-fold has lower bias and higher variance.
*   **C** LOOCV is computationally cheaper.
*   **D** K-fold has lower variance but higher bias.

**Answer:** A, D
**Explanation:** LOOCV uses more data for training (lower bias) but the training sets are 99.9% identical (high variance).

**Question 28**
You fit polynomial models: Degree 1 error = 15%, Degree 5 error = 10%, Degree 20 error = 2% (train) and 25% (validation). What is happening with Degree 20?
*   **A** Underfitting
*   **B** Overfitting
*   **C** Optimal fitting
*   **D** High Bias

**Answer:** B
**Explanation:** Very low training error combined with high validation error is a classic sign of overfitting.

**Question 29**
If you increase your dataset size significantly, what generally happens to overfitting?
*   **A** It increases
*   **B** It decreases because the model sees more diverse patterns
*   **C** It stays the same
*   **D** It depends on the complexity of the model

**Answer:** B
**Explanation:** More data helps the model generalize better and reduces the risk of memorizing specific noise.

**Question 30**
Two models both show 85% CV accuracy. Which is generally better according to Occam's Razor?
*   **A** The more complex model
*   **B** The simpler model
*   **C** The one with more features
*   **D** They are both exactly the same

**Answer:** B
**Explanation:** If performance is equal, simpler models are preferred as they are likely to generalize better.

**Question 31**
Model A (Train Error 5%, Val Error 6%). Model B (Train Error 1%, Val Error 20%). Which model is overfitting?
*   **A** Model A
*   **B** Model B
*   **C** Both
*   **D** Neither

**Answer:** B
**Explanation:** Model B has a huge gap between training and validation error.

**Question 32**
Dataset = 100 samples. 5-fold CV accuracy per fold: 70, 75, 80, 85, 90. What is the variance trend?
*   **A** Low variance
*   **B** High variance in performance estimates
*   **C** Model is perfectly stable
*   **D** No variance

**Answer:** B
**Explanation:** Large swings in performance across folds indicate high variance.
