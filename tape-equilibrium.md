# Problem
Given an array A of N integers, each element represents a number on a piece of tape. Given any integer P (0 < P < N), splits the tape into two non-empty sub-arrays: left [0]...[P - 1] and right [P]...[N - 1]. The difference between the two parts is the absolute value of (sum of left) minus (sum of right). Return the minimal difference among options of P.
```js
A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3

P = 1 (left: 0, right: 1-4) -> abs difference = |3 − 10| = 7
P = 2 (left: 0-1, right: 2-4) -> abs difference = |4 − 9| = 5
P = 3 (left: 0-2, right: 3-4) -> abs difference = |6 − 7| = 1
P = 4 (left: 0-3, rightL 4) -> abs difference = |10 − 3| = 7

Answer: 1
```
* N is an integer between 2 - 100,000
* Each element value is an integer between -1,000 - 1,000
* N of 2 has only one difference 

# Plan
* **UI** - command line
* **Input** - array A of N integers
* **Output** - minimal difference integer
* **Process** - _get array > determine P options > calculate differences for each P > return the smallest difference

# Algorithm
```js
FUNCTION: getMinSubarrayDifference(A)
IF a length EQUALS 2 THEN
    RETURN first and last element difference
ENDIF
SET total sum to A REDUCED
SET left sum to 0
SET minimalDiff to infinity
FOR num in A EXCLUDING N-1
    ACCUMULATE num to left sum
    SET right sum to total sum minus left sum
    SET difference to absolute difference of left and right sum
    IF difference IS LESS THAN minimalDiff THEN
        SET minimalDiff to absDifference
    ENDIF
ENDFOR
RETURN minimalDiff
```
