# Problem
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
Given the root of binary tree T of N nodes, return the level order traversal (_i.e breadth-first search: left to right from top to bottom_) of its node's values.

**Example 1 visual:**

![Example 1 binary tree](./images/binary-tree-level-order-traversal-img-1.jpg)
```js
Example 1:
T = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
T = [1]
Output: [[1]]

Example 3:
T = []
Output: []
```
* N is an integer between 0 - 2000
* Each node value is an integer between -1000 - 1000

# Plan
* **UI** - command line
* **Input** - root of binary tree T of N nodes
* **Output** - level order array of subarray nodes from T
* **Process** - _get root of binary tree T > track queue of each level in T > iterate through each node in a given level > store nodes in array > return array result_

# Algorithm
```js
CLASS: Queue
FUNCTION: constructor()
SET this items to empty Map
SET this head to 0
SET this tail to 0
FUNCTION: enqueue(item)
SET tail key value of items to item
INCREMENT this tail
FUNCTION: dequeue()
SET item to GET head key value of items
DELETE head key of items
INCREMENT this head
RETURN item
FUNCTION: front()
RETURN GET head key value of items
FUNCTION: rear()
RETURN GET tail key value of items
FUNCTION: isEmpty()
RETURN items size IS EQUAL TO 0
FUNCTION: size()
RETURN items size

FUNCTION getLevelOrderValues(root)
IF root IS EQUAL TO null THEN
    RETURN an empty array
ENDIF
SET level order values to empty array
SET node queue to array initialized to root
SET head to 0
WHILE head IS LESS THAN node queue length
    SET current level to empty array
    SET size to node queue length
    FOR nodes of node queue
        SET current to DEQUEUE node queue
        PUSH current value to current level
        IF current left child IS NOT NULL THEN
            ENQUEUE left child to node queue
        ENDIF
        IF current right child IS NOT NULL THEN
            ENQUEUE right child to node queue
        ENDIF
    ENDFOR
    PUSH current level to level order queue
ENDWHILE
RETURN level order values
```
