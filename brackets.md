# Problem
Given a string S of N characters, return 1 if S is properly nested, or 0 otherwise.
```js
S = ""
S = "{[()()]}
Returns: 1

S = "([)()]"
Returns: 0
```
* N is an integer between 0 - 200,000
* S is made of only "(, ), [, ], {, }" characters

# Plan
* UI - command line
* Input - string S
* Output - integer 1 or 0
* Process - _get string > determine if characters are not properly nested > if so return 0 > otherwise return 1

# Algorithm
```js
FUNCTION: checkIsProperlyNested(S)
DECLARE empty stack
FOR each character in s 
    IF character EQUALS opening brackets THEN
        PUSH character to stack
    ENDIF
    ELSE
        IF top stack EQUALS closing bracket THEN
            POP stack
        ENDIF
        ELSE
            RETURN 0
        ENDELSE
ENDFOR
RETURN 1
```