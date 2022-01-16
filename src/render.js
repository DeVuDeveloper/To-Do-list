const renderList = listToDo => {
  const sortedTodo = listToDo.list.sort((a, b) => a.index - b.index);
  const tasksToDo = document.querySelector('.tasks');

  tasksToDo.innerHTML = '';

  sortedTodo.forEach(todo => {
    const checkedTodo = todo.completed ? 'checked' : '';
    const checkClass = todo.completed ? 'checked' : '';
    const taskContainer = document.createElement('ul');
    const taskEl = document.createElement('li');
    const spanEl = document.createElement('span');
    const removeIcon = document.createElement('i');
    const remove = document.createElement('button');

    tasksToDo.appendChild(taskContainer);
    taskContainer.classList.add('second');
    taskContainer.appendChild(taskEl);
    taskEl.appendChild(spanEl);
    spanEl.classList.add('grey');
    spanEl.innerHTML = `<input id="${todo.id}" class="right check" type="checkbox" ${checkedTodo} />
                        <input id="${todo.index}" class="edit-text ${checkClass}" type="text" value="${todo.description}" />`;
    taskEl.appendChild(remove);
    remove.classList.add('left', 'grey');
    remove.appendChild(removeIcon);
    remove.setAttribute('id', todo.index);
    remove.style.border = 'none';
    removeIcon.classList.add('iconR', 'fas', 'fa-ellipsis-v', 'fa-2x');
  })

  const todoInput = document.querySelectorAll('.edit-text');
  todoInput.forEach(todoInp => {
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
      }
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

  const checkCompleted = document.querySelectorAll('.check');
  checkCompleted.forEach(todo => {
    todo.onclick = ('change', e => {
      const { id } = e.target;
      listToDo.completeToDo(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};

export default renderList;
