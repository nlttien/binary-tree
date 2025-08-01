const BinaryTreeNode = require('./src/binary-tree-node');
const BinarySearchTree = require('./src/binary-search-tree');

// Import all exercise modules
const traversalExercises = require('./exercises/01-tree-traversal');
const propertiesExercises = require('./exercises/02-tree-properties');
const validationExercises = require('./exercises/03-tree-validation');
const pathSumExercises = require('./exercises/04-path-and-sum');
const constructionExercises = require('./exercises/05-tree-construction');

/**
 * Binary Tree Library - Main Entry Point
 * 
 * This library provides comprehensive binary tree implementations and exercises
 * covering various algorithms and data structures concepts.
 */

// Demo function to showcase the library
function runDemo() {
    console.log('🌳 Binary Tree Library Demo\n');
    
    // Create a Binary Search Tree
    console.log('1. Creating a Binary Search Tree:');
    const bst = new BinarySearchTree();
    const values = [5, 3, 7, 1, 9, 4, 6];
    values.forEach(val => bst.insert(val));
    
    console.log('   Inserted values:', values);
    console.log('   Inorder traversal (sorted):', bst.inorderTraversal());
    console.log('   Tree height:', bst.height());
    console.log('   Tree size:', bst.size());
    console.log();
    
    // Demonstrate traversal exercises
    console.log('2. Tree Traversal Examples:');
    const root = new BinaryTreeNode(1);
    root.left = new BinaryTreeNode(2);
    root.right = new BinaryTreeNode(3);
    root.left.left = new BinaryTreeNode(4);
    root.left.right = new BinaryTreeNode(5);
    
    console.log('   Tree structure:');
    console.log('       1');
    console.log('      / \\');
    console.log('     2   3');
    console.log('    / \\');
    console.log('   4   5');
    console.log();
    
    console.log('   Inorder:', traversalExercises.inorderTraversal(root));
    console.log('   Preorder:', traversalExercises.preorderTraversal(root));
    console.log('   Postorder:', traversalExercises.postorderTraversal(root));
    console.log('   Level-order:', traversalExercises.levelOrderTraversal(root));
    console.log();
    
    // Demonstrate tree properties
    console.log('3. Tree Properties:');
    console.log('   Height:', propertiesExercises.height(root));
    console.log('   Node count:', propertiesExercises.countNodes(root));
    console.log('   Leaf count:', propertiesExercises.countLeaves(root));
    console.log('   Min value:', propertiesExercises.findMin(root));
    console.log('   Max value:', propertiesExercises.findMax(root));
    console.log();
    
    // Demonstrate tree validation
    console.log('4. Tree Validation:');
    console.log('   Is balanced:', validationExercises.isBalanced(root));
    console.log('   Is complete:', validationExercises.isComplete(root));
    console.log('   Is symmetric:', validationExercises.isSymmetric(root));
    console.log();
    
    // Demonstrate path finding
    console.log('5. Path Finding:');
    const paths = pathSumExercises.findAllPaths(root);
    console.log('   All root-to-leaf paths:', paths);
    console.log();
    
    // Demonstrate tree construction
    console.log('6. Tree Construction:');
    const sortedArray = [1, 2, 3, 4, 5, 6, 7];
    const balancedBST = constructionExercises.buildBSTFromSortedArray(sortedArray);
    console.log('   Built balanced BST from sorted array:', sortedArray);
    console.log('   Root value:', balancedBST.value);
    console.log('   Is valid BST:', validationExercises.isValidBST(balancedBST));
    console.log();
    
    console.log('🎯 Demo completed! Run "npm test" to see all exercises in action.');
}

// Export everything for use as a library
module.exports = {
    // Core classes
    BinaryTreeNode,
    BinarySearchTree,
    
    // Exercise modules
    traversalExercises,
    propertiesExercises,
    validationExercises,
    pathSumExercises,
    constructionExercises,
    
    // Demo function
    runDemo
};

// Run demo if this file is executed directly
if (require.main === module) {
    runDemo();
}