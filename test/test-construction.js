const BinaryTreeNode = require('../src/binary-tree-node');
const {
    buildTreeFromPreorderInorder,
    buildTreeFromInorderPostorder,
    buildTreeFromLevelOrder,
    buildBSTFromSortedArray,
    buildTreeFromString,
    treeToString,
    serialize,
    deserialize
} = require('../exercises/05-tree-construction');
const { test, assertEquals, assertTrue, assertFalse } = require('./test-utils');

console.log('Running Tree Construction Exercise Tests...\n');

// Helper function to compare tree structures
function treesEqual(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    
    return root1.value === root2.value &&
           treesEqual(root1.left, root2.left) &&
           treesEqual(root1.right, root2.right);
}

test('buildTreeFromPreorderInorder should construct tree correctly', () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    
    const root = buildTreeFromPreorderInorder(preorder, inorder);
    
    assertEquals(root.value, 3);
    assertEquals(root.left.value, 9);
    assertEquals(root.right.value, 20);
    assertEquals(root.right.left.value, 15);
    assertEquals(root.right.right.value, 7);
});

test('buildTreeFromPreorderInorder should handle empty arrays', () => {
    assertEquals(buildTreeFromPreorderInorder([], []), null);
});

test('buildTreeFromInorderPostorder should construct tree correctly', () => {
    const inorder = [9, 3, 15, 20, 7];
    const postorder = [9, 15, 7, 20, 3];
    
    const root = buildTreeFromInorderPostorder(inorder, postorder);
    
    assertEquals(root.value, 3);
    assertEquals(root.left.value, 9);
    assertEquals(root.right.value, 20);
    assertEquals(root.right.left.value, 15);
    assertEquals(root.right.right.value, 7);
});

test('buildTreeFromLevelOrder should construct tree correctly', () => {
    const levelOrder = [3, 9, 20, null, null, 15, 7];
    
    const root = buildTreeFromLevelOrder(levelOrder);
    
    assertEquals(root.value, 3);
    assertEquals(root.left.value, 9);
    assertEquals(root.right.value, 20);
    assertEquals(root.left.left, null);
    assertEquals(root.left.right, null);
    assertEquals(root.right.left.value, 15);
    assertEquals(root.right.right.value, 7);
});

test('buildTreeFromLevelOrder should handle empty array', () => {
    assertEquals(buildTreeFromLevelOrder([]), null);
    assertEquals(buildTreeFromLevelOrder([null]), null);
});

test('buildBSTFromSortedArray should create balanced BST', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7];
    
    const root = buildBSTFromSortedArray(sortedArray);
    
    assertEquals(root.value, 4); // Middle element as root
    assertEquals(root.left.value, 2);
    assertEquals(root.right.value, 6);
    assertEquals(root.left.left.value, 1);
    assertEquals(root.left.right.value, 3);
    assertEquals(root.right.left.value, 5);
    assertEquals(root.right.right.value, 7);
});

test('buildBSTFromSortedArray should handle empty array', () => {
    assertEquals(buildBSTFromSortedArray([]), null);
});

test('buildTreeFromString should construct tree correctly', () => {
    const str = "1(2(4)(5))(3()(6))";
    
    const root = buildTreeFromString(str);
    
    assertEquals(root.value, 1);
    assertEquals(root.left.value, 2);
    assertEquals(root.right.value, 3);
    assertEquals(root.left.left.value, 4);
    assertEquals(root.left.right.value, 5);
    assertEquals(root.right.left, null);
    assertEquals(root.right.right.value, 6);
});

test('buildTreeFromString should handle empty string', () => {
    assertEquals(buildTreeFromString(""), null);
    assertEquals(buildTreeFromString(null), null);
});

test('treeToString should convert tree to string correctly', () => {
    const root = new BinaryTreeNode(1);
    root.left = new BinaryTreeNode(2);
    root.right = new BinaryTreeNode(3);
    root.left.left = new BinaryTreeNode(4);
    root.left.right = new BinaryTreeNode(5);
    root.right.right = new BinaryTreeNode(6);
    
    const str = treeToString(root);
    assertEquals(str, "1(2(4)(5))(3()(6))");
});

test('treeToString should handle null tree', () => {
    assertEquals(treeToString(null), "");
});

test('serialize should convert tree to array correctly', () => {
    const root = new BinaryTreeNode(1);
    root.left = new BinaryTreeNode(2);
    root.right = new BinaryTreeNode(3);
    root.left.left = new BinaryTreeNode(4);
    root.left.right = new BinaryTreeNode(5);
    
    const serialized = serialize(root);
    assertEquals(serialized, [1, 2, 3, 4, 5]);
});

test('serialize should handle null tree', () => {
    assertEquals(serialize(null), []);
});

test('deserialize should reconstruct tree from array correctly', () => {
    const data = [1, 2, 3, 4, 5, null, 6];
    
    const root = deserialize(data);
    
    assertEquals(root.value, 1);
    assertEquals(root.left.value, 2);
    assertEquals(root.right.value, 3);
    assertEquals(root.left.left.value, 4);
    assertEquals(root.left.right.value, 5);
    assertEquals(root.right.left, null);
    assertEquals(root.right.right.value, 6);
});

test('serialize and deserialize should be inverse operations', () => {
    const root = new BinaryTreeNode(1);
    root.left = new BinaryTreeNode(2);
    root.right = new BinaryTreeNode(3);
    root.left.left = new BinaryTreeNode(4);
    root.left.right = new BinaryTreeNode(5);
    
    const serialized = serialize(root);
    const deserialized = deserialize(serialized);
    
    assertTrue(treesEqual(root, deserialized));
});

console.log('Tree Construction Exercise Tests Completed!');

module.exports = {
    treesEqual
};