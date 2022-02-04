import { useDispatch } from "react-redux";
function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  function toggleTodoCompleate(todoId) {
    dispatch({ type: "TOGGLE_TODO_COMPLETE", payload: { id: todoId } });
  }

  function removeTodo(todoId) {
    dispatch({ type: "REMOVE_TODO", payload: { id: todoId } });
  }

  return (
    <li className="list-group-item">
      <div className="form-check form-switch form-check-inline">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodoCompleate(id)}
          name={id}
          id={id}
          className="form-check-input"
        ></input>
        <span>{title}</span>
        <label className="form-check-label visually-hidden" htmlFor={id}>
          Did this done
        </label>
      </div>

      <button onClick={() => removeTodo(id)} className="btn btn-light ">
        &times;
      </button>
    </li>
  );
}
export default TodoItem;
