// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    replaceText();
});
 

function replaceText() {
    document.querySelector('p')
        .textContent = "This is really cool!";
}