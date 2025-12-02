# Problem
Given an array A of N integers in ascending order, remove the duplicates **in-place** (_i.e. do not copy array_). The order of the unique elements should remain the same. After removing the duplicates, return K, which is the number of unique elements. The remaining elements after K - 1 do not matter.
```js
A = [0,0,1,1,1,2,2,3,3,4]
Answer: 5, A = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```
* N is an integer between 1 - 30,000
* Each element value is an integer between -100 - 100
* Elements in A are in ascending order

# Plan
* **UI** - command line
* **Input** - array A of N integers
* **Output** - integer K
* **Process** - _get array A > track unique values > move unique values to left > return K_

# Algorithm
```js
FUNCTION: getUniqueArraySize(A)
SET write to 1
FOR nums of A starting at read:1
    IF num DOES NOT EQUAL to A write - 1 (previous unique elem)
        SET A write to num
        INCREMENT write
    ENDIF
ENDFOR
RETURN write
```
