import './style.css';
import {displayTasks, addTask, refreshList} from './modules/addRemoveEdit.js';
window.onload = displayTasks();
const menuIcon = document.querySelectorAll('.menuIcon');
const deleteTask = document.querySelectorAll('.delete');
const taskInput = document.querySelectorAll('.taska');

const refreshIcon = document.querySelector('.refreshIcon');
  refreshIcon.addEventListener('click', (e) => {
    refreshList ();
  });
