// const btn = document.getElementById("btn");
// const text = document.getElementById("text");

// btn.onclick = function () {
//   text.innerText = "Button Click Ho Gaya!";
//   text.style.color = "green";

// };


// variables
let count = 0;

// elements
const btn = document.getElementById("btn");
const text = document.getElementById("text");
const nameInput = document.getElementById("nameInput");

btn.onclick = function () {
  const name = nameInput.value;

  if (name === "") {
    text.innerText = "Pehle naam likho";
  } else {
    count = count + 1;
    text.innerText = "Hello " + name + 
      " | Button " + count + " bar click hua";
  }
};

// // function
// function increaseCount() {
//   count = count + 1;
//   text.innerText = "Button " + count + " bar click hua";
//   //text.innerText = text.innerText.toUpperCase();

// }

// // event
// btn.onclick = increaseCount;

