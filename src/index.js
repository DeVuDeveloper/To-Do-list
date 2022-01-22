import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import renderList from './modules/render.js';
import ToDo from './modules/constructor.js';
import Sortable from 'sortablejs';
import dragArea from './modules/dragging.js';

let listToDo = new ToDo();
renderList(listToDo);

const addBtn = document.querySelector('.add');
const refresh = document.querySelector('.refresh');


addBtn.onclick = () => {
  const description = document.querySelector('#input').value;
  document.querySelector('#input').value = '';
  listToDo.addToDo(description);
  renderList(listToDo);
};

const clearBtn = document.querySelector('.clear-all');
clearBtn.onclick = () => {
  listToDo.clearCompleted();
  renderList(listToDo);
};

dragArea = new Sortable(dragArea, {
  handle: '.dragging', animation: 150,
});

refresh.onclick = () => {
  listToDo = new ToDo();
  renderList(listToDo);
};