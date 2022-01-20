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
  }

  editToDo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.index === todoId) {
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
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }
}

export default ToDo;