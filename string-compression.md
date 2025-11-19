# Problem
Given an array chars of N characters, group repeating characters and append their number of instances to string S. Return the length of the new array.
```js
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
```
* Unique characters are not appended their instance of 1
* N is an integer between 1 - 2,000
* Each character is either an uppercase or lowercase letter, digit, or symbol

# Plan
* UI - command line
* Input - Array of N characters
* Output - Length of compressed array
* Process - _get array > calculate instances of characters > append instances to their character > return size of compressed array

# Algorithm
```js

```
