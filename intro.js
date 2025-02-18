console.log("Hello world, Today is day one of my javascript coding journey")

console.log("-------------------------")
// variables
var myName = "Clinton"
console.log(myName);

myName="Jacob"
console.log(myName,", The value of the variable changes from to Jacob");

console.log("-------------------------")


let ourName = "Ogembo"
console.log(ourName)
const pi = 3.14

//function that prints odd numbers from 1-20
for(i=1;i<20;i++){
    if(i%2!==0){
        console.log(i);
    }
}

//function that prints even numbers
console.log("Even numbers")

for(i=1;i<20;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//function that prints the sum of odd numbers between 1 and 10
console.log("Sum of odd numbers")
sum=0
for(i=1;i<20;i++){
    if(i%2!==0){
        sum += i; 
    }
}
console.log(sum)

// Print Prime Numbers from 1 to 50
// A prime number is a number greater than 1 that is divisible only by 1 and itself.
function printPrimeNumbers() {
 console.log("Prime Numbers")

    for(let i=2; i<50; i++){
        let isPrime = true;  // is a variable holding a boolean value

        // check divisibility from 2 to sqrt(i)
        for(let j=2; j<=Math.sqrt(i); j++) {
            if (i % j === 0){
                isPrime = false;
                break; // no need to check further if divisible
            }
        }

        //if isprime is still true, print the number
        if(isPrime) {
            console.log(i);
        }

    }
}

//call the function
printPrimeNumbers();

// Challenge: Find Factorial of a Number
// Write a function that calculates and prints the factorial of a given number n (e.g., factorial(5)
//  should print 120 because 5 * 4 * 3 * 2 * 1 = 120).
function factorialOfNumber(n) { 
    let result = 1;
    for(let m=1; m<=n; m++) {
        result *= m;
    }
    console.log("Factorial of ",n," is ",result)
}
factorialOfNumber(4);

// CHALLENGE: Fibonacci Sequence
function FibonacciSequence(n) {
    console.log("fibonacci sequence is: ")

    let x = 0;
    let y = 1;

    console.log(x);
    console.log(y);

    for(let i=2; i<n; i++){
        let nextNo = x + y;
        console.log(nextNo);
        x = y;
        y = nextNo;
    }
    
}
FibonacciSequence(10);

// CHALLENGE: Reverse a Number
function ReverseNumber(num) {
    console.log("Original number is: ", num );
    let result = [];
    if(num.toString().length <= 1 ) {
        console.log("No change since its only one digit");
        return num;
    }
    else {
        for(let i of num.toString()) {
            result.push(i);
        }
        result.reverse();
        let newResult = Number(result.join("")); // join elements and convert to a number
        console.log("The reversed number now is: ",newResult);
    }
}
ReverseNumber(12345);

// . Challenge: Sum of Digits
//Write a function that calculates the sum of all digits in a number. For example, given 1234, the result should be 10 (1 + 2 + 3 + 4).

function sumDigits(num) {
    let total = 0;
    numStr = num.toString();
    for(let i of numStr){
        total += parseInt(i);
        i++;
    }
     console.log("The sum of the digits in this ", num , " is: ", total );
}
sumDigits(5654);

/* Bonus Challenge: FizzBuzz
Print numbers from 1 to 100, but:

if the number is divisible by 3, print "Fizz".
If the number is divisible by 5, print "Buzz".
If the number is divisible by both 3 and 5, print "FizzBuzz".*/

function FizzBuzzNo() {
    for(let x=1; x<=100; x++){
        if(x % 3 == 0 && x % 5 == 0) {
            console.log(x, " FizzBuzz");
        }
        if(x % 3 == 0){
            console.log(x, " Fizz");
        }
        else if(x % 5 == 0){
            console.log(x, " Buzz");
        }
        else {
            console.log(x);
        }
    }
}
FizzBuzzNo();