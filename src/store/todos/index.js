const defaultState = {
  todos: [],
};

// action = { type: "REMOVE_TODO", payload: { id:"ID", title:"text"} }
function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_TODO":
      let addState = {};
      addState.todos = [
        ...state.todos,
        {
          id: new Date().toISOString(),
          title: action.payload.title,
          completed: false,
        },
      ];
      return addState;
    case "REMOVE_TODO":
      let removeState = {};
      removeState.todos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return removeState;
    case "TOGGLE_TODO_COMPLETE":
      let toggledState = {};
      toggledState.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });
      return toggledState;
    default:
      return state;
  }
}

export default reducer;
