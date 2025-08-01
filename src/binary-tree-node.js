/**
 * Binary Tree Node class
 * Represents a single node in a binary tree
 */
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /**
     * Check if this node is a leaf (has no children)
     * @returns {boolean}
     */
    isLeaf() {
        return this.left === null && this.right === null;
    }

    /**
     * Check if this node has only left child
     * @returns {boolean}
     */
    hasOnlyLeftChild() {
        return this.left !== null && this.right === null;
    }

    /**
     * Check if this node has only right child
     * @returns {boolean}
     */
    hasOnlyRightChild() {
        return this.left === null && this.right !== null;
    }

    /**
     * Check if this node has both children
     * @returns {boolean}
     */
    hasBothChildren() {
        return this.left !== null && this.right !== null;
    }
}

module.exports = BinaryTreeNode;