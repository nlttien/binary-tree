const BinaryTreeNode = require('../src/binary-tree-node');

/**
 * Exercise 4: Path and Sum Problems
 * Find paths and calculate sums in binary trees
 */

/**
 * Find all root-to-leaf paths in the tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {Array<Array>} - Array of all root-to-leaf paths
 */
function findAllPaths(root) {
    const paths = [];
    if (root === null) {
        return paths;
    }
    
    findPathsRecursive(root, [], paths);
    return paths;
}

function findPathsRecursive(node, currentPath, allPaths) {
    if (node === null) {
        return;
    }
    
    // Add current node to path
    currentPath.push(node.value);
    
    // If it's a leaf, add the path to results
    if (node.isLeaf()) {
        allPaths.push([...currentPath]); // Create a copy of current path
    } else {
        // Continue searching in left and right subtrees
        findPathsRecursive(node.left, currentPath, allPaths);
        findPathsRecursive(node.right, currentPath, allPaths);
    }
    
    // Backtrack: remove current node from path
    currentPath.pop();
}

/**
 * Check if there's a root-to-leaf path with given sum
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @param {number} targetSum - Target sum to find
 * @returns {boolean} - True if such path exists
 */
function hasPathSum(root, targetSum) {
    if (root === null) {
        return false;
    }
    
    // If it's a leaf, check if the value equals remaining sum
    if (root.isLeaf()) {
        return root.value === targetSum;
    }
    
    // Recursively check in left and right subtrees with reduced target
    const remainingSum = targetSum - root.value;
    return hasPathSum(root.left, remainingSum) || 
           hasPathSum(root.right, remainingSum);
}

/**
 * Find all root-to-leaf paths with given sum
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @param {number} targetSum - Target sum to find
 * @returns {Array<Array>} - Array of all paths with target sum
 */
function findPathsWithSum(root, targetSum) {
    const result = [];
    if (root === null) {
        return result;
    }
    
    findPathsWithSumRecursive(root, targetSum, [], result);
    return result;
}

function findPathsWithSumRecursive(node, remainingSum, currentPath, result) {
    if (node === null) {
        return;
    }
    
    // Add current node to path
    currentPath.push(node.value);
    
    // If it's a leaf and sum matches, add path to result
    if (node.isLeaf() && node.value === remainingSum) {
        result.push([...currentPath]);
    } else {
        // Continue searching with reduced sum
        const newSum = remainingSum - node.value;
        findPathsWithSumRecursive(node.left, newSum, currentPath, result);
        findPathsWithSumRecursive(node.right, newSum, currentPath, result);
    }
    
    // Backtrack
    currentPath.pop();
}

/**
 * Calculate the maximum path sum in the tree (path can start and end at any nodes)
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @returns {number} - Maximum path sum
 */
function maxPathSum(root) {
    let maxSum = -Infinity;
    
    function maxGain(node) {
        if (node === null) {
            return 0;
        }
        
        // Maximum gain from left and right subtrees (ignore negative gains)
        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);
        
        // Maximum path sum passing through current node
        const currentMaxPath = node.value + leftGain + rightGain;
        
        // Update global maximum
        maxSum = Math.max(maxSum, currentMaxPath);
        
        // Return maximum gain if we continue path from current node
        return node.value + Math.max(leftGain, rightGain);
    }
    
    maxGain(root);
    return maxSum;
}

/**
 * Find the lowest common ancestor (LCA) of two nodes
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @param {*} p - Value of first node
 * @param {*} q - Value of second node
 * @returns {BinaryTreeNode|null} - LCA node or null if not found
 */
function lowestCommonAncestor(root, p, q) {
    if (root === null) {
        return null;
    }
    
    // If current node is one of the target nodes
    if (root.value === p || root.value === q) {
        return root;
    }
    
    // Search in left and right subtrees
    const leftLCA = lowestCommonAncestor(root.left, p, q);
    const rightLCA = lowestCommonAncestor(root.right, p, q);
    
    // If both left and right return non-null, current node is LCA
    if (leftLCA !== null && rightLCA !== null) {
        return root;
    }
    
    // Return non-null result (could be null if neither subtree contains the nodes)
    return leftLCA !== null ? leftLCA : rightLCA;
}

/**
 * Find the distance between two nodes in the tree
 * @param {BinaryTreeNode} root - Root of the binary tree
 * @param {*} a - Value of first node
 * @param {*} b - Value of second node
 * @returns {number} - Distance between the nodes (-1 if either node not found)
 */
function findDistance(root, a, b) {
    const lca = lowestCommonAncestor(root, a, b);
    if (lca === null) {
        return -1; // One or both nodes not found
    }
    
    const distanceA = findDistanceFromNode(lca, a);
    const distanceB = findDistanceFromNode(lca, b);
    
    if (distanceA === -1 || distanceB === -1) {
        return -1; // One of the nodes not found
    }
    
    return distanceA + distanceB;
}

function findDistanceFromNode(root, target) {
    if (root === null) {
        return -1;
    }
    
    if (root.value === target) {
        return 0;
    }
    
    const leftDistance = findDistanceFromNode(root.left, target);
    if (leftDistance !== -1) {
        return leftDistance + 1;
    }
    
    const rightDistance = findDistanceFromNode(root.right, target);
    if (rightDistance !== -1) {
        return rightDistance + 1;
    }
    
    return -1;
}

module.exports = {
    findAllPaths,
    hasPathSum,
    findPathsWithSum,
    maxPathSum,
    lowestCommonAncestor,
    findDistance
};