import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
function TodoList({ filter }) {
  function returnFilteredTodos(todos, filter) {
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    return todos;
  }

  let todos = useSelector((state) => state.todos);

  let filterTodos = returnFilteredTodos(todos, filter);
  return (
    <ul className="list-group">
      {filterTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}
export default TodoList;
