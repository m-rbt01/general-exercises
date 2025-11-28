# Problem
Given an array A of N integers, return true if any values appear at least 2 times, otherwise, return false.
```js
A = [1,2,3,1]
Answer: true

A = [7, 7, 7]
Answer: true

A = [1, 2, 3, 4]
Answer: false
```
* N is an integer between 1 - 100,000
* Each element value is an integer between -1,000,000,000 - 1,000,000,000

# Plan
* **UI** - command line
* **Input** - array A of N integers
* **Output** - true or false
* **Process** - _get array > track encountered nums > return true when duplicate is encountered > return false otherwise

# Algorithm
```js
FUNCTION: checkIsDuplicate(A)
DECLARE encountered set
FOR nums in A
    IF current num IS IN encountered THEN
        RETURN true
    ENDIF
    ADD num to encountered
ENDFOR
RETURN false
```
