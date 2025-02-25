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

// O(n^2) - Quadratic Time : using nested loops.
function printPairs(arr) {
    for (let i= 0; i < arr.length; i++) {
        for (let j=0; j < arr.length; j++) {
            console.log(arr[i],arr[j]); // runs 'n' * 'n' times
        }
    }
}
printPairs([9,8,7,6]);

// O(log n) - Logarithmic Time : Binary search divides the problem in half each time.
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log("Binary search: ",binarySearch([1,2,3,4],1));