const newTaskInput = document.getElementById('newtask')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(){
    taskList.innerHTML = '';

    tasks.forEach((task , index) => {
        const li = document.createElement('li')
        li.className = task.completed ? 'completed' : '';
        li.textContent = task.name;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'complete';

        completeButton.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        })

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

addButton.addEventListener('click', () => {
    const taskName = newTaskInput.value.trim();  // Get the value from the input field and remove extra spaces.
    if (taskName) {  // If the task name is not empty:
        tasks.push({ name: taskName, completed: false });  // Add a new task object with the name and "completed" set to false.
        saveTasks();  // Save the updated task list to localStorage.
        renderTasks();  // Re-render the task list to display the new task.
        newTaskInput.value = '';  // Clear the input field for the next task.
    }
});

renderTasks();
