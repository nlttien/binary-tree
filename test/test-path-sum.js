const BinaryTreeNode = require('../src/binary-tree-node');
const {
    findAllPaths,
    hasPathSum,
    findPathsWithSum,
    maxPathSum,
    lowestCommonAncestor,
    findDistance
} = require('../exercises/04-path-and-sum');
const { test, assertEquals, assertTrue, assertFalse } = require('./test-utils');

console.log('Running Path and Sum Exercise Tests...\n');

// Create test tree:  1
//                   / \
//                  2   3
//                 / \   \
//                4   5   6
const tree = new BinaryTreeNode(1);
tree.left = new BinaryTreeNode(2);
tree.right = new BinaryTreeNode(3);
tree.left.left = new BinaryTreeNode(4);
tree.left.right = new BinaryTreeNode(5);
tree.right.right = new BinaryTreeNode(6);

// Create test tree for path sum: 5
//                               / \
//                              4   8
//                             /   / \
//                            11  13  4
//                           / \      \
//                          7   2      1
const pathSumTree = new BinaryTreeNode(5);
pathSumTree.left = new BinaryTreeNode(4);
pathSumTree.right = new BinaryTreeNode(8);
pathSumTree.left.left = new BinaryTreeNode(11);
pathSumTree.right.left = new BinaryTreeNode(13);
pathSumTree.right.right = new BinaryTreeNode(4);
pathSumTree.left.left.left = new BinaryTreeNode(7);
pathSumTree.left.left.right = new BinaryTreeNode(2);
pathSumTree.right.right.right = new BinaryTreeNode(1);

test('findAllPaths should return all root-to-leaf paths', () => {
    const paths = findAllPaths(tree);
    const expected = [
        [1, 2, 4],
        [1, 2, 5],
        [1, 3, 6]
    ];
    assertEquals(paths, expected);
});

test('findAllPaths should handle empty tree', () => {
    assertEquals(findAllPaths(null), []);
});

test('findAllPaths should handle single node', () => {
    const singleNode = new BinaryTreeNode(42);
    assertEquals(findAllPaths(singleNode), [[42]]);
});

test('hasPathSum should work correctly', () => {
    assertTrue(hasPathSum(pathSumTree, 22)); // 5+4+11+2 = 22
    assertTrue(hasPathSum(pathSumTree, 26)); // 5+8+13 = 26
    assertTrue(hasPathSum(pathSumTree, 18)); // 5+8+4+1 = 18
    assertFalse(hasPathSum(pathSumTree, 100));
    assertFalse(hasPathSum(null, 0));
});

test('findPathsWithSum should return all paths with target sum', () => {
    const paths = findPathsWithSum(pathSumTree, 22);
    const expected = [[5, 4, 11, 2]];
    assertEquals(paths, expected);
    
    const pathsEmpty = findPathsWithSum(pathSumTree, 100);
    assertEquals(pathsEmpty, []);
});

test('maxPathSum should calculate maximum path sum', () => {
    // Simple tree for max path sum test
    const maxSumTree = new BinaryTreeNode(1);
    maxSumTree.left = new BinaryTreeNode(2);
    maxSumTree.right = new BinaryTreeNode(3);
    
    assertEquals(maxPathSum(maxSumTree), 6); // 2 + 1 + 3 = 6
    
    const singleNode = new BinaryTreeNode(42);
    assertEquals(maxPathSum(singleNode), 42);
});

test('lowestCommonAncestor should find LCA correctly', () => {
    const lca1 = lowestCommonAncestor(tree, 4, 5);
    assertEquals(lca1.value, 2);
    
    const lca2 = lowestCommonAncestor(tree, 4, 6);
    assertEquals(lca2.value, 1);
    
    const lca3 = lowestCommonAncestor(tree, 2, 3);
    assertEquals(lca3.value, 1);
    
    // Node as its own ancestor
    const lca4 = lowestCommonAncestor(tree, 1, 4);
    assertEquals(lca4.value, 1);
});

test('lowestCommonAncestor should handle edge cases', () => {
    assertEquals(lowestCommonAncestor(null, 1, 2), null);
    assertEquals(lowestCommonAncestor(tree, 99, 100), null);
});

test('findDistance should calculate distance correctly', () => {
    assertEquals(findDistance(tree, 4, 5), 2); // 4-2-5
    assertEquals(findDistance(tree, 4, 6), 4); // 4-2-1-3-6
    assertEquals(findDistance(tree, 1, 4), 2); // 1-2-4
    assertEquals(findDistance(tree, 2, 3), 2); // 2-1-3
    
    // Same node
    assertEquals(findDistance(tree, 4, 4), 0);
    
    // Non-existent nodes
    assertEquals(findDistance(tree, 99, 100), -1);
    assertEquals(findDistance(null, 1, 2), -1);
});

console.log('Path and Sum Exercise Tests Completed!');

module.exports = {
    tree,
    pathSumTree
};