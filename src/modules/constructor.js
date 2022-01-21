import completedTasks from './clear.js';

class ToDo {
  constructor() {
    this.list = localStorage.getItem('toDoTask')
      ? JSON.parse(localStorage.getItem('toDoTask'))
      : [];
  }

  addToDo(todo) {
    this.list.push(todo);
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }

  removeToDo(todoID) {
    this.list = this.list.filter((todo) => todo.index !== todoID);
    
   localStorage.setItem('toDoTask', JSON.stringify(this.list));
   console.log('this.list:', this.list)
  }
  
  

  editToDo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === todoId) {
        todo.description = todoDescription;
      }
      return todo;
    });
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }

  completeToDo(todoId, status) {
    completedTasks(this.list, todoId, status);
  }

  clearCompleted() {
    this.list = this.list.filter((todo) => !todo.completed);
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }
}

export default ToDo;