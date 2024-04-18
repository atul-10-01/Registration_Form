
    document.querySelector("form").addEventListener("submit", function(event) {
        var password = document.getElementById("password").value;
        var passwordLabel = document.getElementById("password-label");
        if (password.length < 6 || password.length > 8) {
            passwordLabel.innerHTML = "Password: <i style='color: red; font-size: smaller;'> (Must be 6-8 characters long)</i>";
            event.preventDefault(); 
        } else {
            passwordLabel.innerHTML = "Password:";
        }
    });



function checkPasswordMatch() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let confirmPasswordLabel = document.getElementById("confirm-password-label");
    if (password !== confirmPassword) {
        confirmPasswordLabel.innerHTML = "Confirm Password: <i style='color: red; font-size: smaller; width: 100px;'>(Doesn't match)</i>";
        event.preventDefault();
    } else {
        confirmPasswordLabel.innerHTML = "Confirm Password:";
    }
};