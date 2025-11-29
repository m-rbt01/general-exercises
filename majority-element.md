# Problem
Given an array A of N integers, return the majority element.
```js
A = [3,2,3]
Answer: 3

A = [2,2,1,1,1,2,2]
Answer: 2
```
* N is an integer between 1 - 50,000
* Each element value is an integer between -1,000,000,000 - 1,000,000,000
* The majority element is one that appears more than (N / 2) times
* There will always be a majority element 

# Plan
* **UI** - command line
* **Input** - array A of N integers
* **Output** - the majority element 
* **Process** - _get array > verify N is greater than 1 > count instances of elements > return majority element

# Algorithm
```js
FUNCTION: getMajorityElem(A)
DECLARE occurrences map
SET majority count to N / 2
FOR nums in A
    SET nums key in occurrences to (current value OR 0) plus 1
ENDFOR
FOR keys and values in occurrences
    IF value IS GREATER THAN majority count THEN
        RETURN key
    ENDIF
ENDFOR
```
