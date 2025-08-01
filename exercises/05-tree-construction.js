const BinaryTreeNode = require('../src/binary-tree-node');

/**
 * Exercise 5: Tree Construction
 * Build binary trees from different representations
 */

/**
 * Build a binary tree from inorder and preorder traversal arrays
 * @param {Array} preorder - Preorder traversal array
 * @param {Array} inorder - Inorder traversal array
 * @returns {BinaryTreeNode|null} - Root of the constructed tree
 */
function buildTreeFromPreorderInorder(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    
    // Create a map for quick lookup of indices in inorder array
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    
    let preorderIndex = 0;
    
    function buildTree(inorderStart, inorderEnd) {
        if (inorderStart > inorderEnd) {
            return null;
        }
        
        // The first element in preorder is always the root
        const rootValue = preorder[preorderIndex++];
        const root = new BinaryTreeNode(rootValue);
        
        // Find the root position in inorder array
        const rootIndex = inorderMap.get(rootValue);
        
        // Build left subtree first (important for preorder)
        root.left = buildTree(inorderStart, rootIndex - 1);
        root.right = buildTree(rootIndex + 1, inorderEnd);
        
        return root;
    }
    
    return buildTree(0, inorder.length - 1);
}

/**
 * Build a binary tree from inorder and postorder traversal arrays
 * @param {Array} inorder - Inorder traversal array
 * @param {Array} postorder - Postorder traversal array
 * @returns {BinaryTreeNode|null} - Root of the constructed tree
 */
function buildTreeFromInorderPostorder(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }
    
    // Create a map for quick lookup of indices in inorder array
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    
    let postorderIndex = postorder.length - 1;
    
    function buildTree(inorderStart, inorderEnd) {
        if (inorderStart > inorderEnd) {
            return null;
        }
        
        // The last element in postorder is always the root
        const rootValue = postorder[postorderIndex--];
        const root = new BinaryTreeNode(rootValue);
        
        // Find the root position in inorder array
        const rootIndex = inorderMap.get(rootValue);
        
        // Build right subtree first (important for postorder)
        root.right = buildTree(rootIndex + 1, inorderEnd);
        root.left = buildTree(inorderStart, rootIndex - 1);
        
        return root;
    }
    
    return buildTree(0, inorder.length - 1);
}

/**
 * Build a complete binary tree from level-order array
 * @param {Array} levelOrder - Level-order traversal array (null represents missing nodes)
 * @returns {BinaryTreeNode|null} - Root of the constructed tree
 */
function buildTreeFromLevelOrder(levelOrder) {
    if (levelOrder.length === 0 || levelOrder[0] === null) {
        return null;
    }
    
    const root = new BinaryTreeNode(levelOrder[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < levelOrder.length) {
        const node = queue.shift();
        
        // Add left child
        if (i < levelOrder.length && levelOrder[i] !== null) {
            node.left = new BinaryTreeNode(levelOrder[i]);
            queue.push(node.left);
        }
        i++;
        
        // Add right child
        if (i < levelOrder.length && levelOrder[i] !== null) {
            node.right = new BinaryTreeNode(levelOrder[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

/**
 * Build a binary search tree from a sorted array
 * @param {Array} sortedArray - Sorted array of values
 * @returns {BinaryTreeNode|null} - Root of the balanced BST
 */
function buildBSTFromSortedArray(sortedArray) {
    if (sortedArray.length === 0) {
        return null;
    }
    
    function buildBalancedBST(start, end) {
        if (start > end) {
            return null;
        }
        
        // Choose middle element as root to ensure balance
        const mid = Math.floor((start + end) / 2);
        const root = new BinaryTreeNode(sortedArray[mid]);
        
        // Recursively build left and right subtrees
        root.left = buildBalancedBST(start, mid - 1);
        root.right = buildBalancedBST(mid + 1, end);
        
        return root;
    }
    
    return buildBalancedBST(0, sortedArray.length - 1);
}

/**
 * Build a binary tree from string representation with parentheses
 * Format: "1(2(4)(5))(3(6)(7))" where numbers are node values and parentheses indicate children
 * @param {string} str - String representation of the tree
 * @returns {BinaryTreeNode|null} - Root of the constructed tree
 */
function buildTreeFromString(str) {
    if (!str || str.length === 0) {
        return null;
    }
    
    let index = 0;
    
    function parseTree() {
        if (index >= str.length) {
            return null;
        }
        
        // Parse the number
        let num = '';
        while (index < str.length && str[index] !== '(' && str[index] !== ')') {
            num += str[index];
            index++;
        }
        
        if (num === '') {
            return null;
        }
        
        const node = new BinaryTreeNode(parseInt(num));
        
        // Check for left child
        if (index < str.length && str[index] === '(') {
            index++; // Skip '('
            node.left = parseTree();
            if (index < str.length && str[index] === ')') {
                index++; // Skip ')'
            }
        }
        
        // Check for right child
        if (index < str.length && str[index] === '(') {
            index++; // Skip '('
            node.right = parseTree();
            if (index < str.length && str[index] === ')') {
                index++; // Skip ')'
            }
        }
        
        return node;
    }
    
    return parseTree();
}

/**
 * Convert a binary tree to its string representation
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {string} - String representation of the tree
 */
function treeToString(root) {
    if (root === null) {
        return '';
    }
    
    let result = root.value.toString();
    
    if (root.left !== null || root.right !== null) {
        result += '(' + treeToString(root.left) + ')';
        
        if (root.right !== null) {
            result += '(' + treeToString(root.right) + ')';
        }
    }
    
    return result;
}

/**
 * Serialize a binary tree to array representation (level-order with nulls)
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {Array} - Array representation of the tree
 */
function serialize(root) {
    if (root === null) {
        return [];
    }
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node === null) {
            result.push(null);
        } else {
            result.push(node.value);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    // Remove trailing nulls
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }
    
    return result;
}

/**
 * Deserialize array representation back to binary tree
 * @param {Array} data - Array representation of the tree
 * @returns {BinaryTreeNode|null} - Root of the reconstructed tree
 */
function deserialize(data) {
    return buildTreeFromLevelOrder(data);
}

module.exports = {
    buildTreeFromPreorderInorder,
    buildTreeFromInorderPostorder,
    buildTreeFromLevelOrder,
    buildBSTFromSortedArray,
    buildTreeFromString,
    treeToString,
    serialize,
    deserialize
};