# Problem
Given an array A of N integers, each element value can be paired with another element of the same value except for one element that is unpaired. Create a function that returns the unpaired element.
```js
[0] = 9 [1] = 3 [2] = 9
[3] = 3 [4] = 9 [5] = 7
[6] = 9
```
* N is a odd number between 1 - 1,000,000
* Each value is a number between 1 - 1,000,000,000
* Only one element value occurs an odd number of times

# Plan
* UI - command line
* Input - Array of odd N integers with one unpaired element
* Output - the unpaired element value
* Process - Get array > determine value with odd occurrences > return the unpaired element

# Algorithm
```js
FUNCTION: getOddOccurrenceElem(A)
SET result to zero
FOREACH through the array
    SET result to itself BITWISE the current item
ENDFOREACH
RETURN result
```