# Problem
Given an array A of N subarray meeting intervals I, of M integers _start_ and _end_, return true indicating that all meetings can be attended or false otherwise. Meetings overlap if one start time is less than a previous meeting's end time.
```js
A = [[1, 2], [2, 3], [3, 4]]
Answer: true

A = [[7, 10], [2, 4]] //sorted: [[2, 4], [7, 10]]
Answer: true

A = [[0, 30], [5, 10], [15, 20]]
Answer: false
```
* N is an integer between 1 - 100,000
* M is an integer of 2
* -1,000,000,000 <= start < end <= 1,000,000,000

# Plan
* **UI** - command line
* **Input** - array A of N subarray intervals I, of M integers start and end
* **Output** - true or false
* **Process** - _get array A > sort A in ascending order by start values > loop through array > check if any meetings overlap > return true or false_

# Algorithm
```js
FUNCTION: checkCanAttendAllMeetings(A)
SORT A in ascending order based on start values
FOR intervals of A starting at i:1
    IF current start IS LESS THAN previous end THEN
        RETURN false
    ENDIF
ENDFOR
RETURN true
```
