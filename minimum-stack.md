# Problem
Implement a stack data structure that includes **push, pop, top, and minimum element** member functions in **O(1) CONSTANT TIME**.
* _Stack()_ initializes the stack object
* _push()_ pushes the element onto the stack
* _pop()_ removes the element on the top of the stack and returns its value
* _top()_ returns the top element of the stack without removing it
* _getMinElem()_ returns the smallest element in the stack
```js
Stack = [-2, 0, -3] //elements set w/push()

getMinElem() output: -3
pop() output: -3 //returned AND removed
top() output: 0 
getMinElem() output: -2
 ```
* Each element is an integer between -231 - 230
* pop, top and getMinElem functions will always be called on non-empty stacks
* push, pop, top, and getMinElem will be called at most 312 times

# Plan
* **UI** - command line
* **Input** - initialized stack and function calls
* **Output** - function return values
* **Process** - _initialize a new stack > implement functionality of methods > account for edge cases > return expected values_

# Algorithm
```js
FUNCTION: Stack() -> push(num), pop(), top(), getMinElem()
SET this:mainStack to empty array
SET this:small Stack to empty array

FUNCTION: push(num)
PUSH num to main stack
IF small Stack IS EMPTY OR num IS LESS THAN OR EQUAL TO smallest element THEN
    PUSH num to small stack
ENDIF

FUNCTION: pop()
SET temp to POPPED main stack element
IF temp IS EQUAL TO smallest element THEN
    POP small stack
ENDIF
RETURN temp

FUNCTION: top()
RETURN last main stack element

FUNCTION: getMinElem()
RETURN last small stack element
```
