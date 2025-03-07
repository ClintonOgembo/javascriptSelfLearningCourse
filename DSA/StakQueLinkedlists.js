// STACKS

// // Node class for linked list
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// // Stack class using linked list
// class Stack {
//     constructor() {
//         this.top = null;  // points to the top node
//         this.count = 0;   // keeps track of stack size
//     }

//     // push - insert at the top (head)
//     push(element) {
//         const newNode = new Node(element);
//         newNode.next = this.top;
//         this.top = newNode;
//         this.count++;
//     }

//     // pop - remove from the top (head)
//     pop() {
//         if(this.isEmpty()) return "Stack is empty";
//         const popppedValue = this.top.value;
//         this.top = this.top.next;
//         this.count--;
//         return popppedValue;
//     }

//     // peek - get top element without removing
//     peek() {
//         if(this.isEmpty()) return "Stack is empty";
//         return this.top.value;
//     }

//     // Check if the stack is empty
//     isEmpty() {
//         return this.top === null;
//     }

//     // get the size of the stack
//     size() {
//         return this.count;
//     }

//     // print the stack
//     print() {
//         let current = this.top;
//         let result = "";
//         while(current) {
//             result += current.value + "->";
//             current = current.next;
//         }
//         console.log(result, "null");
//     }
// }

// // Testing the stack
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log("Stack after pushes:");
// stack.print();

// console.log("Popped:", stack.pop());
// console.log("Stack after pop:");
// stack.print();

// console.log("top element:", stack.peek());
// console.log("Stack size:", stack.size());


// QUEUES
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// linkedlist class
class Queue {
    constructor() {
        this.front = null;   // points the head
        this.rear = null;    // points the tail
        this.count = 0;      // keeps track of the queue size
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === null;
    }

    // Enqueue - insert element at the rear
    Enqueue(value) {
        const newNode = new Node(value);     // we create the node
        if(this.isEmpty()) {
            this.front = this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.count++;
    }

    // Dequeue - remove element from the front
    Dequeue() {
        if(this.isEmpty()) return "Queue is empty";
        const DequeuedValue = this.front.value;
        this.front = this.front.next;
        if(!this.front) this.rear = null;   // if the queue becomes empty
        this.count--;
        return DequeuedValue;
    }

    // Get the front element
    frontElement() {
        if(this.isEmpty()) return "Queue is empty";
        return this.front.value;
    }

    // Get the size of the queue
    size() {
        return this.count;
    }

    // print - the queue
    print() {
        let current = this.front;
        let result = "";
        while(current) {
            result += current.value + "->";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const queue = new Queue();
console.log("---------------");
console.log("QUEUES");
console.log("---------------");
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);
queue.Enqueue(4);
console.log(queue);
console.log("Dequeued value is: ",queue.Dequeue());
console.log("front value is: ",queue.frontElement());
console.log("Size of the queue is: ",queue.size());
queue.print();