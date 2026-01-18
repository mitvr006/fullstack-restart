const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

addBtn.onclick = function () {
  const task = input.value;

  if (task === "") {
    alert("Pehle kaam likho");
    return;
  }

  const li = document.createElement("li");
  li.innerText = task;

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";

  input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

};
