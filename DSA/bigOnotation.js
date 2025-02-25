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
        else if (arr[mid] < target) left = mid + 1;  // move to the right
        else right = mid - 1;   // move to the left
    }
    return -1;
}
console.log("Binary search: ",binarySearch([1,2,3,4],3));

// CHALLENGES
// 1.1 Write a function that takes an array of numbers and returns the sum of all elements
function arraySum(arr) {
    let total = 0;
    for(let i of arr) {
        total += i;
    }
    return total;
}
console.log("Sum of the array elements: ",arraySum([10,20,30]));

// 1.2 Write a function that checks if a given number exists in an array.
// First Method -using arrays.include().
function checkArrElement(arr, target) {
    if(arr.includes(target)) {
        return true;
    }
    else {
        return false;
    }
}
console.log("first method ",checkArrElement([2,3,4],2));

// Second Method.-using binary search
function checkElement(arr,target) {
    let left=0;
    let right = arr.length-1;
    while (left <= right) {
        let pivot = Math.floor((left + right)/2);
        if(arr[pivot] === target) return pivot;
        else if(arr[pivot] < target) left = pivot + 1;
        else right = pivot - 1;
    }
    return -1;
}
console.log("second method: ", checkElement([4,5,6,7],7));

// third method - using sets
function searchElement(arr,target) {
    let numSet = new Set(arr);
    if(numSet.has(target)) return true;
    else return false;
}
console.log("Third method: ", searchElement([6,7,8,9],7));

// Final conclusions:
/*  Best Overall Choice:
✅ Binary Search (O(log n), O(1)) → Fastest for large sorted arrays.
✅ Set (O(1) lookup, O(n) space) → Best for repeated searches.
❌ includes() is simple but slow for large datasets.
*/