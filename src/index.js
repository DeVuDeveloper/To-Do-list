import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import ToDo from './constructor.js';

const listToDo = new ToDo();
renderList(listToDo);

const addTodoBtn = document.querySelector('.add');
addTodoBtn.addEventListener('click', () => {
  const description = document.querySelector('#input').value.trim();
  const completed = false;
  const index = listToDo.list.length + 1;
  const newTodo = { description, completed, index };
  if (description) {
    listToDo.addTodo(newTodo);
    renderList(listToDo);
  }
});