# Problem 
Given an array A of N integers, and a target integer X, return indices of the two numbers that add up to X.
```js
A = [2,7,11,15], X = 9
Answer: [0,1]

A = [3,2,4], X = 6
Answer: [1,2]

A = [3,3], target = 6
Answer: [0,1]
```
* N is an integer between 2 - 10,000
* Each element is an integer between -1,000,000,000 - 1,000,000,000
* X is an integer between -1,000,000,000 - 1,000,000,000
* Only one solution per input
* A single element can only be used once

# Plan
* **UI** - command line
* **Input** - Array A of N integers, and target X
* **Output** - Indices, i and j
* **Process** - _get A and X > determine sum of 2 elements that = target > return 2 indices 

# Algorithm
```js
FUNCTION: getTwoSum(A, X)
DECLARE complements map
FOR elem in A
    SET complement to X - elem
    IF complement is IN complements THEN
        RETURN complement index and elem index
    ENDIF
    SET elem key and index value to complements
ENDFOR
```