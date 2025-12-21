# Problem
Given array gas of N integers, each representing the amount of gas at gas[i] station, along a circular route. And given array cost of M integers, each representing the amount of gas it cost to travel from gas[i] station to the next gas[i + 1] station. 

You have a vehicle with an unlimited gas tank size, and start with an empty tank at one of the gas stations. Return the starting gas station's index if you can travel around the circuit route once (_i.e. going back to the starting station_), in clockwise direction, otherwise return -1. 

If a gas station index solution exits, it is guaranteed to be unique.
```js
Example 1:
gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

Example 2:
gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
```
* N is an integer between 1 - 100,000
* M is equal to N
* Each element of gas and cost is an integer between 0 - 10,000

# Plan
* **UI** - command line
* **Input** - array gas of N integers, and array cost of M integers
* **Output** - starting index or -1
* **Process** - _get array gas and cost > iterate through gas and cost > track starting index, running tank, and running cost > reset when the cost outweighs the tank > determine if there was a successful route > return its starting index or -1_

# Algorithm
```js
FUNCTION: getStartingGasStation(gas, cost)
SET starting station to 0
SET gas tank to 0
SET total cost to 0
SET total gas to 0
FOR stations and costs of gas and cost
    SET total gas to itself + current gas
    SET total cost to itself + current cost
    SET gas tank to itself + (current gas - current cost)
    IF gas tank IS LESS THAN 0 THEN
        SET starting station to next index
        SET gas tank to 0
    ENDIF
ENDFOR
RETURN (IF total cost IS GREATER THAN total gas) -1 OR starting station
```
