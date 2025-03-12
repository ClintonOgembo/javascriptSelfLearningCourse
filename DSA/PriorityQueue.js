class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class priorityQueue{
    constructor() {
        this.front = null;
    }

    // Enqueue - insert an element based on priority
    enqueue(value, priority) {
        const newNode = new Node(value, priority);

        if(!this.front || this.front.priority > priority){      // Insert at front if its empty or has higher priority
            newNode.next = this.front;
            this.front = newNode;
        }

        else {
            // insert at the correct position
            let current = this.front;
            while(current.next && current.next.priority <= priority) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        console.log(`Enqueued: ${value} with priority ${priority}`);
    }

    // Dequeue: Remove the highest priority element(head)
    dequeue() {
        if(this.isEmpty()) return "The priority Queue is Empty";
        let removedElement = this.front.value;
        this.front = this.front.next;
        return removedElement;
    }

    // Peek: Get the highest priority element without removing it
    peek() {
        return this.front ? this.front.value : "Queue is empty"; 
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === null;
    }

    // print the queue
    print() {
        let current = this.front;
        let result = [];
        while(current) {
            result.push(`${current.value} (Priority: ${current.priority})`);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

let pq = new priorityQueue();
pq.enqueue("A - low priority", 3);
pq.enqueue("B - medium priority", 2);
pq.enqueue("C - high priority", 1);

pq.print();

console.log("Dequeued:", pq.dequeue());
pq.print();