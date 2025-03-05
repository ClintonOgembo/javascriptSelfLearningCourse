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

const stack = new Stack;
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
console.log("initial stack: ", stack);

console.log("pop() removes: ", stack.pop());
console.log(stack);
console.log("top element is: ", stack.peek());
console.log("size of the stack: ",stack.size());