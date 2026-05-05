### Random Forests and Bagging

**Question 1**
Random Forest is also referred to as:
*   **A** Bootstrap Forest
*   **B** Decision Tree Ensemble
*   **C** Random Bagging
*   **D** Decision Forest

**Answer:** D
**Explanation:** Random Forest is called a Decision Forest because it builds a collection of decision trees that work together as an ensemble.

**Question 2**
Random Forest belongs to which category of learning algorithms?
*   **A** Unsupervised learning
*   **B** Parametric supervised learning
*   **C** Reinforcement learning
*   **D** Non-parametric supervised learning

**Answer:** D
**Explanation:** Random Forest is a non-parametric supervised learning algorithm, meaning it does not assume a specific mathematical form for the underlying data distribution.

**Question 3**
What types of problems can Random Forest solve?
*   **A** Only classification problems
*   **B** Only clustering problems
*   **C** Only regression problems
*   **D** Both classification and regression problems

**Answer:** D
**Explanation:** Random Forest is a versatile ensemble technique used for solving both classification and regression problems.

**Question 4**
How does Random Forest combine predictions of multiple models?
*   **A** By discarding the worst predictions
*   **B** By selecting the best model's prediction
*   **C** By averaging or voting across all models
*   **D** By using only the first model

**Answer:** C
**Explanation:** Random Forest combines the predictions of multiple models to produce a more reliable result.

**Question 5**
What is the purpose of training each decision tree on a random subset of data?
*   **A** To focus only on important data
*   **B** To increase diversity among trees
*   **C** To use less memory
*   **D** To reduce training time

**Answer:** B
**Explanation:** Each tree sees a slightly different portion of the data, increasing diversity and reducing correlation.

**Question 6**
What is bootstrap sampling?
*   **A** Sampling only the first half of data
*   **B** Sampling without replacement
*   **C** Sampling with replacement
*   **D** Sampling only the last half of data

**Answer:** C
**Explanation:** Bootstrap sampling means randomly selecting data points with replacement.

**Question 7**
What is special about feature selection at each split in Random Forest?
*   **A** Only the most important feature is considered
*   **B** No features are considered
*   **C** All features are considered at every split
*   **D** A random subset of features is considered at each split

**Answer:** D
**Explanation:** Random Forest selects a random subset of features at each node and chooses the best split among them.

**Question 8**
How does random feature selection help Random Forest?
*   **A** It makes the model deterministic
*   **B** It eliminates the need for data
*   **C** It reduces correlation between trees and improves generalization
*   **D** It increases training speed

**Answer:** C
**Explanation:** By focusing on different features, trees become more diverse and less correlated.

**Question 9**
For classification problems, how does Random Forest produce the final output?
*   **A** By selecting the deepest tree's output
*   **B** By majority voting among trees
*   **C** By averaging all predictions
*   **D** By taking the median

**Answer:** B
**Explanation:** The class with the most votes becomes the final prediction.

**Question 10**
For regression problems, how does Random Forest produce the final output?
*   **A** By taking the maximum value
*   **B** By selecting the tree with lowest error
*   **C** By averaging across all trees
*   **D** By majority voting

**Answer:** C
**Explanation:** The predictions are averaged across all trees for regression tasks.

**Question 11**
What type of learning technique is Random Forest?
*   **A** Dimensionality reduction technique
*   **B** Ensemble machine learning technique
*   **C** Clustering technique
*   **D** Single learner method

**Answer:** B
**Explanation:** Random Forest combines multiple models to improve performance.

**Question 12**
What happens when splitting nodes during tree construction in Random Forest?
*   **A** A random subset of features is selected and the best split is chosen among them
*   **B** No features are considered
*   **C** Only the most important feature is considered
*   **D** All features are considered

**Answer:** A
**Explanation:** This is a key part of the Random Forest algorithm to ensure diversity.

**Question 13**
How does Random Forest reduce correlation between trees?
*   **A** By training on the full dataset
*   **B** By using all features at every split
*   **C** By using only one tree
*   **D** By selecting a random subset of features at each split

**Answer:** D
**Explanation:** Feature randomness is a primary way to decorrelate trees.

**Question 14**
How does Random Forest achieve improved robustness and accuracy?
*   **A** By combining multiple diverse decision trees
*   **B** By using only one tree
*   **C** By removing all features
*   **D** By using linear models

**Answer:** A
**Explanation:** Diversity among trees is key to Random Forest's robustness.

**Question 15**
What is a key advantage of Random Forest regarding data features?
*   **A** It works only with numerical features
*   **B** It requires feature scaling
*   **C** It handles many features effectively
*   **D** It cannot handle many features

**Answer:** C
**Explanation:** Random Forest can handle high-dimensional data well without explicit feature selection.

