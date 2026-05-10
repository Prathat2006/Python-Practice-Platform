### Week 7 to Week 10 Comprehensive Quiz

#### Section 1: Boosting and Ensemble Methods

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

**Question 10**
A dataset has 8 samples. What is the initial weight assigned to each sample?
**Answer:** 0.125
**Explanation:** Initial weight $= 1/N = 1/8 = 0.125$.

**Question 11**
If 2 samples are removed from an 8-sample dataset, what will be the new initial weight per sample?
**Answer:** 0.167
**Explanation:** $1/6 \approx 0.167$. Weights must always sum to 1.

**Question 12**
A weak learner misclassifies samples with weights: 0.1, 0.05, 0.2. Compute the weighted error $e$. (Assuming total weight = 1)
**Answer:** 0.35
**Explanation:** $e = 0.1 + 0.05 + 0.2 = 0.35$.

**Question 13**
Compute $\alpha$ given error $e = 0.25$.
**Answer:** 0.549
**Explanation:** $\alpha = 0.5 \times \ln((1-0.25)/0.25) = 0.5 \times \ln(3) \approx 0.549$.

**Question 14**
Two weak learners have errors: Model A ($e=0.1$), Model B ($e=0.4$). Which learner is more important in the final model?
*   **A** Model A
*   **B** Model B

**Answer:** A
**Explanation:** Lower error leads to a higher $\alpha$ and thus more influence. $\alpha_{A} \approx 1.098, \alpha_{B} \approx 0.202$.

**Question 15**
What happens to $\alpha$ when $e = 0.5$?
*   **A** $\alpha = 0$
*   **B** $\alpha \rightarrow \infty$
*   **C** $\alpha$ becomes negative
*   **D** $\alpha$ is undefined

**Answer:** A
**Explanation:** Random guessing provides no contribution.

**Question 16**
What happens to $\alpha$ when $e = 0$?
*   **A** $\alpha = 0$
*   **B** $\alpha \rightarrow \infty$
*   **C** $\alpha$ becomes negative
*   **D** $\alpha$ is undefined

**Answer:** B
**Explanation:** A perfect classifier dominates the ensemble.

**Question 17**
Initial weight $= 0.1$, $\alpha = 0.7$. What is the new weight for a misclassified sample? (Use $W_{new} = W \times e^{\alpha}$)
**Answer:** 0.201
**Explanation:** $0.1 \times e^{0.7} \approx 0.1 \times 2.013 = 0.2013$.

**Question 18**
After update, weights are: [0.2, 0.1, 0.05, 0.15]. Normalize them. What is the value of the first weight (0.2) after normalization?
**Answer:** 0.4
**Explanation:** Sum $= 0.5$. Normalized value $= 0.2 / 0.5 = 0.4$.

**Question 19**
A dataset has 5 samples (equal initial weights). A classifier misclassifies 1 sample. What is the error $e$?
**Answer:** 0.2
**Explanation:** $1/5 = 0.2$.

**Question 20**
Given normalized weights: S1:0.05, S2:0.05, S3:0.6, S4:0.1, S5:0.2. Which sample is most likely to be selected in resampling?
*   **A** S1
*   **B** S2
*   **C** S3
*   **D** S4
*   **E** S5

**Answer:** C
**Explanation:** S3 has the highest probability (0.6).

**Question 21**
Three weak learners: h1 (+1, $\alpha=0.4$), h2 (-1, $\alpha=0.6$), h3 (+1, $\alpha=0.3$). Compute final prediction $H(x) = \text{sign}(\alpha_1h_1 + \dots)$.
*   **A** +1
*   **B** -1

**Answer:** A
**Explanation:** $0.4(+1) + 0.6(-1) + 0.3(+1) = 0.4 - 0.6 + 0.3 = 0.1$. $\text{sign}(0.1) = +1$.

**Question 22**
Iteration 1 ($e=0.3$), Iteration 2 ($e=0.2$). Which iteration contributes more to final prediction?
*   **A** Iteration 1
*   **B** Iteration 2

**Answer:** B
**Explanation:** Lower error $\rightarrow$ higher $\alpha$.

**Question 23**
True or False: In AdaBoost, all weak learners are trained simultaneously on the same dataset.
*   **A** True
*   **B** False

**Answer:** B
**Explanation:** AdaBoost trains learners sequentially.

**Question 24**
True or False: A sample that is misclassified in Round 1 will receive a higher weight in Round 2.
*   **A** True
*   **B** False

**Answer:** A
**Explanation:** Weights increase for misclassified samples.

**Question 25**
A 5-sample set has weights after Round 1. Sum of weights: S1(0.1), S2(0.25), S3(0.1), S4(0.4), S5(0.15). Verify total weight sum.
**Answer:** 1
**Explanation:** $0.1+0.25+0.1+0.4+0.15 = 1$.

**Question 26**
You have 10 samples (weights=0.1). Stump A misclassifies 1 sample, Stump B misclassifies 3. Which is chosen?
*   **A** Stump A
*   **B** Stump B

**Answer:** A
**Explanation:** Lowest weighted error is preferred.

**Question 27**
6 samples (weights=0.167). Stump misclassifies S3 and S5. $\alpha = 0.693$. Use $e^{0.693} \approx 2.0$. What is the new RAW weight for S3?
**Answer:** 0.333
**Explanation:** $0.167 \times 2.0 \approx 0.334$ (or $1/3$).

**Question 28**
Normalized weights: S1:0.1, S2:0.5, S3:0.25, S4:0.15. If a random number $= 0.45$, which sample gets selected?
*   **A** S1
*   **B** S2
*   **C** S3
*   **D** S4

**Answer:** B
**Explanation:** S2 range is (0.1, 0.6]. 0.45 falls in S2.

**Question 29**
Stump 1 ($\alpha=0.5$), Stump 2 ($\alpha=0.3$), Stump 3 ($\alpha=0.8$). Votes on Sample A: S1:+1, S2:+1, S3:-1. Final prediction?
*   **A** +1
*   **B** -1

