/* 
EVENTS:
-are actions that happen in the browser, like:
    * Clicking a button
    * Hovering over an element
    * Typing into a form 
    * Loading a page 
- addEventListener method is commonly used to handle events.
   BASIC SYNTAX:

 Adding a click event to a button 
 const button = document.getElementById("myButton");

 button.addEventListener("click", function() {
    alert("Button was clicked!");
 })

 // PREVENTING DEFAULT BEHAVIOR(like form submission)
 const link = document.getElementById("myLink");

 link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Default link behavior prevented!");
 });


 const form = document.getElementById("signUpForm");

 form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevents the form from refreshing the page.

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(`Form submitted! Name: ${name}, Email: ${email}`);
 });
*/

/* FORM VALIDATION
- The field name is not empty.
- Age is a number. 
- Email format is correct.


const validate = document.getElementById("signForm");
 
validate.addEventListener("submit", function(event) {
event.preventDefault();

//get input values
const Name = document.getElementById("name").value.trim();
const Age = document.getElementById("age").value.trim();
const Email = document.getElementById("email").value.trim();

// validate name
if(Name === "") {
   alert("Please enter your name.");
   return;
}

// validate Age (Must be a number and atleast 18)
if (isNaN(Age) || Age < 18) {
   alert("Please enter a valid age (18 or older).");
   return;
}

// validate Email (basic)
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(!emailPattern.test(Email)) {
   alert("Please enter a valid email address");
   return;
}

//if validate passes
alert(`Form submitted successfully! Nmae: ${Name}, Age: ${Age}, Email: ${Email}`);

});
*/

// DISPLAY SUBMITTED DATA DYNAMICALLY
//-instead of showing an alert, lets display the user's input on the page.

const form = document.getElementById("signForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
   event.preventDefault();

   // get input values
   const name = document.getElementById("name").value.trim();
   const age = document.getElementById("age").value.trim();
   const email = document.getElementById("email").value.trim();

   // form validation as a whole
   if(name === "" || isNaN(age) || age < 18 || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
      alert("Please provide valid details");
      return;
   }

   // Display user data in the output div

   output.innerHTML = `
   <h3>Submitted Data:</h3>
   <p><strong>Name: </strong> ${name}</p>
   <p><strong>Age: </strong> ${age}</p>
   <p><strong>Email: </strong> ${email}</p>
   <button id="clearData">Clear Data</button>
   `;
});

// Event Delegation : clearing outuput section
document.addEventListener("click",function(event) {
   if(event.target.id === "clearData") {
      output.innerHTML = "";
   }
});
