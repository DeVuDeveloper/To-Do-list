const completeHelper = (list, todoId, status) => {
    const newData = list;
    const selected = list.findIndex((element) => element.id === todoId);
    newData[selected].completed = status;
    localStorage.setItem('toDoTask', JSON.stringify(newData));
  };
  export default completeHelper;