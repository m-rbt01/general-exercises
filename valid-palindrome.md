# Problem
Given a string S of N characters, return true if the string is a palindrome, otherwise return false. A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it is the same reversed.
```js
Example 1:
S = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
S = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
S = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```
* N is an integer between 1 - 200,000
* S consists only of printable ASCII characters

# Plan
* **UI** - command line
* **Input** - string S of N characters
* **Output** - true if S is a palindrome, otherwise false
* **Process** - _get string S > loop through S w/two-pointer > compare left character with right character > terminate comparison when mismatch is encountered by returning false > return true at the end the loop_

# Algorithm
```js
FUNCTION: checkIsAlphanumeric(C)
SET zero code to 48
SET nine code to 57
SET upper a code to 65
SET upper z code to 90
SET lower a code to 97
SET lower z code to 122
SET char code to CHAR CODE AT 0 for C
RETURN (true IF char code IS WITHIN RANGE, OR false)

FUNCTION: checkIsValidPalindrome(S)
SET left to 0
SET right to last index of S
WHILE left IS LESS THAN right
    WHILE left IS LESS THAN right AND CHECK-IS-ALPHANUMERIC IS false 
        INCREMENT left
    ENDWHILE
    WHILE left IS LESS THAN right AND CHECK-IS-ALPHANUMERIC IS FALSE
        DECREMENT right
    ENDWHILE
    IF LOWERCASE left character IS NOT EQUAL TO LOWERCASE right character THEN
        RETURN false
    ENDIF
    INCREMENT left
    DECREMENT right
ENDWHILE
RETURN true
```
