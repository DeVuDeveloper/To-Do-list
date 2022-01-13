class ToDo {
  constructor() {
    this.list = localStorage.getItem('toDoTask')
      ? JSON.parse(localStorage.getItem('toDoTask'))
      : [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }

  removeToDo(todoID) {
    this.list = this.list.filter((todo) => todo.index !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }

  editToDo(todoId, todoDescription) {
    const newTask = this.list.map((todo) => {
      if (todo.index === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('toDoTask', JSON.stringify(newTask));
  }
}

export default ToDo;
