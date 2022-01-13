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
        const paragraph = document.createElement('p');

        tasksToDo.appendChild(taskContainer);
        taskContainer.classList.add('second');
        taskContainer.appendChild(taskEl);
        taskEl.appendChild(spanEl);
        spanEl.classList.add('grey');
        spanEl.appendChild(square);
        square.classList.add('right', 'grey', 'far', 'fa-square');
        spanEl.appendChild(paragraph);
        paragraph.classList.add('edit-text');
        paragraph.setAttribute("id", "${todo.id}");
        paragraph.innerText = `${todo.description}`;
        taskEl.appendChild(remove);
        remove.classList.add('left', 'grey');
        remove.appendChild(removeIcon);
        remove.setAttribute('id', '${todo.id}')
        remove.style.border = 'none';
        removeIcon.classList.add('iconR', 'fas', 'fa-ellipsis-v');
    });
    
    const clear = document.createElement('p');
    tasksToDo.appendChild(clear);
    clear.classList.add('grey');
    clear.innerText = 'Clear all completed';

    const deleteToDo = document.querySelectorAll('.left');
    deleteToDo.forEach((el) => {
        el.onclick = ('click', (e) => {
            const element = el.parentNode;
            element.remove();
            listToDo.removeToDo(e.target.parentNode.parentNode.id);
        });
    });

    const todoInput = document.querySelectorAll('.edit-text');
    todoInput.forEach((todo) => {
        todo.onclick = ('change', (e) => {
            listToDo.editToDo(Number(e.target.id), e.target.value);
        });
    });
};

export default renderList;