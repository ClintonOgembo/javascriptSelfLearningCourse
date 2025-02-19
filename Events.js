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
*/

 const form = document.getElementById("signUpForm");

 form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevents the form from refreshing the page.

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(`Form submitted! Name: ${name}, Email: ${email}`);
 });

