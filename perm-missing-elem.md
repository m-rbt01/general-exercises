# Problem
Given an array A of N distinct integers, return the missing integer from the array's sequence of values.
```js
A = [2, 3, 1, 5] //range: 1...5
Answer = 4
```
* N is a number between 0 - 100,000
* All element values are distinct
* Each element is a number between 1 - (N + 1)

# Plan
* UI - command line
* Input - Array of N integers
* Output - Missing element value
* Process - _get array > calculate expected sum > calculate actual sum > subtract difference > return difference_

# Algorithm
```js
SET expected sum to N+1 * N+2 / 2
SET actual sum to A REDUCED to the accumulated sum
RETURN the difference
```