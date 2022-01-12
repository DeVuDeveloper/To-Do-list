class TaskToDo {
    constructor(description, completed = false, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  }

  const addTask = (listToDo, description) => {
    const task = new TaskToDo(description, listToDo.length);
    return listToDo.push(task);
  };
  
  const addBean = (e) => {
    const icon = e.target.parentNode.parentNode.lastChild.firstChild;
    if (icon.tagName === 'I') {
      icon.className = 'fas fa-trash-alt';
      icon.setAttribute('id', 'trash');
    }
  };
  
  const removeBean = () => {
    const icon = document.getElementById('trash');
    icon.removeAttribute('id', 'trash');
    icon.className = 'fas fa-ellipsis-v';
  };
  
  const editTask = (e, task) => {
    const newInput = document.createElement('input');
    newInput.setAttribute('id', task.index);
    newInput.value = e.target.textContent;
    e.target.textContent = '';
    e.target.appendChild(newInput);
  };
  
  const updateTask = (e, task) => {
    task.description = e.target.parentNode.firstChild.value;
    e.target.parentNode.innerText = task.description;
  };
  
  const removeTask = (taskList, task) => {
    const newList = taskList.filter((rmTask) => rmTask.index !== task.index);
    const updatedList = [];
    newList.forEach((task) => addTask(updatedList, task.description));
    return updatedList;
  };
  
  const clearCompleted = (taskList) => {
    const newList = taskList.filter((task) => !task.completed);
    const updatedList = [];
    newList.forEach((task) => addTask(updatedList, task.description));
    return updatedList;
  };
  
  export {
    TaskToDo, addTask, editTask, updateTask, addBean, removeTask, clearCompleted, removeBean,
  };
