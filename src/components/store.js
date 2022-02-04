import { createStore } from "redux";

const defaultState = {
  todos: [],
};

// action = { type: "REMOVE_TODO", payload: { id:"ID", title:"text"} }

function reducer(state = defaultState, action) {
  console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      let addState = { ...state };
      addState.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false,
      });
      return addState;
    case "REMOVE_TODO":
      let removeState = { ...state };
      removeState.todos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return removeState;
    case "TOGGLE_TODO_COMPLETE":
      let toggleState = { ...state };
      let toggledTodo = toggleState.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
      return toggleState;
    default:
      return state;
  }
}

const store = createStore(reducer);

export { store };
