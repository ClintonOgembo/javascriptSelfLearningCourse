// Tree is a hierarchical data structure
// start by creating a class node
// each node stores a value and pointers to its left and right children

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// create a binary tree
class BinaryTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return;
        }

        let queue = [this.root];   //use a queue to store nodes

        while(queue.length) {
            let current = queue.shift();   // remove and check the first node

            if (!current.left) {
                current.left = newNode;
                return;
            }
            else if(!current.right) {
                current.right = newNode;
                return;
            }
            else {
                queue.push(current.left);
                queue.push(current.right);
            }
        }
    }
}