**Answer:** A
**Explanation:** $0.5 + 0.3 - 0.8 = 0$. By convention, ties often go to +1 or are handled specifically. Given the context, we'll mark it as +1.

**Question 30**
Which of the following statements is **not** true about boosting?
*   **A** It primarily reduces the bias and the variance.
*   **B** It mainly increases the bias and the variance.
*   **C** It is a sequential ensemble method.
*   **D** It uses weak learners.

**Answer:** B
**Explanation:** Boosting reduces bias and variance.

**Question 31**
Which of the following statements is **not** true about weak learners?
*   **A** They perform slightly better than random guessing.
*   **B** They are typically simple models (like stumps).
*   **C** They have high bias.
*   **D** They have low bias.

**Answer:** D
**Explanation:** Weak learners have high bias.

**Question 32**
True or False: If a classifier is unstable (high variance), you should apply Boosting.
*   **A** True
*   **B** False

**Answer:** B
**Explanation:** For high variance (unstable), apply Bagging. For high bias, apply Boosting.

**Question 33**
Why is a Decision Tree with max\_depth = 1 (a stump) commonly used as the weak learner?
*   **A** Because shallow trees help AdaBoost focus on one simple rule at a time.
*   **B** Because they are 100% accurate.
*   **C** Because they are impossible to overfit.
*   **D** They aren't; deep trees are preferred.

**Answer:** A
**Explanation:** Deep trees overfit, making the ensemble less effective.

**Question 34**
If a weak learner has error $e = 0$, what happens to $\alpha$?
*   **A** $\alpha = 0$
*   **B** $\alpha = 1$
*   **C** $\alpha \rightarrow \infty$
*   **D** $\alpha$ stays constant

**Answer:** C
**Explanation:** A perfect model gets infinite say.

**Question 35**
6 customer samples. $\alpha_1 = 0.35, \alpha_2 = 0.97$. Votes: $h_1 = +1, h_2 = +1$. Final prediction sum?
**Answer:** 1.32
**Explanation:** $0.35 + 0.97 = 1.32$. Result is positive → Default.

#### Section 2: Random Forests and Bagging

**Question 36**
Random Forest is also referred to as:
*   **A** Bootstrap Forest
*   **B** Decision Tree Ensemble
*   **C** Random Bagging
*   **D** Decision Forest

**Answer:** D
**Explanation:** Random Forest is called a Decision Forest because it builds a collection of decision trees that work together as an ensemble.

**Question 37**
Random Forest belongs to which category of learning algorithms?
*   **A** Unsupervised learning
*   **B** Parametric supervised learning
*   **C** Reinforcement learning
*   **D** Non-parametric supervised learning

**Answer:** D
**Explanation:** Random Forest is a non-parametric supervised learning algorithm, meaning it does not assume a specific mathematical form for the underlying data distribution.

**Question 38**
What types of problems can Random Forest solve?
*   **A** Only classification problems
*   **B** Only clustering problems
*   **C** Only regression problems
*   **D** Both classification and regression problems

**Answer:** D
**Explanation:** Random Forest is a versatile ensemble technique used for solving both classification and regression problems.

**Question 39**
How does Random Forest combine predictions of multiple models?
*   **A** By discarding the worst predictions
*   **B** By selecting the best model's prediction
*   **C** By averaging or voting across all models
*   **D** By using only the first model

**Answer:** C
**Explanation:** Random Forest combines the predictions of multiple models to produce a more reliable result.

**Question 40**
What is the purpose of training each decision tree on a random subset of data?
*   **A** To focus only on important data
*   **B** To increase diversity among trees
*   **C** To use less memory
*   **D** To reduce training time

**Answer:** B
**Explanation:** Each tree sees a slightly different portion of the data, increasing diversity and reducing correlation.

**Question 41**
What is bootstrap sampling?
*   **A** Sampling only the first half of data
*   **B** Sampling without replacement
*   **C** Sampling with replacement
*   **D** Sampling only the last half of data

**Answer:** C
**Explanation:** Bootstrap sampling means randomly selecting data points with replacement.

**Question 42**
What is special about feature selection at each split in Random Forest?
*   **A** Only the most important feature is considered
*   **B** No features are considered
*   **C** All features are considered at every split
*   **D** A random subset of features is considered at each split

**Answer:** D
**Explanation:** Random Forest selects a random subset of features at each node and chooses the best split among them.

**Question 43**
How does random feature selection help Random Forest?
*   **A** It makes the model deterministic
*   **B** It eliminates the need for data
*   **C** It reduces correlation between trees and improves generalization
*   **D** It increases training speed

**Answer:** C
**Explanation:** By focusing on different features, trees become more diverse and less correlated.

**Question 44**
For classification problems, how does Random Forest produce the final output?
*   **A** By selecting the deepest tree's output
*   **B** By majority voting among trees
*   **C** By averaging all predictions
*   **D** By taking the median

**Answer:** B
**Explanation:** The class with the most votes becomes the final prediction.

**Question 45**
For regression problems, how does Random Forest produce the final output?
*   **A** By taking the maximum value
*   **B** By selecting the tree with lowest error
*   **C** By averaging across all trees
*   **D** By majority voting

**Answer:** C
**Explanation:** The predictions are averaged across all trees for regression tasks.

**Question 46**
What type of learning technique is Random Forest?
*   **A** Dimensionality reduction technique
*   **B** Ensemble machine learning technique
*   **C** Clustering technique
*   **D** Single learner method

**Answer:** B
**Explanation:** Random Forest combines multiple models to improve performance.

**Question 47**
What happens when splitting nodes during tree construction in Random Forest?
*   **A** A random subset of features is selected and the best split is chosen among them
*   **B** No features are considered
*   **C** Only the most important feature is considered
*   **D** All features are considered

**Answer:** A
**Explanation:** This is a key part of the Random Forest algorithm to ensure diversity.

**Question 48**
How does Random Forest reduce correlation between trees?
*   **A** By training on the full dataset
*   **B** By using all features at every split
*   **C** By using only one tree
*   **D** By selecting a random subset of features at each split

**Answer:** D
**Explanation:** Feature randomness is a primary way to decorrelate trees.

