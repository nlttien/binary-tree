const BinaryTreeNode = require('../src/binary-tree-node');

/**
 * Exercise 3: Tree Validation
 * Validate different properties of binary trees
 */

/**
 * Check if a binary tree is a valid binary search tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {boolean} - True if the tree is a valid BST
 */
function isValidBST(root) {
    return validateBST(root, null, null);
}

function validateBST(node, min, max) {
    if (node === null) {
        return true;
    }
    
    // Check if current node violates BST property
    if ((min !== null && node.value <= min) || 
        (max !== null && node.value >= max)) {
        return false;
    }
    
    // Recursively validate left and right subtrees
    return validateBST(node.left, min, node.value) && 
           validateBST(node.right, node.value, max);
}

/**
 * Check if a binary tree is balanced
 * A balanced tree has height difference of at most 1 between left and right subtrees
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {boolean} - True if the tree is balanced
 */
function isBalanced(root) {
    return checkBalance(root) !== -1;
}

function checkBalance(node) {
    if (node === null) {
        return 0;
    }
    
    const leftHeight = checkBalance(node.left);
    if (leftHeight === -1) return -1; // Left subtree is not balanced
    
    const rightHeight = checkBalance(node.right);
    if (rightHeight === -1) return -1; // Right subtree is not balanced
    
    // Check if current node is balanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1; // Current node is not balanced
    }
    
    return Math.max(leftHeight, rightHeight) + 1;
}

/**
 * Check if a binary tree is complete
 * A complete binary tree has all levels filled except possibly the last level,
 * which is filled from left to right
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {boolean} - True if the tree is complete
 */
function isComplete(root) {
    if (root === null) {
        return true;
    }
    
    const queue = [root];
    let foundNull = false;
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node === null) {
            foundNull = true;
        } else {
            // If we found a null before and now we see a non-null node, it's not complete
            if (foundNull) {
                return false;
            }
            
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    return true;
}

/**
 * Check if a binary tree is perfect
 * A perfect binary tree has all internal nodes with two children and all leaves at the same level
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {boolean} - True if the tree is perfect
 */
function isPerfect(root) {
    if (root === null) {
        return true;
    }
    
    const treeHeight = getHeight(root);
    return isPerfectRecursive(root, treeHeight, 0);
}

function isPerfectRecursive(node, height, level) {
    if (node === null) {
        return true;
    }
    
    // If it's a leaf, check if it's at the correct level
    if (node.isLeaf()) {
        return level === height;
    }
    
    // If it's not a leaf, it must have both children
    if (!node.hasBothChildren()) {
        return false;
    }
    
    // Recursively check both subtrees
    return isPerfectRecursive(node.left, height, level + 1) &&
           isPerfectRecursive(node.right, height, level + 1);
}

function getHeight(node) {
    if (node === null) {
        return -1;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

/**
 * Check if a binary tree is symmetric (mirror of itself)
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {boolean} - True if the tree is symmetric
 */
function isSymmetric(root) {
    if (root === null) {
        return true;
    }
    
    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    // Both are null
    if (left === null && right === null) {
        return true;
    }
    
    // One is null, the other is not
    if (left === null || right === null) {
        return false;
    }
    
    // Values must be equal and subtrees must be mirrors
    return (left.value === right.value) &&
           isMirror(left.left, right.right) &&
           isMirror(left.right, right.left);
}

/**
 * Check if one tree is a subtree of another
 * @param {BinaryTreeNode} mainTree - Root of the main tree
 * @param {BinaryTreeNode} subTree - Root of the potential subtree
 * @returns {boolean} - True if subTree is a subtree of mainTree
 */
function isSubtree(mainTree, subTree) {
    if (subTree === null) {
        return true; // Empty tree is subtree of any tree
    }
    
    if (mainTree === null) {
        return false; // Non-empty tree cannot be subtree of empty tree
    }
    
    // Check if trees rooted at current node are identical
    if (areIdentical(mainTree, subTree)) {
        return true;
    }
    
    // Recursively check in left and right subtrees
    return isSubtree(mainTree.left, subTree) || 
           isSubtree(mainTree.right, subTree);
}

function areIdentical(root1, root2) {
    if (root1 === null && root2 === null) {
        return true;
    }
    
    if (root1 === null || root2 === null) {
        return false;
    }
    
    return (root1.value === root2.value) &&
           areIdentical(root1.left, root2.left) &&
           areIdentical(root1.right, root2.right);
}

module.exports = {
    isValidBST,
    isBalanced,
    isComplete,
    isPerfect,
    isSymmetric,
    isSubtree
};