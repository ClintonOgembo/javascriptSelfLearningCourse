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

// Using a Loop.
function reverseStringLoop(str) {
    let reversed = "";
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
console.log("Using a loop: ",reverseStringLoop("classroom"));

// Check for Palindrome
// -Palindrome: is a word that reads the same forward and backward.
function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log(isPalindrome("MOM")); // true
console.log(isPalindrome("CAT")); // false
console.log(isPalindrome("RACECAR")); // false

// counting Vowels(A,E,I,O,U)
// If we count vowels in "APPLE" we get 2. (a,e)
function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let letter of word) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("APPLE"));
console.log(countVowels("PLP"));
console.log(countVowels("EMPLOYEE"));

// Removing Duplicate letters
function removeDuplicates(word) {
    let set = '';
    for(let char of word) {
        if (!set.includes(char)){
            set += char;
        }
    }
    return set;
}
console.log(removeDuplicates("BANANA"));

//2nd method
function removeDuplicate(word) {
    let setWord = [...new Set(word)].join('');
    return setWord;
}
console.log(removeDuplicate("NECESSARY"));

// Finding the Most Used Letter.
function mostUsedLetter(word) {
    let count = {}; // empty object to store how many times each letter appears.
    let maxLetter = ''; // This will store the most used letter
    let maxCount = 0; // This will store how many times that letter appears.

    for(let char of word) {

        count[char] = (count[char] || 0) + 1;

        if (count[char] > maxCount) {
            maxCount = count[char];
            maxLetter = char;
        }
    }
    return maxLetter;
}
console.log(mostUsedLetter("PEPPER"));

// ANAGRAMS - Two words are anagrams if they use the same letters in a different order.
function anagramsWords(word1,word2) {
    word1 = word1.replace(/\s+/g, '').toLowerCase();
    word2 = word2.replace(/\s+/g, '').toLowerCase();
    return word1.split('').sort().join('') === word2.split('').sort().join('');
}
console.log(anagramsWords("LISTEN","SILENT")); // true
console.log(anagramsWords("CAT","DOG"));  // false
console.log(anagramsWords("RAIL SAFETY","FAIRYTALES"));  // true