const form = document.querySelector("form");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError")

const school = document.querySelector("#school");
const schoolError = document.querySelector("#schoolError")

const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError")

const time = document.querySelector("#time");
const timeError = document.querySelector("#timeError")

function validateForm(event) {
    event.preventDefault();

    if (fullName.value.trim().length > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (school.value.trim().length > 0) {
        schoolError.style.display = "none";
    } else {
        schoolError.style.display = "block";
    }

    if (date.value.trim().length > 0) {
        dateError.style.display = "none";
    } else {
        dateError.style.display = "block"
    }

    if (time.value.trim().length > 0) {
        timeError.style.display = "none";
    } else {
        timeError.style.display = "block";
    }
}

form.addEventListener("click", validateForm);