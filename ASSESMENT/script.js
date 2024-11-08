function validateForm() {
    let valid = true;
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;
    const usernameError = document.getElementById("usernameError"); 
    const passError = document.getElementById("passError");
    const errorDiv = document.getElementById("error");

    usernameError.textContent = "";
    passError.textContent = "";
    errorDiv.style.display = "none";
    if (username.trim() === "") {
        usernameError.textContent = "Username is required";
        valid = false;
    }

    if (pass.trim() === "") {
        passError.textContent = "Password is required";
        valid = false; 
    }

    if (username === "admin" && pass === "admin") {
        alert("Successful!");
        return true;
    } else {
        if (username !== "admin" || pass !== "admin") {
            errorDiv.textContent = "Invalid username or password.";
            errorDiv.style.display = "block"; 
        }
        return false;
    }

    return valid;
}
