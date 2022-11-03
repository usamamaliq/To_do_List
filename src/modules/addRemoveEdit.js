if (localStorage.getItem('Task List') === null) {
    localStorage.setItem('Task List', JSON.stringify([]));
  }
  
  let taskList = JSON.parse(localStorage.getItem('Task List'));
  
  const updateLocalStorage= () => {
    localStorage.setItem('Task List', JSON.stringify(taskList));
  }
  
  export const displayTasks = () => {
    const taskContainer = document.querySelector('.tasks-cont');
    taskContainer.innerHTML = '';
    for (let i = 0; i < taskList.length; i += 1) {
        if(taskList[i].completed=== true){
            taskContainer.innerHTML += `<form onSubmit="updateTask(this)" class="task-list" >
            <input onclick="checkBox(this)" class="pointer " type="checkbox" checked="checked" id="${taskList[i].index}">
            <input class= "taska line-through" type= "text" name="task" value= "${taskList[i].description}" readonly >    
            <i onclick="taskED(this)" class="fa  fa-ellipsis-v menuIcon pointer"></i>
            <i onclick="deleteTask(this)" class="fa   fa-trash delete pointer"></i>
        </form>`;

        }
        else{
        taskContainer.innerHTML += `<form type="submit" class="task-list" onsubmit="updateTask(this, event)" >
        <input onclick="checkBox(this)" class="pointer " type="checkbox" id="${taskList[i].index}">
        <input class= "taska" type= "text" name="task" value= "${taskList[i].description}" readonly >    
        <i onclick="taskED(this)" class="fa  fa-ellipsis-v menuIcon pointer"></i>
        <i onclick="deleteTask(this)" class="fa   fa-trash delete pointer"></i>
      </form>`;
      }}
  };
  
  const checkBox = (checkBoxID) => {
    let indexID= checkBoxID.getAttribute('id');
    let inputTask= document.querySelectorAll('.taska');
    if (checkBoxID.checked) {
    inputTask[indexID-1].style.textDecoration= 'line-through';
    taskList[indexID-1].completed= true;
    }
    else
    {
        inputTask[indexID-1].style.textDecoration= 'none';
        taskList[indexID-1].completed= false;
    }
    updateLocalStorage();
  };

  const taskED = (EDId) => {
    EDId.style.display= 'none';
    let taskField= EDId.previousElementSibling;
    let deleteButton= EDId.nextElementSibling;
    let parentCont= EDId.parentElement;
    deleteButton.style.display= 'block';
    taskField.removeAttribute('readonly');
    taskField.style.outline= '1px solid black';
    let id= taskField.previousElementSibling.getAttribute('id');

  };

  const deleteTask = (deleteId) => {
    let checkBoxId= deleteId.parentElement.firstElementChild.getAttribute('id');
    taskList.splice(checkBoxId-1, 1);
    for (let i = checkBoxId-1; i < taskList.length; i += 1) {
        taskList[i].index -= 1 ;
    }
    updateLocalStorage();
    displayTasks();
  };

  const updateTask= (updateId, event) =>{
    event.preventDefault();
    let id= updateId.firstElementChild.getAttribute('id');
    let taskValue= updateId.firstElementChild.nextElementSibling;
    taskList[id-1].description= taskValue.value;
    updateLocalStorage();
    displayTasks();
  };

  export const addTask = (taskDescription) => {
    if (taskDescription === '' ) {
      alert('Fields cannot be empty');
    } else {
      const tasks = {
        description: taskDescription,
        completed: false,
        index: (taskList.length)+1,
      };
      taskList.push(tasks);
      updateLocalStorage();
      displayTasks();
      clearInput();
    }
  };
  

const inputSubmit= (ab, event) => {
event.preventDefault();
    const taskValue = document.querySelector('.input-task');
    addTask(taskValue.value);
};


  //To clear input values
  const clearInput = () => {
    const taskValue = document.querySelector('.input-task');
    taskValue.value = "";
  }
 
  //To delete everything from todo list
//   const refreshIcon = document.querySelector('.refreshIcon');
  export const refreshList=  () => {
    taskList= [];
    updateLocalStorage();
    displayTasks();
  };

  //To clear completed tasks
  const clearBtn = document.querySelector('.clearBtn');
  clearBtn.addEventListener('click', (e) => {
    for (let i = taskList.length-1; i >=0; i -= 1) {
        if (taskList[i].completed)
        {
            taskList.splice(i, 1);
            }
        }
        for (let b = 0; b < taskList.length; b += 1) {
                taskList[b].index = b+1 ;
        }
    updateLocalStorage();
    displayTasks();
} );

window.deleteTask =deleteTask;
window.taskED= taskED;
window.checkBox = checkBox;
window.updateTask= updateTask;
window.inputSubmit=inputSubmit;