# Problem
Given an array A of N integers, and integer T, return the minimal length of a subarray whose sum is greater than or equal to T. If no subarray exits under these constraints, return 0.
```js
T = 7, A = [2,3,1,2,4,3]
Answer: 2 (subarray [4,3] has the minimal length under the problem constraint)

T = 4, A = [1,4,4]
Answer: 1

T = 11, A = [1,1,1,1,1,1,1,1]
Answer: 0 (no subarray sum = T)
```
* N is an integer between 1 - 100,000
* T is an integer between 1 - 1,000,000,000
* Each element value is an integer between 1 - 10,000

# Plan
* **UI** - command line
* **Input** - array A of N integers, and integer T
* **Output** - minimal size of subarray sum equal to T
* **Process** - _get array A and integer T > _

# Algorithm
**NOTES**: A **sliding window** is a pattern searching algorithm used on arrays, strings, and lists. It maintains a window (_contiguous subsection_) of elements and moves the window across the data structure. The window is set with pointers left and right. Moving the right pointer includes new elements in the window, move left pointer to remove elements. Keep track of the result as the window moves, repeat the process until you reach the end of the data structure. This approach is useful for finding a subsection that meets certain conditions (_e.g. related to sum, average, maximum, minimum, unique elements within a range_), requires all values to be positive (_negative values would decrease result_).
```js
FUNCTION: getMinimalSubarraySize(A, T)
SET sum to 0
SET left to 0
SET minimalSize to Infinity
FOR nums of A w/right at i:0
    SET sum to itself plus right
    WHILE sum IS GREATER OR EQUAL to T
        SET minimalSize to MATH MIN (itself OR right minus left plus 1)
        SET sum to itself minus left
        INCREMENT left
    ENDWHILE
ENDFOR
RETURN minimalSize IF NOT infinity, otherwise 0
```
