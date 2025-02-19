// while loop : Repeats a block of code as long as the condition is true.
let i = 0;
while (i<5) {
    console.log(i);
    i++; // increment to avoid an infinite loop
}

// do...while loop : executes the block of code once before checking the condition.
//                   then it repeats as long as the condition is true.
console.log("------------------");
console.log("Do...while loop");
console.log("------------------");
let j = 1;
do {
    console.log(j);
    j++;
} while (j<5);

// for...in loop : used to iterate over the properties/keys of an object or array.
console.log("------------------");
console.log("for...in loop");
console.log("------------------");

// syntax
const person = {name: 'claire', age: 24};
for (let i in person) {
    console.log(`${key}: ${person[key]}`);
} 

const fruits = ["apple", "banana", "orange"]; // here it iterates over the index so you must include the var name <"fruits"> for iteration of values
for (let index in fruits) {
  console.log(fruits[index]);
}

// for...of loop: used to iterate over values of an iterable(eg. arr, str)
console.log("------------------");
console.log("for...of loop");
console.log("------------------");


const cars = ["Volvo", "mercedes", "toyota", "Audi"];
for (let index of cars) {
  console.log(index);
}

