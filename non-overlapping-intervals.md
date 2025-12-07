# Problem
Given an array A of N subarray intervals I, of M integers start and end, return the minimum number of intervals you need to remove to make the rest of the intervals **non-overlapping**.
```js
A = [[1,2],[2,3],[3,4],[1,3]]
Answer: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

A = [[1,2],[1,2],[1,2]]
Answer: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

A = [[1,2],[2,3]]
Answer: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
```
* N is an integer between 1 - 100,000
* M is an integer of 2
* -50,000 > start > end > 50,000

# Plan
* **UI** - command line
* **Input** - Array A of N subarray intervals I, of M integers start and end
* **Output** - minimum number of removed intervals
* **Process** - _get array A > loop through A > examine subarrays I > track ends > track count of starts that are less than ends > return count_

# Algorithm
**NOTES:** A **greedy** algorithm is a method for solving optimization problems, and makes the locally optimal choice at each step with the hope that it will lead to the globally optimal result.
* _local optimization_ - select the option that seems like the best one at the immediate moment of each step
* _no backtracking_ - local decisions cannot be reversed, the algorithm will not revisit or undo a choice even if it would lead to a better global solution
* _simplicity and speed_ - these algorithms are often simpler to design and implement than other optimization techniques like dynamic programming
* _optimum (best outcome) is not guaranteed_ - these algorithms can fail in situations where the locally optimal choice leads to a suboptimal global solution

**Sorting** is the rearrangement of data structures in a specific order, and has **O(N log N) time complexity** (_efficient for large data structures_).
* when using the `sort()` method on arrays, comparing a pair of elements by subtracting _b_ from _a_ results in ascending order (_i.e. negative result indicates b is greater than a_), and subtracting _a_ from _b_ results in descending order
* **O(N log N) time complexity** breaks down a sorting problem into smaller, manageable pieces and then efficiently combines the results, with the logarithmic factor (_i.e. **log N**_) representing the depth of each steps division and the linear factor (_i.e. **N**_) representing the work done at each step

The following solution **sorts** the intervals by their end values in ascending order. Then the loop ensures that the **earliest end value is kept at each step** to leave the most room for future intervals (maximize non-overlapping intervals), and minimizes the removal of overlapping intervals.
```js
FUNCTION: getMinRemovedIntervalsCount(A)
SORT A in ascending order based on interval end values (ensures adjacent overlapped ends for minimal removal)
SET count to 0
SET last end to first interval end
FOR intervals of A starting at i:1
    IF current interval start IS LESS THAN last end THEN
        INCREMENT count
    ENDIF
    ELSE
        SET last end to current interval end
    ENDELSE
ENDFOR
RETURN count
```
