const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload stop

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    message.style.color = "red";
    message.innerText = "All fields are required!";
    return;
  }

  if (password.length < 6) {
    message.style.color = "red";
    message.innerText = "Password must be at least 6 characters";
    return;
  }

  message.style.color = "green";
  message.innerText = "Signup successful 🎉";

  form.reset();
});
