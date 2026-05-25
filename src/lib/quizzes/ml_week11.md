### Clustering Week 11

**Question 1**
Which of the following best describes the key difference between supervised and unsupervised learning in the context of clustering?

A) Supervised learning uses more data than unsupervised learning.
B) Unsupervised learning discovers hidden patterns without labeled data, while supervised learning requires labeled outputs.
C) Clustering is a form of supervised learning because it organizes data into groups.
D) Supervised learning cannot be used for classification tasks.

**Answer:** B
**Explanation:** Unsupervised learning - including clustering - works with completely unlabeled data. The model identifies natural groupings purely from the feature space. Supervised learning, by contrast, requires labeled training examples (input-output pairs) to learn a mapping. Clustering is explicitly unsupervised: no class labels are provided beforehand.

**Question 2**
A data scientist applies a clustering algorithm to sales data and finds that points within each cluster are very similar, but clusters themselves are poorly separated. Which clustering property is **MISSING**?

A) High within-cluster similarity
B) Scalability to large datasets
C) Low between-cluster similarity (high separation)
D) Robustness to noise and outliers

**Answer:** C
**Explanation:** A good clustering method requires BOTH high within-cluster similarity (points in the same cluster are close) AND low between-cluster similarity (different clusters are clearly separated). The scenario describes high within-cluster similarity—points are tight within each group. What's missing is low between-cluster similarity, meaning the clusters should be more distinctly separated from each other.

**Question 3**
Which of the following are **VALID** real-world applications of clustering? (Select **ALL** that apply)

A) Identifying customer segments based on purchase behavior.
B) Predicting the exact price of a house given its features.
C) Grouping pixels by color/texture in image segmentation.
D) Detecting fraudulent financial transactions as outliers.
E) Grouping users with similar preferences in a recommender system.

**Answer:** A, C, D, E
**Explanation:** Customer segmentation (A), image segmentation (C), anomaly/fraud detection (D), and recommender systems (E) are all classic clustering applications. Option B (predicting a house price) is a supervised regression task, not clustering, because it requires labeled data (known prices) and produces a continuous output. Clustering is used for discovery and grouping, not for making labeled predictions.

**Question 4**
A researcher wants to model customer behavior where a customer might belong partially to a 'budget shopper' cluster AND a 'premium shopper' cluster at the same time. Which clustering approach is most appropriate?

A) Hard clustering (e.g., K-means), because it is simpler and faster.
B) Soft/Fuzzy clustering (e.g., Gaussian Mixture Models), because it allows partial membership.
C) Hierarchical clustering, because it builds a dendrogram.
D) Hard clustering, because clusters never overlap in real data.

**Answer:** B
**Explanation:** The scenario explicitly involves partial or overlapping membership—a customer belongs to multiple clusters simultaneously with different degrees. This is the defining characteristic of soft (fuzzy) clustering. Gaussian Mixture Models (GMM) assign each data point a probability of belonging to each cluster. K-means (hard clustering) assigns each point to exactly one cluster, which cannot capture this ambiguity. Hierarchical clustering also produces hard assignments at any given cut.

**Question 5**
DBSCAN is preferred over K-means when the data has which of the following characteristics?

A) The data consists of perfectly spherical, equally-sized clusters.
B) The number of clusters is known in advance.
C) Clusters have irregular or arbitrary shapes and the data contains noise/outliers.
D) The dataset is very small (< 100 points) with no noise.

**Answer:** C
**Explanation:** K-means assumes clusters are spherical (centroid-based) and requires K to be specified in advance. It is also sensitive to outliers. DBSCAN (Density-Based Spatial Clustering of Applications with Noise) forms clusters based on density, can find clusters of arbitrary shape, does NOT require knowing K, and naturally labels low-density points as noise/outliers. It is the superior choice when clusters are non-spherical or when outlier detection is needed.

**Question 6**
For a data point $i$: $a_i = 3.0$ (avg intra-cluster distance) and $b_i = 9.0$ (min avg distance to nearest cluster). What is the silhouette score $s_i$?