**Question 49**
How does Random Forest achieve improved robustness and accuracy?
*   **A** By combining multiple diverse decision trees
*   **B** By using only one tree
*   **C** By removing all features
*   **D** By using linear models

**Answer:** A
**Explanation:** Diversity among trees is key to Random Forest's robustness.

**Question 50**
What is a key advantage of Random Forest regarding data features?
*   **A** It works only with numerical features
*   **B** It requires feature scaling
*   **C** It handles many features effectively
*   **D** It cannot handle many features

**Answer:** C
**Explanation:** Random Forest can handle high-dimensional data well without explicit feature selection.

**Question 51**
Why is Random Forest resistant to noise and outliers?
*   **A** Predictions are based on the combined output of many trees
*   **B** It assumes normally distributed data
*   **C** It removes outliers automatically
*   **D** It uses only one tree for prediction

**Answer:** A
**Explanation:** The averaging effect smooths out the impact of noisy data points.

**Question 52**
How does Random Forest help with overfitting?
*   **A** It removes all features
*   **B** It uses only one deep tree
*   **C** It increases model complexity
*   **D** By averaging the results of multiple decision trees, it improves generalization

**Answer:** D
**Explanation:** Averaging the results of multiple decision trees reduces variance.

**Question 53**
What is one limitation of Random Forest?
*   **A** It is highly prone to overfitting
*   **B** It has lower interpretability than a single decision tree
*   **C** It requires feature scaling
*   **D** It cannot handle many features

**Answer:** B
**Explanation:** Ensembles are generally harder to interpret than simple single models.

**Question 54**
What is a limitation of Random Forest regarding training?
*   **A** Training can be computationally expensive
*   **B** It trains very quickly
*   **C** It cannot be parallelized
*   **D** It requires no computational resources

**Answer:** A
**Explanation:** Building a large number of trees can be time-consuming and resource-intensive.

**Question 55**
What are the bias-variance characteristics of deep regression trees?
*   **A** Low bias and high variance
*   **B** High bias and low variance
*   **C** Low bias and low variance
*   **D** High bias and high variance

**Answer:** A
**Explanation:** Deep trees fit training data very closely (low bias) but are sensitive to small changes (high variance).

**Question 56**
What is the goal of an ideal machine learning model?
*   **A** High bias and low variance
*   **B** Low bias and high variance
*   **C** High bias and high variance
*   **D** Low bias and low variance

**Answer:** D
**Explanation:** We want the model to be accurate and stable.

**Question 57**
Which of the following is an example of an unstable algorithm?
*   **A** Linear Regression
*   **B** Decision Trees
*   **C** k-Nearest Neighbors
*   **D** Naïve Bayes

**Answer:** B
**Explanation:** Decision trees can change drastically with small changes in the dataset.

**Question 58**
Which algorithm is given as an example of a stable algorithm?
*   **A** Decision Trees
*   **B** Condensed Nearest Neighbor
*   **C** Neural Networks
*   **D** k-Nearest Neighbors (k-NN)

**Answer:** D
**Explanation:** k-NN output generally doesn't shift drastically with minor data changes.

**Question 59**
What is an unstable learning algorithm?
*   **A** One where small changes in data lead to significant changes in the model
*   **B** One that never changes regardless of data
*   **C** One that always gives the same result
*   **D** One that requires large amounts of data

**Answer:** A
**Explanation:** Instability refers to high sensitivity to the training dataset.

**Question 60**
What is the relationship between unstable algorithms and variance?
*   **A** Variance is unrelated to stability
*   **B** Unstable algorithms have low variance
*   **C** Unstable algorithms have high variance
*   **D** Unstable algorithms have no variance

**Answer:** C
**Explanation:** Instability in model structure directly leads to high variance in predictions.

**Question 61**
According to the slides, what is an example of an unstable algorithm?
*   **A** Naïve Bayes
*   **B** Linear Regression
*   **C** k-Nearest Neighbors
*   **D** Neural Networks

**Answer:** D
**Explanation:** Neural Networks are sensitive to initializations and data perturbations.

**Question 62**
How does bagging help deep regression trees?
*   **A** It reduces both bias and variance
*   **B** It increases variance
*   **C** It increases bias
*   **D** It reduces variance while maintaining low bias

**Answer:** D
**Explanation:** Averaging reduces variance while keeping the bias level of the individual trees.

**Question 63**
What does the term "Bagging" stand for?
*   **A** Bootstrap Averaging
*   **B** Binary Aggregating
*   **C** Bagged Gradient Boosting
*   **D** Bootstrap Aggregating

**Answer:** D
**Explanation:** Bagging = **B**ootstrap **Agg**regat**ing**.

**Question 64**
What creates diversity among base learners in bagging?
*   **A** Training on the same data multiple times
*   **B** Using different algorithms
*   **C** Training each model on a slightly different version of the dataset
*   **D** Using different programming languages

**Answer:** C
**Explanation:** Using bootstrap samples ensures each model sees a different data subset.

**Question 65**
What are Out-of-Bag (OOB) observations?
*   **A** The deepest leaves in a decision tree
*   **B** Data points not selected in a particular bootstrap sample
*   **C** The most important features in the dataset
*   **D** Data points used to train every model

**Answer:** B
**Explanation:** About 1/3 of the data is left out of any given bootstrap sample.

**Question 66**
How can OOB observations be used?
*   **A** To evaluate model performance without a separate validation set
*   **B** To select features
*   **C** To increase tree depth
*   **D** To train the model further

**Answer:** A
**Explanation:** OOB data provides a "free" validation set during the bagging process.

**Question 67**
What is the purpose of OOB error estimation?
*   **A** To select features
*   **B** To evaluate model performance without a separate validation set
*   **C** To reduce the number of trees
*   **D** To increase tree depth

**Answer:** B
**Explanation:** It allows monitoring generalization error without needing a hold-out set.

**Question 68**
How are base learners trained in bagging compared to boosting?
*   **A** Both are trained sequentially
*   **B** In parallel in bagging, sequentially in boosting
*   **C** Sequentially in bagging, parallel in boosting
*   **D** Both are trained in parallel

