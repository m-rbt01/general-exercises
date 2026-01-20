# Problem
Given an array elevations of N integers, each element representing the height of a hill at index i, return the total volume of water trapped across all hills during rainy weather.
* for water to trap a given hill, there must be at least one hill on its left and right side that both have greater elevation than the given hill (_i.e. `[3, 1, 2]`: index 1 is trapped by water_)
* if a hill is the first or last element, its left or right side max elevation respectfully, is itself (_i.e. `[3, 1, 2]`: index 0 has a left max elevation of 3_)
* The total volume of water trapped at a given hill is calculated by the following formula: $min(maxLeft, maxRight) - currElevation$
```js
elevations = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
output: 6
explanation:
    Index 2 = 1 - 0 = 1
    Index 4 = 2 - 1 = 1
    Index 5 = 2 - 0 = 2
    Index 6 = 2 - 1 = 1
    Index 9 = 2 - 1 = 1
                    +
    --------------------
    Total volume      6
```
* N is an integer between 1 - 100,000
* Each element is an integer between 0 - 100

# Plan
* **UI** - command line
* **Input** - array elevations of N integers
* **Output** - integer total volume trapped
* **Process** - _get array elevations > traverse through elevations visiting each element > create a prefix storing max elevations on left side > traverse through elevations again > track a suffix variable of max elevation on right side > calculate volume trapped at each qualifying element > accumulate trapped water > return total volume trapped_

# Algorithm
**NOTES:** - the solution below uses a **prefix** and a **suffix** solution.
* the prefix stores the max elevation from the left side of a given index
* the suffix stores the max elevation from the right side of a given index
* the second pass computes the volume trapped at a given index using the prefix result array and the suffix variable, accumulating the value in total volume trapped
```js
FUNCTION: getTotalVolume(elevations)
SET total volume to 0
SET max so far to first element of elevations
SET result to empty array of elevations length
SET first element of result to max so far
FOR each elevation of elevations starting at:second element:left to right
    SET max so far to MAX of (itself OR current elevation)
    SET result at current position to max so far
ENDFOR
SET max so far to last element of elevations
FOR each elevation of elevations starting at:last element:right to left
    SET max so far to MAX of (itself OR current elevation)
    IF result prefix IS GREATER THAN current elevation AND max so far suffix IS GREATER THAN current elevation THAN
        SET result at current position to MIN of (prefix OR suffix) - current elevation
        SET total volume to itself + current result
    ENDIF
    ELSE
        SET result at current position to 0
    ENDELSE
ENDFOR
RETURN total volume
```
