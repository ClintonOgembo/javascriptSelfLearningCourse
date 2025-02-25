// different complexities.

// O(1) - Constant Time : runtime does not depend on input size.
const arr = [2, 4, 6, 8];
function getFirstElement () {
    return arr[0];  // always takes the same time
}

console.log(getFirstElement());

// O(n) - Linear Time
// runtime grows proportionally with input size.
function printArray(arr) {
    for(let i=0; i< arr.length; i++) {
        console.log(arr[i]);  // runs 'n' times
    }
}
printArray([1, 3, 5, 7]);

// also have O(n) but slower than the one above in very large arrays.
function printArray(arr) {
    for(let i of arr) {
        console.log(i);  // runs 'n' times
    }
}
printArray([1, 3, 5, 7]);