**Answer:** B
**Explanation:** Bagging trees are independent; boosting trees depend on the previous one.

**Question 69**
What is the first step in training a bagging model?
*   **A** Feature selection
*   **B** Aggregating predictions
*   **C** Pruning the trees
*   **D** Bootstrap sampling of data

**Answer:** D
**Explanation:** You first create the diverse training sets via bootstrapping.

**Question 70**
Why does bagging help unstable algorithms?
*   **A** It makes the model more complex
*   **B** It increases bias
*   **C** It removes all outliers automatically
*   **D** It reduces variance by training multiple models on bootstrap samples

**Answer:** D
**Explanation:** Averaging unstable models stabilizes the ensemble's final prediction.

**Question 71**
What does the hyperparameter "number of base models" control in bagging?
*   **A** The depth of each tree
*   **B** How many individual learners are included in the ensemble
*   **C** The size of the dataset
*   **D** The number of features used

**Answer:** B
**Explanation:** It determines the size of the ensemble.

**Question 72**
What happens if too many base models are used in bagging?
*   **A** Bias increases dramatically
*   **B** Training time increases without significant performance gain
*   **C** Model accuracy always improves
*   **D** The model becomes fully interpretable

**Answer:** B
**Explanation:** Performance gain eventually plateaus while compute costs keep rising.

**Question 73**
How does the size of bootstrap samples affect the bias-variance trade-off?
*   **A** Sample size has no effect
*   **B** Larger samples increase bias
*   **C** Smaller samples may increase diversity but can raise bias
*   **D** Smaller samples decrease diversity

**Answer:** C
**Explanation:** Smaller samples make models more different but less accurate on average.

**Question 74**
How are predictions combined in bagging for regression tasks?
*   **A** Weighted sum by model complexity
*   **B** Majority voting
*   **C** Selecting the best model's prediction
*   **D** Averaging

**Answer:** D
**Explanation:** Mean value is typically used for regression ensembles.

**Question 75**
What does the bootstrap sampling concept in bagging help estimate?
*   **A** The median of the data
*   **B** The mode of the data
*   **C** The variability of a model or estimator
*   **D** The mean of the data

**Answer:** C
**Explanation:** Bootstrapping is fundamentally about estimating statistical distributions and variance.

**Question 76**
What is one advantage of bagging?
*   **A** It makes models less accurate
*   **B** It improves generalization by combining predictions from multiple models
*   **C** It requires no data
*   **D** It always trains faster than a single model

**Answer:** B
**Explanation:** Ensembling reduces the error variance, improving generalization.

**Question 77**
What is one limitation of bagging?
*   **A** Reduced interpretability when many models are combined
*   **B** It always overfits
*   **C** It cannot handle high-dimensional data
*   **D** It is not robust to outliers

**Answer:** A
**Explanation:** Explaining the decision of 100 aggregated trees is hard.

**Question 78**
What is a key similarity between bagged trees and Random Forest?
*   **A** Both use only one tree
*   **B** Both are highly interpretable
*   **C** Both address the high variance problem of single decision trees
*   **D** Both use random subsets of features at each split

**Answer:** C
**Explanation:** Both use ensembling techniques to stabilize variance issues.

**Question 79**
What is the key difference between bagged trees and Random Forest?
*   **A** Random Forest selects a random subset of features at each split
*   **B** Bagged trees use random subsets of features at each split
*   **C** Random Forest does not use bootstrap sampling
*   **D** Bagged trees average predictions while Random Forest uses voting

**Answer:** A
**Explanation:** Random Forest adds feature randomness on top of bootstrap bagging.

**Question 80**
In bagged trees, what creates diversity among trees?
*   **A** Different tree depths
*   **B** Training each tree on a different bootstrap sample
*   **C** Random feature selection at each split
*   **D** Using different algorithms for each tree

**Answer:** B
**Explanation:** Standard bagging diversity comes purely from the data sampling.

#### Section 3: Cross-Validation & Imbalance

**Question 81**
What is the primary purpose of a validation dataset during model development?
*   **A** To train the model on unseen patterns
*   **B** To tune hyperparameters and detect overfitting during training
*   **C** To provide the final unbiased estimate of model performance
*   **D** To augment minority class samples

**Answer:** B
**Explanation:** The validation set is used during development for model selection, hyperparameter tuning, and detecting overfitting — not for final evaluation.

**Question 82**
In K-Fold Cross-Validation with K = 5, how many times is the model trained in total?
*   **A** 1
*   **B** 3
*   **C** 5
*   **D** 10

**Answer:** C
**Explanation:** With K = 5, the model is trained exactly 5 times. Each time a different fold serves as the validation set while the remaining 4 folds are used for training.

**Question 83**
Which of the following are valid reasons to prefer Stratified K-Fold over standard K-Fold? (Select all that apply)
*   **A** The dataset has a severe class imbalance
*   **B** You want each fold to reflect the original class distribution
*   **C** You want faster computation
*   **D** You want to avoid biased evaluation on imbalanced data

**Answer:** A, B, D
**Explanation:** Stratification ensures that each fold is representative of the whole dataset's class distribution, which is crucial for imbalanced data.

**Question 84**
Leave-One-Out Cross-Validation (LOOCV) is a special case of K-Fold where K equals:
*   **A** The number of features
*   **B** The number of classes
*   **C** The number of samples (N)
*   **D** 10

**Answer:** C
**Explanation:** LOOCV is K-Fold where K = N (number of samples). Each iteration uses one sample as the test set and all remaining N−1 samples for training.

**Question 85**
A dataset has 900 normal samples and 100 fraud samples. A model that always predicts 'Normal' achieves 90% accuracy. Which statements are true? (Select all that apply)
*   **A** The model has learned a useful pattern
*   **B** Accuracy is a misleading metric here
*   **C** The model detects 0% of fraud cases
*   **D** This is a class imbalance problem

**Answer:** B, C, D
**Explanation:** Accuracy is very high because of the majority class, but the model completely fails at the task it was designed for (detecting fraud).

