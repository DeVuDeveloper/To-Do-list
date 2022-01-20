const renderList = (listToDo) => {
  const sortedTodo = listToDo.list.sort((a, b) => a.index - b.index);
  const tasksToDo = document.querySelector('#drag');

  tasksToDo.innerHTML = '';

  sortedTodo.forEach((todo) => {
    const taskContainer = document.createElement('ul');
    const taskEl = document.createElement('li');
    const spanEl = document.createElement('span');
    const removeIcon = document.createElement('i');
    const remove = document.createElement('button');
    const textInput = document.createElement('input');
    const checkbox = document.createElement('input');

    tasksToDo.appendChild(taskContainer);
    taskContainer.setAttribute('id', 'sortlist');
    taskContainer.appendChild(taskEl);
    taskEl.appendChild(spanEl);
    spanEl.classList.add('grey');

    spanEl.appendChild(checkbox);
    checkbox.setAttribute('id', todo.id);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('right', 'check');
    spanEl.appendChild(textInput);
    textInput.setAttribute('id', todo.index);
    textInput.setAttribute('type', 'text');
    textInput.classList.add('edit-text');
    textInput.value = todo.description;
    textInput.style.color = 'white';
    taskEl.appendChild(remove);
    remove.classList.add('left', 'grey');
    remove.appendChild(removeIcon);
    remove.setAttribute('id', todo.id);
    removeIcon.classList.add('iconR', 'dragging', 'fas', 'fa-ellipsis-v', 'fa-2x');
    remove.style.border = 'none';
    remove.style.backgroundColor = 'transparent';
    remove.style.color = '#fff';
  });

  const todoInput = document.querySelectorAll('.edit-text');
  todoInput.forEach((todoInp) => {
    todoInp.onclick = () => {
      todoInp.readOnly = false;
      todoInp.focus();

      todoInp.parentNode.parentNode.parentNode.style.backgroundColor = '#ffb62e';
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
      todoInp.parentNode.parentNode.parentNode.style.backgroundColor = '#57648c';
      setTimeout(() => {
        todoInp.parentNode.parentNode.querySelector('button').remove();
        const btn = document.createElement('button');
        const dotIcon = document.createElement('i');
        dotIcon.classList.add('iconR', 'fas', 'fa-ellipsis-v', 'fa-2x');
        btn.appendChild(dotIcon);
        btn.style.border = 'none';
        btn.style.backgroundColor = 'transparent';
        btn.style.color = '#fff';
        btn.style.marginRight = '5px';
        todoInp.parentNode.parentNode.appendChild(btn);
      }, 200);
    });

    todoInp.addEventListener('input', () => {
      const id = Number(todoInp.id);
      listToDo.editToDo(id, todoInp.value);
    });
  });

  const checkCompleted = document.querySelectorAll('.check');
  checkCompleted.forEach((todo) => {
    todo.onclick = ('change', (e) => {
      const { id } = e.target;
      listToDo.completeToDo(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.add('completed');
    });
  });
};

export default renderList;
