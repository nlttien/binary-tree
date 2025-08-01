const BinaryTreeNode = require('../src/binary-tree-node');
const {
    height,
    depth,
    countNodes,
    countLeaves,
    findMin,
    findMax,
    diameter,
    areIdentical
} = require('../exercises/02-tree-properties');
const { test, assertEquals, assertTrue, assertFalse } = require('./test-utils');

console.log('Running Tree Properties Exercise Tests...\n');

// Create test trees
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6
const tree1 = new BinaryTreeNode(1);
tree1.left = new BinaryTreeNode(2);
tree1.right = new BinaryTreeNode(3);
tree1.left.left = new BinaryTreeNode(4);
tree1.left.right = new BinaryTreeNode(5);
tree1.right.right = new BinaryTreeNode(6);

// Single node tree
const singleNode = new BinaryTreeNode(42);

test('Height of empty tree should be -1', () => {
    assertEquals(height(null), -1);
});

test('Height of single node should be 0', () => {
    assertEquals(height(singleNode), 0);
});

test('Height of test tree should be 2', () => {
    assertEquals(height(tree1), 2);
});

test('Depth should work correctly', () => {
    assertEquals(depth(tree1, 1), 0); // Root
    assertEquals(depth(tree1, 2), 1); // Left child
    assertEquals(depth(tree1, 4), 2); // Leaf
    assertEquals(depth(tree1, 99), -1); // Not found
});

test('Count nodes should work correctly', () => {
    assertEquals(countNodes(null), 0);
    assertEquals(countNodes(singleNode), 1);
    assertEquals(countNodes(tree1), 6);
});

test('Count leaves should work correctly', () => {
    assertEquals(countLeaves(null), 0);
    assertEquals(countLeaves(singleNode), 1);
    assertEquals(countLeaves(tree1), 3); // Nodes 4, 5, 6
});

test('Find min should work correctly', () => {
    assertEquals(findMin(null), null);
    assertEquals(findMin(singleNode), 42);
    assertEquals(findMin(tree1), 1);
});

test('Find max should work correctly', () => {
    assertEquals(findMax(null), null);
    assertEquals(findMax(singleNode), 42);
    assertEquals(findMax(tree1), 6);
});

test('Diameter should work correctly', () => {
    assertEquals(diameter(null), 0);
    assertEquals(diameter(singleNode), 0);
    assertEquals(diameter(tree1), 4); // Path from 4 to 6: 4-2-1-3-6
});

test('areIdentical should work correctly', () => {
    // Create identical tree
    const tree2 = new BinaryTreeNode(1);
    tree2.left = new BinaryTreeNode(2);
    tree2.right = new BinaryTreeNode(3);
    tree2.left.left = new BinaryTreeNode(4);
    tree2.left.right = new BinaryTreeNode(5);
    tree2.right.right = new BinaryTreeNode(6);
    
    assertTrue(areIdentical(tree1, tree2));
    assertTrue(areIdentical(null, null));
    assertFalse(areIdentical(tree1, null));
    assertFalse(areIdentical(null, tree1));
    
    // Create different tree
    const tree3 = new BinaryTreeNode(1);
    tree3.left = new BinaryTreeNode(2);
    tree3.right = new BinaryTreeNode(7); // Different value
    
    assertFalse(areIdentical(tree1, tree3));
});

console.log('Tree Properties Exercise Tests Completed!');

module.exports = {
    tree1,
    singleNode
};