**Question 86**
Which technique creates new synthetic samples between existing minority class data points rather than simply duplicating them?
*   **A** Undersampling
*   **B** Class weighting
*   **C** SMOTE
*   **D** Data augmentation

**Answer:** C
**Explanation:** SMOTE (Synthetic Minority Over-sampling Technique) generates new samples by interpolating between existing minority class points, reducing overfitting compared to simple duplication.

**Question 87**
When handling class imbalance, balancing techniques should be applied to:
*   **A** The entire dataset before any splitting
*   **B** Only the training set
*   **C** Training and validation sets equally
*   **D** Only the test set

**Answer:** B
**Explanation:** Balancing techniques must only be applied to training data. Validation and test sets must remain untouched to ensure a fair and unbiased evaluation of real-world performance.

**Question 88**
Which of the following are limitations of cross-validation? (Select all that apply)
*   **A** Computationally expensive due to multiple training runs
*   **B** Cannot be used with small datasets
*   **C** May produce optimistic estimates if data is not representative
*   **D** Does not completely eliminate overfitting

**Answer:** A, C, D
**Explanation:** CV is expensive. It also cannot fix bias if the original data isn't representative, and while it helps detect overfitting, it doesn't prevent it automatically.

**Question 89**
You have a very small dataset of 50 medical images. Which cross-validation strategy is most appropriate?
*   **A** Standard K-Fold with K=3
*   **B** Leave-One-Out Cross-Validation
*   **C** Standard K-Fold with K=5, no stratification
*   **D** A single 80/20 train-test split

**Answer:** B
**Explanation:** For very small datasets, LOOCV is often used to maximize the amount of training data in each iteration.

**Question 90**
In a 5-Fold CV experiment, the confusion matrices across folds give: Average TP=41, TN=49.2, FP=5.2, FN=4.6. What is the approximate overall accuracy?
*   **A** 82%
*   **B** 88%
*   **C** 90.2%
*   **D** 76%

**Answer:** C
**Explanation:** Accuracy = (TP + TN) / (TP + TN + FP + FN) = (41 + 49.2) / (41 + 49.2 + 5.2 + 4.6) = 90.2 / 100 = 90.2%.

**Question 91**
Which techniques can be used to handle class imbalance in a training dataset? (Select all that apply)
*   **A** Undersampling the majority class
*   **B** Oversampling the minority class
*   **C** Applying class weights during training
*   **D** Removing the minority class entirely

**Answer:** A, B, C
**Explanation:** Undersampling, oversampling, and class weighting are standard approaches.

**Question 92**
Leave-P-Out (LPO) cross-validation becomes computationally expensive primarily because:
*   **A** P is always very large
*   **B** The number of all possible combinations of P samples grows rapidly
*   **C** It requires data augmentation at each step
*   **D** Models must be trained on fewer samples each time

**Answer:** B
**Explanation:** The number of ways to pick P items out of N grows combinatorially.

**Question 93**
A dataset has 18,000 majority class samples and 2,000 minority class samples. After random undersampling, both classes have 2,000 samples. What is the main risk of this approach?
*   **A** The model will overfit the minority class
*   **B** Potentially useful majority class information is permanently discarded
*   **C** The minority class gets duplicated
*   **D** Validation accuracy becomes unreliable

**Answer:** B
**Explanation:** Undersampling removes data from the majority class, which might contain important patterns or representative samples.

**Question 94**
Which of the following statements about data augmentation are correct? (Select all that apply)
*   **A** It generates new variations of existing data using transformations
*   **B** It is most commonly applied to image datasets
*   **C** It can help balance the minority class by creating more samples
*   **D** It always involves duplicating existing samples without modification

**Answer:** A, B, C
**Explanation:** Augmentation involves transformations (crop, rotate, etc.) to create diversity, not just simple duplication.

**Question 95**
What distinguishes class weighting from oversampling as a strategy for handling imbalance?
*   **A** Class weighting changes the dataset size; oversampling does not
*   **B** Class weighting penalises errors on the minority class more heavily without altering the dataset
*   **C** Oversampling works only for neural networks; class weighting works for all models
*   **D** Class weighting removes majority class samples

**Answer:** B
**Explanation:** Class weighting adjusts the loss function's sensitivity rather than changing the data distribution.

**Question 96**
In K-Fold Cross-Validation, why are odd values of K generally preferred for classification tasks?
*   **A** Odd K always produces higher accuracy
*   **B** Odd K reduces training time significantly
*   **C** Odd K reduces the chance of ties when combining predictions via majority voting
*   **D** Even K values are not mathematically valid

**Answer:** C
**Explanation:** Using an odd number of models helps avoid a split vote in binary classification.

**Question 97**
Which of the following are true about dataset splitting when class imbalance is present? (Select all that apply)
*   **A** Balancing should only be applied to the training split
*   **B** The test set must remain untouched to give a fair performance estimate
*   **C** Stratified splitting ensures each split maintains the original class ratio
*   **D** It is acceptable to apply SMOTE before splitting to save time

**Answer:** A, B, C
**Explanation:** Never apply synthetic generation (SMOTE) before splitting, as it leaks information from what will become the test set into the training set.

**Question 98**
A model trained on a highly imbalanced dataset achieves 95% accuracy. Which metric is most informative for evaluating its ability to detect the minority class?
*   **A** Overall accuracy
*   **B** Training loss
*   **C** Recall (sensitivity) for the minority class
*   **D** Number of training epochs

**Answer:** C
**Explanation:** Recall/Sensitivity tells you what percentage of the actual minority cases were correctly identified.

**Question 99**
Which of the following are advantages of K-Fold Cross-Validation over a single train/test split? (Select all that apply)
*   **A** Every data point is used for both training and validation across folds
*   **B** It provides a more reliable estimate of model performance
*   **C** It completely eliminates the risk of overfitting
*   **D** It reduces bias introduced by a single arbitrary split

**Answer:** A, B, D
**Explanation:** CV is better at using all data and reducing dependency on a specific split, though it doesn't eliminate overfitting.

