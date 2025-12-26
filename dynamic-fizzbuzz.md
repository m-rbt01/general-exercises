# Problem
Given an integer num, and an array rules of N subarray pairs of an integer divisor and string word, return array result of M strings, representing each number from 1...num. Each number from 1...num is either a given rules[i] word if divisible by the rule's divisor, or the number itself.
```js
Example 1:
num = 15
rules = [[3, "Fizz"], [5, "Buzz"]]

Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


Example 2:
num = 21
rules = [[3, "Fizz"], [5, "Buzz"], [7, "Pop"]]

Output: ["1","2","Fizz","4","Buzz","Fizz","Pop","8","Fizz","Buzz","11","Fizz","13","Pop","FizzBuzz","16","17","Fizz","19","Buzz","FizzPop"]
```
* num is an integer between 1 - 10,000
* divisor is an integer between 1 - num
* N is an integer between 1 - 10

# Plan
* **UI** - command line
* **Input** - integer N
* **Output** - array A of M strings
* **Process** - _get integer num and array rules > iterate from 1 to num > iterate through rules > determine if the given number is divisible by rules[i] divisor > update array results > return results_

# Algorithm
```js
FUNCTION: getDynamicFizzBuzz(num, rules)
SET result to empty array of size num
FOR each num from 1...num
    SET str to empty string
    FOR each rule of rules
        IF current num is divisible by divisor THEN
            SET str to itself + word
        ENDIF
    ENDFOR
    SET current result element to str (if non-empty string) OR num string
ENDFOR
RETURN result
```
