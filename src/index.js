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

// function slist (target) {
  
//   target = document.getElementById(target);
//   target.classList.add("slist");

//   let items = target.getElementsByTagName("li"), current = null;
//   for (let i of items) {
//     i.draggable = true;
    
//     i.addEventListener("dragstart", function (ev) {
//       current = this;
//       for (let it of items) {
//       if (it != current) { it.classList.add("hint"); }
//     }
//   });
    
//     i.addEventListener("dragenter", function (ev) {
//       if (this != current) { this.classList.add("active"); }
//     });

//     i.addEventListener("dragleave", function () {
//       this.classList.remove("active");
//     });

//     i.addEventListener("dragend", function () {
//       for (let it of items) {
//         it.classList.remove("hint");
//         it.classList.remove("active");
//       }
//     });
    
    
//     i.addEventListener("dragover", function (evt) {
//       evt.preventDefault();
//     });
    
//     i.addEventListener("drop", function (evt) {
//       evt.preventDefault();
//       if (this != current) {
//         let currentpos = 0, droppedpos = 0;
//         for (let it=0; it<items.length; it++) {
//           if (current == items[it]) { currentpos = it; }
//           if (this == items[it]) { droppedpos = it; }
//         }
//         if (currentpos < droppedpos) {
//           this.parentNode.insertBefore(current, this.nextSibling);
//         } else {
//           this.parentNode.insertBefore(current, this);
//         }
//       }
//     });
//   }
// }

// window.addEventListener("DOMContentLoaded", function(){
//   slist("sortlist");
// });