**Question 100**
Which cross-validation method should be chosen when the dataset is large and computational resources are limited?
*   **A** Leave-One-Out Cross-Validation
*   **B** Leave-P-Out Cross-Validation
*   **C** Standard K-Fold with K=5 or K=10
*   **D** Stratified K-Fold with K=50

**Answer:** C
**Explanation:** LOOCV/LPO are extremely expensive. Simple K-fold with small K is the most practical.

**Question 101**
A 10-Fold CV experiment produces the following per-fold accuracies: 88, 91, 85, 90, 87, 92, 89, 86, 90, 88. What is the mean accuracy across all folds?
*   **A** 88.6%
*   **B** 89.0%
*   **C** 88.0%
*   **D** 90.0%

**Answer:** A
**Explanation:** (88+91+85+90+87+92+89+86+90+88)/10 = 886/10 = 88.6%.

**Question 102**
Which of the following describe correct steps in preparing a dataset before model training? (Select all that apply)
*   **A** Scan through the data at least once to understand its contents
*   **B** Handle missing values wherever possible
*   **C** Apply balancing techniques to the test set to improve evaluation scores
*   **D** Check for label noise in the annotations

**Answer:** A, B, D
**Explanation:** Never balance the test set.

**Question 103**
You have 103 samples and you perform 5-fold cross validation. How many samples per fold? (Approximate)
*   **A** 20
*   **B** 21
*   **C** 20 for some, 21 for others
*   **D** 5

**Answer:** C
**Explanation:** 103 / 5 = 20 remainder 3. So 3 folds will have 21 samples and 2 folds will have 20 samples.

**Question 104**
You perform 4-fold CV with accuracies: Fold 1: 90% (100 samples), Fold 2: 80% (50 samples), Fold 3: 70% (25 samples), Fold 4: 60% (25 samples). What is the weighted overall accuracy?
*   **A** 75%
*   **B** 81.25%
*   **C** 85%
*   **D** 70%

**Answer:** 81.25%
**Explanation:** Total samples = 200. Weighted sum = (0.9*100) + (0.8*50) + (0.7*25) + (0.6*25) = 90 + 40 + 17.5 + 15 = 162.5. Accuracy = 162.5 / 200 = 0.8125.

**Question 105**
Why should you normalize data inside each fold of K-fold CV rather than before the split?
*   **A** It's faster
*   **B** To prevent data leakage where validation data info influences training parameters
*   **C** Because normalization only works on small datasets
*   **D** It doesn't matter, either way is fine

**Answer:** B
**Explanation:** If you normalize the whole set, the global mean/std are calculated using data from the validation folds, leaking info into the training process.

**Question 106**
Dataset size = 10,000. How many models are trained in Leave-One-Out Cross-Validation (LOOCV)?
*   **A** 1
*   **B** 5
*   **C** 10,000
*   **D** 100

**Answer:** C
**Explanation:** LOOCV trains N models, where N is the number of samples.

**Question 107**
Compare LOOCV vs K-fold (K=5). Which statement is true?
*   **A** LOOCV has lower bias and higher variance.
*   **B** K-fold has lower bias and higher variance.
*   **C** LOOCV is computationally cheaper.
*   **D** K-fold has lower variance but higher bias.

**Answer:** A, D
**Explanation:** LOOCV uses more data for training (lower bias) but the training sets are 99.9% identical (high variance).

**Question 108**
You fit polynomial models: Degree 1 error = 15%, Degree 5 error = 10%, Degree 20 error = 2% (train) and 25% (validation). What is happening with Degree 20?
*   **A** Underfitting
*   **B** Overfitting
*   **C** Optimal fitting
*   **D** High Bias

**Answer:** B
**Explanation:** Very low training error combined with high validation error is a classic sign of overfitting.

**Question 109**
If you increase your dataset size significantly, what generally happens to overfitting?
*   **A** It increases
*   **B** It decreases because the model sees more diverse patterns
*   **C** It stays the same
*   **D** It depends on the complexity of the model

**Answer:** B
**Explanation:** More data helps the model generalize better and reduces the risk of memorizing specific noise.

**Question 110**
Two models both show 85% CV accuracy. Which is generally better according to Occam's Razor?
*   **A** The more complex model
*   **B** The simpler model
*   **C** The one with more features
*   **D** They are both exactly the same

**Answer:** B
**Explanation:** If performance is equal, simpler models are preferred as they are likely to generalize better.

**Question 111**
Model A (Train Error 5%, Val Error 6%). Model B (Train Error 1%, Val Error 20%). Which model is overfitting?
*   **A** Model A
*   **B** Model B
*   **C** Both
*   **D** Neither

**Answer:** B
**Explanation:** Model B has a huge gap between training and validation error.

**Question 112**
Dataset = 100 samples. 5-fold CV accuracy per fold: 70, 75, 80, 85, 90. What is the variance trend?
*   **A** Low variance
*   **B** High variance in performance estimates
*   **C** Model is perfectly stable
*   **D** No variance

**Answer:** B
**Explanation:** Large swings in performance across folds indicate high variance.

#### Section 4: Underfitting, Overfitting, Bias-Variance, and Regularization

**Question 113**
Which of the following BEST defines underfitting?
*   **A** A model that performs too well on unseen data
*   **B** A model that is too simple and fails to learn the underlying patterns of the training data
*   **C** A model that memorizes every data point including noise
*   **D** A model with too many trainable parameters

**Answer:** B
**Explanation:** Underfitting occurs when the model cannot align with the training data.

**Question 114**
Which of the following is a direct cause of underfitting?
*   **A** Using a very large dataset
*   **B** Training the model for too many epochs
*   **C** Using too few features for training
*   **D** Removing regularization entirely

**Answer:** C
**Explanation:** With insufficient features, the model lacks the information needed.

**Question 115**
From the Bias-Variance perspective, an underfitted model is characterized by:
*   **A** Low bias and high variance
*   **B** High bias and high variance
*   **C** High bias and low variance
*   **D** Low bias and low variance

**Answer:** C
**Explanation:** High bias and low variance.

