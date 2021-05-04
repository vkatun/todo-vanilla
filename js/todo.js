
const field = document.querySelector(".field");
const button = document.querySelector(".add");
const list = document.querySelector(".list");
function createTask(value) {
    
    const task = document.createElement("div");
    const checkbox = document.createElement("input");
    const button = document.createElement("input");
    button.type = 'button';
    checkbox.type = 'checkbox';
    checkbox.classList.add('status');
    task.textContent = value;
    task.classList.add('task', 'unsuccess');
    checkbox.addEventListener('click', completeTask);
    task.appendChild(checkbox);
    task.appendChild(button);
    button.value = "удалить задачу";
    button.addEventListener('click', deleteTask);
    return task;
}
function addTask() {
    if (field.value) {
        const task = createTask(field.value);
        list.appendChild(task);
        field.value = "";
    }
  saveTasks();
}
function completeTask(event) {
    const checkbox = event.target
    const task = checkbox.parentElement
    if (checkbox.checked) {
      task.classList.add('success')
      task.classList.remove('unsuccess')
    } else {
      task.classList.add('unsuccess')
      task.classList.remove('success')
      }
    saveTasks();
}
function deleteTask(event) {
  const button = event.target
  const task = button.parentElement
  task.remove()
  saveTasks();
}

function saveTasks() {
  const tasks = document.querySelectorAll('.task');
  const taskArray = [...tasks].map((task, index) => ({ id: index + 1, content: task.textContent, status: task.querySelector('.status').checked}))
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function loadTasks() {
const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
loadedTasks.forEach(task => {
  const newTask = createTask(task.content)
  if (task.status) {
    newTask.classList.add('success');
    newTask.classList.remove('unsucess');
    newTask.querySelector('.status').checked = true;
    }
    list.appendChild(newTask);
  })
}



button.addEventListener('click', addTask);


document.addEventListener("DOMContentLoaded", loadTasks);