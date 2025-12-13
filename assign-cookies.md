# Problem
Given array A of N integers representing child greed levels, and array S of M integers representing cookie sizes, return the maximum number of content children given the cookies in S. Each child can get at most 1 cookie.
```js
A = [1,2,3], S = [1,1]
Answer: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.

A = [1,2], s = [1,2,3]
Answer: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. You have 3 cookies and their sizes are big enough to gratify all of the children.
```
* N is an integer between 1 - 30,000
* M is an integer between 0 - 30,000
* 1 <= A[i], S[i] <= 2,147,483,647

# Plan
* **UI** - command line
* **Input** - array A of N child greed levels, and array S of M cookie sizes
* **Output** - maximum number of content children
* **Process** - _get array A and array S > check if S is greater than 0 > loop through the smaller array > track cookie-child cancellations > return count_

# Algorithm
```js
FUNCTCION: getMaxNumChildren(A, S)
IF S length IS EQUAL TO 0 THEN
    RETURN 0
ENDIF
SET satisfied count to 0
SET child index to 0
SET cookie index to 0
WHILE child index IS LESS THAN A length AND cookie index IS LESS THAN S length
    IF current cookie size IS GREATER THAN OR EQUAL to current child THEN
        INCREMENT count
        INCREMENT child index
    ENDIF
    INCREMENT cookie index
ENDWHILE
RETURN count
```
