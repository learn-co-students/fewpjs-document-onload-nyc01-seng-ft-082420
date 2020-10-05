const selection = document.querySelector("#text");

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  selection.innerHTML = 'This is really cool!'
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
