const BinaryTreeNode = require('../src/binary-tree-node');

/**
 * Exercise 1: Tree Traversal
 * Implement different tree traversal methods
 */

/**
 * Perform inorder traversal of a binary tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {Array} - Array of values in inorder
 */
function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (node !== null) {
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }
    }
    
    traverse(root);
    return result;
}

/**
 * Perform preorder traversal of a binary tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {Array} - Array of values in preorder
 */
function preorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (node !== null) {
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }
    }
    
    traverse(root);
    return result;
}

/**
 * Perform postorder traversal of a binary tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {Array} - Array of values in postorder
 */
function postorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (node !== null) {
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        }
    }
    
    traverse(root);
    return result;
}

/**
 * Perform level-order traversal of a binary tree (BFS)
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {Array} - Array of values in level order
 */
function levelOrderTraversal(root) {
    if (root === null) {
        return [];
    }
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);
        
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    
    return result;
}

/**
 * Perform iterative inorder traversal using stack
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {Array} - Array of values in inorder
 */
function inorderTraversalIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        // Go to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current must be null at this point
        current = stack.pop();
        result.push(current.value);
        
        // We have visited the node and its left subtree, now it's right subtree's turn
        current = current.right;
    }
    
    return result;
}

module.exports = {
    inorderTraversal,
    preorderTraversal,
    postorderTraversal,
    levelOrderTraversal,
    inorderTraversalIterative
};