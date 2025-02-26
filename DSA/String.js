// strings are immutable.
let sentence = "I love JavaScript";
console.log(sentence);

let name = 'Clinton';
console.log(`Hello, ${name}`);

// Finding length of a string
console.log(name.length);  // outputs number of characters in the string

// accessing characters
console.log(name[0]);  // output: C
console.log(name.charAt(2));  // outputs the character at index 2;

// changing case
console.log(name.toUpperCase());  
console.log(name.toLowerCase());

// Searching inside a string
let str = "javaScript";
console.log(str.indexOf("Script"));   // outputs: 4 (starting index)
console.log(str.includes("java"));   // outputs: true
console.log(str.startsWith("java"));   // outputs: true
console.log(str.endsWith("Script"));   // outputs: true

// Extracting a Substring
console.log(str.slice(0, 4)); // output: java
console.log(str.substring(4, 10)); // output: Script
console.log(str.substr(4, 6)); // output: Script (deprecated)

// Replacing Text
let sent = "I love swimming";
console.log(sent.replace("swimming", "Football"));  // output: i love football

// Splitting a String
let words = "lion, cheetah, hyena";
console.log(words.split(",")); // outputs: ['lion','cheetah','hyena']

// Removing whitespace
let spaced = " Hey There! ";
console.log(spaced.trim()); // o: "Hey There!"
console.log(spaced.trimStart()); // o: "Hey There! "
console.log(spaced.trimEnd()); // o: " Hey There!"

// repeating a string
console.log("Hello ".repeat(3));  // O: "Hello Hello Hello"

// STRING MANIPULATION PROBLEMS
//Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("JACOB")); 

// Check for Palindrome
// -Palindrome: is a word that reads the same forward and backward.