A) $s_i = 0.33$
B) $s_i = 0.50$
C) $s_i = 0.67$
D) $s_i = -0.67$

**Answer:** C
**Explanation:** Since $a_i < b_i$, use the formula: $s_i = 1 - a_i/b_i = 1 - 3.0/9.0 = 1 - 0.333 = 0.667 \approx 0.67$. Interpretation: $a_i = 3$ means the point is moderately close to its own cluster. $b_i = 9$ means the nearest other cluster is much farther away. A score of 0.67 (close to 1) indicates the point is well-placed and much closer to its own cluster than to any other.

**Question 7**
After an iteration of K-means, Cluster 1 contains the points: (2,4), (4,2), (6,6). What is the updated centroid $\mu_1$?

A) (3, 3)
B) (4, 4)
C) (4, 3)
D) (3, 4)

**Answer:** B
**Explanation:** The centroid is the mean of all points in the cluster: $\mu_{1\_x} = (2+4+6)/3 = 4$, $\mu_{1\_y} = (4+2+6)/3 = 4$. So $\mu_1 = (4,4)$. The update rule is: $\mu_k = \frac{1}{|C_k|} \sum_{x_j \in C_k} x_j$. This is the standard K-means centroid recomputation step—the new center is simply the arithmetic mean across all dimensions.

**Question 8**
Current centroids are $\mu_1 = (1,1)$ and $\mu_2 = (5,5)$. A new point $p = (3,4)$ arrives. Using Euclidean distance, which cluster is $p$ assigned to?

A) Cluster 1, because $d(p,\mu_1) < d(p,\mu_2)$
B) Cluster 2, because $d(p,\mu_2) < d(p,\mu_1)$
C) Either cluster, as both distances are equal
D) Cluster 1, because $p$ is closer to the origin

**Answer:** B
**Explanation:** Compute Euclidean distances: $d(p,\mu_1) = \sqrt{(3-1)^2 + (4-1)^2} = \sqrt{4+9} = \sqrt{13} \approx 3.61$. $d(p,\mu_2) = \sqrt{(3-5)^2 + (4-5)^2} = \sqrt{4+1} = \sqrt{5} \approx 2.24$. Since $d(p,\mu_2) = 2.24 < d(p,\mu_1) = 3.61$, point $p$ is assigned to Cluster 2. This is the standard K-means assignment step: each point joins the cluster whose centroid is nearest.

**Question 9**
Which of the following are known limitations of the standard K-means algorithm? (Select **ALL** that apply)

A) Requires the number of clusters K to be specified in advance.
B) Sensitive to the initial placement of centroids.
C) Assumes clusters are roughly spherical (convex) in shape.
D) Can handle arbitrarily shaped clusters without modification.
E) Sensitive to outliers, which can distort centroid positions.

**Answer:** A, B, C, E
**Explanation:** K-means has several well-known limitations: (A) K must be chosen upfront; it cannot discover K automatically. (B) Results depend heavily on initialization; poor seeds lead to bad local optima. (C) K-means assumes spherical clusters—it minimizes Euclidean distances to centroids, which favors round, compact groups. (E) Outliers heavily distort centroids since the mean is not robust. Option D is FALSE—K-means cannot handle arbitrary shapes without modification.

**Question 10**
A researcher runs K-means for $K=2,3,4,5$ and gets average silhouette scores of 0.45, 0.71, 0.63, 0.58. Which K should be chosen, and why?

A) $K=2$, because using fewer clusters is always preferred.
B) $K=3$, because it has the highest average silhouette score.
C) $K=5$, because more clusters always means better separation.
D) $K=4$, because the silhouette score decreases after K = 4.

