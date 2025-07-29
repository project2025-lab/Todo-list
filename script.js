const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-task");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="edit-btn" onclick="editTask(this)">Edit</button>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

function editTask(button) {
  const li = button.parentElement;
  const span = li.querySelector(".task-text");

  const currentText = span.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "edit-input";

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.className = "save-btn";
  saveButton.onclick = () => {
    span.textContent = input.value;
    li.replaceChild(span, input);
    li.replaceChild(button, saveButton);
  };

  li.replaceChild(input, span);
  li.replaceChild(saveButton, button);
}
