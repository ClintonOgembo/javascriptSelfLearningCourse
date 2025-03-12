class HashTable {
    constructor(size = 7) {     // creates an array with a fixed size (default = 7)
        this.table = new Array(size);
    }

    // Hash function
    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {    // loops through each character in the key
            total += key.charCodeAt(i);          // converts each character to a number
        }
        return total % this.table.length;        // make sure the result fits inside the table size
    }

    // Storing Data
    set(key, value) {
        let index = this.hash(key);     // find the correct index using hash(key)
        if(!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);   // Store key-value pair
    }

    // Retrieving Data
    get(key) {
        let index = this.hash(key);     // find the correct index using hash(key)
        if(this.table[index]) {     // checks if there's a value at that index
            for(let pair of this.table[index]) {        // loops through the stored key-value pairs(incase of collisions)
                if(pair[0] === key) return pair[1];
            }
        }
        return undefined;  // not found
    }

}

// Example
let ht = new HashTable(7);
console.log(ht.hash("name"));   // Output: some index between 0-6

ht.set("name", "Alice");        // stored at hashed index
ht.set("age", 25);      //stored at hashed index

console.log(ht.get("name")); // Alice
console.log(ht.get("age")); // 25
console.log(ht.get("city")); // undefined(not found)