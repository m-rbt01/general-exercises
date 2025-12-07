# Problem
Given an array A of N integers, return the maximum product of any triplet elements.
```js
A = [-3, 1, 2, -2, 5, 6]
Answer = A[2] * A[4] * A[5] = 2 * 5 * 6 = 60
```
* N is a number between 3 - 100,000
* Each element is a number between -1,000 - 1,000
* Highest product is either 2 negatives * largest item OR 3 largest items

# Plan
* UI - command line
* Input - Array A of N integers
* Output - Maximum product of triplets
* Process - _get array > calculate product of triplets > find the largest product > return largest product_

# Algorithm
**NOTES:** This is an example of **when sorting is not necessary** for a greedy solution. The first solution sorted the array to guarantee positions of negatives and largest values, which is a fine solution for interviews, but not the best for large arrays (*i.e. O(N log N) time complexity*). This problem can have an **O(N) time complexity** solution by looping through the array, and tracking the three largest numbers, and two smallest numbers (*i.e. in case of negatives*) at each step. Sorting the entire array is not necessary if you only need five total elements.
```js
FUNCTION: getMaxProductOfThree(A)
SET max 1, 2, 3, to -Infinity 
SET min 1 and 2 to Infinity
FOR nums of A
    IF num IS GREATER than max 1 THEN
        SET max 3 to max 2
        SET max 2 to max 1
        SET max 1 to num
    ENDIF
    ELSEIF num IS GREATER than max 2 THEN
        SET max 3 to max 2
        SET max 2 to num
    ENDELSEIF
    ELSEIF num IS GREATER than max 3 THEN
        SET max 3 to num
    ENDELSEIF
    IF num IS LESS than min 1 THEN
        SET min 2 to min 1
        SET min 1 to num
    ENDIF
    ELSEIF num IS LESS than min 2 THEN
        SET min 2 to num
    ENDELSEIF
ENDFOR
SET low end product to the product of first 3 elements
SET high end product to the product of last 3 elements
RETURN the MAX of the two options
```