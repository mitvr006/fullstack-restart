document.getElementById("btn").addEventListener("click", function() {
  let name = document.getElementById("nameInput").value;
  
  if(name === "") {
    document.getElementById("text").innerText = "Pehle naam likho";
  } else {
    document.getElementById("text").innerText = "Hello " + name ;
  }
});

document.body.style.backgroundColor = "lightblue";

let time = new Date().toLocaleTimeString();
document.getElementById("text").innerText = time;

let messages = [
  "Aaj kuch naya karo ",
  "Consistency hi success hai ",
  "Kabhi give up mat karo "
];

let random = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("text").innerText = random;