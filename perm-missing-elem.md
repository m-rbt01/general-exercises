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
**NOTES**: The **summation formula** (_i.e. **n * (n + 1) / 2**_) sums a specific sequence of numbers up until a given number (_i.e. last element in permutation array_) without manually adding each individual number. The following solution uses this formula to find the expected sum of all elements, and subtracts the actual sum from it to get the missing element.
```js
FUNCTION: getPermMissingElem(A)
SET N to A length plus 1 (include last element value after array indexing)
SET expected sum to N * N+1 / 2
SET actual sum to A REDUCED to the accumulated sum
RETURN the difference
```