# Problem
Given an array A of N integers, move all elements of 0 to the end of the array, while maintaining the original order of non-zero elements.
```js
A = [0,1,0,3,12]
Answer: [1,3,12,0,0]

A = [0]
Answer: [0]
```
* Must be done in-place without making a copy of the array
* N is an integer between 1 - 10,000
* Each element is an integer between -2,147,483,648 - 2,147,483,649

# Plan
* **UI** - command line
* **Input** - array A of N integers
* **Output** - shifted array
* **Process** - _get array A > find zeroes > shift to the right > move non-zeroes to left > return shifted array_

# Algorithm
**NOTES**: The **Two-Pointer algorithm** is used to solve problems involving linear data structures (_e.g arrays_), by using two pointers (e.g. _left/right or read/write_). The pointers help traverse the data structure to find pairs, subarrays, or other elements that satisfy a given condition. This is useful to process two elements per loop iteration.
```js
FUNCTION getNonZeroArray(A)
SET write to 0
FOR nums of A starting at read:0
    IF num IS NOT EQUAL to 0 THEN
        DESTRUCTURE swap write with read
        INCREMENT write
    ENDIF
ENDFOR
RETURN A
```
