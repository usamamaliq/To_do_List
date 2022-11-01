import './style.css';

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete the project',
    completed: false,
    index: 2,
  },
];

const taskContainer = document.querySelector('.tasks-cont');
for (let i = 0; i < tasks.length; i += 1) {
  taskContainer.innerHTML += `<div class="task-list">
  <input class="pointer " type="checkbox" name="wash the dishes" id="${tasks[i].index}">
  <label  for="${tasks[i].index}">${tasks[i].description}</label>
  <i class="fa  fa-ellipsis-v menuIcon pointer"></i>
</div>`;
}
