# Problem
You must do this by modifying the input array in-place with O(1) extra memory.
Given an array S of N characters, modify S in place with O(1) space complexity to reverse the string and return the modified array.
```js
Example 1:
S = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
S = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```
* N length is an integer between 1 - 100,000
* Each character in S is a printable ascii character.

# Plan
* **UI** - command line
* **Input** - array S of N characters
* **Output** - reversed string as modified array S
* **Process** - _get array S > iterate through each character until the middle > swap each character with the opposite end of the string > return modified array_

# Algorithm
```js
FUNCTION: getReverseString(S)
FOR each character of S w/left < right
    SET temp to left character
    SET left character to right character
    SET right character to temp
ENDFOR
RETURN S
```
