const field = document.querySelector(".field");
const button = document.querySelector(".add");
const list = document.querySelector(".list");

function createTask(value) {
    const task = document.createElement("div");
    task.textContent = value;
    return task;
}
function addTask() {
    if (field.value) {
        const task = createTask(field.value);
        list.appendChild(task);
        field.value = ""; 
    }
}
button.addEventListener('click', addTask);
