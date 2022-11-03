import './style.css';
import {displayTasks, refreshList, clearButton} from './modules/addRemoveEdit.js';
window.onload = displayTasks();
const refreshIcon = document.querySelector('.refreshIcon');
const clearBtn = document.querySelector('.clearBtn');

  refreshIcon.addEventListener('click', (e) => {
    refreshList ();
  });

  
  clearBtn.addEventListener('click', (e) => {
    clearButton();
  });
