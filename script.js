function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (!taskText) return;

  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);
  input.value = "";
}

function deleteTask(btn) {
  const li = btn.parentElement.parentElement;
  li.remove();
}

function editTask(btn) {
  const li = btn.parentElement.parentElement;
  const span = li.querySelector(".task-text");
  const currentText = span.textContent;
  const input = document.createElement("input");
  input.value = currentText;
  input.className = "edit-input";
  span.replaceWith(input);
  input.focus();

  btn.textContent = "Save";
  btn.onclick = () => saveTask(btn, input);
}

function saveTask(btn, input) {
  const newText = input.value.trim();
  if (!newText) return;

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = newText;
  input.replaceWith(span);

  btn.textContent = "Edit";
  btn.onclick = () => editTask(btn);
}
document.getElementById("theme-toggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
  
});