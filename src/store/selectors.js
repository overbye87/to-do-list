import { createSelector } from "reselect";

export const getTodos = (state) => state.todos;

export const getFilter = (state) => state.filter;

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    return todos;
  }
);
