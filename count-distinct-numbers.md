# Problem
Given an array A of N integers, return the number of distinct values in A.
* N is a number between 0 - 100,000
* Each element value is between -1,000,000 - 1,000,000

# Plan
* UI - command line
* Input - array A of N integers
* Output - number of distinct values
* Process - Get array > determine unique values > return the count

# Algorithm
```js
FUNCTION: getDistinctCount(A)
DECLARE empty set
FOREACH through the array
    ADD current item to set
ENDFOREACH
RETURN set size
```