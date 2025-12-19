# Problem
Given an array A of N integers, there is a sliding window of size W which moves from the very left to the very right of the array. You can only see the W numbers in the window. Each time the sliding window moves to the right by one index. Return array S of M integers representing the maximum numbers in the sliding window.
```js
A = [1,3,-1,-3,5,3,6,7], W = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

A = [1], W = 1
Output: [1]
```
* N is an integer between 1 - 105
* W is an integer between 1 - N
* Each element is an integer between -104 - 104

# Plan
* **UI** - command line
* **Input** - array A of N integers and integer W
* **Output** - array S of M integers
* **Process** - _get array A and integer W > loop through A > maintain the sliding window of size W > track the maximum number > update S > return S_

# Algorithm
**NOTES:** A **queue** is a data structure where elements are removed from the front (First-in-First-out), and elements are added to the end. A **deque** is a data structure that follows both queue and stack practices (both FIFO and LIFO), where elements can be removed or added from either the front or end. The following solution uses a *deque* to maintain the maximum current window number at the head, and add smaller numbers to the end.
* use a *head* pointer to update the head of the deque (_using `shift()` would be **O(N) time complexity** with each function call within the loop_)
* update the deque of max indices when a given number is greater than or equal to the smallest number in the current window
* finally, update the max sliding window array with the greatest number in the current window
```js
FUNCTION: getMaxSlidingWindow(A, W)
SET max sliding window to empty array
SET max indices to empty deque
SET max head to 0
FOR nums of A starting at right:0
    IF max indices IS NOT EMPTY AND top index IS LESS THAN left window THEN
        INCREMENT max head
    ENDIF
    WHILE max indices IS NOT EMPTY AND num IS GREATER THAN OR EQUAL TO right window num
        POP end index from max indices
    ENDWHILE
    PUSH right to max indices
    IF right IS GREATER THAN OR EQUAL TO w - 1 (window size) THEN
        PUSH head of max indices num to max sliding window
    ENDIF
ENDFOR
RETURN max sliding window
```
