# Problem
Given an integer N, return array A of M strings, representing each number from 1...n. Each element is either "FizzBuzz" if the number is divisible by 3 and 5, "Fizz" if the number is only divisible by 3, "Buzz" is the number is only divisible by 5, or the number itself.
```js
Example 1:
n = 3
Output: ["1","2","Fizz"]

Example 2:
n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```
* N is an integer between 1 - 10,000
* M is equal to N

# Plan
* **UI** - command line
* **Input** - integer N
* **Output** - array A of M strings
* **Process** - _get integer N > iterate from 1 to N > determine if the given number is Fizz/Buzz/FizzBuzz/or neither > update array A > return A_

# Algorithm
```js
FUNCTION: getFizzBuzzArray(N)
SET fizz to "Fizz"
SET buzz to "Buzz"
SET result to empty array
FOR each num from 1...N
    SET str to empty string
    IF num is divisible by 3 THEN
        SET str to itself + fizz
    ENDELSE-IF
    ELSE IF num is divisible by 5 THEN
        SET str to itself + buzz
    ENDELSE-IF
    SET current result element to str (if non-empty string) OR num string
ENDFOR
RETURN result
```
