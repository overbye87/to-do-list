// { type: "ADD_TODO", payload: { title: text } }

const addTodoAction = (title) => {
  return {
    type: "ADD_TODO",
    payload: {
      title,
    },
  };
};
