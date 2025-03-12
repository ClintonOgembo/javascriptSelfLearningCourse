// Sets is a data structure that stores unique values.
class mySet {
    constructor() {
        this.items = {};
    }

    // Adding elements into a set
    add(value) {
        if(!this.has(value)) {
            this.items[value] = value;
            return true;
        }
        return false;
    }

    // check if an element exists in a set
    has(value) {
        return this.items.hasOwnProperty(value);
    }

    // Delete
    delete(value) {
        if(this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }

    // values
    values() {
        return Object.keys(this.items);     // extracts the keys and leaves values.
                                            // instead of :{ '10': 10, '20': 20, '30': 30 } it displays ["10", "20", "30"] as an array

    }
}

let MySet = new mySet();
MySet.add(12);
MySet.add(14);
MySet.add(12);
console.log(MySet.values());