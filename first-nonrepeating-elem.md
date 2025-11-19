# Problem
Given an array A of N integers, return the first unique number in its sequence of element values.
```js
A = [4, 10, 5, 4, 2, 10]
Answer = 5, not 2 (because index 2 is < index 4)
```
* N is a number between 1 - 100,000
* Each element value is a number between 0 - 1,000,000,000
* Returns -1 if no unique values are present

# Plan
* UI - command line
* Input - Array of N integers
* Output - Unique value or -1
* Process - _get array > find unique elements > determine which index is smallest > return index or -1_

# Algorithm
```js
DECLARE count map
FOREACH item in array
    SET count key of item TO VALUE itself or 0 plus 1
ENDFOREACH
FOR every index in array
    IF count item value EQUALS 1 THEN
        RETURN array item
    ENDIF
ENDFOR
RETURN -1
```