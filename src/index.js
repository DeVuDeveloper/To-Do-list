import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import ToDo from './constructor.js';
import renderList from './render.js';

const listToDo = new ToDo();
renderList(listToDo);

const addBtn = document.querySelector('.add');

addBtn.onclick = () => {
  const description = document.querySelector('#input').value;
  const completed = false;
  const index = listToDo.list.length + 1;
  const newTask = { description, completed, index };

  if (description) {
    document.querySelector('#input').value = '';
    listToDo.addTodo(newTask);
    renderList(listToDo);
  }
};

const enterKey = '';
  enterKey = (event) => {
  if (event.which === 13 || event.keyCode === 13) {
    event.preventDefault();
    addBtn.onclick = () => {
      const description = document.querySelector('#input').value;
      const completed = false;
      const index = listToDo.list.length + 1;
      const newTask = { description, completed, index };
      if (description) {
        document.querySelector('#input').value = '';
        listToDo.addTodo(newTask);
        renderList(listToDo);
      }
    };
  }
};