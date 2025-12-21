# Problem
Given the root of binary tree T of N nodes, return true if T is height-balanced, otherwise return false. A tree is height-balanced if, for every node, the height of its left subtree and the height of its right subtree differ by at most 1. Height is defined as the number of nodes on the longest path to a leaf (_i.e. no children_).

**Example 1 visual:**

![Example 1 binary tree](./images/balanced-binary-tree-img-1.jpg)

**Example 2 visual:**

![Example 2 binary tree](./images/balanced-binary-tree-img-2.jpg)
```js
Example 1:
T = [3,9,20,null,null,15,7]
Output: true

Example 2:
T = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
T = []
Output: true
```
* N is an integer between 0 - 5000
* Each node value is an integer between -10,000 - 10,000

# Plan
* **UI** - command line
* **Input** - root of binary tree T of N nodes
* **Output** - true or false
* **Process** - _get root of T > recursively traverse T w/DFS > track the height of each subtree > return false when imbalanced height is encountered > otherwise return true after full tree is traversed_

# Algorithm
```js
FUNCTION: checkIsTreeBalanced(root)
RETURN checkHeight() on root IS NOT EQUAL TO -1

FUNCTION getTreeHeight(root)
IF root IS EQUAL TO null THEN
    RETURN null
ENDIF

SET left height to RECURSIVE CALL on left child
IF left height IS EQUAL TO -1 THEN
    RETURN -1
ENDIF
SET right height to RECURSIVE CALL on right child
IF right height IS EQUAL TO -1 THEN
    RETURN -1
ENDIF

IF absolute difference between left and right height IS GREATER THAN 1 THEN
    RETURN -1
ENDIF

RETURN MATH MAXIMUM of (left and right height) + 1 (current node inclusive)
```
