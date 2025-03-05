// STACKS

class Stack {
    constructor(){
        this.items = [];  // Using an array to store stack elements
    }

    // push - add an element to the top
    push(element) {
        this.items.push(element);
    }

    // pop - remove the top element
    pop() {
        if(this.isEmpty()) return "Stack is empty"
        return this.items.pop();
    }

    // peek - get the top element without removing
    peek() {
        if(this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    // check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // get the size of the stack
    size() {
        return this.items.length;
    }

    // print the stack
    print() {
        console.log(this.items.toString());
    }
}

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
console.log("initial stack: ", stack);

console.log("pop() removes: ", stack.pop());
console.log(stack);
console.log("top element is: ", stack.peek());
console.log("size of the stack: ",stack.size());


// QUEUES

console.log("----------------------");
console.log("QUEUES");
console.log("----------------------");

class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue - Add elements to the end
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue - remove the first element
    dequeue() {
        if(this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    // Front - get the first element
    front() {
        if(this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    // check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // print the queue
    print() {
        console.log("Final queue: ",this.items.toString());
    }
}

// Testing the queue
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("First element is: ", queue.front());
console.log("dequeue removes: ", queue.dequeue());
console.log("Size of the queue is: ", queue.size());
queue.print();