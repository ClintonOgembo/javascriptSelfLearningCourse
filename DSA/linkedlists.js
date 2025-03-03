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

    }
}

const list = new Linkedlist();
list.append(5);
console.log(list);
