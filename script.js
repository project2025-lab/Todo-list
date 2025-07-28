const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const themeToggle = document.getElementById("theme-toggle");

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Load saved tasks
window.addEventListener("load", loadTasks);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    saveTask(task);
    taskInput.value = "";
  }
});

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

// Theme toggle logic
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});