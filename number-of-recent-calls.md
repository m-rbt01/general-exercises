# Problem
Implement a RecentCounter class which counts the number of recent call requests within a specified timeframe.
* The `RecentCounter()` constructor function initializes the counter object with zero recent call requests.
* The `ping(T)` member function adds a new call request at time T, which represents a given time in milliseconds, and returns the number of requests that has happened in the past **3,000 milliseconds** (_inclusive of request T_).
* The number of recent requests includes all requests between `[T - 3000] ... [T]` (_inclusive_). 
```js
Input: ["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output:
[null, 1, 2, 3, 3]
Explanation:
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
```
* T is an integer between 1 - 109
* Each call of `ping(T)` will always increase values of T
* `ping(T)` will be called at most 10,000 times

# Plan
* **UI** - command line
* **Input** - initialization of RecentCounter class and `ping(T)` calls
* **Output** - number of recent call requests
* **Process** - _get integer T > track requests of T in array C > calculate recent range [T - 3000s] ... [T] > determine calls within this range > return the number of calls_

# Algorithm
```js
FUNCTION: RecentCounter()
SET this requests to an empty array
SET this timeframe to 3000 seconds
SET this head to 0

FUNCTION: ping(T)
PUSH t to end of requests
WHILE head IS LESS THAN requests length AND head request IS LESS THAN (T - timeframe) THEN
    INCREMENT head
ENDWHILE
RETURN N - head
```
