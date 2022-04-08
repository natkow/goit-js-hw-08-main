// const { isNull } = require("lodash");
const form = document.querySelector(".feedback-form");
// const input = document.querySelector('input');
// const text =  document.querySelector('message');
const LOCALSTORAGE_KEY = "feedback-form-state";

if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
    try {
        const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
        const parsedData = JSON.parse(savedData);
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
    } catch (e) {
       console.log(e instanceof ReferenceError) 
    }
}

// let parsedData;
// console.log(parsedData);
form.addEventListener("input", saveMessage);
form.addEventListener("submit", sendMessage);

function saveMessage(evt) {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    try {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        const savedData = localStorage.getItem("formData");
        const parsedData = JSON.parse(savedData);
        
    } catch (e) {
        console.log(e instanceof ReferenceError) 
    }
}

function sendMessage(evt) {
    evt.preventDefault();

    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };

    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData !== null) {
        localStorage.removeItem(LOCALSTORAGE_KEY);
    }

    console.log(formData);
    form.reset();
}
