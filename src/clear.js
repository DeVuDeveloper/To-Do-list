const completedTasks = (list, todoId, status) => {
  const Update = list;
  const selected = list.findIndex((element) => element.id === todoId);
  newData[selected].completed = status;
  localStorage.setItem('todos', JSON.stringify(Update));
};
export default completedTasks;