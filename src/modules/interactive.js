import {
  updateLocalStorage, displayTasks, taskList, arrayUpdate,
} from './addRemoveEdit.js';

export const checkBoxStatus = (id, status) => {
  
  taskList[id - 1].completed = status;
 
  updateLocalStorage();
};

// function to make use of checkbox
const checkBox = (checkBoxID) => {
  
  const indexID = checkBoxID.getAttribute('id');
  const inputTask = document.querySelectorAll('.taska');
  
  if (checkBoxID.checked) {
    
    inputTask[indexID - 1].style.textDecoration = 'line-through';
   
    checkBoxStatus(indexID, true);
  } else {
   
    inputTask[indexID - 1].style.textDecoration = 'none';
    
    checkBoxStatus(indexID , false);
  }
  
  
  
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