const form = document.querySelector("form");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError")

const parentName = document.querySelector("#parentName");
const parentNameError = document.querySelector("#parentNameError")

const age = document.querySelector("#age");
const ageError = document.querySelector("#ageError");

const mail = document.querySelector("#mail");
const mailError = document.querySelector("#mailError");

const success = document.querySelector("#success");

function validateForm(event) {
    event.preventDefault();

    if (fullName.value.trim().length > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (parentName.value.trim().length > 0) {
        parentNameError.style.display = "none";
    } else {
        parentNameError.style.display = "block";
    }

    if (age.value.trim().length > 0) {
        ageError.style.display = "none";
    } else {
        ageError.style.display = "block";
    }

    if (validateEmail(mail.value) === true) {
        mailError.style.display = "none";
    } else {
        mailError.style.display = "block";
    }

    if (fullName.value.trim().length > 0 && parentName.value.trim().length > 0 && age.value.trim().length > 0 && validateEmail(mail.value) === true) {
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