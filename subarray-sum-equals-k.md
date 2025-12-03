# Problem
Given an array A of N integers, and an integer K, return the total number of subarrays whose sum equals K.
```js
A = [1,1,1], k = 2
Answer: 2

A = [1,2,3], k = 3
Answer: 2
```
* N is an integer between 1 - 20,000
* Each element is an integer between -1,000 - 1,000
* K is an integer between -10,000,000 - 10,000,000
* A single subarray is a contiguous (_adjacent_) non-empty sequence of elements in the array 

# Plan
* **UI** - command line
* **Input** - array A of N integers, and integer K
* **Output** - Number of total subarrays
* **Process** - _get array A and integer K > create a prefix sum > track count of sums that equal K > return count_

# Algorithm
**NOTES**: A prefix sum is an array of size N, and each element represents the accumulated sum from A[0] - A[i]. Use this approach to find the sum of any subarray A[i...j] (_i.e. sum = prefixSum[j] - prefixSum[i - 1]_). The following algorithm uses a hashmap to track previous prefix sums that represent a checkpoint from then to the current sum, which adds up to K ([video explanation](https://www.youtube.com/watch?v=fFVZt-6sgyo)).
```js
FUNCTION: getSubarraySumCount(A, K)
SET prefix sum map to 0:1
SET count to 0
SET current sum to 0
FOR nums in A
    SET current sum to itself plus num
    IF current sum minus K IS IN prefix sum THEN
        SET count to itself plus current sum minus K map value
    ENDIF
    SET current num key to (itself OR 0) plus 1
ENDFOR
RETURN count
```
