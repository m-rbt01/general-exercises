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
**NOTES**: A **hash map** is a data structure that stores data as key-value pairs as a hash table (i.e. an array), and uses a hash function to convert keys into an index where the value is stored. A hash functions allow hash maps to insert, delete, and retrieve elements at O(1) time complexity. To return the indices of two elements whose sum equals X, use a map the numbers encountered with their index, and return the correct indices when the first two complements have been mapped
```js
FUNCTION: getTwoSumIndices(A, X)
DECLARE complements map
FOR elem in A
    SET complement to X - elem
    IF complement is IN complements THEN
        RETURN complement index and elem index
    ENDIF
    SET elem key and index value to complements
ENDFOR
```