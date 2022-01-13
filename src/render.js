const renderList = (listToDo) => {
  const sortedTodo = listToDo.list.sort((a, b) => a.index - b.index);
  const tasksToDo = document.querySelector('.tasks');

  tasksToDo.innerHTML = '';
  sortedTodo.forEach((todo) => {
    const taskContainer = document.createElement('ul');
    const taskEl = document.createElement('li');
    const spanEl = document.createElement('span');
    const square = document.createElement('i');
    const removeIcon = document.createElement('i');
    const remove = document.createElement('button');
    const paragraph = document.createElement('input');

    tasksToDo.appendChild(taskContainer);
    taskContainer.classList.add('second');
    taskContainer.appendChild(taskEl);
    taskEl.appendChild(spanEl);
    spanEl.classList.add('grey');
    spanEl.appendChild(square);
    square.classList.add('right', 'grey', 'far', 'fa-square');
    spanEl.appendChild(paragraph);
    paragraph.classList.add('edit-text');
    paragraph.setAttribute('id', todo.index);
    paragraph.value = todo.description;
    paragraph.readOnly = true;
    taskEl.appendChild(remove);
    remove.classList.add('left', 'grey');
    remove.appendChild(removeIcon);
    remove.setAttribute('id', todo.index);
    remove.style.border = 'none';
    removeIcon.classList.add('iconR', 'fas', 'fa-ellipsis-v');
  });

  const clear = document.createElement('p');
  tasksToDo.appendChild(clear);
  clear.classList.add('grey');
  clear.innerText = 'Clear all completed';

  //   const deleteToDo = document.querySelectorAll('.left');
  //   deleteToDo.forEach((el) => {
  //     el.onclick = () => {
  //       listToDo.removeToDo(Number(el.id));
  //       renderList(listToDo);
  //     };
  //   });

  const todoInput = document.querySelectorAll('.edit-text');
  todoInput.forEach((todoInp) => {
    todoInp.onclick = () => {
      todoInp.readOnly = false;
      todoInp.focus();

      todoInp.parentNode.parentNode.parentNode.style.backgroundColor = 'yellow';

      //show the trash
      todoInp.parentNode.parentNode.querySelector('button').remove();
      const btn = document.createElement('button');
      const removeIcon = document.createElement('i');
      removeIcon.classList.add('iconR', 'fas', 'fa-trash');
      btn.appendChild(removeIcon);
      todoInp.parentNode.appendChild(btn);
      btn.onclick = () => {
        listToDo.removeToDo(Number(todoInp.id));
        renderList(listToDo);
      };
    };

    todoInp.addEventListener('focusout', () => {
      todoInp.readOnly = true;
      todoInp.parentNode.parentNode.parentNode.style.backgroundColor = 'white';

      //hide trash
      setTimeout(() => {
        todoInp.parentNode.parentNode.querySelector('button').remove();
        const btn = document.createElement('button');
        const removeIcon = document.createElement('i');
        removeIcon.classList.add('iconR', 'fas', 'fa-ellipsis-v');
        btn.appendChild(removeIcon);
        todoInp.parentNode.appendChild(btn);
      }, 200);
    });

    todoInp.addEventListener('input', () => {
      const id = Number(todoInp.id);
      listToDo.editToDo(id, todoInp.value);
    });
  });
};

export default renderList;
