class Node {
    constructor(data) {
        this.data = data; // stores the data
        this.next = null; // pointer to the next node, initially null
    }
}

// example usage
const node1 = new Node(8);
console.log(node1);  // OUTPUT: Node { data: 8, next: null }

// create a linked list class: consists of multiple nodes connected together.
class Linkedlist {
    constructor() {
        this.head = null; // first node (initially empty)
        this.size = 0;  // number of nodes in the list
    }

    // insert a node at the end
    append(value) {
        const newNode = new Node(value);  // create a new node

        if (this.head === null) {    // if the list is empty, make the new node the head
            this.head = newNode;
        }
        else {
            let current = this.head;

            // traverse to the last node
            while (current.next) {
                current = current.next;
            }

            // Add the new node at the end
            current.next = newNode;
        }
        this.size++;  // increase size
    }
    

    // Display linked list
    printList() {
        let current = this.head;
        let result = '';

        while(current) {
            result +=`${current.data} ->`;
            current = current.next;
        }

     console.log(result, 'null'); // Null indicates the end of the linked list
    }

    // Deleting a Node
    delete(value) {
        if(!this.head) return; // if list is empty, do nothing. same as (this.head === null)

        if(this.head.data === value) {
            this.head = this.head.next; // remove the head by assigning the head the next node and ignoring the current node
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;

        while(current && current.data !== value) {
            previous = current;
            current = current.next;
        }

        if(current) {                       // If current is not null, it means we found the node to delete
            previous.next = current.next;   // remove the node. previous.next = current.next skips the current node, effectively deleting it.
            this.size--;
        }
    }
}


// Example usage 
const list = new Linkedlist();  // instanciaton
list.append(16);
list.append(32);
list.append(48);
list.append(64);
console.log(JSON.stringify(list,null,2));  // prints output as nested nodes
list.printList(); // output: 16 -> 32 -> 48

// Example usage of deletion
list.delete(32);
list.printList();

/*class Linkedlist {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(data) {
        const node = new Node(data);

        if(this.head === null) this.head = node;
        else {
            let current = this.head;
            while(current.next != null) {
                current = current.next;   
            }
            current.next = node;
        }
        this.length++;
    }
    contains(value){
        let current = this.head;
        while(current != null) {
            if(current.data === value) return true
            current = current.next;
        }
        return false;
    }
}

const list = new Linkedlist();
list.append(5);
list.append(10);
list.append(20);
list.append(30);
console.log(list.contains(30)); // output: true
console.log(list.contains(300));   // outputs: false
console.log(list);
*/