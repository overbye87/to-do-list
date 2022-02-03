import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim() != "") {
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

  function removeTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id != todoId));
  }
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="row mt-2 mb-2"
      >
        <div class="col-8">
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
        <div class="col-auto">
          <button onClick={addTodo} className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item mb-2">
            <input type="checkbox" name={todo.id} id={todo.id}></input>
            <span>{todo.title}</span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
