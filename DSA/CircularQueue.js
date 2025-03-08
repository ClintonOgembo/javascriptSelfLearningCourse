class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);  // create a fixed-size array
        this.size = size;       // Store the maximum size
        this.front = -1;        // Points to the first element(-1 means the queue is empty(no front element yet))
        this.rear = -1;         // points to the last element(No elements have been added yet)
    }

    // check if the queue is full
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    // check if the queue is empty
    isEmpty(){
        return this.front === -1;
    }

    // Enqueue - add element at the rear
    Enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is Full! Cannot enqueue", value);
            return;
        }
        if(this.isEmpty()) {
            this.front = this.rear = 0;        // First element, set front & rear to 0 (because they were intially -1)
        }
        else {
            this.rear = (this.rear + 1) % this.size;    // Move the rear forward circularly
        }
        this.queue[this.rear] = value;      // Store the new value
        console.log(`Enqueued: ${value}`);
    }

    // Dequeue - remove the first element
    Dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        const removeFirstEl = this.queue[this.front];  // Get the front value

        if(this.front === this.rear) {      // Only one element left, reset queue to empty
            this.front = this.rear = -1;
        }
        else {
            this.front = (this.front + 1) % this.size  // Move front forward circularly
        }

        console.log (`Dequeued: ${removeFirstEl}`);
        return removeFirstEl;
    }
    
    // Print
    print() {
        if(this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let current = this.queue[this.front];
        let result = '';
        while(current) {
            result += current + " ";
            if (current === this.rear) break;   // Stop when we reach the last element
            current = (current + 1) % this.size;     // Move forward circularly
        }
        console.log("Queue:", result);
    }
}

// Testing the circular Queue
const cq = new CircularQueue(5);   // 5 is the size of the queue
cq.Enqueue(1);
cq.Enqueue(2);
cq.Enqueue(3);
cq.Enqueue(4);
cq.Enqueue(5);
cq.print();

cq.Dequeue();
cq.Dequeue();
cq.print();

cq.Enqueue(6);
cq.Enqueue(7);
cq.print();