**Question 116**
Which symptom is UNIQUE to underfitting and would NOT appear in overfitting?
*   **A** Large gap between training and validation accuracy
*   **B** High training error and high validation error simultaneously
*   **C** Very low training loss
*   **D** Highly complex decision boundaries

**Answer:** B
**Explanation:** High training error and high validation error simultaneously.

**Question 117**
Which remedy would MOST directly fix underfitting?
*   **A** Adding dropout layers to the neural network
*   **B** Applying early stopping during training
*   **C** Increasing model complexity and adding more relevant features
*   **D** Increasing the regularization parameter $\lambda$

**Answer:** C
**Explanation:** Increasing model complexity and adding more relevant features.

**Question 118**
A learning curve shows both training error and validation error remain high even after many epochs of training. This most likely indicates:
*   **A** Overfitting due to model memorization
*   **B** Underfitting due to a model that is too simple
*   **C** An optimal model with good generalization
*   **D** Irreducible noise dominating the data

**Answer:** B
**Explanation:** Underfitting due to a model that is too simple.

**Question 119**
A bank deploys a credit-risk scoring model. It uses only 2 features: age and income. The model approves or rejects loans using a single linear threshold. Internal audit shows the model's training accuracy is 61% and test accuracy is 60%. Default rates remain high. What is the most likely problem and best course of action?
*   **A** Overfitting; apply L2 regularization
*   **B** Underfitting; add more relevant features (credit history, debt ratio) and use a more complex model
*   **C** Overfitting; collect more training data
*   **D** Optimal fit; the model is performing consistently

**Answer:** B
**Explanation:** Underfitting — add features and use a more complex model.

**Question 120**
Overfitting occurs when a model:
*   **A** Performs equally well on training and unseen data
*   **B** Learns only general patterns and ignores individual data points
*   **C** Captures noise, outliers, and random fluctuations from training data
*   **D** Uses too few parameters to represent the data

**Answer:** C
**Explanation:** Captures noise, outliers, and random fluctuations from training data.

**Question 121**
Which of the following is a common cause of overfitting?
*   **A** Using a very simple model with few parameters
*   **B** Having a very large training dataset
*   **C** Training a very complex model on a small dataset with insufficient regularization
*   **D** Using early stopping during training

**Answer:** C
**Explanation:** Training a very complex model on a small dataset with insufficient regularization.

**Question 122**
Which of the following is the BEST one-line summary of overfitting?
*   **A** High training error + High test error
*   **B** Low training error + Low test error
*   **C** Low training error + High test error
*   **D** High training error + Low test error

**Answer:** C
**Explanation:** Low training error + High test error.

**Question 123**
In a neural network's training history, which pattern is a classic signal of overfitting?
*   **A** Both training and validation loss decrease together throughout training
*   **B** Training loss decreases while validation loss starts to increase after some epochs
*   **C** Training loss remains flat while validation loss decreases
*   **D** Both losses remain high and flat across epochs

**Answer:** B
**Explanation:** Training loss decreases while validation loss starts to increase after some epochs.

**Question 124**
Which remedy is specifically designed for neural networks to prevent overfitting by randomly disabling neurons during training?
*   **A** Feature selection
*   **B** L1 Regularization (LASSO)
*   **C** Dropout
*   **D** Increasing model depth

**Answer:** C
**Explanation:** Dropout randomly disables neural pathways.

**Question 125**
Overfitted models are said to have high variance because:
*   **A** They make consistently wrong predictions regardless of input
*   **B** Their predictions change significantly with small changes in the training data
*   **C** They use a large number of features
*   **D** They have a high learning rate during training

**Answer:** B
**Explanation:** Their predictions change significantly with small changes in the training data.

**Question 126**
A medical AI system is trained on 500 X-ray images to detect pneumonia. It achieves 98% training accuracy but only 67% on hospital test data. Doctors notice it flags patients based on hospital-specific text labels accidentally included in the images. What is happening, and what should be done?
*   **A** Underfitting; increase model depth
*   **B** Optimal fit; deploy the model
*   **C** Overfitting to spurious features; clean the data, crop labels out, add more diverse images and apply regularization
*   **D** Overfitting; only apply early stopping

**Answer:** C
**Explanation:** Overfitting to spurious features; clean data, diversity, and regularization.

**Question 127**
An optimally fitted model is best described as one that:
*   **A** Has zero training error and zero test error
*   **B** Captures true patterns in training data while generalizing well to unseen data
*   **C** Minimizes only training loss regardless of test performance
*   **D** Uses the maximum possible number of parameters

**Answer:** B
**Explanation:** Captures true patterns in training data while generalizing well to unseen data.

**Question 128**
In the summary comparison of Under-fitting, Optimal-fitting, and Over-fitting - which statement correctly describes the deep learning loss curves for an optimal fit?
*   **A** Training and validation curves both remain high and flat
*   **B** Training loss is very low but validation loss is very high
*   **C** Training and validation loss both decrease and converge close to each other
*   **D** Validation loss decreases while training loss increases

**Answer:** C
**Explanation:** Training and validation loss both decrease and converge close to each other.

**Question 129**
As model complexity increases along the capacity axis, what happens to bias and variance?
*   **A** Both increase
*   **B** Bias increases, variance decreases
*   **C** Bias decreases, variance increases
*   **D** Both decrease until the optimal point, then both increase

**Answer:** C
**Explanation:** Bias decreases, variance increases.

**Question 130**
The Bias-Variance Decomposition states that Total Prediction Error equals:
*   **A** $Bias + Variance + Noise$
*   **B** $Bias^2 + Variance + Irreducible Error$
*   **C** $Bias^2 - Variance + Noise$
*   **D** $Bias^2 - Variance + Noise$

**Answer:** B
**Explanation:** Total Error = Bias² + Variance + Irreducible Error.

**Question 131**
A model has $Bias = 0.4$, $Variance = 0.15$, and $Irreducible Error = 0.05$. What is its Total Prediction Error?
*   **A** 0.60
*   **B** 0.36
*   **C** 0.76
*   **D** 0.46

