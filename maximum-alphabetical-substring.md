# Problem
Given a string S of N characters, consider all possible contiguous substrings, determine which substring would appear last if all substrings were sorted alphabetically, and return the alphabetically maximum substring.

**Lexicographically** means in dictionary order, comparing items (like words, strings, or sequences) from left to right, character by character (or element by element), to see which comes first alphabetically or numerically.
* Compare first letters: If "apple" and "banana" are compared, 'a' comes before 'b', so "apple" is lexicographically smaller. 
* Move to the next letter: If "cat" and "car" are compared, 'c' matches, then 'a' matches. The next differing letters are 't' and 'r'. Since 'r' comes before 't', "car" is lexicographically smaller than "cat". 
* Shorter comes first: "App" comes before "apple" because it's a prefix (shorter)
```js
S = "baca" 
all unique substrings = ["b", "ba", "bac", "baca", "a", "ac", "aca", "c", "ca"]
arranged alphabetically = ["a", "ac", "aca", "b", "ba", "bac", "baca", "c", "ca"]
Output = "ca"

S = "aaa"
all unique substrings = ["a", "aa", "aaa"]
arranged alphabetically = ["a", "aa", "aaa"]
Output = "aaa"

S = "abczdefzqr"
all unqiue substrings = ["a", "ab", "abc", "abcz", "abczd", "abczde", "abczdef", "abczdefz", "abczdefzq", "abczdefzqr", "b", "bc", "bcz", "bczd", "bczde", "bczdef", "bczdefz", "bczdefzq", "bczdefzqr",..., "z", "zd", "zde", "zdef", "zdefz", "zdefzq", "zdefzqr",..., "zq", "zqr"]
arranged alphabetically = ["a", "ab", "abc", "abcz", "abczd", "abczde", "abczdef", "abczdefz", "abczdefzq", "abczdefzqr", "b", "bc", "bcz", "bczd", "bczde", "bczdef", "bczdefz", "bczdefzq", "bczdefzqr",..., "z", "zd", "zde", "zdef", "zdefz", "zdefzq", "zdefzqr",..., "zq", "zqr"]
Output = "zqr" //comparing largest character 'z' substrings, zqr is GREATER THAN other z substrings lexicographically
```
* N is an integer between 1 - 100,000
* Each character is a lowercase English letter a - z

# Plan
* **UI** - command line
* **Input** - string S
* **Output** - lexicographically largest substring
* **Process** - _get string S > find the alphabetically largest character > track all substrings for the largest character > determine which substring is lexicographically largest > return the substring_

# Algorithm
```js
FUNCTION: getMaxAlphaSubstring(S)
SET max substr to empty string
SET max char to first character of S
FOR characters of S
    IF current character IS GREATER THAN OR EQUAL to max char THEN
        SET max char to current character
        SET current substring to SUBSTRING of (current index...N-1)
        IF current substring IS GREATER THAN max substr THEN
            SET max substr to current substring
        ENDIF
    ENDIF
ENDFOR
RETURN max substr
```