**Answer:** B
**Explanation:** The Silhouette Coefficient (SC) criterion indicates we select the K that maximizes the average silhouette score. Here: $K=2 \rightarrow 0.45, K=3 \rightarrow 0.71$ (highest), $K=4 \rightarrow 0.63, K=5 \rightarrow 0.58$. $K=3$ is best. A score of 0.71 is close to 1, indicating well-separated, compact clusters. Neither 'fewer is better' nor 'more is better' applies—the silhouette score is the objective criterion.

**Question 11**
In agglomerative hierarchical clustering, which linkage criterion would be MOST resistant to creating elongated 'chained' clusters?

A) Single linkage uses the minimum distance between clusters.
B) Complete linkage uses the maximum distance between clusters.
C) Average linkage uses the average of all pairwise distances.
D) Both A and B are equally resistant to chaining.

**Answer:** B
**Explanation:** Single-linkage chaining is a well-known problem: because it merges based on the closest pair of points, it can create long 'chains' where loosely connected points keep getting absorbed. Complete linkage merges clusters based on their MAXIMUM inter-point distance, which forces merged clusters to be compact in ALL directions, making it the most resistant to chaining. Average linkage is a compromise between the two. Complete linkage is preferred when compact, well-separated clusters are desired.

**Question 12**
For a clustering result, three points have silhouette scores: $s_1 = 0.82, s_2 = 0.03, s_3 = -0.45$. Which statements are TRUE? (Select ALL that apply)

A) Point 1 is well-clustered and far from its neighbouring cluster.
B) Point 2 is on or near the boundary between two clusters.
C) Point 3 is correctly assigned to its cluster.
D) Point 3 might be assigned to the wrong cluster.
E) A score of -1 would indicate perfectly correct clustering.

**Answer:** A, B, D
**Explanation:** Silhouette score range is $[-1, +1]$: $s_1 = 0.82 \rightarrow$ Near 1: point is well within its own cluster and far from neighbours. (A is TRUE). $s_2 = 0.03 \rightarrow$ Near 0: point is on the boundary—barely better fit in its cluster than the next. (B is TRUE). $s_3 = -0.45 \rightarrow$ Negative: point is closer to a neighbouring cluster than its own, meaning it is likely misassigned. (D is TRUE, C is FALSE). E is FALSE: $s = -1$ signals wrong/random clustering. $s = +1$ is perfect; $s = 0$ means clusters overlap.

**Question 13**
Which of the following best describes the main objective of clustering?

A) Predict labels for unseen data
B) Group similar data points together
C) Reduce training error in supervised learning
D) Learn from labeled examples

**Answer:** B
**Explanation:** Clustering is an unsupervised learning technique that groups similar data points together without using labels.

**Question 14**
Which of the following are challenges in supervised learning that motivate unsupervised learning? (Select ALL that apply)

A) Lack of labeled data
B) Overfitting
C) Feature engineering difficulty
D) Infinite training data

**Answer:** A, B, C
**Explanation:** Supervised learning often struggles with insufficient labels, overfitting, and heavy feature engineering requirements.

**Question 15**
A clustering algorithm produces clusters with high within-cluster similarity and low between-cluster similarity. What does this indicate?

A) Poor clustering quality
B) Overlapping clusters
C) Good clustering quality
D) Random grouping

**Answer:** C
**Explanation:** Good clustering ensures points inside a cluster are similar while clusters remain distinct from one another.

**Question 16**
Which of the following algorithms are density-based clustering methods? (Select ALL that apply)

A) DBSCAN
B) OPTICS
C) Mean Shift
D) K-Means

**Answer:** A, B, C
**Explanation:** DBSCAN, OPTICS, and Mean Shift are density-based approaches. K-Means is partition-based.

**Question 17**
In hard clustering, a data point:

A) Belongs to multiple clusters equally
B) Has probabilistic membership values
C) Belongs to exactly one cluster
D) Is always considered noise

**Answer:** C
**Explanation:** Hard clustering assigns every point to exactly one cluster.

**Question 18**
A dataset contains overlapping customer groups. Which clustering approach is more suitable?

A) Hard clustering
B) Soft clustering
C) Random partitioning
D) Single linkage only

