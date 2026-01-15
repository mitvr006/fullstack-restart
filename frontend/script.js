const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.onclick = function () {
  text.innerText = "Button Click Ho Gaya!";
  text.style.color = "green";

};
