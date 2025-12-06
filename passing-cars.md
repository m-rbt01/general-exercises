# Problem
Given an array A of N integers, each element represents a car going east (0) or a car going west (1). A pair of passing cars (P, Q) means that an element of 0 has a corresponding element of 1 ahead of its position. Return the number of passing car pairs, or -1 if it exceeds 1,000,000,000
```js
A[0] = 0
A[1] = 1
A[2] = 0
A[3] = 1
A[4] = 1
Answer: 5 //(0, 1), (0, 3), (0, 4), (2, 3), (2, 4)
```
* N is an integer between 1 - 100,000
* Each element value is either 0 or 1

# Plan
* **UI** - command line
* **Input** - array A of N integers
* **Output** - number of pairs
* **Process** - _get array > find 0s > determine corresponding 1s > track count > return count

# Algorithm
```js
FUNCTION: getPassingCarsCount(A)
SET constant max count to 1,000,000,000
SET count to 0
SET eastCars to 0
FOR every car of a
    IF car EQUALS 0 THEN
        INCREMENT eastCars
    ENDIF
    ELSE
        ADD eastCars to count
    ENDELSE
    IF count IS GREATER THAN max count THEN
        RETURN -1
    ENDIF
ENDFOR
RETURN count
```
