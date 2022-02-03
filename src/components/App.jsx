import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          title: text,
          completed: false,
        },
      ]);
      setText("");
    }
  }

  function toggleTodoCompleate(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  }

  function removeTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="row mt-2 mb-2"
      >
        <div className="col-8">
          <label htmlFor="textInput" className="visually-hidden">
            Todo text
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="textInput"
            className="form-control "
          />
        </div>
        <div className="col-auto">
          <button onClick={addTodo} className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item mb-2">
            <div className="form-check form-switch form-check-inline">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodoCompleate(todo.id)}
                name={todo.id}
                id={todo.id}
                className="form-check-input"
              ></input>
              <span>{todo.title}</span>
              <label
                className="form-check-label visually-hidden"
                htmlFor={todo.id}
              >
                Did this done
              </label>
            </div>

            <button
              onClick={() => removeTodo(todo.id)}
              className="btn-outline-danger ms-3"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
