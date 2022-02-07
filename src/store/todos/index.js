const defaultState = {
  todos: [],
  filter: "all",
};
function reducer(state = defaultState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().toISOString(),
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "TOGGLE_TODO_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          } else return todo;
        }),
      };
    case "CHANGE_FILTER":
      return { ...state, filter: action.payload.filter };
    default:
      return state;
  }
}

export default reducer;
