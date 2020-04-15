---
layout: post
title:  "Mathematics for Machine Learning"
author: vipul
mathjax: true
featured: true
image: assets/images/maths_ml/logo.jpg
excerpt: Mathematics is the səˈpôrta auxilium ie the support system of machine learning. In this, we will cover all aspects of mathematics essential for data science.
---
# Mathematics for Machine Learning 
Data Science is unimaginable without the essence of mathematics and with the onset of a high number of pre-built libraries, there is a huge misconception among the beginner or aspiring data scientists regarding the need of mathematics in the field of data science. Without a basic understanding of mathematics, data scientists will fail to realise the useful patterns in data and the reasoning behind mining information from them. It is essential to revisit the fundamentals in order to excel in learning data science. Here is a brief intuitive overview of what we will learn today:
1. Linear Algebra
2. Multivariate Calculus
3. Probability
4. Statistics

Let us begin with the basic aspects of linear algebra.
### Linear Algebra

> "Matrices Act. They just don't sit there."

Vector Space: A vector space V is a set (the elements of which are called vectors) on which two operations can happen: Vectors can be added together or vectors can be multiplied by a real number (called scalar). The number of vectors used to define a vector space is called its Dimension.

Let us begin with the basic definition of Scalars and Vectors.
- Scalar:Real number values in the field used to define a vector space.
- Vector: It is fundamentally defined as a list of numbers in Computer Science, or as a scalar quantity with direction in Physics and we define it as a grey area or combination of both these definitions in Mathematics.

