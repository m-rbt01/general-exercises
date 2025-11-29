# Problem
Given an array A of N strings, group anagrams together in sub-arrays, and return the complete array G.
```js
A = ["eat","tea","tan","ate","nat","bat"]
Answer: [["bat"],["nat","tan"],["ate","eat","tea"]]

A = [""]
Answer: [[""]]

A = ["a"]
Answer: [["a"]]
```
* N of A is an integer between 1 - 10,000
* N of A[i] is an integer between 0 - 100
* Each element string includes only lowercase English letters

# Plan
* **UI** - command line
* **Input** - array A of N strings
* **Output** - array G of sub-arrays
* **Process** - _get array > verify length is more than 1 > iterate through A > iterate through each word > count occurrences > group words with same occurrences > return G of groups_

# Algorithm
```js
FUNCTION: getGroupAnagram(A)
IF length of A IS EQUAL TO 1 THEN
    RETURN G with A
ENDIF
DECLARE groups map
SET char offset to 97
FOR words in A
    DECLARE occurrences array w/26 elements (represent ASCII chars a-z) initialized to 0
    FOR chars in word
        INCREMENT occurrences of char ASCII code minus offset (char a starts at index 0 after offset)
    ENDFOR
    SET anagram key to JOINED occurrences w/separator
    IF groups DOES NOT HAVE anagram key THEN
        SET anagram key to value of empty array
    ENDIF
    PUSH word to groups anagram key array value
ENDFOR
RETURN ARRAY FROM of groups values
```
