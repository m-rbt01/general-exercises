# Problem
Given an array A of N subarrays H, of M integers _start_ and _end_, representing a balloons horizontal diameter, return the minimum number of arrows that can be shot to burst all of the balloons. An arrow shot vertically along the x-axis at _x_ can burst a given balloon if _x_ is between its _start_ and _end_ (_inclusive_). There is no limit on the number of arrows that can be shot, and a single arrow keeps going up bursting any balloons in its path.
```js
A = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

A = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

A = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
```
* N is an integer between 1 - 100,000
* M is an integer of 2
* -2,147,483,648 <= start < end <= 2,147,483,647

# Plan
* **UI** - command line
* **Input** - array A of N subarrays H, of M integers _start_ and _end_
* **Output** - integer S representing minimum number of shot arrows
* **Process** - _get array A w/subarrays H > sort A in ascending order based on start values > loop through A scanning H > manage sliding window from left balloons to right > track ends within range of balloon diameters > return count of those ends_

# Algorithm
```js
FUNCTION: getMinNumOfArrows(A)
SORT A in ascending order by end values
SET count to 1
SET left balloon end to first balloon end
FOR balloons of A starting at right balloon:1
    IF left balloon end IS NOT WITHIN RANGE of right balloon diameter THEN
        INCREMENT count
        SET left balloon end to right balloon end
    ENDIF
ENDFOR
RETURN count
```