**Answer:** B
**Explanation:** Total Error = (0.4)² + 0.15 + 0.05 = 0.16 + 0.20 = 0.36.

**Question 132**
Two models share the same $Irreducible Error = 0.02$. Compare their total errors:
Model X: Bias=0.5, Variance=0.05
Model Y: Bias=0.1, Variance=0.40
Which model has lower Total Error?
*   **A** Model X
*   **B** Model Y
*   **C** Both equal
*   **D** Cannot determine

**Answer:** A
**Explanation:** X = 0.25 + 0.05 + 0.02 = 0.32. Y = 0.01 + 0.40 + 0.02 = 0.43.

**Question 133**
Why can't the Irreducible Error be reduced even by the best possible model?
*   **A** Because the model hasn't been trained long enough
*   **B** Because it comes from inherent randomness or missing information in the data itself
*   **C** Because the learning rate is set too high
*   **D** Because the model complexity is too low

**Answer:** B
**Explanation:** It comes from inherent randomness or missing information in the data itself.

**Question 134**
A stock-price prediction model trained on 10 years of data has: $Bias = 0.3$, $Variance = 0.6$, $Noise = 0.1$. A simplified version has $Bias = 0.5$, $Variance = 0.2$, $Noise = 0.1$. Which should a quantitative analyst prefer for live trading, and why?
*   **A** Complex model; lower bias means more accurate signals
*   **B** Simplified model; lower total error and more stable predictions day-to-day
*   **C** Complex model; high variance is acceptable in finance
*   **D** Both are equal; choose based on speed of inference

**Answer:** B
**Explanation:** Simplified model; lower total error and more stable predictions.

**Question 135**
How does regularization prevent overfitting?
*   **A** By increasing the number of training epochs
*   **B** By adding a penalty term to the loss function that discourages large weights
*   **C** By removing neurons from the network permanently
*   **D** By increasing the learning rate during training

**Answer:** B
**Explanation:** By adding a penalty term to the loss function that discourages large weights.

**Question 136**
The L1 regularization cost function is written as:
*   **A** $J(\theta) = Loss(y, \hat{y}) + \lambda \sum_{i=1}^{n} w_i^2$
*   **B** $J(\theta) = Loss(y, \hat{y}) + \lambda \sum_{i=1}^{n} |w_i|$
*   **C** $J(\theta) = Loss(y, \hat{y}) - \lambda \sum_{i=1}^{n} |w_i|$
*   **D** $J(\theta) = Loss(y, \hat{y}) \times \lambda \sum_{i=1}^{n} w_i$

**Answer:** B
**Explanation:** L1 uses the sum of absolute values.

**Question 137**
Which key difference distinguishes L1 (LASSO) from L2 (Ridge) regularization?
*   **A** L2 sets weights to exactly zero; L1 only shrinks them
*   **B** L1 can set weights to exactly zero (feature selection); L2 shrinks weights but rarely to zero
*   **C** L1 uses squared weights; L2 uses absolute weights
*   **D** They are mathematically identical, only the notation differs

**Answer:** B
**Explanation:** L1 can set weights to exactly zero; L2 shrinks weights but rarely to zero.

**Question 138**
Given L1 regularization with $\lambda = 0.4$ and weights $w_1 = 3, w_2 = -2, w_3 = 0.5$. The base loss is $\mathcal{L} = 5.0$. What is the total regularized cost $J(\theta)$?
*   **A** 7.20
*   **B** 6.50
*   **C** 5.40
*   **D** 7.00

**Answer:** A
**Explanation:** 0.4 * (3 + 2 + 0.5) = 0.4 * 5.5 = 2.2. Total = 5.0 + 2.2 = 7.20.

**Question 139**
Given L2 regularization with $\lambda = 0.1$ and weights $w_1 = 4, w_2 = -3, w_3 = 2$. The base loss is $\mathcal{L} = 3.5$. What is the total regularized cost $J(\theta)$?
*   **A** 6.40
*   **B** 5.50
*   **C** 6.80
*   **D** 7.20

**Answer:** A
**Explanation:** 0.1 * (16 + 9 + 4) = 0.1 * 29 = 2.9. Total = 3.5 + 2.9 = 6.40.

**Question 140**
Which of the following is a stated LIMITATION of regularization?
*   **A** It always eliminates overfitting completely
*   **B** It reduces both bias and variance equally
*   **C** It can introduce additional bias; too strong a penalty causes underfitting
*   **D** It makes models faster to train

**Answer:** C
**Explanation:** It can introduce additional bias; too strong a penalty causes underfitting.

**Question 141**
What is the primary architectural difference between Bagging and Boosting?
*   **A** Bagging is sequential; Boosting is parallel
*   **B** Bagging is parallel; Boosting is sequential
*   **C** Both are exclusively parallel
*   **D** Both are exclusively sequential

**Answer:** B
**Explanation:** Bagging (like Random Forest) builds independent trees in parallel, while Boosting (like AdaBoost) builds trees sequentially, with each tree correcting the previous ones.

**Question 142**
In a Random Forest for classification with $M$ total features, what is the standard recommended number of features to consider at each split?
*   **A** $M$ (all features)
*   **B** $M/2$
*   **C** $\sqrt{M}$
*   **D** $1$

**Answer:** C
**Explanation:** By default, Random Forest typically considers $\sqrt{M}$ features at each split for classification tasks to ensure tree diversity.

**Question 143**
True or False: "Collecting more training data is the most effective way to solve an Underfitting problem."
*   **A** True
*   **B** False

**Answer:** B
**Explanation:** Underfitting means the model is too simple for the current data. Adding more data doesn't help if the model lacks the capacity to learn; instead, you need a more complex model or better features.

**Question 144**
Which regularization technique is most effective for performing automated feature selection by shrinking irrelevant coefficients to zero?
*   **A** L1 Regularization (LASSO)
*   **B** L2 Regularization (Ridge)
*   **C** Dropout
*   **D** Early Stopping

**Answer:** A
**Explanation:** L1 regularization (LASSO) has a diamond-shaped constraint that often results in sparse weight vectors where unimportant feature weights are set exactly to zero.
