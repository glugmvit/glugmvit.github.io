---
layout: post
title:  "ML classification model for emails"
author: ayushi
categories: [ machine learning, python ]
image: assets/images/classifier/machine-learning1.png
featured: true
excerpt: A Machine Learning model to classify emails according to author names using Naive Bayes Classifier
---
## The fundamental rule that Naive Bayes uses: Bayes Theorem
Naive Bayes is a supervised classification technique based on Bayes' Theorem with an assumption of independence among predictors. That is, a Naive Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature.
It is a popular technique for text categorization, judging documents as belonging to one category or the other (such as spam or legitimate, sports or politics, etc.) with word frequencies as features.

It tells us how often A happens given that B happens, written P(A/B), when we know how often B happens given that A happens, written P(B/A) , and how likely A and B are on their own.

![](/assets/images/classifier/formula.png)

- Here $A$ and $B$ are events and $P(B) \neq 0$
- $P(A/B)$ is a conditional probability: the likelihood of event $A$ occurring given that $B$ is true.
- $P(B/A)$ is also a conditional probability: the likelihood of event $B$ occurring given that $A$ is true.
- $P(A)$ and $P(B)$ are the probabilities of observing $A$ and $B$ independently of each other. This is known as the marginal probability.

## Prerequisites
1. Install Python
2. Install pip
3. Install sklearn for python: `pip install scikit-learn`
4. Install numpy: `pip install numpy`
5. Install SciPy: `pip install scipy`

**Sklearn** in Python provides a simple interface to implement popular machine learning algorithms like Naive Bayes.

## Training a Naive Bayes model to identify the author of an email or document
In this demo, we use a set of emails or documents that were written by two different individuals. The purpose is to train a Naive Bayes model to be able to predict who wrote a document/email, given the words used in it.
The GitHub repo with files is **[here](https://github.com/ayushianan)**.

## 1. Load the data
The first section of the script loads the data.As usual, we split the data into train and test sets using the Scikit-learn method `sklearn.model_selection.train_test_split`.

![](/assets/images/classifier/data.png)

## 2.Text vectorization
When dealing with texts in machine learning, it is quite common to transform the text into data that can be easily analyzed and quantify.Fortunately for us, Scikit-learn has a method that does just this (sklearn.feature_extraction.text.TfidfVectorizer).

![](/assets/images/classifier/data1.png)

## 3.Training and predicting with sklearn Naive Bayes
We use a Gaussian Naive Bayes (NB) implementation
NB with Scikit-learn

In general, training machine learning models with Scikit-learn is straightforward and it normally follows the same pattern:
- Initialize an instance of the class model
- Fit the train data
- Predict the test data (we omit that here)
- Compute scores for both train and test sets

![](/assets/images/classifier/model.png)


## You can also try
- Other models like Multinomial etc and the accuracy.
- Change frequent words from 3000 to larger and smaller values and find out the accuracy.
