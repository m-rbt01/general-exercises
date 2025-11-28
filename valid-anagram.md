# Problem
Given two strings S and T of N characters, return true if T is an anagram (new word with same characters) of S. Otherwise, return false.
```js
S = "anagram", T = "nagaram"
Answer: true

S = "rat", T = "car"
Answer: false
```
* N is an integer between 1 - 500,000
* S and T consist of lowercase English letters

# Plan
* **UI** - command line
* **Input** - strings S and T of N characters
* **Output** - true or false
* **Process** - _get strings S and T > verify that lengths are the same > count frequencies of S > check if T matches > return true if match, otherwise return false_

# Algorithm
```js
FUNCTION: checkIsAnagram(S, T)
IF lengths S and T DO NOT MATCH THEN
    RETURN false
ENDIF
DECLARE occurrences map
FOR chars in S
    SET char key in occurrences w/(current value OR 0) plus 1
ENDFOR
FOR chars in T
    IF char NOT IN occurrences THEN 
        RETURN false
    ENDIF
    DECREMENT char value
    IF char value IS LESS THAN 0 THEN
        RETURN false
    ENDIF
ENDFOR
RETURN true
```