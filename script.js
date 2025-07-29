function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    </div>
  `;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function editTask(button) {
  const li = button.closest("li");
  const span = li.querySelector("span");
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null) {
    span.textContent = newText;
  }
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}

// Theme toggle
document.getElementById("theme-toggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
