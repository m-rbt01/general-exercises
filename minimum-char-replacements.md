# Problem
Given an array A of N strings W of M characters. For each word: you want to ensure no two adjacent characters are the same, you may replace any character with any other character, you must determine the minimum number of replacements needed for each word. Return an array R, where: each element represents the replacements needed for A's corresponding word.
```js
A = ["ab", "aab", "abb", "a", "aa"]
Answer: [0, 1, 1, 0, 1]
Explanation:
"ab" → no adjacent duplicates → 0
"aab" → "aa" at index 0–1 → must replace a char → 1
"abb" → "bb" at index 1–2 → must replace b char → 1
"a" → length 1 → no adj duplicates → 0
"aa" → must replace a char → 1
```
* N is an integer between 1 - 100
* M is an integer between 2 - 100,000

# Plan
* **UI** - command line
* **Input** - array A of N strings W, of M characters
* **Output** - array R of replacements needed
* **Process** - _get array A > iterate through each word > scan for duplicate adjacent characters > track count of replacements needed > store counts into R > return R_

# Algorithm
```js
FUNCTION: getCharReplacementsArray(A)
DECLARE replacements array w/length of A
FOR words of A starting at i:0
    SET count to 0
    SET previous char to first character of word
    FOR chars of word starting at j:1
        IF current char IS EQUAL TO previous char THEN
            INCREMENT count
            SET current char to 0
        ENDIF
    ENDFOR
    SET replacements at i to count
ENDFOR
RETURN replacements
```