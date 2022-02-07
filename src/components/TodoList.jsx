import { useSelector } from "react-redux";
import { getFilteredTodos } from "../store/selectors";

import TodoItem from "./TodoItem";
function TodoList() {
  //const filter = useSelector((state) => state.filter);

  //const filterTodos = useSelector((state) => userSelectors.userById(state, id));

  return (
    <ul className="list-group">
      {getFilteredTodos(state).map((todo) => (
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
