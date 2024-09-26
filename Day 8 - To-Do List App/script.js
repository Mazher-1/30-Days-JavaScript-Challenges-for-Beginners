const newTaskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    
    if (taskText) {
        const taskItem = document.createElement('li');
        
        // Create a checkbox to mark the task as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        
        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        
        // Append checkbox, task text, and delete button to the list item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        
        // Append the task item to the task list
        taskList.appendChild(taskItem);
        
        // Clear the input field
        newTaskInput.value = '';
    }
});
