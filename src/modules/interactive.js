import {
  updateLocalStorage, displayTasks, taskList, arrayUpdate,
} from './addRemoveEdit.js';

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
  const newList = taskList.filter((word) => !word.completed);
  for (let b = 0; b < newList.length; b += 1) {
    newList[b].index = b + 1;
  }
  arrayUpdate(newList);
  updateLocalStorage();
  displayTasks();
};

window.checkBox = checkBox;
// eslint-disable-next-line
export { clearButton };