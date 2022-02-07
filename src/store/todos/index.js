const defaultState = {
  todos: [],
  filter: "all",
};

function reducer(state = defaultState, action) {
  console.log(action.type, action.payload);
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
    case "CHANGE_FILTER":
      let changeFilterState = { ...state };
      changeFilterState.filter = action.payload.filter;
      return changeFilterState;
    default:
      return state;
  }
}

export default reducer;
