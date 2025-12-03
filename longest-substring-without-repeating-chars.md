# Problem
Given a string S of N characters, return the length of the longest substring without duplicate characters.
```js
S = "abcabcbb"
Answer: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

S = "bbbbb"
Answer: 1
Explanation: The answer is "b", with the length of 1.

S = "pwwkew"
Answer: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
* N is an integer between 0 - 50,000
* S consists of English letters, digits, spaces, and symbols

# Plan
* **UI** - command line
* **Input** - string S of N characters
* **Output** - length of longest unique substring
* **Process** - _get string S > track unique characters > track maximum length > return maximum length_

# Algorithm
```js
FUNCTION: getMaxSubstringSize(S)
SET left to 0
SET max size to 0
DECLARE encountered map
FOR chars of S starting at right:0
    IF encountered HAS char && its key value index IS GREATER THAN OR EQUAL to left THEN
        SET left to char key value index plus 1 (shrink window by moving left up)
    ENDIF
    SET char key value to current index
    SET max size to MATH MAX (itself OR right minus left plus 1)
ENDFOR
RETURN max size
```
