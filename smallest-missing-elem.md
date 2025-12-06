# Problem
given an array A of N integers, return the smallest positive integer (greater than 0) that does not occur in A.
* N will be between 1 - 100,000
* Values can be between -1,000 - 1,000
* Example: [-2, -1] -> 1 | [1, 5, 2] -> 3

# Plan
* UI - command line
* Input - array A of N integers
* Output - smallest positive integer not in A
* Process - Function is called > A is passed > find smallest positive integer not in A > return the result

# Algorithm
```js
FUNCTION: getSmallestMissingElem(A)
DECLARE empty set
FOREACH item in array
    IF item IS GREATER THAN zero THEN
        ADD item to set
    ENDIF
ENDFOREACH
SET smallest to 1
WHILE true
    IF smallest IS NOT IN set THEN 
        return smallest
    ENDIF
    ELSE
        INCREMENT smallest
    ENDELSE
ENDWHILE
```