const completedTasks = (list, todoId, status) => {
  const update = list;
  const selected = list.findIndex((element) => element.id === todoId);
  update[selected].completed = status;
  localStorage.setItem('toDoTask', JSON.stringify(update))
};
export default completedTasks;