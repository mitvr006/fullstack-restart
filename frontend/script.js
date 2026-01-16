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

// function
function increaseCount() {
  count = count + 1;
  text.innerText = "Button " + count + " bar click hua";
  //text.innerText = text.innerText.toUpperCase();

}

// event
btn.onclick = increaseCount;

