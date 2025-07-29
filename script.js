const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const toggle = document.getElementById("theme-toggle");

function addTask() {
  if (!input.value.trim()) return;

  const li = document.createElement("li");
  const text = document.createElement("span");
  text.textContent = input.value;
  li.appendChild(text);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", text.textContent);
    if (newTask) text.textContent = newTask;
  };
  li.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  list.appendChild(li);
  input.value = "";
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
