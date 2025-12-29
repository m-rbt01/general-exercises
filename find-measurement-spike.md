# Problem
Given an array measurements of N integers, representing recorded measurements, return the index of the first spike in measurements, if no spike exits return -1. A spike is a value that is **at least three times greater** than the maximum of all previous values.
```js
Example 1:
measurements = [3, 10, 2, 7]
output: 1
explanation: The initial maximum is the first element 3. Moving on to the second element, 10 is >= 3 * 3 (i.e. 9), so the first spike index is 1.

Example 2:
measurements = [2, 1, 5]
output: -1
explanation: The initial maximum is the first element 2. Moving on to the second element, 1 is not >= 2 * 3 (i.e. 6). Moving on to the last element, 5 is not >= 2 * 3, so no spike exists.
```
* N is an integer between 2 - 200,000
* Each element of measurements is an integer between 1 - 1,000,000,000

# Plan
* **UI** - command line
* **Input** - array measurements of N integers
* **Output** - integer index
* **Process** - _get array measurements > loop through the measurements > identify the maximum value so far > determine if a given value is a spike > return the spike index or -1 if none exists_

# Algorithm
```js
FUNCTION: getSpikePosition(measurements)
SET max to first element of measurements
FOR each num of measurements starting at:second element
    IF num IS GREATER THAN max THEN
        IF num IS GREATER THAN OR EQUAL TO max * 3 THEN
            RETURN index
        ENDIF
        SET max to num
    ENDIF
ENDFOR
RETURN -1
```