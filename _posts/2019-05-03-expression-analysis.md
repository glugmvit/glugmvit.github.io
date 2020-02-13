---
layout: post
title:  "Deep Learning: Expression Analysis"
author: ayushi
categories: [ Deep Learning, Python, Computer Vision ]
image: assets/images/expression/exp.png
featured: false
mathjax: true
excerpt: A neural network model to classify people as smiling or neutral using scikit-learn, OpenCV and TensorFlow.
---
>A smiling face implies agreeableness and from an angry face, we infer danger! Thus, our minds immediately evaluate the underlying emotion of a person by merely looking at their face. Fascinating! Lets make machines do that.

- To determine the different facial expressions, the variations in each facial features are used. For detection and classification between smile and neutral faces we will use softmax regresion,open source computer vision (OpenCV) and sckit library for training of different set of images.

![](/assets/images/expression/step.png)

## Algorithm Description
(a) [**OpenCV**](https://en.wikipedia.org/wiki/OpenCV)  
Uses opencv to read the images in grayscale and resizing them.

(b) **Vectorization**  
While we implement Softmax regression, it need 1 dimension array as an Input, It's important to convert our 2-D array to 1-D array.

(c) [**Softmax regression**](https://medium.com/@awjuliani/simple-softmax-in-python-tutorial-d6b4c4ed5c16)  
Softmax regression (or multinomial logistic regression) is a generalization of logistic regression to the case where we want to handle multiple classes. In logistic regression we assumed that the labels were binary: $y(i) ∈ {0,1}$. We used such a classifier to distinguish between two kinds of hand-written digits. Softmax regression allows us to handle $y(i) ∈ \{1,…,K\}$ where K is the number of classes.

(d) [**Tensorflow**](https://en.wikipedia.org/wiki/TensorFlow)  
Tensorflow is a computational framework for building machine learning models. TensorFlow provides a variety of different toolkits that allow you to construct models at your preferred level of abstraction. You can use lower-level APIs to build models by defining a series of mathematical operations. Alternatively, you can use higher-level APIs (like *tf.estimator*) to specify predefined architectures, such as linear regressors or neural networks.

## Time to analyse
 We shall construct a model capable of detecting smiling faces from images.
 ![](/assets/images/expression/eg.png)

## 1. Install the dependencies.
- Install Python
- Install pip
- Install sklearn for python: `pip3 install scikit-learn`
- Install numpy: `pip3 install numpy`
- Install opencv: `pip3 install opencv-python`
- Install tensorflow: `pip3 install --upgrade tensorflow`
- Install matplotlib: `pip3 install matplotlib`
- Install pandas: `pip3 install pandas`

## 2. Loading the data
- The function load_images_from_folder converts images into grayscale and resize them using opencv.
```py
img = cv2.imread(path, 0)
```

- Append the images into a new table.

- Also it assign labels to each image depending whether it is under smile or neutral category.
![](/assets/images/expression/data1.png)

- To build a classification model,split the whole dataset into trainig and test sets.
>The reason for splitting the dataset — evaluating the performance of classifier on the same set as it has been trained is unfair or poor practice, because we are not interested in how well the classifier memorizes the training set. Rather, we are interested in how well the classifier generalizes its recognition capability to unseen data.

- **Flattening the data**-Also we have to convert our image from 2D to 1D vector since input can be taken as only 1 dimension array.
![](/assets/images/expression/flattened_image1.jpg)

## 3. Model Training
- Building softmax regression model using tensorflow.
- `tf.placeholder` is used to feed actual training examples.
- `tf.Variable` for trainable variables such as **weights (W)** and **biases (B)** for your model. Your `tf.variables` will   be trained (modified) as the result of this training.
- `tf.nn.softmax(tf.matmul(x, W) + b, name="first_operation")` funtion produces just the result of applying the softmax function to an input tensor. The traditional matrix multiplication is only used when calculating the model **hypothesis** as seen in the code to multiply x by W.
- The code `y_ * tf.log(y)` performs an **element-wise multiplication** of the original targets => y_ with the log of the predicted targets => y.It is this measure (i.e., the cross-entropy loss) that is minimized by the optimization function.

## How well our model is performing?
![](/assets/images/expression/training.png)
- Construct a new gradient descent optimizer.
- **tf.Session()** initiates a TensorFlow Graph object in which tensors are processed through operations. Also, a session contains variables, global variables, placeholders and ops. These have to be initiated once the session is created. Hence we call `sess.run( tf.global_variables_initializer() )`.
- Calculate loss and accuracy.

## 4. Prediction
- Load the image in test folder.
- Normalize the image.
- Use softmax regression to predict using weights and bias.
- Print the result according to the label we got as the output.
![](/assets/images/expression/result.png)
- To improve its log loss, we need to train our model by adding more images.
- You can try SVM and KNN models also.

For code, see the GitHub repository **[here](https://github.com/ayushianan/expression_analysis)**.
