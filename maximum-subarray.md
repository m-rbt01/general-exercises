# Problem
Given an array nums of N integers, find the subarray with the largest sum and return and its sum.
```js
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```
* N is an integer between 1 - 100,000
* Each element is an integer between -10,000 - 10,000

# Plan
* **UI** - command line
* **Input** - array nums of N integers
* **Output** - integer maximum sum of a subarray
* **Process** - _get array nums > pass through nums once > at each index track a running sum and max sum so far > reset running sum when a given number is greater than it (starts new subarray) > update max so far when a running sum is greater than it > return the max sum_

# Algorithm
**NOTES:** **Kadane's algorithm** efficiently finds the largest sum of a contiguous subarray within an array of numbers, using dynamic programming to iterate just once (_i.e. O(n) time_).
* It works by tracking a `maxEndingHere` (current subarray sum) and `maxSoFar` (overall maximum sum)
* For each element, it decides whether to extend the current subarray or start a new one, resetting `maxEndingHere` to the current element if it becomes less than the current element, ensuring the sum stays maximal
```js
FUNCTION: getSubarrayMaxSum(nums)
SET current sum to first element
SET max sum to first element
FOR each num of nums starting at:second element
    SET current sum to MAX of (num OR current sum + num)
    SET max sum to MAX of (itself OR current sum)
ENDFOR
RETURN max sum
```
