### Week 10 Practice Quiz: Underfitting, Overfitting, Bias-Variance, and Regularization

**Question 1**
Which of the following BEST defines underfitting?
*   **A** A model that performs too well on unseen data
*   **B** A model that is too simple and fails to learn the underlying patterns of the training data
*   **C** A model that memorizes every data point including noise
*   **D** A model with too many trainable parameters

**Answer:** B
**Explanation:** Underfitting occurs when the model cannot align with the training data.

**Question 2**
Which of the following is a direct cause of underfitting?
*   **A** Using a very large dataset
*   **B** Training the model for too many epochs
*   **C** Using too few features for training
*   **D** Removing regularization entirely

**Answer:** C
**Explanation:** With insufficient features, the model lacks the information needed.

**Question 3**
From the Bias-Variance perspective, an underfitted model is characterized by:
*   **A** Low bias and high variance
*   **B** High bias and high variance
*   **C** High bias and low variance
*   **D** Low bias and low variance

**Answer:** C
**Explanation:** High bias and low variance.

**Question 4**
Which symptom is UNIQUE to underfitting and would NOT appear in overfitting?
*   **A** Large gap between training and validation accuracy
*   **B** High training error and high validation error simultaneously
*   **C** Very low training loss
*   **D** Highly complex decision boundaries

**Answer:** B
**Explanation:** High training error and high validation error simultaneously.

**Question 5**
Which remedy would MOST directly fix underfitting?
*   **A** Adding dropout layers to the neural network
*   **B** Applying early stopping during training
*   **C** Increasing model complexity and adding more relevant features
*   **D** Increasing the regularization parameter $\lambda$

**Answer:** C
**Explanation:** Increasing model complexity and adding more relevant features.

**Question 6**
A learning curve shows both training error and validation error remain high even after many epochs of training. This most likely indicates:
*   **A** Overfitting due to model memorization
*   **B** Underfitting due to a model that is too simple
*   **C** An optimal model with good generalization
*   **D** Irreducible noise dominating the data

**Answer:** B
**Explanation:** Underfitting due to a model that is too simple.

**Question 7**
A bank deploys a credit-risk scoring model. It uses only 2 features: age and income. The model approves or rejects loans using a single linear threshold. Internal audit shows the model's training accuracy is 61% and test accuracy is 60%. Default rates remain high. What is the most likely problem and best course of action?
*   **A** Overfitting; apply L2 regularization
*   **B** Underfitting; add more relevant features (credit history, debt ratio) and use a more complex model
*   **C** Overfitting; collect more training data
*   **D** Optimal fit; the model is performing consistently

**Answer:** B
**Explanation:** Underfitting — add features and use a more complex model.

**Question 8**
Overfitting occurs when a model:
*   **A** Performs equally well on training and unseen data
*   **B** Learns only general patterns and ignores individual data points
*   **C** Captures noise, outliers, and random fluctuations from training data
*   **D** Uses too few parameters to represent the data

**Answer:** C
**Explanation:** Captures noise, outliers, and random fluctuations from training data.

**Question 9**
Which of the following is a common cause of overfitting?
*   **A** Using a very simple model with few parameters
*   **B** Having a very large training dataset
*   **C** Training a very complex model on a small dataset with insufficient regularization
*   **D** Using early stopping during training

**Answer:** C
**Explanation:** Training a very complex model on a small dataset with insufficient regularization.

**Question 10**
Which of the following is the BEST one-line summary of overfitting?
*   **A** High training error + High test error
*   **B** Low training error + Low test error
*   **C** Low training error + High test error
*   **D** High training error + Low test error

**Answer:** C
**Explanation:** Low training error + High test error.

**Question 11**
In a neural network's training history, which pattern is a classic signal of overfitting?
*   **A** Both training and validation loss decrease together throughout training
*   **B** Training loss decreases while validation loss starts to increase after some epochs
*   **C** Training loss remains flat while validation loss decreases
*   **D** Both losses remain high and flat across epochs

**Answer:** B
**Explanation:** Training loss decreases while validation loss starts to increase after some epochs.

**Question 12**
Which remedy is specifically designed for neural networks to prevent overfitting by randomly disabling neurons during training?
*   **A** Feature selection
*   **B** L1 Regularization (LASSO)
*   **C** Dropout
*   **D** Increasing model depth

**Answer:** C
**Explanation:** Dropout randomly disables neural pathways.

**Question 13**
Overfitted models are said to have high variance because:
*   **A** They make consistently wrong predictions regardless of input
*   **B** Their predictions change significantly with small changes in the training data
*   **C** They use a large number of features
*   **D** They have a high learning rate during training

**Answer:** B
**Explanation:** Their predictions change significantly with small changes in the training data.

**Question 14**
A medical AI system is trained on 500 X-ray images to detect pneumonia. It achieves 98% training accuracy but only 67% on hospital test data. Doctors notice it flags patients based on hospital-specific text labels accidentally included in the images. What is happening, and what should be done?
*   **A** Underfitting; increase model depth
*   **B** Optimal fit; deploy the model
*   **C** Overfitting to spurious features; clean the data, crop labels out, add more diverse images and apply regularization
*   **D** Overfitting; only apply early stopping

**Answer:** C
**Explanation:** Overfitting to spurious features; clean data, diversity, and regularization.

**Question 16**
An optimally fitted model is best described as one that:
*   **A** Has zero training error and zero test error
*   **B** Captures true patterns in training data while generalizing well to unseen data
*   **C** Minimizes only training loss regardless of test performance
*   **D** Uses the maximum possible number of parameters

