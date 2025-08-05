function toggleTask(spanElement) {
  const li = spanElement.parentElement;
  li.classList.toggle("completed");
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const ul = document.getElementById("todo-list");
  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <span class="tick">✔</span>
    <button class="delete-btn" onclick="deleteTask(this)">🗑</button>
  `;

  ul.appendChild(li);
  input.value = "";
}

function deleteTask(buttonElement) {
  const li = buttonElement.parentElement;
  li.remove();
}
