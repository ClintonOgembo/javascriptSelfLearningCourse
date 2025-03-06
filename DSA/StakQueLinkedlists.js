// STACKS

// Node class for linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack class using linked list
class Stack {
    constructor() {
        this.top = null;  // points to the top node
        this.count = 0;   // keeps track of stack size
    }
}