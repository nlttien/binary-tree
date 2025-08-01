const BinaryTreeNode = require('../src/binary-tree-node');

/**
 * Exercise 2: Tree Properties
 * Calculate height, depth, and other tree properties
 */

/**
 * Calculate the height of a binary tree
 * Height is the number of edges on the longest path from root to a leaf
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {number} - Height of the tree (-1 for empty tree)
 */
function height(root) {
    if (root === null) {
        return -1;
    }
    
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
}

/**
 * Calculate the depth of a specific node in the tree
 * Depth is the number of edges from root to the node
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @param {*} target - Value to find depth for
 * @returns {number} - Depth of the node (-1 if not found)
 */
function depth(root, target) {
    if (root === null) {
        return -1;
    }
    
    if (root.value === target) {
        return 0;
    }
    
    const leftDepth = depth(root.left, target);
    if (leftDepth !== -1) {
        return leftDepth + 1;
    }
    
    const rightDepth = depth(root.right, target);
    if (rightDepth !== -1) {
        return rightDepth + 1;
    }
    
    return -1;
}

/**
 * Count the total number of nodes in the tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {number} - Number of nodes
 */
function countNodes(root) {
    if (root === null) {
        return 0;
    }
    
    return 1 + countNodes(root.left) + countNodes(root.right);
}

/**
 * Count the number of leaf nodes in the tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {number} - Number of leaf nodes
 */
function countLeaves(root) {
    if (root === null) {
        return 0;
    }
    
    if (root.isLeaf()) {
        return 1;
    }
    
    return countLeaves(root.left) + countLeaves(root.right);
}

/**
 * Find the minimum value in the tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {*} - Minimum value (null if tree is empty)
 */
function findMin(root) {
    if (root === null) {
        return null;
    }
    
    let min = root.value;
    
    const leftMin = findMin(root.left);
    if (leftMin !== null && leftMin < min) {
        min = leftMin;
    }
    
    const rightMin = findMin(root.right);
    if (rightMin !== null && rightMin < min) {
        min = rightMin;
    }
    
    return min;
}

/**
 * Find the maximum value in the tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {*} - Maximum value (null if tree is empty)
 */
function findMax(root) {
    if (root === null) {
        return null;
    }
    
    let max = root.value;
    
    const leftMax = findMax(root.left);
    if (leftMax !== null && leftMax > max) {
        max = leftMax;
    }
    
    const rightMax = findMax(root.right);
    if (rightMax !== null && rightMax > max) {
        max = rightMax;
    }
    
    return max;
}

/**
 * Calculate the diameter of the tree
 * Diameter is the longest path between any two nodes
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {number} - Diameter of the tree
 */
function diameter(root) {
    if (root === null) {
        return 0;
    }
    
    // Option 1: path passes through root
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    const pathThroughRoot = leftHeight + rightHeight + 2;
    
    // Option 2: path doesn't pass through root
    const leftDiameter = diameter(root.left);
    const rightDiameter = diameter(root.right);
    
    return Math.max(pathThroughRoot, Math.max(leftDiameter, rightDiameter));
}

/**
 * Check if two trees are identical
 * @param {BinaryTreeNode} root1 - Root of first tree
 * @param {BinaryTreeNode} root2 - Root of second tree
 * @returns {boolean} - True if trees are identical
 */
function areIdentical(root1, root2) {
    // Both trees are empty
    if (root1 === null && root2 === null) {
        return true;
    }
    
    // One tree is empty, the other is not
    if (root1 === null || root2 === null) {
        return false;
    }
    
    // Compare current nodes and recursively check subtrees
    return (root1.value === root2.value) &&
           areIdentical(root1.left, root2.left) &&
           areIdentical(root1.right, root2.right);
}

module.exports = {
    height,
    depth,
    countNodes,
    countLeaves,
    findMin,
    findMax,
    diameter,
    areIdentical
};