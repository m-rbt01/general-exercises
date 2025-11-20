# Problem
Given an array D of N integers, each element represents the difficulty level of the index mission. Given an integer X represents the maximum difficulty difference of a single day. **Return** the minimum number of days required to complete all missions.
```js
D = [5, 8, 2, 6]
X = 3 
[0][1] first day (difference is 3)
[2] second day 
[3] third day

Answer: 3
```
* During a single day, you can perform any number of missions given:
    * mission only performed in order of array
    * the difference between difficulty levels of any 2 missions performed on the same day is NOT greater than X
* N is an integer between 1 - 200,000
* X is an integer between 0 - 1,000,000,000
* each element value is between 1 - 1,000,000,000

# Plan
* **UI** - command line
* **INPUT** - array D of N integers, max difference X
* **OUTPUT** - minimum days for missions
* **PROCESS** - _get array > track differences > track days >
return days_

# Algorithm
```js
FUNCTION: getMinimalDays(D, H)
IF d length is 1 THEN
	RETURN 1
ENDIF
SET days to 1
SET minDifficulty to first num
SET maxDifficulty to first num
FOR nums start at 1 in A
	SET minDifficulty to MATH MIN itself OR num
	SET maxDifficulty to MATH MAX itself OR num
	IF maxDifficulty minus minDifficulty IS
	GREATER THAN X THAN
		INCREMENT days
		SET min to num
		SET max to num
	ENDIF
ENDFOR
RETURN days
```
