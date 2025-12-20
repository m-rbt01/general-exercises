# Problem
Given the root R of a given binary tree of N nodes, invert the tree, and return it's new root. Inverting means, for each node, swap it's left and right children nodes.

**Example 1:**
![Binary Tree for example 1](./images/invert-binary-tree-img-1.jpg)
**Example 2:**
![Binary tree for example 2](images/invert-binary-tree-img-2.jpg)
```js
Example 1:
T = [4,2,7,1,3,6,9] 
Output: [4,7,2,9,6,3,1]

Example 2:
T = [2,1,3]
Output: [2,3,1]

Example 3:
T = []
Output: []
```
* N is an integer between 0 - 100
* Each node value is an integer between -100 - 100

# Plan
* **UI** - command line
* **Input** - binary tree T of N nodes
* **Output** - inverted binary tree
* **Process** - _get binary tree root R > recursively traverse to most inner children > swap children > swap parents until reaching root > return new root_

# Algorithm
**NOTES:** - A **binary tree** is a hierarchical data structure where each **node** (_i.e. containing a data value, left-pointer, and right-pointer_) contains at most two children-nodes. Common in _binary search trees_, a left child node’s value is usually smaller than it’s parent node, and a right child node’s value is greater than it’s parent node. The following solution uses recursive calls with **post-order traversal** to not swap a given node’s children **UNTIL** all deeper children have already been inverted.
```js
CLASS: TreeNode
CONSTRUCTOR: constructor(value, left, right)
SET this value to (0 IF undefined OR value)
SET this left to (null IF undefined OR left)
SET this right to (null IF undefined OR right)

FUNCTION: invertTree(R)
IF r IS EQUAL TO null THEN
    RETURN null
ENDIF
INVERT left child of r
INVERT right child of r
DECONSTRUCT SWAP left and right child
RETURN node
```