**Answer:** B
**Explanation:** Soft clustering allows partial membership in multiple clusters and handles overlapping boundaries better.

**Question 19**
In K-Means, the centroid of points (2,4), (4,6), and (6,8) is:

A) (4,6)
B) (3,5)
C) (4,5)
D) (5,6)

**Answer:** A
**Explanation:** Centroid = mean of coordinates $= (\frac{2+4+6}{3}, \frac{4+6+8}{3}) = (4,6)$.

**Question 20**
A point has $a=2$ and $b=10$ in silhouette score computation. What is its silhouette score?

A) 0.2
B) 0.8
C) -0.8
D) 1.2

**Answer:** 0.8
**Explanation:** Since $a < b$, silhouette score $= 1 - a/b = 1 - 2/10 = 0.8$.

**Question 21**
For $k=2,3,4$, the silhouette scores are 0.45, 0.71, and 0.62 respectively. Which value of k should be selected?

A) 2
B) 3
C) 4
D) Cannot determine

**Answer:** B
**Explanation:** The best clustering usually corresponds to the highest silhouette score. Here, 0.71 is maximum for $k=3$.

**Question 22**
Which statements about K-Means are correct? (Select ALL that apply)

A) It minimizes within-cluster variance
B) It assumes roughly spherical clusters
C) It is robust to all outliers
D) It uses centroids as representatives

**Answer:** A, B, D
**Explanation:** K-Means minimizes within-cluster variance, uses centroids, and assumes compact spherical clusters. It is sensitive to outliers.

**Question 23**
Consider points (1,1), (2,2), (8,8), (9,9) with $k=2$ and initial centroids (1,1) and (9,9). After one assignment step, how many points belong to Cluster 1?

A) 1
B) 2
C) 3
D) 4

**Answer:** B
**Explanation:** Points (1,1) and (2,2) are closer to centroid (1,1), while (8,8) and (9,9) are closer to centroid (9,9).

**Question 24**
Which clustering method is most suitable for detecting arbitrarily shaped clusters and noise?

A) K-Means
B) Hierarchical clustering
C) DBSCAN
D) Linear Regression

**Answer:** C
**Explanation:** DBSCAN is density-based and works well for irregularly shaped clusters and outlier detection.

**Question 25**
You have 4 data points: $x = \{1,2,9,10\}$ and a GMM with $K = 2$ Gaussians. Initial parameters: Cluster 1: $\mu_1 = 1, \sigma_1 = 1, \pi_1 = 0.5$; Cluster 2: $\mu_2 = 9, \sigma_2 = 1, \pi_2 = 0.5$. What are the updated means after 1 EM iteration? (approx)

**Answer:** mu1 = 1.5, mu2 = 9.5
**Explanation:** E-step computes responsibilities. For $x=1,2$, $r(C1) \approx 1$. For $x=9,10$, $r(C2) \approx 1$. M-step updates $\mu_1 = (1+2)/2 = 1.5$ and $\mu_2 = (9+10)/2 = 9.5$.

**Question 26**
Given 1D data points: 1, 2, 3, 8, 9, 10, 25. Apply DBSCAN with eps = 2 and MinPts = 2. Which points are considered noise?

**Answer:** 25
**Explanation:** Points {1,2,3} and {8,9,10} form two separate clusters as they are within distance 2 of each other. Point 25 is isolated (distance to nearest neighbor 10 is 15 > 2) and thus labeled as noise.

**Question 27**
Given a 4x4 adjacency matrix W representing a graph. The graph Laplacian L has eigenvalues 0, 0.586, 2, 3.414. Based on the eigengap heuristic, how many clusters are suggested?

**Answer:** 2
**Explanation:** Gaps: 0 to 0.586 (0.586), 0.586 to 2 (1.414), 2 to 3.414 (1.414). The largest gap occurs between indices 2 and 3 (and also 1 and 2 if counting differently, but typically we look for the gap after k eigenvalues). The first significant gap after eigenvalue 0 is at k=2.
