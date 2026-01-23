const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.innerText;

    if (value === "C") {
      expression = "";
      display.value = "";
      return;
    }

    if (value === "=") {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
      return;
    }

    expression += value;
    display.value = expression;
  });
});
