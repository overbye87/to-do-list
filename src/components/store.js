import { createStore } from "redux";

const defaultState = {
  todos: [],
};

function reducer(state = defaultState, action) {
  return state;
}

const store = createStore(reducer);

export { store };
