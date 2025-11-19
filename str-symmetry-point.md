# Problem
Given a string S of N characters, return the index of the character where its left substring is the reverse of its right substring. If substrings do not match, return -1.
```js
S = [r, a, c, e, c, a, r] //racecar
Answer: 3 // rac <-> car

S = [c] //c
Answer: 0 //empty <-> empty
```
* N is an integer between 0 - 2,000,000

# Plan
* UI - command line
* Input - string S of N characters
* Output - symmetry point index or -1
* Process - _get string > split into substrings > compare if the reverse of one matches the other > return index or -1

# Algorithm
```js
FUNCTION: getSymmetryPoint(S)
IF s length EQUALS 0 OR is even THEN
    return -1
ENDIF
IF s length EQUALS 1 THEN
    return 0
ENDIF
SET middle to MATH-FLOOR s length / 2
SET left to 0
SET right to length - 1
WHILE left IS LESS THAN middle
    IF left char DOES NOT EQUAL right char THEN
        RETURN -1
    ENDIF
    INCREMENT left
    DECREMENT right
ENDWHILE
RETURN middle
```