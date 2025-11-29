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
* **Process** - _get array > track majority count > return majority element

# Algorithm
**NOTES**: The [Boyer–Moore algorithm](https://www.tutorialspoint.com/data_structures_algorithms/boyer_moore_algorithm.htm) is used for pattern searching. It determines if a given pattern is present in within a specified text. This approach cancels out a candidate's count upon unmatched pairs, then a new candidate begins. Because this problem guarantees a majority element that is present over half the length, it's count will outlast any unmatched pair cancellations.
```js
FUNCTION: getMajorityElem(A)
SET majority num to null
SET count to 0
FOR nums of A
    IF count IS EQUAL TO 0 THEN
        SET majority num to num
        SET count to 1
    ENDIF
    ELSE-IF num IS EQUAL TO majority num THEN
        INCREMENT count
    ENDELSE-IF
    ELSE
        DECREMENT count
    ENDELSE
ENDFOR
RETURN majority num
```
