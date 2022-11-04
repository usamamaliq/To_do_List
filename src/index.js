import './style.css';
import { displayTasks, refreshList } from './modules/addRemoveEdit.js';
import {clearButton} from './modules/interactive.js';

window.onload = displayTasks();
const refreshIcon = document.querySelector('.refreshIcon');
const clearBtn = document.querySelector('.clearBtn');

refreshIcon.addEventListener('click', () => {
  refreshList();
});

clearBtn.addEventListener('click', () => {
  clearButton();
});
