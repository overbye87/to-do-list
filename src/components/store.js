import { createStore } from "redux";

const defaultState = {
  todos: [],
};

// action = { type: "REMOVE_TODO", payload: { id:"ID", title:"text"} }

function reducer(state = defaultState, action) {
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
      let toggledState = { ...state };
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

const store = createStore(reducer);

export { store };
