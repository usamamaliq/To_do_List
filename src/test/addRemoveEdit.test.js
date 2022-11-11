import { addTaskToArray, taskList } from '../modules/addRemoveEdit.js';

describe('Adding task to localStorage', () => {
  test('Test for add function', () => {
    const task = 'good';
    addTaskToArray(task);
    expect(taskList.length).toBe(1);
    expect(taskList[0].description).toBe(task);
    expect(taskList[0].completed).toBe(false);
    expect(taskList[0].index).toBe(1);
  });
  test('Test for add function', () => {
    const task = '2nd Task';
    addTaskToArray(task);
    expect(taskList.length).toBe(2);
    expect(taskList[1].description).toBe(task);
    expect(taskList[1].completed).toBe(false);
    expect(taskList[1].index).toBe(2);
  });
  test('Test for add function', () => {
    const task = '3nd Task';
    addTaskToArray(task);
    expect(taskList.length).toBe(3);
    expect(taskList[2].description).toBe(task);
    expect(taskList[2].completed).toBe(false);
    expect(taskList[2].index).toBe(3);
  });
});
