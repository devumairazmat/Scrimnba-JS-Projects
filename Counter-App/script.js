let count = 0;
function increment() {
  count += 1;
  console.log(count);
  document.getElementById("count-el").innerText = count;
  //   console.log("increment button is clicked");
}
increment();

function reset() {
  count = 0;
  document.getElementById("count-el").innerText = count;
  document.getElementById("counted-ele").innerText = count;
}
reset();

function saved() {
  console.log("counted:" + count);
  document.getElementById("counted-ele").innerText = count;
}
saved();

let name = window.prompt("Enter userName");
let greeting = "Hi, Welcome ";
let greetings = "to the Counter App";
let welcomeMessage = greeting + " " + name + " " + greetings;
console.log(welcomeMessage);
document.getElementById("welcome-el").textContent = welcomeMessage + "👋";

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  let saveCount = count + " - ";
  document.getElementById("save-el").textContent += saveCount;
  console.log(count);
}

function reset_previous() {
  saveCount = 0;
  document.getElementById("save-el").textContent = "";
}
