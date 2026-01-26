// variables
let name = "Amit";
const age = 22;


// functions
function add(a, b) {
  return a + b;
}


// Arrays
const fruits = ["apple", "banana"];
fruits.push("mango");


// objects
const user = {
  name: "Amit",
  role: "Developer"
};


// Conditions
if (age > 18) {
  console.log("Adult");
}


// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}


// DOM
document.getElementById("id");
document.querySelector(".class");


// Coding Practice : Task 1: Even / Odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(7)); // Odd


// Task 2: Array filter
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]