Vector Operations: 
1. Vector Addition: The process of adding two vectors as per the following laws:
![alt-text](https://www.onlinemathlearning.com/image-files/xadd-vectors.png.pagespeed.ic.oXon4PhQcs.png)
2. Vector Multiplication: The process of multiplying vectors with another scalar or another vector.
![alt-text](https://www.onlinemathlearning.com/image-files/multiplication-vector1.jpg)
We also come across the multiplication of two vectors in form of dot product and cross product.
![alt-text](https://infyinfo.files.wordpress.com/2018/01/vector1.png?w=556&h=300)
Projection: It is the shadow of a vector on another vector in the vector space. To understand what is a projection we need to understand what is meant by a linear map. 
A linear map is a function T : V → W, where V and W are vector spaces, that satisfies
(i) T(x + y) = Tx + Ty for all x, y ∈ V
(ii) T(αx) = αTx for all x ∈ V, α ∈ R
Any linear map P that satisfies P^2 = P is called a projection
![alt-text](https://mathonline.wdfiles.com/local--files/vector-projections/Screen%20Shot%202014-12-14%20at%2012.42.18%20PM.png)

Now we come down to matrices!
Matrix, in simple words, is a rectangular array of symbols, expressions and numbers. They are used to convert vectors to arrays (or rather represent vectors in form of arrays (An array as we all know is a collection of homogeneous elements in an ordered fashion)). They make operations easier to use with computers.
Some of the matrix operations are:
1. Matrix Addition: The matrices to be added must be of the same order(order represents number of rows x number of columns).
![alt-text](https://codeforwin.org/ezoimgfmt/secureservercdn.net/160.153.138.219/b79.d22.myftpupload.com/wp-content/uploads/2015/07/matrix-addition.png?ezimgfmt=rs:392x204/rscb1)
2. Matrix Subtraction: Subtract the corresponding elements of the matrices which have the same order.
![alt-text](https://codeforwin.org/ezoimgfmt/secureservercdn.net/160.153.138.219/b79.d22.myftpupload.com/wp-content/uploads/2015/07/matrix-subtraction.png?ezimgfmt=rs:392x195/rscb1)
3. Matrix Multiplication: It is done as follows:
![alt-text](https://miro.medium.com/max/3688/1*D_1tbv_wNFJ-rrremAGX4Q.png)
4. Transpose: It refers to just flipping the dimension of the matrices ie interchange the number of rows with the number of columns.
![alt-text](https://i1.faceprep.in/Companies-1/transpose-of-a-matrix-in-python.png)
We also make use of determinant of a matrix.
Determinant:
- Gives a scalar value of any matrix
- It gives the product of eigen values of the matrix
- Provides the senstivity of the dataset
It has some interesting properties:
![alt-text](https://s3-ap-southeast-1.amazonaws.com/mpt15awshkbkt1/resources_conversion_files/presentation_ppt_1515407969_328731-34.jpg)

There are different types of matrices as well:
![alt-text](https://ars.els-cdn.com/content/image/3-s2.0-B9780080448947013415-gr1.gif)
Identity Matrix is a special matrix with the following properties:
![alt-text](https://study.com/cimages/multimages/16/matrix_summary_3.png)
Inverse of a matrix is defined as the matrix A which when multiplied with another matrix B generates the identity matrix I. A simple method used to find the inverse is the Gaussian Elimination method in two forms row echelon or column order.
![alt-text](https://i.pinimg.com/originals/9d/20/7a/9d207aaae38b8f93b02effb5d54f1149.jpg)
Try out the following example by yourself:
![alt-text](https://i.stack.imgur.com/P91bC.jpg)
There are many other methods to compute inverse of a matrix. Check out this: 
<a href="https://www.mathsisfun.com/algebra/matrix-inverse.html">Link</a><br/>
Eigen Vectors: A vector which does not change its direction even if the transformation is applied to them is called an eigen vector and the value generated by it is called the eigen value.
They are the most sensitive part of the data analysis process and is an important feature because it gives the same amount of information in a dataset even if multiplied a constant to yield a new projection.
![alt-text](https://slideplayer.com/slide/3422346/12/images/2/6.1+Definitions.jpg)
![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Eigenvalue_equation.svg/250px-Eigenvalue_equation.svg.png)

Another important topic for machine learning is Singular Value Decomposition (SVD) which is:
![alt-text](data:image/png;base64,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)
In mathematical terms,
![alt-text](https://miro.medium.com/max/3546/1*qZoUV7mgLyqGOC-SG6IW5Q@2x.jpeg)
There are many other concepts in linear algebra which are not covered here as we want to keep it short and crisp but feel free to explore more. You can also watch the videos by Gilbert Strang MIT Opencourseware for a detailed in-depth understanding.
Applications of Linear Algebra:
- It is used in the concept of Principal Component Analysis
- Used in working with and applying transformations to pixel data (or images)
- It is used for encoding on dataset
- It is also used in Singular Value Decomposition which forms the basis for PCA
- Latent Semantic Analysis and Optimization Problems
### Multivariate Calculus
Calculus helps in optimization problems and we make use of differentiation more than integration in case of relevance to machine learning.

Differentiation essentially is used to break down the function for in-depth analysis and has varied applications from computing gradients to forming the basis for backpropagation (optimization algorithm used in neural networks).

Calculus helps us to find the sensitivity of the information obtained and how it changes when a change is subjected to one of its parameters.
There are three types of differentiation as well with relevance to machine learning libraries:
1. Symbolic Differentiation: It manipulates mathematical expressions. We know the derivative and use various rules (product rule, chain rule) to calculate the resulting derivative. Then they simplify the end expression to obtain the resulting expression. For example,
![alt-text](https://i.stack.imgur.com/XZgZL.png)
2. Numerical Differentiation: It is a method of finite difference approximation in which we make use of the values of functions and its knowledge to compute derivatives.
![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Derivative.svg/1200px-Derivative.svg.png)
A simple two-point estimation is to compute the slope of a nearby secant line through the points (x, f(x)) and (x + h, f(x + h)). Choosing a small number h, h represents a small change in x, and it can be either positive or negative. The slope of this line is given by:
![alt-text](https://i.stack.imgur.com/ZUwpC.png)
3. Automatic Differentiation: It is a set of techniques to numerically evaluate the derivative of a function specified by a computer program. AD exploits the fact that every computer program, no matter how complicated, executes a sequence of elementary arithmetic operations (addition, subtraction, multiplication, division, etc.) and elementary functions (exp, log, sin, cos, etc.). By applying the chain rule repeatedly to these operations, derivatives of arbitrary order can be computed automatically, accurately to working precision, and using at most a small constant factor more arithmetic operations than the original program.
![alt-text](https://upload.wikimedia.org/wikipedia/commons/3/3c/AutomaticDifferentiationNutshell.png)

Symbolic differentiation can lead to inefficient code and faces the difficulty of converting a computer program into a single expression, while numerical differentiation can introduce round-off errors in the discretization process and cancellation. 

Both classical methods have problems with calculating higher derivatives, where complexity and errors increase. Finally, both classical methods are slow at computing partial derivatives of a function with respect to many inputs, as is needed for gradient-based optimization algorithms. Automatic differentiation solves all of these problems, at the expense of introducing more software dependencies.

Optimization is about finding extrema, which depending on the application could be minima or
maxima. When defining extrema, it is necessary to consider the set of inputs over which we’re
optimizing. This set X ⊆ R^d is called the feasible set. 

If X is the entire domain of the function being optimized (as it often will be for our purposes), we say that the problem is unconstrained. Otherwise the problem is constrained and may be much harder to solve, depending on the nature of the feasible set.
![alt-text](https://www.mathsisfun.com/algebra/images/function-max-global.svg)
Some basic rules of differentiation are:
![alt-text](https://cdn.kastatic.org/googleusercontent/WHHUFnfmlmlx8qy6UahnLbZkTU2Q3kJAI_P5my24E09kEO-uZ-678-rXfxIdIUqXgAynrYnC00aECarGoWYJSJHk)
We also have a need of the concept of Partial Differentiation. It has the following significance and features:
- It deals with more than a single variable which is needed in machine learning problems
- It changes one variable leaving the other constant which is a need in many applications
- Used as an optimization problem solution

It deals with the concept of chain rule:
![alt-text](https://i.ytimg.com/vi/XipB_uEexF0/maxresdefault.jpg)
Now what exactly is this used in machine learning?
The answer is simple: Gradients!!
Gradients are nothing but vectors! Its components consist of the partial derivatives of a function and it points in the direction of the greatest rate of increase of the function.

So for example, if you have the function f(x1,...xn), its gradient would consist of n partial derivatives and would represent the vector field.
We use gradients in optimization algorithms such as the very famous Gradient Descent used as part of backpropagation algorithm in neural networks.
We also have the concept of Jacobians and Hessian Matrices.
Jacobian Matrix is nothing but the matrix of first order partial derivatives of the gradients.
![alt-text](https://jamesmccaffrey.files.wordpress.com/2017/08/thejacobianequations2.jpg?w=300&h=178)
Hessian is the matrix of second order partial derivatives.
![alt-text](https://mathworld.wolfram.com/images/equations/Hessian/NumberedEquation1.gif)
The Hessian is used in some optimization algorithms such as Newton’s method. It is expensive to
calculate but can drastically reduce the number of iterations needed to converge to a local minimum by providing information about the curvature of f.

Also, there is a concept of Convexity.
Convexity is a term that pertains to both sets and functions. For functions, there are different
degrees of convexity, and how convex a function is tells us a lot about its minima: do they exist, are they unique, how quickly can we find them using optimization algorithms, etc.
![alt-text](https://plus.maths.org/content/sites/plus.maths.org/files/news/2011/convexity/convex.jpg)
We observe that the nature of minima depends on whether the feasible set is convex or not by nature. If we visualize a convex function:
![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Grafico_3d_x2%2Bxy%2By2.png/300px-Grafico_3d_x2%2Bxy%2By2.png)
Hence, we define a function as convex if:

f(x,y) = f(tx + (1 − t)y) ≤ tf(x) + (1 − t)f(y)

If the inequality holds strictly (i.e. < rather than ≤) for all t ∈ (0, 1) and x 6= y, then we say that f is strictly convex.
There are two important properties here to think on:
- If f is convex, then any local minimum of f in X is also a global minimum.
-  If f is strictly convex, then there exists at most one local minimum of f in X . Consequently, if it exists it is the unique global minimum of f in X.

Next we will jump on to the concept of probability.

### Probability

![alt-text](https://www.mathsisfun.com/data/images/probability-line.svg)
The simplest way to define probability is as the ratio of the number of favourable outcomes to the total number of outcomes.
A few terms important with relevance to probability are:
- Random Experiment: An experiment or a process whose outcome cannot be predicted with certainty.
- Sample Space: The entire possible set of outcomes of a random experiment is the sample space S of that experiment.
- Events: One or more outcomes of an experiment represented as the subset of S is called an event E. These are of the following types:
1. Joint Events: They have some outcomes in common with each other.
2. Disjoint Events: They do not have any common outcomes at all with each other.
![alt-text](https://a8h2w5y7.rocketcdn.me/wp-content/uploads/2016/02/disjoint-events.png)
- Probability Density Function: The equation describing a continous probability distribution is called a probability density function. It has the following features:
1. The graph of a probability density function will be continous over a range of values.
2. The area bounded by the curve is 1 bound by the x-axis.
3. The probability that a random variable assumes a value between a and b is equal to the area bounded by the curve between a and b.
![alt-text](https://undergroundmathematics.org/calculus-of-powers/r9357/images/enclosed-area.png)

Normal Distribution: It associates the probability of a random variable x with a cumulative probability y.
![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Normal_Distribution_PDF.svg/340px-Normal_Distribution_PDF.svg.png)
The formula for the probability in normal distribution is given by:
![alt-text](https://miro.medium.com/max/3180/1*Hl187KkimHPDmMtChYSQBA.png)
Central Limit Theorem: It states that the sampling distribution of the mean of any independent, random variable will be normal or early normal distribution with a large sample size.
![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/IllustrationCentralTheorem.png/400px-IllustrationCentralTheorem.png)
Now, we come to the concept of marginal probability. It refers to the occurence of a single event. 
![alt-text](https://i0.wp.com/www.statistics-made-easy.com/wp-content/uploads/2016/08/marginal-probability.png?resize=467%2C242)
Conditional Probability refers to the idea that an event will occur based on whether another event has occured or not. These have two different types of events associated with them:
![alt-text](https://www.onlinemathlearning.com/image-files/xindependent-dependent-events.png.pagespeed.ic.vHRlR7Hea6.png)
Then, we have the Bayes Theorem which gives the relationship between the conditional probability and its inverse.
![alt-text](https://betterexplained.com/topics/Bayes_Theorem.png)
This is used in the famous Naive Bayes Algorithm Approach.
![alt-text](https://www.researchgate.net/publication/285368726/figure/fig1/AS:393446461329408@1470816354068/mplementation-of-Naive-Bayes-algorithm-on-the-patient-data.png)
There are many other facets of probability interlinked with statistics which we explore in the next section.
### Statistics
The area of mathematics concerned with data collection, analysis interpretation, and presentation.
Population: A collection or set of individuals or objects or events whose properties have to be analysed.
Sample: A subset of population is called as sample. A well chosen sample will contain most of the information about the population.
Some important sampling techniques are:
![alt-text](https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2019/05/Screenshot-20.png)
I specifically liked the videos and explanations of these concepts on the Khan Academy and am borrowing their examples and definitions.
Let us go over them one by one.

Convenience sample: The researcher chooses a sample that is readily available in some non-random way.
Example—A researcher polls people as they walk by on the street.
Why it's probably biased: The location and time of day and other factors may produce a biased sample of people.

Simple random sample: Every member and set of members has an equal chance of being included in the sample. 
Example—A teachers puts students' names in a hat and chooses without looking to get a sample of students.
Why it's good: Random samples are usually fairly representative since they don't favor certain members.

Stratified random sample: The population is first split into groups. The overall sample consists of some members from every group. The members from each group are chosen randomly.
Example—A student council surveys 100100100 students by getting random samples of 252525 freshmen, 252525 sophomores, 252525 juniors, and 252525 seniors.
Why it's good: A stratified sample guarantees that members from each group will be represented in the sample, so this sampling method is good when we want some members from every group.

Cluster random sample: The population is first split into groups. The overall sample consists of every member from some of the groups. The groups are selected at random.
Example—An airline company wants to survey its customers one day, so they randomly select 555 flights that day and survey every passenger on those flights.
Why it's good: A cluster sample gets every member from some of the groups, so it's good when each group reflects the population as a whole.

Systematic random sample: Members of the population are put in some order. A starting point is selected at random, and every nth student to analyse.
Example—A principal takes an alphabetized list of student names and picks a random starting point. He picks every 20th student to analyse.

Even in statistics, we have two distinct paradigms: Inferential and Descriptive. What we have done till now is inferential by nature.
![alt-text](https://www.whatissixsigma.net/wp-content/uploads/2014/03/Basic-Statistics-Descriptive-Statistics.png)
Descriptive Statistics has two major:

1. Measures of Central Tendency
2. Measures of Variability Spread

A measure of central tendency is a summary statistic that represents the center point or typical value of a dataset. These measures indicate where most values in a distribution fall and are also referred to as the central location of a distribution.
![alt-text](https://media.proprofs.com/images/discuss/user_images/153336/9973678110.jpg)

The calculation of the mean incorporates all values in the data. If you change any value, the mean changes. However, the mean doesn’t always locate the center of the data accurately. It works well only in a continous distribution and fails to converg in case of a skewed distribution. This problem occurs because outliers have a substantial impact on the mean. Extreme values in an extended tail pull the mean away from the center. 

As the distribution becomes more skewed, the mean is drawn further away from the center. Consequently, it’s best to use the mean as a measure of the central tendency when you have a symmetric distribution.

The median is the middle value. It is the value that splits the dataset in half. To find the median, order your data from smallest to largest, and then find the data point that has an equal amount of values above it and below it. The method for locating the median varies slightly depending on whether your dataset has an even or odd number of values. Outliers and skewed data have a smaller effect on the median.

The mode is the value that occurs the most frequently in your data set. On a bar chart, the mode is the highest bar. If the data have multiple values that are tied for occurring the most frequently, you have a multimodal distribution. If no value repeats, the data do not have a mode.
Typically, you use the mode with categorical, ordinal, and discrete data.

![alt-text](https://qph.fs.quoracdn.net/main-qimg-5fc78a3359ad31c9c457dd4825813185.webp)

Now, we answer the biggest question of when to use which of the measures of central tendency based on the nature of the data:

- Symmetric Distribution of Continous Data: Mean, Median, Mode all are equal but analysts prefer the mean more because it consists of all the calculations.
- Skewed Distribution of Data: Median is the best measures in this case.
- Ordinal Data: Mode or Mean are preffered in this case.

Next up is the concept of Hypothesis Testing:
A hypothesis test evaluates two mutually exclusive statements about a population to determine which statement is best supported by the sample data. These two statements are called the null hypothesis and the alternative hypothesis.

- Null Hypothesis (H0): A statment assumed to be true at the outset of a hypothesis test.
- Alternative Hypothesis (HA): A statement for which sufficient evidence is needed to be proved for being true.

Hypothesis testing is a form of inferential statistics that allows us to draw conclusions about an entire population based on a representative sample. 
The effect is the difference between the population value and the null hypothesis value. The effect is also known as population effect or the difference. For example, the mean difference between the health outcome for a treatment group and a control group is the effect.

Typically, you do not know the size of the actual effect. However, you can use a hypothesis test to help you determine whether an effect exists and to estimate its size.

Now, over to measure of dispersion:
1. Range: It is the difference of the largest and smallest value.
![alt-text](https://www.statisticshowto.com/wp-content/uploads/2018/08/range-statistics.png)
2. Inter-Quartile Range: It divides the data into four quarters Q1, Q2 and Q3:
![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Boxplot_vs_PDF.svg/500px-Boxplot_vs_PDF.svg.png)
3. Variance and Standard Deviation: It is a measure of the spread of the data and measures how much a random variable differs from an expected value.
![alt-text](https://miro.medium.com/max/528/0*9IGq3Z6m_BtadRjI.gif)

Next comes up the concept of Entropy and Information Gain! These are used in Decision Trees and constructing classifiers.
- Entropy is the measure of uncertainty in the data. 
![alt-text](https://miro.medium.com/max/528/0*9IGq3Z6m_BtadRjI.gif)
- Information Gain is the reduction in entropy or surprise by transforming a dataset and is often used in training decision trees. Information gain is calculated by comparing the entropy of the dataset before and after a transformation.
![alt-text](https://dv-website.s3.amazonaws.com/uploads/2017/11/101317-pic5.png)

There are many other parametrics also involved in statistics and it is imperative for a data scientist to understand the nuances of each concept in statistics in order to be successfull in mining useful patterns in data. Here, we come to an end of the introduction to a brief overview about the mathematics needed for machine learning.


