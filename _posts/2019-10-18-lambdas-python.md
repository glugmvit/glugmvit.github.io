---
layout: post
title: Using Lambdas the correct way !!
author: aswin
categories: [ python , tutorial ]
featured: true
image: assets/images/python/python.png
excerpt: "An introduction to using the lambdas function in Python"
---

A function without a name is called 'anonymous function' or lambda functions in Python Programming language.

# Using Lambda functions the correct way !!

Consider a normal function to return the square of two numbers:

```python
def sqaure(x):
    return x*x
```

The same function can be written as a lambda function as:
```python
lambda x: x*x
```

- Here , the keyword 'lambda' is used to define the anonymous function.<br>
- After that , we have written an argument of the function, ie , 'x'.
- Then , colon(:) represents the beginning of the function that contains an expression x*x.

#### Basic Syntax of lambda function:
    lambda argument_list : expression

lambda functions returns a function , so they can be assigned to a variable as:

```python
f = lambda x: x*x
```

and the function can be used as:
```python
result = f(5)
```

the value 5 is passed as an argument to the lambda function and the square of the value is returned and stored in <strong>result</strong>.

<strong> Lambda function to calculate the sum of two numbers :</strong>
```python
f = lambda x,y : x+y
result = f(10,2)
print(result)
```

<em>The Output of this code will be 12.</em>

<strong> Lambda function to find the biggest of the two numbers:</strong>
```python
big = lambda x,y : x if x>y else y
a = int(input('Enter the first number:'))
b = int(input('Enter the second number:'))

result = big(a,b)
print(result)
```

## Lambda Functions are generally used with the following functions:
- filter()
- reduce()
- map()

### <em> <u>Using Lambdas with filter() Function </u></em>

The filter() is useful to filter out the elements of a sequence depending on the result of a function.<br>
<b>The basic syntax of the function is:</b>
```
filter(function,sequence)
```

Here , the 'function' represents a function which returns either True or False; and sequence represents a list,tuple or string.<br>
The function is applied to every element of the sequence , and if the function returns True for that element , then that particular element is extracted , otherwise its ignored.

Lets consider the following function:
```python
def is_Even(x):
    if x%2==0:
        return True
    else:
        return False
```

and consider the following list item:
```python
lst = [10,20,13,12,5,7]
```

Now , the filter() can be used as:

```python
lst1 = list(filter(is_even,lst))
```

This same function can also be applied on Lambda function as:
```python
lst1 = list(filter(lambda x: (x%2==0),lst))
```

The filter() returns even numbers from the list 'lst'.

### <em> <u>Using Lambdas with map() Function </u></em>

The map() is similar to filter() , but it acts on each element of the sequence and perhaps changes the element too.

<b>The basic syntax of the function is:</b>
```
map(function,sequence)
```

The function performs a specified operation on all the elements of the sequence and the modified elements are returned which can be stored in another sequence.

Lets consider the following function:
```python
def square(x):
    return x*x
```

and consider the following list item:
```python
lst = [1,2,3,4]
```

Now , the filter() can be used as:

```python
lst1 = list(map(sqaure,lst))
```

This same function can also be applied on Lambda function as:
```python
lst1 = list(map(lambda x: x*x,lst))
```

Now:
```
lst1 : [1,4,9,16]
```

### <em> <u>Using Lambdas with reduce() Function </u></em>

The reduce() reduces a sequence of elements to a single value by processing the elements according to a function supplied.

<strong>The basic syntax of the function is:</strong>
```
reduce(function,sequence)
```

consider the following code:

```python
lst = [1,2,3,4,5]
res = list(reduce(lambda x,y:x*y , lst))
```

The final answer stored in res will be 120.

So how does the above code work:

> The lambda function takes in 2 arguments and returns their sum. Therefore , starting from the 0th element of the list 'lst' , the first two elements are multiplied and their product is multiplied with the 3rd element and their product is multiplied with the fourth element and so on.

<strong> Program to calculate the sum of the elements of a list using lambda function:</strong>

```python
from functools import *

lst = [1,2,3,4,5]

result = reduce(lambda x,y:x+y , lst)
print(result)
```

The output will be <b>15</b>

<b>Note:</b> <em>The function reduce() is present in the module functools. So we need to import it before using the function</em>