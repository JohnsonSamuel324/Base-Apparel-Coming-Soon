var email = document.getElementById("input-email");
// The allowed characters in a valid email
var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

function submitEmail() {
    if (regex.test(email.value)) {
        document.getElementById("img-error").style.display = "none";
        document.getElementById("error-text").style.display = "none";
    } else {
        document.getElementById("img-error").style.display = "block";
        document.getElementById("error-text").style.display = "block";
        email.style.borderColor = "hsl(0, 93%, 68%)";
    }
}

// Allows user to press enter to submit their email
email.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("input-btn").click();
    }
})

// Clears error when user starts typing
function clearErrors() {
    document.getElementById("img-error").style.display = "none";
    document.getElementById("error-text").style.display = "none";
    email.style.borderColor = "black";
}
