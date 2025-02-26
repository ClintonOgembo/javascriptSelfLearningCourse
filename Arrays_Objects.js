// declaration of empty array
let newArray = [];
console.log("empty array");
console.log(newArray);

// using array constructor
let numbers = new Array(2, 3, 8, 10, 12);
console.log("new array using constructor");
console.log(numbers);

// access elements using index
console.log(numbers[0]); // output: 2

// Modify elements:
numbers[1] = 6;  // changes 3 to 6
console.log(numbers);

// access the length
console.log("------------------");
console.log("Lenght of the arrays");
console.log("------------------");
console.log(numbers.length);
console.log(newArray.length);

// manipulating Arrays
numbers.push(10); // adds an element to the end
console.log(numbers);

numbers.pop();  // removes the last element
console.log(numbers);

numbers.unshift(0);  // adds the element to the start
console.log(numbers);

numbers.shift();  // removes the first element
console.log(numbers);

// Iterating over arrays
// using for loop
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]); 
}

// using for...of loop
for(let i of numbers){
    console.log(i);
}

// Finding index of an element
console.log('-------------');
console.log("index of element 8");
console.log("------------");
let index = numbers.indexOf(8);
console.log(index);

// checking whether an element exists:
console.log(numbers.includes(0)); // outputs a boolean answer

// slice() : extract a portion of the array
let slicedNumbers = numbers.slice(1,3); // includes element in index [1] and [2] but exclude [3]
console.log(numbers);
console.log(slicedNumbers);

// spilce() : Add/remove elements
numbers.splice(1, 1, 4, 7); // Removes 1 element at index 1, adds "4" and "7"
console.log(numbers); 

// join() : converts array to string
let numbersStr = numbers.join();
console.log(numbersStr);

/*REAL CHALLENGES
Exercise 1: Basic Array Manipulation
Declare an array of colors ["red", "blue", "green"]. Add "yellow" to the end and "pink" to the beginning. Then, remove the last element. Log the final array.*/

console.log("Challenges");
let colors = ["red", "blue", "green"];
colors.push("yellow");
colors.unshift("pink");
colors.pop();
console.log(colors);

/*Exercise 2: Iterating Over an Array
Given the array const numbers = [10, 20, 30, 40, 50], write a loop to print each number multiplied by 2.*/

const Numbers = [10, 20, 30, 40, 50]
for(let i of Numbers){
    console.log(i*2);
}

/*Exercise 3: Find and Replace
Given the array let cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru"], replace "Kisumu" with "Eldoret". Print the modified array.*/

let cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru"];
let splicedCities = cities.splice(2, 1, "Eldoret"); // 2 is the index and 1 is the number of elements to be removed
console.log(cities);

/*Exercise 4: Using slice and splice
Given const animals = ["cat", "dog", "elephant", "lion", "tiger"]:
Extract a sub-array containing "dog" and "elephant" using slice.
Remove "lion" and add "giraffe" using splice. Print the modified array.*/

const animals = ["cat", "dog", "elephant", "lion", "tiger"];
let slicedAnimals = animals.slice(1,3);
slicedAnimals.splice(1, 1, "giraffe");
console.log(animals);


/*Exercise 5: Check and Join
Given let fruits = ["mango", "banana", "apple"], check if "orange" is in the array. If not, add it. Then convert the array to a comma-separated string and log it.*/

let Fruits = ["mango", "banana", "apple"];
let checkOrange = Fruits.includes("apple");
console.log(checkOrange);

let FruitStr = Fruits.join();
console.log(FruitStr);

// OBJECTS : IS A COLLECTION OF PROPERTIES, WHERE EACH PROPERTY HAS A KEY AND VALUE.
// WE USE {} OR THE "new object()" syntax.

const player = {
    name: "Clinton",
    age: 22,
    team: "MSFC",
    position: "Forward",
    scoreGoal: function() {
        console.log(`${this.name} has scored a goal!`);
    }
};

// accessing properties
console.log(player.name);
console.log(player["position"]);
// calling the method
player.scoreGoal();

console.log(player);

// Modifying objects
// Adding a NEW Property
player.level = "Amatuer";

//updating age from 22 to 25;
player.age = 25;

console.log(player);

// deleting a property
delete player.level;

console.log(player);

// Looping Through Object Properties:
// for...in loop

const team = {
    name: "MSFC",
    location: "Kenya",
    founded: 2015
};

for (let key in team) {
    console.log(`${key}: ${team[key]}`);
}

// Nested Objects:
const club = {
    name: "MSFC",
    manager: { name: "James", experience: 10 },
    players: ["John", "Mime", "Alex"]
};

console.log(club.manager.name); // "james"
console.log(club.players[1]); //mime


// Sorting an array. O(n^2)
function bubbleSort(arr) {
    let n = arr.length; // Get the size of the array
    for (let i = 0; i < n - 1; i++) { // Outer loop: Runs n-1 times
        for (let j = 0; j < n - i - 1; j++) { // Inner loop: Goes up to (n - i - 1)
            if (arr[j] > arr[j + 1]) { // Swap if the current element is greater than the next
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr; // Return the sorted array
}
console.log(bubbleSort([5, 3, 8, 4, 2]));

// using built-in sorting (O(n log n))
let sortedArr = [5, 3, 8, 4, 2].sort((a, b) => a - b);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