**Question 16**
Why is Random Forest resistant to noise and outliers?
*   **A** Predictions are based on the combined output of many trees
*   **B** It assumes normally distributed data
*   **C** It removes outliers automatically
*   **D** It uses only one tree for prediction

**Answer:** A
**Explanation:** The averaging effect smooths out the impact of noisy data points.

**Question 17**
How does Random Forest help with overfitting?
*   **A** It removes all features
*   **B** It uses only one deep tree
*   **C** It increases model complexity
*   **D** By averaging the results of multiple decision trees, it improves generalization

**Answer:** D
**Explanation:** Averaging predictions generally leads to better generalization than any single tree.

**Question 18**
What is one limitation of Random Forest?
*   **A** It is highly prone to overfitting
*   **B** It has lower interpretability than a single decision tree
*   **C** It requires feature scaling
*   **D** It cannot handle many features

**Answer:** B
**Explanation:** Ensembles are generally harder to interpret than simple single models.

**Question 19**
What is a limitation of Random Forest regarding training?
*   **A** Training can be computationally expensive
*   **B** It trains very quickly
*   **C** It cannot be parallelized
*   **D** It requires no computational resources

**Answer:** A
**Explanation:** Building a large number of trees can be time-consuming and resource-intensive.

**Question 20**
What are the bias-variance characteristics of deep regression trees?
*   **A** Low bias and high variance
*   **B** High bias and low variance
*   **C** Low bias and low variance
*   **D** High bias and high variance

**Answer:** A
**Explanation:** Deep trees fit training data very closely (low bias) but are sensitive to small changes (high variance).

**Question 21**
What is the goal of an ideal machine learning model?
*   **A** High bias and low variance
*   **B** Low bias and high variance
*   **C** High bias and high variance
*   **D** Low bias and low variance

**Answer:** D
**Explanation:** We want the model to be accurate and stable.

**Question 22**
Which of the following is an example of an unstable algorithm?
*   **A** Linear Regression
*   **B** Decision Trees
*   **C** k-Nearest Neighbors
*   **D** Naïve Bayes

**Answer:** B
**Explanation:** Decision trees can change drastically with small changes in the dataset.

**Question 23**
Which algorithm is given as an example of a stable algorithm?
*   **A** Decision Trees
*   **B** Condensed Nearest Neighbor
*   **C** Neural Networks
*   **D** k-Nearest Neighbors (k-NN)

**Answer:** D
**Explanation:** k-NN output generally doesn't shift drastically with minor data changes.

**Question 24**
What is an unstable learning algorithm?
*   **A** One where small changes in data lead to significant changes in the model
*   **B** One that never changes regardless of data
*   **C** One that always gives the same result
*   **D** One that requires large amounts of data

**Answer:** A
**Explanation:** Instability refers to high sensitivity to the training dataset.

**Question 25**
What is the relationship between unstable algorithms and variance?
*   **A** Variance is unrelated to stability
*   **B** Unstable algorithms have low variance
*   **C** Unstable algorithms have high variance
*   **D** Unstable algorithms have no variance

**Answer:** C
**Explanation:** Instability in model structure directly leads to high variance in predictions.

**Question 26**
According to the slides, what is an example of an unstable algorithm?
*   **A** Naïve Bayes
*   **B** Linear Regression
*   **C** k-Nearest Neighbors
*   **D** Neural Networks

**Answer:** D
**Explanation:** Neural Networks are sensitive to initializations and data perturbations.

**Question 27**
How does bagging help deep regression trees?
*   **A** It reduces both bias and variance
*   **B** It increases variance
*   **C** It increases bias
*   **D** It reduces variance while maintaining low bias

**Answer:** D
**Explanation:** Averaging reduces variance while keeping the bias level of the individual trees.

**Question 28**
What does the term "Bagging" stand for?
*   **A** Bootstrap Averaging
*   **B** Binary Aggregating
*   **C** Bagged Gradient Boosting
*   **D** Bootstrap Aggregating

**Answer:** D
**Explanation:** Bagging = **B**ootstrap **Agg**regat**ing**.

**Question 29**
What creates diversity among base learners in bagging?
*   **A** Training on the same data multiple times
*   **B** Using different algorithms
*   **C** Training each model on a slightly different version of the dataset
*   **D** Using different programming languages

**Answer:** C
**Explanation:** Using bootstrap samples ensures each model sees a different data subset.

**Question 30**
What are Out-of-Bag (OOB) observations?
*   **A** The deepest leaves in a decision tree
*   **B** Data points not selected in a particular bootstrap sample
*   **C** The most important features in the dataset
*   **D** Data points used to train every model

**Answer:** B
**Explanation:** About 1/3 of the data is left out of any given bootstrap sample.

