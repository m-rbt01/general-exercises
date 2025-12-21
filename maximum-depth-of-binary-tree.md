# Problem
Given the root of binary tree T of N nodes, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node to the deepest leaf node (_i.e. no children_).

**Example 1 visual:**
![Example 1 binary tree](./images/max-depth-binary-tree-img-1.jpg)
```js
Example 1:
T = [3,9,20,null,null,15,7]
Output: 3

Example 2:
T = [1,null,2]
Output: 2
```
* N is an integer between 0 - 10,000
* Each node value is an integer between -100 - 100

# Plan
* **UI** - command line
* **Input** - binary tree T of N nodes
* **Output** - integer max node count
* **Process** - _get binary tree T > recursively depth-first search traverse T > track the depth of left and right subtrees > return the maximum depth_

# Algorithm
```js
FUNCTION: getMaxTreeDepth(root)
IF root IS EQUAL TO null THEN
    RETURN 0
ENDIF
SET left depth to RECURSIVE CALL on left child node
SET right depth to RECURSIVE CALL on right child node
RETURN the MATH MAXIMUM between (left depth AND right depth) + 1 (current node)
```
