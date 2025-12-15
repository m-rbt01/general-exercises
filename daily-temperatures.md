# Problem
Given an array A of N integers that represent the daily temperatures, return an array D of M integers that represent the number of days you have to wait after A[i] to get a warmer temperature. If there are no future days that are warmer, D[i] should be 0.
```js 
A = [73,74,75,71,69,72,76,73]
Output: D = [1,1,4,2,1,1,0,0]

A = [30,40,50,60]
Output: D = [1,1,1,0]

A = [30,60,90]
Output: D = [1,1,0]
```
* N is an integer between 1 - 105
* M is equal to N
* Each element in A is an integer between 30 - 100

# Plan
* **UI** - command line
* **Input** - array A of N integers
* **Output** - array D of M integers
* **Process** - _get array A > create array D of A length > create stack for unresolved days > track difference in days from given day and all previous days > store differences in D > update stack after resolving days > return array D_

# Algorithm
```js
FUNCTION: getWarmerDaysArray(A)
SET days array to length of A
SET unresolved days to empty array
FOR daily temperatures of A
    SET days at current index to 0
    WHILE unresolved days IS NOT EMPTY AND current temperature IS GREATER THAN top of unresolved days temperature
        SET days at unresolved days top index to current index - top index
    ENDWHILE
    PUSH current index to unresolved days
ENDFOR
RETURN days
```
