# Problem
Given an array H of N integers, each element represents the wall's height from left [0] to right [N - 1]. Return the minimum number of blocks needed to build the wall.
```js
H[0] = 8    H[1] = 8    H[2] = 5
H[3] = 7    H[4] = 9    H[5] = 8
H[6] = 7    H[7] = 4    H[8] = 8
Answer: 7 blocks
```
![Stone Wall](./images/stone-wall-img.png)
* The wall should be straight and N meters long, with constant thickness, and different heights in different sections
* Blocks must be rectangles
* H[I] is the height of the wall from I to I + 1 meters to the right of its left end
* N is an integer between 1 - 100,000
* Each element value is an integer between 1 - 1,000,000,000

# Plan
* **UI** - command line
* **Input** - array H of N integers
* **Output** - Minimum number of blocks
* **Process** - _get array > determine minimum blocks needed for height > track block count > return block count_

# Algorithm
```js
FUNCTION: getMinBlockCount(H)
DECLARE blocks array
DECLARE count
FOREACH height in H
    WHILE top IS GREATER THAN height THEN
        POP top from blocks
    ENDWHILE
    IF blocks IS EMPTY OR top IS LESS THAN height THEN
        PUSH height to blocks
        INCREMENT count
    ENDIF
ENDFOREACH
RETURN count
```
