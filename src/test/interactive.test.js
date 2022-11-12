import {
    checkBoxStatus, clearButton
  } from '../modules/interactive.js';
  
  import {
     inputSubmit
  } from '../modules/addRemoveEdit.js';

  const todos = [
    {
      description: 'first todo',
      completed: false,
      index: 1,
    },
    {
      description: '2nd todo',
      completed: false,
      index: 2,
    },
    {
      description: '3rd todo',
      completed: false,
      index: 3,
    },
    {
      description: '4th todo',
      completed: false,
      index: 4,
    },
    {
      description: '5th todo',
      completed: false,
      index: 5,
    },
  ];

  todos.map((item) => {
    document.body.innerHTML = `
    <form class="input-cont" onsubmit="inputSubmit(this, event)">
    <input required value="${item.description}" type="text" class="input-task" placeholder="Add to your list...">
    <button type="submit" id="inputButton" class="pointer"><i class="fa fa-level-down fa-rotate-90 enterIcon pointer"></i></button>
      </form>
      <div class="tasks-cont">
      </div>
      `;
    inputSubmit();
    return 0;
  });

  describe('add and remove items from todo list', () => {
  test('to change task 1 status to true', () => {

    checkBoxStatus(1, true);
    const taskList = JSON.parse(localStorage.getItem('Task List'));
    expect(taskList[0].completed).toEqual(true);
  });
  test('to change task 3 status to true', () => {

    checkBoxStatus(3, true);
    const taskList = JSON.parse(localStorage.getItem('Task List'));
    expect(taskList[2].completed).toEqual(true);
  });

  test('to clear all completed tasks', () => {

    let todoClear = [
          {
            description: '2nd todo',
            completed: false,
            index: 1,
          },
          {
            description: '4th todo',
            completed: false,
            index: 2,
          },
          {
            description: '5th todo',
            completed: false,
            index: 3,
          },
    ];

    clearButton();
    const taskList = JSON.parse(localStorage.getItem('Task List'));
    expect(taskList).toEqual(todoClear);
    expect(document.querySelector('.tasks-cont').children).toHaveLength(3);
  });



});