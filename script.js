const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addTask(text) {
  tasks.push({ text, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTask(task);
    input.value = "";
  }
});

renderTasks();

