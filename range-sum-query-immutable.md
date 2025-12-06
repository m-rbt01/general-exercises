# Problem
Given an array A of N integers (_immutable, no change_), handle multiple queries of calculating the sum of elements between left and right indices (_inclusive_). Build a class NumArray with a member function getSumRange(left, right) that returns the total sum of elements in range left - right. 
```js
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
```
* N is an integer between 1 - 10,000
* Each element value is an integer between -100,000 - 100,000
* 0 <= left <= right <= N - 1

# Plan
* **UI** - command line
* **Input** - array A of N integers, and indices left and right
* **Output** - array of Null, followed by sumRange return values
* **Process** - _get array A and left and right > calculate prefix sum > return sum of given index range_

# Algorithm
```js
FUNCTION getRangeSum(A, left, right)
SET prefix sum array to new array of length A
FOR nums of A starting at i:1
    SET prefix sum at i to sum of num and previous prefix sum
ENDFOR
RETURN prefix sum at right (IF left IS 0), or right minus left-1
```
