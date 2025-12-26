# Problem
Given an array nums of N distinct integers, there is one element that has the lowest value, and one element that has the highest value. The goal is to remove both of these elements, either from the front of the array or from the back (_consequently removing every element in this path_). Return the minimum number of deletions it would take to remove both elements from nums.
```js
Example 1:
nums = [2,10,7,5,4,1,8,6]
Output: 5
Explanation: 
The minimum element in the array is nums[5], which is 1.
The maximum element in the array is nums[1], which is 10.
We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
This results in 2 + 3 = 5 deletions, which is the minimum number possible.

Example 2:
nums = [0,-4,19,1,8,-2,-3,5]
Output: 3
Explanation: 
The minimum element in the array is nums[1], which is -4.
The maximum element in the array is nums[2], which is 19.
We can remove both the minimum and maximum by removing 3 elements from the front.
This results in only 3 deletions, which is the minimum number possible.

Example 3:
nums = [101]
Output: 1
Explanation:  
There is only one element in the array, which makes it both the minimum and maximum element.
We can remove it with 1 deletion.
```
* N is an integer between 1 -100,000
* Each element is an integer between -100,000 - 100,000
* The integers in nums are distinct

# Plan
* **UI** - command line
* **Input** - array nums of N distinct integers
* **Output** - minimum number of deletions
* **Process** - _get array nums > loop through nums > track which number is the min and max > store indices > calculate distance from deleting both from left, right, or split direction > return the minimum number of deletions_

# Algorithm
```js
FUNCTION: getMinDeletions(nums)
IF nums length IS EQUAL TO 1 THEN
    RETURN 1
ENDIF
SET min to Infinity
SET max to -Infinity
SET min position to -1
SET max position to -1
FOR each num of nums
    IF num IS LESS THAN min THEN
        SET min to num
        SET min position to current index
    ENDIF
    ELSE IF num IS GREATER THAN max
        SET max to num
        SET max position to current index
    ENDELSE-IF
ENDFOR
SET left to MATH MAX of (min position OR max position ) + 1
SET right to num length - MATH MIN(min position OR max position)
SET split to MATH MIN of (min position front OR from back) + MATH MIN of (max position front OR from back)
RETURN MATH MIN of (left, right, OR split)
```
