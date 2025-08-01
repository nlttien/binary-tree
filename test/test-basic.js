const BinaryTreeNode = require('../src/binary-tree-node');
const BinarySearchTree = require('../src/binary-search-tree');
const { test, assertEquals, assertTrue, assertFalse } = require('./test-utils');

console.log('Running Binary Tree Node Tests...\n');

// Test BinaryTreeNode creation
test('BinaryTreeNode should create node with value', () => {
    const node = new BinaryTreeNode(5);
    assertEquals(node.value, 5);
    assertEquals(node.left, null);
    assertEquals(node.right, null);
});

// Test node methods
test('BinaryTreeNode isLeaf should work correctly', () => {
    const node = new BinaryTreeNode(5);
    assertTrue(node.isLeaf());
    
    node.left = new BinaryTreeNode(3);
    assertFalse(node.isLeaf());
});

test('BinaryTreeNode hasOnlyLeftChild should work correctly', () => {
    const node = new BinaryTreeNode(5);
    assertFalse(node.hasOnlyLeftChild());
    
    node.left = new BinaryTreeNode(3);
    assertTrue(node.hasOnlyLeftChild());
    
    node.right = new BinaryTreeNode(7);
    assertFalse(node.hasOnlyLeftChild());
});

test('BinaryTreeNode hasOnlyRightChild should work correctly', () => {
    const node = new BinaryTreeNode(5);
    assertFalse(node.hasOnlyRightChild());
    
    node.right = new BinaryTreeNode(7);
    assertTrue(node.hasOnlyRightChild());
    
    node.left = new BinaryTreeNode(3);
    assertFalse(node.hasOnlyRightChild());
});

test('BinaryTreeNode hasBothChildren should work correctly', () => {
    const node = new BinaryTreeNode(5);
    assertFalse(node.hasBothChildren());
    
    node.left = new BinaryTreeNode(3);
    assertFalse(node.hasBothChildren());
    
    node.right = new BinaryTreeNode(7);
    assertTrue(node.hasBothChildren());
});

console.log('\nRunning Binary Search Tree Tests...\n');

// Test BST creation
test('BST should be created empty', () => {
    const bst = new BinarySearchTree();
    assertTrue(bst.isEmpty());
    assertEquals(bst.root, null);
});

// Test BST insertion
test('BST insert should work correctly', () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(9);
    
    assertFalse(bst.isEmpty());
    assertEquals(bst.root.value, 5);
    assertEquals(bst.root.left.value, 3);
    assertEquals(bst.root.right.value, 7);
});

// Test BST search
test('BST search should find existing values', () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    
    assertTrue(bst.search(5));
    assertTrue(bst.search(3));
    assertTrue(bst.search(7));
    assertFalse(bst.search(10));
});

// Test BST traversals
test('BST inorder traversal should return sorted values', () => {
    const bst = new BinarySearchTree();
    const values = [5, 3, 7, 1, 9, 4, 6];
    values.forEach(val => bst.insert(val));
    
    const inorder = bst.inorderTraversal();
    assertEquals(inorder, [1, 3, 4, 5, 6, 7, 9]);
});

test('BST preorder traversal should work correctly', () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    
    const preorder = bst.preorderTraversal();
    assertEquals(preorder, [5, 3, 7]);
});

test('BST level order traversal should work correctly', () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(9);
    
    const levelOrder = bst.levelOrderTraversal();
    assertEquals(levelOrder, [5, 3, 7, 1, 9]);
});

// Test BST height and size
test('BST height should be calculated correctly', () => {
    const bst = new BinarySearchTree();
    assertEquals(bst.height(), -1); // Empty tree
    
    bst.insert(5);
    assertEquals(bst.height(), 0); // Single node
    
    bst.insert(3);
    bst.insert(7);
    assertEquals(bst.height(), 1); // Three nodes
});

test('BST size should be calculated correctly', () => {
    const bst = new BinarySearchTree();
    assertEquals(bst.size(), 0);
    
    bst.insert(5);
    assertEquals(bst.size(), 1);
    
    bst.insert(3);
    bst.insert(7);
    assertEquals(bst.size(), 3);
});

// Test BST deletion
test('BST delete leaf node should work correctly', () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    
    bst.delete(3);
    assertFalse(bst.search(3));
    assertTrue(bst.search(5));
    assertTrue(bst.search(7));
});

console.log('\nBinary Tree Basic Tests Completed!');

module.exports = {
    BinaryTreeNode,
    BinarySearchTree
};