# Problem
Given an array A of N integers, rotate the array by K times.
```js
A = [3, 8, 9, 7, 6]
K = 3

[3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
[6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
[7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8] returned answer
```
* A single rotation means that each element is shifted to the right by one index, and the last element is moved to the first place
* N and K are numbers between 0 - 100
* Each element value is a number between -1,000 - 1,000

# Plan
* UI - command line
* Input - array A of N integers and integer K rotations
* Output - final rotated array
* Process - get array and K rotations > shift elements K times > return final array

# Algorithm
```js
FUNCTION: getRotatedArray(A, K)
IF given array is empty THEN
    RETURN empty array
ENDIF
DECLARE empty array of A length
FOREACH nums of array
    SET shift index to (current index + K) % A length
    SET empty array at shift index to current number 
ENDFOREACH
RETURN rotated array
```