**Answer:** B
**Explanation:** Captures true patterns in training data while generalizing well to unseen data.

**Question 17**
In the summary comparison of Under-fitting, Optimal-fitting, and Over-fitting - which statement correctly describes the deep learning loss curves for an optimal fit?
*   **A** Training and validation curves both remain high and flat
*   **B** Training loss is very low but validation loss is very high
*   **C** Training and validation loss both decrease and converge close to each other
*   **D** Validation loss decreases while training loss increases

**Answer:** C
**Explanation:** Training and validation loss both decrease and converge close to each other.

**Question 18**
As model complexity increases along the capacity axis, what happens to bias and variance?
*   **A** Both increase
*   **B** Bias increases, variance decreases
*   **C** Bias decreases, variance increases
*   **D** Both decrease until the optimal point, then both increase

**Answer:** C
**Explanation:** Bias decreases, variance increases.

**Question 19**
The Bias-Variance Decomposition states that Total Prediction Error equals:
*   **A** $Bias + Variance + Noise$
*   **B** $Bias^2 + Variance + Irreducible Error$
*   **C** $Bias^2 - Variance + Noise$
*   **D** $Bias^2 - Variance + Noise$

**Answer:** B
**Explanation:** Total Error = Bias² + Variance + Irreducible Error.

**Question 20**
A model has $Bias = 0.4$, $Variance = 0.15$, and $Irreducible Error = 0.05$. What is its Total Prediction Error?
*   **A** 0.60
*   **B** 0.36
*   **C** 0.76
*   **D** 0.46

**Answer:** B
**Explanation:** Total Error = (0.4)² + 0.15 + 0.05 = 0.16 + 0.20 = 0.36.

**Question 21**
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

**Question 22**
Why can't the Irreducible Error be reduced even by the best possible model?
*   **A** Because the model hasn't been trained long enough
*   **B** Because it comes from inherent randomness or missing information in the data itself
*   **C** Because the learning rate is set too high
*   **D** Because the model complexity is too low

**Answer:** B
**Explanation:** It comes from inherent randomness or missing information in the data itself.

**Question 23**
A stock-price prediction model trained on 10 years of data has: $Bias = 0.3$, $Variance = 0.6$, $Noise = 0.1$. A simplified version has $Bias = 0.5$, $Variance = 0.2$, $Noise = 0.1$. Which should a quantitative analyst prefer for live trading, and why?
*   **A** Complex model; lower bias means more accurate signals
*   **B** Simplified model; lower total error and more stable predictions day-to-day
*   **C** Complex model; high variance is acceptable in finance
*   **D** Both are equal; choose based on speed of inference

**Answer:** B
**Explanation:** Simplified model; lower total error and more stable predictions.

**Question 24**
How does regularization prevent overfitting?
*   **A** By increasing the number of training epochs
*   **B** By adding a penalty term to the loss function that discourages large weights
*   **C** By removing neurons from the network permanently
*   **D** By increasing the learning rate during training

**Answer:** B
**Explanation:** By adding a penalty term to the loss function that discourages large weights.

**Question 25**
The L1 regularization cost function is written as:
*   **A** $J(\theta) = Loss(y, \hat{y}) + \lambda \sum_{i=1}^{n} w_i^2$
*   **B** $J(\theta) = Loss(y, \hat{y}) + \lambda \sum_{i=1}^{n} |w_i|$
*   **C** $J(\theta) = Loss(y, \hat{y}) - \lambda \sum_{i=1}^{n} |w_i|$
*   **D** $J(\theta) = Loss(y, \hat{y}) \times \lambda \sum_{i=1}^{n} w_i$

**Answer:** B
**Explanation:** L1 uses the sum of absolute values.

**Question 26**
Which key difference distinguishes L1 (LASSO) from L2 (Ridge) regularization?
*   **A** L2 sets weights to exactly zero; L1 only shrinks them
*   **B** L1 can set weights to exactly zero (feature selection); L2 shrinks weights but rarely to zero
*   **C** L1 uses squared weights; L2 uses absolute weights
*   **D** They are mathematically identical, only the notation differs

**Answer:** B
**Explanation:** L1 can set weights to exactly zero; L2 shrinks weights but rarely to zero.

**Question 27**
Given L1 regularization with $\lambda = 0.4$ and weights $w_1 = 3, w_2 = -2, w_3 = 0.5$. The base loss is $\mathcal{L} = 5.0$. What is the total regularized cost $J(\theta)$?
*   **A** 7.20
*   **B** 6.50
*   **C** 5.40
*   **D** 7.00

**Answer:** A
**Explanation:** 0.4 * (3 + 2 + 0.5) = 0.4 * 5.5 = 2.2. Total = 5.0 + 2.2 = 7.20.

**Question 28**
Given L2 regularization with $\lambda = 0.1$ and weights $w_1 = 4, w_2 = -3, w_3 = 2$. The base loss is $\mathcal{L} = 3.5$. What is the total regularized cost $J(\theta)$?
*   **A** 6.40
*   **B** 5.50
*   **C** 6.80
*   **D** 7.20

**Answer:** A
**Explanation:** 0.1 * (16 + 9 + 4) = 0.1 * 29 = 2.9. Total = 3.5 + 2.9 = 6.40.

**Question 29**
Which of the following is a stated LIMITATION of regularization?
*   **A** It always eliminates overfitting completely
*   **B** It reduces both bias and variance equally
*   **C** It can introduce additional bias; too strong a penalty causes underfitting
*   **D** It makes models faster to train

**Answer:** C
**Explanation:** It can introduce additional bias; too strong a penalty causes underfitting.
