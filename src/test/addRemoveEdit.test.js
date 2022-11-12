import {
  inputSubmit, splice, editTaskValue
} from '../modules/addRemoveEdit.js';

// expected value of local storage
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

describe('add and remove items from todo list', () => {
  test('adding tasks to local storage', () => {
    // mock the DOM content
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
    // Checking local storage to be equal to todos
    expect(JSON.parse(localStorage.getItem('Task List'))).toEqual(todos);
    // Checking DOM content to have 5 tasks
    expect(document.querySelector('.tasks-cont').children).toHaveLength(5);
  });

  test('remove item 1 of task list', () => {
    splice(1);
    const taskList = JSON.parse(localStorage.getItem('Task List'));
    expect(taskList.length).toEqual(4);
    expect(taskList[0].index).toEqual(1);
    expect(document.querySelector('.tasks-cont').children).toHaveLength(4);
  });

  test('remove item 3 of task list', () => {
    splice(3);
    const taskList = JSON.parse(localStorage.getItem('Task List'));
    expect(taskList.length).toEqual(3);
    expect(taskList[2].index).toEqual(3);
    expect(document.querySelector('.tasks-cont').children).toHaveLength(3);
  });

  //test for editing a task

  test('to edit a task', () => {
    editTaskValue(1, 'edited description');
    const taskList = JSON.parse(localStorage.getItem('Task List'));
    expect(taskList[0].description).toEqual('edited description');
   // expect(document.querySelector('.tasks-cont').children).toHaveLength(3);
  });

  
});

