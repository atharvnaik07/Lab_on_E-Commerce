function validateEmail() {
    const emailField = document.getElementById("email");
    const message = document.getElementById("message");
    const email = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
    message.textContent = "Valid email address!";
    message.style.color = "green";
    return true; // Form will be submitted
    } else {
    message.textContent = "Invalid email address. Please try again.";
    message.style.color = "red";
    return false; // Prevent form submission
    }
   }