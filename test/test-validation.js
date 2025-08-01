const BinaryTreeNode = require('../src/binary-tree-node');
const {
    isValidBST,
    isBalanced,
    isComplete,
    isPerfect,
    isSymmetric,
    isSubtree
} = require('../exercises/03-tree-validation');
const { test, assertEquals, assertTrue, assertFalse } = require('./test-utils');

console.log('Running Tree Validation Exercise Tests...\n');

// Create test trees

// Valid BST:    5
//              / \
//             3   7
//            / \ / \
//           1  4 6  9
const validBST = new BinaryTreeNode(5);
validBST.left = new BinaryTreeNode(3);
validBST.right = new BinaryTreeNode(7);
validBST.left.left = new BinaryTreeNode(1);
validBST.left.right = new BinaryTreeNode(4);
validBST.right.left = new BinaryTreeNode(6);
validBST.right.right = new BinaryTreeNode(9);

// Invalid BST:  5
//              / \
//             3   7
//            / \ 
//           1   6  (6 > 5, violates BST property)
const invalidBST = new BinaryTreeNode(5);
invalidBST.left = new BinaryTreeNode(3);
invalidBST.right = new BinaryTreeNode(7);
invalidBST.left.left = new BinaryTreeNode(1);
invalidBST.left.right = new BinaryTreeNode(6); // Invalid!

// Balanced tree: 1
//               / \
//              2   3
//             / \
//            4   5
const balancedTree = new BinaryTreeNode(1);
balancedTree.left = new BinaryTreeNode(2);
balancedTree.right = new BinaryTreeNode(3);
balancedTree.left.left = new BinaryTreeNode(4);
balancedTree.left.right = new BinaryTreeNode(5);

// Unbalanced tree: 1
//                 / \
//                2   3
//               /
//              4
//             /
//            5
const unbalancedTree = new BinaryTreeNode(1);
unbalancedTree.left = new BinaryTreeNode(2);
unbalancedTree.right = new BinaryTreeNode(3);
unbalancedTree.left.left = new BinaryTreeNode(4);
unbalancedTree.left.left.left = new BinaryTreeNode(5);

// Complete tree: same as balancedTree

// Perfect tree:  1
//               / \
//              2   3
//             /|  |\ 
//            4 5  6 7
const perfectTree = new BinaryTreeNode(1);
perfectTree.left = new BinaryTreeNode(2);
perfectTree.right = new BinaryTreeNode(3);
perfectTree.left.left = new BinaryTreeNode(4);
perfectTree.left.right = new BinaryTreeNode(5);
perfectTree.right.left = new BinaryTreeNode(6);
perfectTree.right.right = new BinaryTreeNode(7);

// Symmetric tree:  1
//                 / \
//                2   2
//               / \ / \
//              3  4 4  3
const symmetricTree = new BinaryTreeNode(1);
symmetricTree.left = new BinaryTreeNode(2);
symmetricTree.right = new BinaryTreeNode(2);
symmetricTree.left.left = new BinaryTreeNode(3);
symmetricTree.left.right = new BinaryTreeNode(4);
symmetricTree.right.left = new BinaryTreeNode(4);
symmetricTree.right.right = new BinaryTreeNode(3);

test('isValidBST should work correctly', () => {
    assertTrue(isValidBST(validBST));
    assertFalse(isValidBST(invalidBST));
    assertTrue(isValidBST(null)); // Empty tree is valid BST
    
    const singleNode = new BinaryTreeNode(5);
    assertTrue(isValidBST(singleNode));
});

test('isBalanced should work correctly', () => {
    assertTrue(isBalanced(balancedTree));
    assertFalse(isBalanced(unbalancedTree));
    assertTrue(isBalanced(null)); // Empty tree is balanced
    
    const singleNode = new BinaryTreeNode(5);
    assertTrue(isBalanced(singleNode));
});

test('isComplete should work correctly', () => {
    assertTrue(isComplete(balancedTree));
    assertTrue(isComplete(perfectTree));
    assertFalse(isComplete(unbalancedTree));
    assertTrue(isComplete(null)); // Empty tree is complete
});

test('isPerfect should work correctly', () => {
    assertTrue(isPerfect(perfectTree));
    assertFalse(isPerfect(balancedTree));
    assertFalse(isPerfect(unbalancedTree));
    assertTrue(isPerfect(null)); // Empty tree is perfect
    
    const singleNode = new BinaryTreeNode(5);
    assertTrue(isPerfect(singleNode));
});

test('isSymmetric should work correctly', () => {
    assertTrue(isSymmetric(symmetricTree));
    assertFalse(isSymmetric(balancedTree));
    assertTrue(isSymmetric(null)); // Empty tree is symmetric
    
    const singleNode = new BinaryTreeNode(5);
    assertTrue(isSymmetric(singleNode));
});

test('isSubtree should work correctly', () => {
    // Create subtree: 2
    //                / \
    //               4   5
    const subtree = new BinaryTreeNode(2);
    subtree.left = new BinaryTreeNode(4);
    subtree.right = new BinaryTreeNode(5);
    
    assertTrue(isSubtree(balancedTree, subtree));
    assertFalse(isSubtree(subtree, balancedTree));
    assertTrue(isSubtree(balancedTree, null)); // Empty tree is subtree of any tree
});

console.log('Tree Validation Exercise Tests Completed!');

module.exports = {
    validBST,
    invalidBST,
    balancedTree,
    unbalancedTree,
    perfectTree,
    symmetricTree
};