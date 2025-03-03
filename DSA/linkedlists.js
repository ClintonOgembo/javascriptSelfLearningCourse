class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
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
