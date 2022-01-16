import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import renderList from './render.js';
import ToDo from './constructor.js';

let listToDo = new ToDo();
renderList(listToDo);

const addBtn = document.querySelector('.add');
const refresh = document.querySelector('.refresh');

addBtn.onclick = () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('#input').value;
  const completed = false;
  const index = listToDo.list.length + 1;

  const newTask = {
    id, description, completed, index,
  };
  if (description) {
    document.querySelector('#input').value = '';
    listToDo.addToDo(newTask);
    renderList(listToDo);
  }
};

const clearBtn = document.querySelector('.clear-all');
clearBtn.onclick = () => {
  listToDo.clearCompleted();
  renderList(listToDo);
};

refresh.onclick = () => {
  listToDo = new ToDo();
  renderList(listToDo);
};