const BinaryTreeNode = require('./binary-tree-node');

/**
 * Binary Search Tree class
 * Implements a binary search tree with common operations
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Insert a value into the BST
     * @param {*} value - The value to insert
     */
    insert(value) {
        this.root = this._insertRecursive(this.root, value);
    }

    _insertRecursive(node, value) {
        if (node === null) {
            return new BinaryTreeNode(value);
        }

        if (value < node.value) {
            node.left = this._insertRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertRecursive(node.right, value);
        }
        // If value equals node.value, we don't insert duplicates

        return node;
    }

    /**
     * Search for a value in the BST
     * @param {*} value - The value to search for
     * @returns {boolean} - True if found, false otherwise
     */
    search(value) {
        return this._searchRecursive(this.root, value);
    }

    _searchRecursive(node, value) {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this._searchRecursive(node.left, value);
        } else {
            return this._searchRecursive(node.right, value);
        }
    }

    /**
     * Delete a value from the BST
     * @param {*} value - The value to delete
     */
    delete(value) {
        this.root = this._deleteRecursive(this.root, value);
    }

    _deleteRecursive(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._deleteRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteRecursive(node.right, value);
        } else {
            // Node to be deleted found
            
            // Case 1: Node is a leaf
            if (node.isLeaf()) {
                return null;
            }
            
            // Case 2: Node has only one child
            if (node.hasOnlyLeftChild()) {
                return node.left;
            }
            if (node.hasOnlyRightChild()) {
                return node.right;
            }
            
            // Case 3: Node has both children
            // Find the inorder successor (minimum value in right subtree)
            const successor = this._findMin(node.right);
            node.value = successor.value;
            node.right = this._deleteRecursive(node.right, successor.value);
        }

        return node;
    }

    /**
     * Find the node with minimum value in a subtree
     * @param {BinaryTreeNode} node - Root of the subtree
     * @returns {BinaryTreeNode} - Node with minimum value
     */
    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    /**
     * Find the node with maximum value in a subtree
     * @param {BinaryTreeNode} node - Root of the subtree
     * @returns {BinaryTreeNode} - Node with maximum value
     */
    _findMax(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    /**
     * Get all values in the tree using inorder traversal
     * @returns {Array} - Array of values in sorted order
     */
    inorderTraversal() {
        const result = [];
        this._inorderRecursive(this.root, result);
        return result;
    }

    _inorderRecursive(node, result) {
        if (node !== null) {
            this._inorderRecursive(node.left, result);
            result.push(node.value);
            this._inorderRecursive(node.right, result);
        }
    }

    /**
     * Get all values in the tree using preorder traversal
     * @returns {Array} - Array of values in preorder
     */
    preorderTraversal() {
        const result = [];
        this._preorderRecursive(this.root, result);
        return result;
    }

    _preorderRecursive(node, result) {
        if (node !== null) {
            result.push(node.value);
            this._preorderRecursive(node.left, result);
            this._preorderRecursive(node.right, result);
        }
    }

    /**
     * Get all values in the tree using postorder traversal
     * @returns {Array} - Array of values in postorder
     */
    postorderTraversal() {
        const result = [];
        this._postorderRecursive(this.root, result);
        return result;
    }

    _postorderRecursive(node, result) {
        if (node !== null) {
            this._postorderRecursive(node.left, result);
            this._postorderRecursive(node.right, result);
            result.push(node.value);
        }
    }

    /**
     * Get all values in the tree using level-order traversal (BFS)
     * @returns {Array} - Array of values in level order
     */
    levelOrderTraversal() {
        if (this.root === null) {
            return [];
        }

        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        return result;
    }

    /**
     * Calculate the height of the tree
     * @returns {number} - Height of the tree
     */
    height() {
        return this._heightRecursive(this.root);
    }

    _heightRecursive(node) {
        if (node === null) {
            return -1; // Height of empty tree is -1
        }

        const leftHeight = this._heightRecursive(node.left);
        const rightHeight = this._heightRecursive(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    /**
     * Count the total number of nodes in the tree
     * @returns {number} - Number of nodes
     */
    size() {
        return this._sizeRecursive(this.root);
    }

    _sizeRecursive(node) {
        if (node === null) {
            return 0;
        }

        return 1 + this._sizeRecursive(node.left) + this._sizeRecursive(node.right);
    }

    /**
     * Check if the tree is empty
     * @returns {boolean} - True if tree is empty
     */
    isEmpty() {
        return this.root === null;
    }
}

module.exports = BinarySearchTree;