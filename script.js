const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Email Regex Pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function(event) {
    event.preventDefault();   // Stop form submission

    let valid = true;
    successMessage.textContent = ""; // Clear old success message

    // Validate Name
    if (nameField.value.trim() === "") {
        nameError.textContent = "Name is required!";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    if (emailField.value.trim() === "") {
        emailError.textContent = "Email is required!";
        valid = false;
    } else if (!emailPattern.test(emailField.value)) {
        emailError.textContent = "Enter a valid email!";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Message
    if (messageField.value.trim() === "") {
        messageError.textContent = "Message cannot be empty!";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    // If all valid
    if (valid) {
        successMessage.textContent = "Form Submitted Successfully!";
        form.reset();
    }
});
