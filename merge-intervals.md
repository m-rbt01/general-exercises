# Problem
Given an array A of N subarray intervals I, of M integers _start_ and _end_, merge all overlapping intervals, and return an array of the non-overlapping intervals after the merger.
```js
A = [[1,3],[2,6],[8,10],[15,18]]
Answer: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

A = [[1,4],[4,5]]
Answer: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

A = [[4,7],[1,4]]
Answer: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.

A = [[2,3],[4,5],[6,7],[8,9],[1,10]]
[[2,3],[4,5],[6,7],[1,10]]
Answer: [[1,10]]
```
* N is an integer between 1 - 10,000
* M is an integer of 2
* 0 <= start <= end <= 10,000
* A start that is <= to previous end is considered overlapping

# Plan
* **UI** - command line
* **Input** - array A of N subarray intervals I, of M integers start and end
* **Output** - merged array
* **Process** - _get array A > sort A by I ends in ascending order > add A intervals to new array B > check for overlapping intervals > keep smallest starts and greatest ends > return B_

# Algorithm
**NOTES:** The following solution sorts array A in ascending order similar to non-overlapping-intervals, but **based on earliest start values**, not end values. This is because merging intervals involves keeping the smallest start, and the greatest end among two given intervals. For the algorithm to work with all test cases, A needs to be sorted in earliest start to largest start order. This is because after a merge, a given interval may now have a start that overlaps with a previous interval requiring another merge (_greedy algorithm cannot undo change or revisit previous steps_). The loop then ensures that a **given interval is merged upon encountering an overlap**, minimizing overlapped intervals and maximizing merged intervals.
```js
FUNCTION: getMergedIntervalsArray(A)
SORT A in ascending order based on start values
SET merged array set with first A interval
SET write to 0
FOR intervals of A starting at read:1
    IF current start is LESS THAN OR EQUAL to previous merged end THEN
        SET smallest start to MATH MIN of (current start and previous start)
        SET greatest end to MATH MAX of (current end and previous end)
        SET previous interval of merged array to smallest start and greatest end
    ENDIF
    ELSE
        PUSH current start and end to merged array
        INCREMENT write
    ENDELSE
ENDFOR
RETURN merged array
```
