
function createTask(describeTask) {
    let resultElement = document.createElement('div');
    resultElement.classList.add('task');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = describeTask;
    resultElement.appendChild(taskTitle);

    const a = document.createElement('a');
    a.classList.add('task__remove')
    a.setAttribute('href', '#');
    a.insertAdjacentHTML('beforeend', '&times;')
    a.addEventListener('click', onDeleteTask);
    resultElement.appendChild(a);

    return resultElement;
}

function onClick(event) {
    event.preventDefault();

    const input = document.getElementById('task__input');
    
    let text = input.value.trim();
    input.value = '';

    if (text.length !== 0) {
        const taskList = document.getElementById('tasks__list');
        let task = createTask(text);
        taskList.appendChild(task);
    }
}

function onDeleteTask(event) {
    event.preventDefault();

    const task = event.currentTarget.closest('.task');
    const taskList = document.getElementById('tasks__list');
    taskList.removeChild(task);
}

function run() {
    document.getElementById("tasks__add").addEventListener('click', onClick);
}


run();