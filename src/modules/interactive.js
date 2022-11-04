import { updateLocalStorage, displayTasks, taskList } from './addRemoveEdit.js';

// function to make use of checkbox
const checkBox = (checkBoxID) => {
  const indexID = checkBoxID.getAttribute('id');
  const inputTask = document.querySelectorAll('.taska');
  if (checkBoxID.checked) {
    inputTask[indexID - 1].style.textDecoration = 'line-through';
    taskList[indexID - 1].completed = true;
  } else {
    inputTask[indexID - 1].style.textDecoration = 'none';
    taskList[indexID - 1].completed = false;
  }
  updateLocalStorage();
};

// To clear completed tasks
const clearButton = () => {
  for (let i = taskList.length - 1; i >= 0; i -= 1) {
    if (taskList[i].completed) {
      taskList.splice(i, 1);
    }
  }
  for (let b = 0; b < taskList.length; b += 1) {
    taskList[b].index = b + 1;
  }
  updateLocalStorage();
  displayTasks();
};

window.checkBox = checkBox;
// eslint-disable-next-line
export { clearButton };