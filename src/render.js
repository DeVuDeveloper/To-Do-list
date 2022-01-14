const renderList = (listToDo) => {
  const sortedTodo = listToDo.list.sort((a, b) => a.index - b.index);
  const tasksToDo = document.querySelector('.tasks');

  tasksToDo.innerHTML = '';
  sortedTodo.forEach((todo) => {
    const taskContainer = document.createElement('ul');
    const taskEl = document.createElement('li');
    const spanEl = document.createElement('span');
    // const square = document.createElement('i');
    const removeIcon = document.createElement('i');
    const remove = document.createElement('button');
    const textToDo = document.createElement('input');
    const checkbox = document.createElement('input');

    tasksToDo.appendChild(taskContainer);
    taskContainer.classList.add('second');
    taskContainer.appendChild(taskEl);
    taskEl.appendChild(spanEl);
    spanEl.classList.add('grey');
    spanEl.appendChild(checkbox);
    checkbox.classList.add('right', 'checkbox');
    checkbox.setAttribute('type', 'checkbox');
    spanEl.appendChild(textToDo);
    textToDo.classList.add('edit-text');
    textToDo.setAttribute('id', todo.index);
    textToDo.value = todo.description;
    textToDo.readOnly = true;
    taskEl.appendChild(remove);
    remove.classList.add('left', 'grey');
    remove.appendChild(removeIcon);
    remove.setAttribute('id', todo.index);
    remove.style.border = 'none';
    removeIcon.classList.add('iconR', 'fas', 'fa-ellipsis-v', 'fa-2x');
  });

  const clear = document.createElement('p');
  tasksToDo.appendChild(clear);
  clear.classList.add('grey');
  clear.innerText = 'Clear all completed';

  const todoInput = document.querySelectorAll('.edit-text');
  todoInput.forEach((todoInp) => {
    todoInp.onclick = () => {
      todoInp.readOnly = false;
      todoInp.focus();

      todoInp.parentNode.parentNode.parentNode.style.backgroundColor = '#d3d3d3';

      todoInp.parentNode.parentNode.querySelector('button').remove();
      const btn = document.createElement('button');
      todoInp.parentNode.parentNode.appendChild(btn);
      const trashIcon = document.createElement('i');
      trashIcon.classList.add('iconT', 'grey', 'fas', 'fa-trash', 'fa-2x');
      btn.appendChild(trashIcon);
      btn.style.border = 'none';
      btn.onclick = () => {
        listToDo.removeToDo(Number(todoInp.id));
        renderList(listToDo);
      };
    };

    todoInp.addEventListener('focusout', () => {
      todoInp.readOnly = true;
      todoInp.parentNode.parentNode.parentNode.style.backgroundColor = '#fff';
      setTimeout(() => {
        todoInp.parentNode.parentNode.querySelector('button').remove();
        const btn = document.createElement('button');
        const dotIcon = document.createElement('i');
        dotIcon.classList.add('iconR', 'fas', 'fa-ellipsis-v', 'fa-2x');
        btn.appendChild(dotIcon);
        todoInp.parentNode.parentNode.appendChild(btn);
      }, 200);
    });

    todoInp.addEventListener('input', () => {
      const id = Number(todoInp.id);
      listToDo.editToDo(id, todoInp.value);
    });
  });
};

export default renderList;
