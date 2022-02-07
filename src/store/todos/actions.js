// { type: "ADD_TODO", payload: { title: text } }
// { type: "REMOVE_TODO", payload: { id: todoId } }
// { type: "TOGGLE_TODO_COMPLETE", payload: { id: todoId } }

const addTodoAction = (title) => {
  return {
    type: "ADD_TODO",
    payload: {
      title,
    },
  };
};

const removeTodoAction = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id,
    },
  };
};

const toggleTodoCompleteAction = (id) => {
  return {
    type: "TOGGLE_TODO_COMPLETE",
    payload: {
      id,
    },
  };
};

const changeFilterAction = (filter) => {
  return {
    type: "CHANGE_FILTER",
    payload: {
      filter,
    },
  };
};

export {
  addTodoAction,
  removeTodoAction,
  toggleTodoCompleteAction,
  changeFilterAction,
};
