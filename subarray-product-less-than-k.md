# Problem
Given an array A of N integers, and integer K, return the number of contiguous subarrays whose product of all its elements is **less than** K.
```js
A = [10,5,2,6], K = 100
Answer: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

A = [1,2,3], K = 0
Answer: 0
```
* N is an integer between 1 - 30,000
* Each element is an integer between 1 - 1,000
* K is an integer between 0 - 1,000,000

# Plan
* **UI** - command line
* **Input** - array A of N integers, and integer K
* **Output** - number of subarrays w/product < K
* **Process** - _get array A and integer K > create a sliding window > track running products > count subarrays w/product < K > return count_

# Algorithm
```js
FUNCTION: getSubarrayProdCount(A, K)
IF K IS LESS THAN OR EQUAL to 1 THEN 
    RETURN 0 (Smallest element is 1, so no subarray exists when K <= 1)
ENDIF
SET left to 0
SET curr product to 1
SET count to 0
FOR factors of A starting at right:0
    SET curr product to itself times factor
    WHILE curr product IS GREATER THAN OR EQUAL to k
        SET curr product to itself divided by A left
        INCREMENT left
    ENDIF
    SET count to itself plus right minus left plus 1
ENDFOR
RETURN count
```
