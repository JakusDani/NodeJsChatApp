var chatHeader = document.querySelector(".absolute_box h3");
var bigChat = document.querySelector(".absolute_box");
var inputForms = document.querySelector(".input_forms");
var messages = document.querySelector("#messages");

chatHeader.addEventListener('click', () => {
    bigChat.classList.toggle("absolute_box");
    bigChat.classList.toggle("littleAbsoluteBox");
    inputForms.classList.toggle("hide");
    messages.classList.toggle("hide");
});