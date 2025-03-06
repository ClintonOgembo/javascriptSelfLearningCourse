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

    // push - insert at the top (head)
    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.count++;
    }

    // pop - remove from the top (head)
    pop() {
        if(this.isEmpty()) return "Stack is empty";
        const popppedValue = this.top.value;
        this.top = this.top.next;
        this.count--;
        return popppedValue;
    }

    // peek - get top element without removing
    peek() {
        if(this.isEmpty()) return "Stack is empty";
        return this.top.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.top === null;
    }

    // get the size of the stack
    size() {
        return this.count;
    }

    // print the stack
    print() {
        let current = this.top;
        let result = "";
        while(current) {
            result += current.value + "->";
            current = current.next;
        }
        console.log(result, "null");
    }
}

// Testing the stack
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log("Stack after pushes:");
stack.print();

console.log("Popped:", stack.pop());
console.log("Stack after pop:");
stack.print();

console.log("top element:", stack.peek());
console.log("Stack size:", stack.size());