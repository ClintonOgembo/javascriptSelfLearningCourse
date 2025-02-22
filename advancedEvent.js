// improved Validation + Local Storage
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signForm");
    const output = document.getElementById("output");
    
    // load saved data from localstorage
    loadSavedData();

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // get input values
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const email = document.getElementById("email").value.trim();

        // Clear previous error messages
        clearErrors();

        let isValid = true;

        // validate Name
        if(name === "") {
            showError(document.getElementById("name"), "Name is required");
            isValid = false;
        }

        // validate age
        if (age === "" || isNaN(age) || age < 18) {
            showError(document.getElementById("age"), "Age must be a number and at leats 18.");
            isValid = false;
        }

        //validate email
        if (email === "" || !email.match(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}&/)) {
            showError(document.getElementById("email"), "Enter a valid email address.");
            isValid = false;
        }

        if (!isValid) return;

        // save to localStorage
        const userData = {
            name, age, email
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        // display submitted data
        displayData(userData);

        // clear input fields
        form.reset();
    });

    // now lets create the functions we have been using above

    function showError(input, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = message;
        input.classList.add("error");
        input.parentNode.appendChild(errorDiv);
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(e => e.remove());
        document.querySelectorAll(".error").forEach(e => e.classList.remove("error"));
    }

    function displayData(data) {
        output.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Email:</strong> ${data.email}</p>
        `;
    }

    function loadSavedData() {
        const savedData = localStorage.getItem("userData");
        if (savedData) {
            displayData(JSON.parse(savedData));
        }
    }

});