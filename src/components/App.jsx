import React, { useState } from "react";
import TodoList from "./TodoList";

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
      <TodoList
        todos={todos}
        toggleTodoCompleate={toggleTodoCompleate}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
