import TodoItem from "./TodoItem";
function TodoList({ todos, toggleTodoCompleate, removeTodo }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          toggleTodoCompleate={toggleTodoCompleate}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}
export default TodoList;
