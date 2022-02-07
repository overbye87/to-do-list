import { useSelector } from "react-redux";
import { getFilteredTodos } from "../store/selectors";

import TodoItem from "./TodoItem";
function TodoList() {
  const filterTodos = useSelector(getFilteredTodos);
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