**Question 31**
How can OOB observations be used?
*   **A** To evaluate model performance without a separate validation set
*   **B** To select features
*   **C** To increase tree depth
*   **D** To train the model further

**Answer:** A
**Explanation:** OOB data provides a "free" validation set during the bagging process.

**Question 32**
What is the purpose of OOB error estimation?
*   **A** To select features
*   **B** To evaluate model performance without a separate validation set
*   **C** To reduce the number of trees
*   **D** To increase tree depth

**Answer:** B
**Explanation:** It allows monitoring generalization error without needing a hold-out set.

**Question 33**
How are base learners trained in bagging compared to boosting?
*   **A** Both are trained sequentially
*   **B** In parallel in bagging, sequentially in boosting
*   **C** Sequentially in bagging, parallel in boosting
*   **D** Both are trained in parallel

**Answer:** B
**Explanation:** Bagging trees are independent; boosting trees depend on the previous one.

**Question 34**
What is the first step in training a bagging model?
*   **A** Feature selection
*   **B** Aggregating predictions
*   **C** Pruning the trees
*   **D** Bootstrap sampling of data

**Answer:** D
**Explanation:** You first create the diverse training sets via bootstrapping.

**Question 35**
Why does bagging help unstable algorithms?
*   **A** It makes the model more complex
*   **B** It increases bias
*   **C** It removes all outliers automatically
*   **D** It reduces variance by training multiple models on bootstrap samples

**Answer:** D
**Explanation:** Averaging unstable models stabilizes the ensemble's final prediction.

**Question 36**
What does the hyperparameter "number of base models" control in bagging?
*   **A** The depth of each tree
*   **B** How many individual learners are included in the ensemble
*   **C** The size of the dataset
*   **D** The number of features used

**Answer:** B
**Explanation:** It determines the size of the ensemble.

**Question 37**
What happens if too many base models are used in bagging?
*   **A** Bias increases dramatically
*   **B** Training time increases without significant performance gain
*   **C** Model accuracy always improves
*   **D** The model becomes fully interpretable

**Answer:** B
**Explanation:** Performance gain eventually plateaus while compute costs keep rising.

**Question 38**
How does the size of bootstrap samples affect the bias-variance trade-off?
*   **A** Sample size has no effect
*   **B** Larger samples increase bias
*   **C** Smaller samples may increase diversity but can raise bias
*   **D** Smaller samples decrease diversity

**Answer:** C
**Explanation:** Smaller samples make models more different but less accurate on average.

**Question 39**
How are predictions combined in bagging for regression tasks?
*   **A** Weighted sum by model complexity
*   **B** Majority voting
*   **C** Selecting the best model's prediction
*   **D** Averaging

**Answer:** D
**Explanation:** Mean value is typically used for regression ensembles.

**Question 40**
What does the bootstrap sampling concept in bagging help estimate?
*   **A** The median of the data
*   **B** The mode of the data
*   **C** The variability of a model or estimator
*   **D** The mean of the data

**Answer:** C
**Explanation:** Bootstrapping is fundamentally about estimating statistical distributions and variance.

**Question 41**
What is one advantage of bagging?
*   **A** It makes models less accurate
*   **B** It improves generalization by combining predictions from multiple models
*   **C** It requires no data
*   **D** It always trains faster than a single model

**Answer:** B
**Explanation:** Ensembling reduces the error variance, improving generalization.

**Question 42**
What is one limitation of bagging?
*   **A** Reduced interpretability when many models are combined
*   **B** It always overfits
*   **C** It cannot handle high-dimensional data
*   **D** It is not robust to outliers

**Answer:** A
**Explanation:** Explaining the decision of 100 aggregated trees is hard.

**Question 43**
What is a key similarity between bagged trees and Random Forest?
*   **A** Both use only one tree
*   **B** Both are highly interpretable
*   **C** Both address the high variance problem of single decision trees
*   **D** Both use random subsets of features at each split

**Answer:** C
**Explanation:** Both use ensembling techniques to stabilize variance issues.

**Question 44**
What is the key difference between bagged trees and Random Forest?
*   **A** Random Forest selects a random subset of features at each split
*   **B** Bagged trees use random subsets of features at each split
*   **C** Random Forest does not use bootstrap sampling
*   **D** Bagged trees average predictions while Random Forest uses voting

**Answer:** A
**Explanation:** Random Forest adds feature randomness on top of bootstrap bagging.

**Question 45**
In bagged trees, what creates diversity among trees?
*   **A** Different tree depths
*   **B** Training each tree on a different bootstrap sample
*   **C** Random feature selection at each split
*   **D** Using different algorithms for each tree

**Answer:** B
**Explanation:** Standard bagging diversity comes purely from the data sampling.
