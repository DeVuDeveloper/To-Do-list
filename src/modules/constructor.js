class ToDo {
  constructor() {
    this.list = localStorage.getItem('toDoTask')
      ? JSON.parse(localStorage.getItem('toDoTask'))
      : [];
  }

  addToDo = (description) => {
    const index = this.list.length + 1;
    const completed = false;
    
    this.list.push({
      description, completed, index,
    });
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  };

  removeToDo = (index) => {
    this.list = this.list.filter((todo) => Number(index) !== todo.index);
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  };

  editToDo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.index === todoId) {
        todo.description = todoDescription;
      }
      return todo;
    });
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }

  completedToDo = (index) => {
    const toDo = this.list.find((todo) => Number(index) === todo.index);
      if (toDo.completed === true) {
        toDo.completed = false;
    } else {
        toDo.completed = true;
    }
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  };

  clearCompleted() {
    this.list = this.list.filter((todo) => !todo.completed);
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }
}

export default ToDo;