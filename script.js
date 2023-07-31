const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span onclick="toggleComplete(${index})">${task.completed ? '✅' : '⬜'} ${task.text}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    const newTask = {
        text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

renderTasks();
