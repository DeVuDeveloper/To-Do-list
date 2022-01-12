import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

const listToDo = [
  {
    description: 'do2',
    completed: true,
    index: 2,
  },
  {
    description: 'do1',
    completed: false,
    index: 1,
  },
];

const tasksToDo = document.querySelector('.tasks');

const renderList = () => {
  const sortedTodo = listToDo.sort((a, b) => a.index - b.index);

  tasksToDo.innerHTML = '';
  sortedTodo.forEach((todo) => {
    const taskContainer = document.createElement('ul');
    const taskEl = document.createElement('li');
    const spanEl = document.createElement('span');
    const square = document.createElement('i');
    const refresh = document.createElement('i');
    const paragraph = document.createElement('p');

    tasksToDo.appendChild(taskContainer);

    taskContainer.classList.add('second');
    taskContainer.appendChild(taskEl);

    taskEl.appendChild(spanEl);
    spanEl.classList.add('grey');

    spanEl.appendChild(square);
    square.classList.add('right', 'grey', 'far', 'fa-square');
    spanEl.appendChild(paragraph);
    paragraph.innerText = `${todo.description}`;

    taskEl.appendChild(refresh);
    refresh.classList.add('left', 'grey', 'fas', 'fa-ellipsis-v');
  });
  const description = document.createElement('p');
  tasksToDo.appendChild(description);
  description.classList.add('grey');
  description.innerText = 'Clear all completed';
};

renderList();
