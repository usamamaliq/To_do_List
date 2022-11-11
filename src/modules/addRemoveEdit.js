// local storage updates
if (localStorage.getItem('Task List') === null) {
  localStorage.setItem('Task List', JSON.stringify([]));
}

// eslint-disable-next-line
export let taskList = JSON.parse(localStorage.getItem('Task List'));

export const updateLocalStorage = () => {
  localStorage.setItem('Task List', JSON.stringify(taskList));
};

// function to display tasks dynamically
export const displayTasks = () => {
  const taskContainer = document.querySelector('.tasks-cont');
  taskContainer.innerHTML = '';
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].completed === true) {
      taskContainer.innerHTML += `<form onSubmit="updateTask(this)" class="task-list" >
            <input onclick="checkBox(this)" class="pointer " type="checkbox" checked="checked" id="${taskList[i].index}">
            <input required class= "taska line-through" type= "text" name="task" value= "${taskList[i].description}" readonly >    
            <i onclick="taskED(this)" class="fa  fa-ellipsis-v menuIcon pointer"></i>
            <i onclick="deleteTask(this)" class="fa   fa-trash delete pointer"></i>
        </form>`;
    } else {
      taskContainer.innerHTML += `<form type="submit" class="task-list" onsubmit="updateTask(this, event)" >
        <input onclick="checkBox(this)" class="pointer " type="checkbox" id="${taskList[i].index}">
        <input required class= "taska" type= "text" name="task" value= "${taskList[i].description}" readonly >    
        <i onclick="taskED(this)" class="fa  fa-ellipsis-v menuIcon pointer"></i>
        <i onclick="deleteTask(this)" class="fa   fa-trash delete pointer"></i>
      </form>`;
    }
  }
};

// Function to update array after filering
export const arrayUpdate = (newList) => {
  taskList = newList;
};

// function to edit task and display delete button
const taskED = (EDId) => {
  EDId.style.display = 'none';
  const taskField = EDId.previousElementSibling;
  const deleteButton = EDId.nextElementSibling;
  deleteButton.style.display = 'block';
  taskField.removeAttribute('readonly');
  taskField.style.outline = '1px solid black';
};

export const splice = (checkBoxId) => {
  taskList.splice(checkBoxId - 1, 1);
  for (let i = checkBoxId - 1; i < taskList.length; i += 1) {
    taskList[i].index -= 1;
  }
};

// function to delete a task with delete button
const deleteTask = (deleteId) => {
  const checkBoxId = deleteId.parentElement.firstElementChild.getAttribute('id');
  splice(checkBoxId);
  updateLocalStorage();
  displayTasks();
};

// Editing task and updating local storage
const updateTask = (updateId, event) => {
  event.preventDefault();
  const id = updateId.firstElementChild.getAttribute('id');
  const taskValue = updateId.firstElementChild.nextElementSibling;
  taskList[id - 1].description = taskValue.value;
  updateLocalStorage();
  displayTasks();
};

// To clear input values
const clearInput = () => {
  const taskValue = document.querySelector('.input-task');
  taskValue.value = '';
};

export const addTaskToArray = (taskDescription) => {
  const tasks = {
    description: taskDescription,
    completed: false,
    index: (taskList.length) + 1,
  };
  taskList.push(tasks);
};

// Adding task to array and updating local storage
export const addTask = (taskDescription) => {
  addTaskToArray(taskDescription);
  updateLocalStorage();
  displayTasks();
  clearInput();
};

// function for getting value of input and passing to addTask
const inputSubmit = (ab, event) => {
  event.preventDefault();
  const taskValue = document.querySelector('.input-task');
  addTask(taskValue.value);
};

// To delete everything from todo list
export const refreshList = () => {
  taskList = [];
  updateLocalStorage();
  displayTasks();
};

// for onClick functions
window.deleteTask = deleteTask;
window.taskED = taskED;
window.updateTask = updateTask;
window.inputSubmit = inputSubmit;