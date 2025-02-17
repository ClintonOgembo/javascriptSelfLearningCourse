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
