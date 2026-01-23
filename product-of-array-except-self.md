# Problem
Given an integer array nums of N integers, return an array answer of N integers where each element (_i.e. `nums[i]`_) is the product of all other elements except `nums[i]`.
* The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
* The solution must run in O(n) time and without using the division operation.
```js
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```
* N is an integer between 2 - 100,000
* Each element is an integer between -30 - 30
* The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer

# Plan
* **UI** - command line
* **Input** - array nums of N integers
* **Output** - array answer of M integers
* **Process** - _get array nums > _

# Algorithm
```js
FUNCTION: getProductExceptSelfArray(nums)
-O(n) linear time and extra space-
SET result to array length of nums
SET prefix to array length of nums
SET suffix to array length of nums
SET prefix first element to 1
SET suffix last element to 1
FOR each num of nums starting at left:second elem:left to right
    SET prefix at left to previous prefix * previous element
ENDFOR
FOR each num of nums starting at right:second to last elem:right to left
    SET suffix at right to previous suffix * next element
ENDFOR
FOR each index of nums length
    SET result at index to prefix at index * suffix at index
ENDFOR
RETURN result

-O(n) linear time and O(1) constant space-
SET result to array length of nums
SET result first element to 1
FOR each num of nums starting at left:second elem:left to right
    SET result at left to previous result * previous element
ENDFOR
SET running suffix to last element
FOR each num of nums starting at right:second to last elem:right to left
    SET result at right to itself * running suffix
    SET running suffix to itself * current num
ENDFOR
RETURN result
```
