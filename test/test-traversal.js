const BinaryTreeNode = require('../src/binary-tree-node');
const { 
    inorderTraversal,
    preorderTraversal,
    postorderTraversal,
    levelOrderTraversal,
    inorderTraversalIterative
} = require('../exercises/01-tree-traversal');
const { test, assertEquals } = require('./test-utils');

console.log('Running Tree Traversal Exercise Tests...\n');

// Create a test tree:
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);
root.right.right = new BinaryTreeNode(6);

test('Inorder traversal should return [4, 2, 5, 1, 3, 6]', () => {
    const result = inorderTraversal(root);
    assertEquals(result, [4, 2, 5, 1, 3, 6]);
});

test('Preorder traversal should return [1, 2, 4, 5, 3, 6]', () => {
    const result = preorderTraversal(root);
    assertEquals(result, [1, 2, 4, 5, 3, 6]);
});

test('Postorder traversal should return [4, 5, 2, 6, 3, 1]', () => {
    const result = postorderTraversal(root);
    assertEquals(result, [4, 5, 2, 6, 3, 1]);
});

test('Level order traversal should return [1, 2, 3, 4, 5, 6]', () => {
    const result = levelOrderTraversal(root);
    assertEquals(result, [1, 2, 3, 4, 5, 6]);
});

test('Iterative inorder traversal should return [4, 2, 5, 1, 3, 6]', () => {
    const result = inorderTraversalIterative(root);
    assertEquals(result, [4, 2, 5, 1, 3, 6]);
});

test('Traversal of empty tree should return empty array', () => {
    assertEquals(inorderTraversal(null), []);
    assertEquals(preorderTraversal(null), []);
    assertEquals(postorderTraversal(null), []);
    assertEquals(levelOrderTraversal(null), []);
    assertEquals(inorderTraversalIterative(null), []);
});

test('Traversal of single node should return [value]', () => {
    const singleNode = new BinaryTreeNode(42);
    assertEquals(inorderTraversal(singleNode), [42]);
    assertEquals(preorderTraversal(singleNode), [42]);
    assertEquals(postorderTraversal(singleNode), [42]);
    assertEquals(levelOrderTraversal(singleNode), [42]);
    assertEquals(inorderTraversalIterative(singleNode), [42]);
});

console.log('Tree Traversal Exercise Tests Completed!');

module.exports = {
    testRoot: root
};