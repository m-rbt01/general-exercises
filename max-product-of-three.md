# Problem
Given an array A of N integers, return the maximum product of any triplet elements.
```js
A = [-3, 1, 2, -2, 5, 6]
Answer = A[2] * A[4] * A[5] = 2 * 5 * 6 = 60
```
* N is a number between 3 - 100,000
* Each element is a number between -1,000 - 1,000
* Highest product is either 2 negatives * largest item OR 3 largest items

# Plan
* UI - command line
* Input - Array A of N integers
* Output - Maximum product of triplets
* Process - _get array > calculate product of triplets > find the largest product > return largest product_

# Algorithm
```js
SORT array
SET low end product to the product of first 3 elements
SET high end product to the product of last 3 elements
RETURN the MAX of the two options
```