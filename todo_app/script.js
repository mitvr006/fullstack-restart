const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// page load pe tasks show karo
function showTodos() {
  list.innerHTML = "";

  todos.forEach(function (task, index) {
    const li = document.createElement("li");
    li.innerText = task;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.onclick = function () {
      todos.splice(index, 1);
      saveTodos();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// save function
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos();
}

// add task
addBtn.onclick = function () {
  const task = input.value;

  if (task === "") {
    alert("Pehle kaam likho");
    return;
  }

  todos.push(task);
  saveTodos();
  input.value = "";
};

// first load
showTodos();

