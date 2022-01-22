import Sortable from 'sortablejs';

const tasksToDo = document.querySelector('#drag');
let dragArea = tasksToDo;
dragArea = new Sortable(dragArea, {
  handle: '.dragging', animation: 150,
});

export default dragArea;