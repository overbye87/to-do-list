function TodoItem({ id, title, completed, toggleTodoCompleate, removeTodo }) {
  return (
    <li key={id} className="list-group-item mb-2">
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

      <button
        onClick={() => removeTodo(id)}
        className="btn-outline-danger ms-3"
      >
        &times;
      </button>
    </li>
  );
}
export default TodoItem;
