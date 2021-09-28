const form = document.querySelector("form");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError")

const mail = document.querySelector("#email");
const mailError = document.querySelector("#mailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError")

const success = document.querySelector("#success");

function validateForm(event) {
    event.preventDefault();

    if (fullName.value.trim().length > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(mail.value) === true) {
        mailError.style.display = "none";
    } else {
        mailError.style.display = "block";
    }

    if (message.value.trim().length > 10) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block"
    }

    if (fullName.value.trim().length > 0 && validateEmail(mail.value) === true && message.value.trim().length > 10) {
        success.style.display = "block";
        form.reset();
    } else {
        success.style.display = "none";
    }
}

form.addEventListener("submit", validateForm);

function validateEmail(mail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(mail);
    return patternMatches;
}