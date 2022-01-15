const completedTasks = (list, todoId, status) => {
  const Update = list;
  const selected = list.findIndex((element) => element.id === todoId);
  Update[selected].completed = status;
  localStorage.setItem('toDoTask', JSON.stringify(Update));
};
export default completedTasks;