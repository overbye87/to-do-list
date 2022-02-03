import React, { useState } from "react";
import InputField from "./InputField";
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

  function filterTodoList(value) {
    console.log(value);
  }

  return (
    <div className="App">
      <h1 className="mt-3">To-do list</h1>
      <div>
        <p>
          Completed : {todos.filter((todo) => todo.completed === true).length}
        </p>
        <p>
          Active : {todos.filter((todo) => todo.completed === false).length}
        </p>
      </div>
      <div onChange={(e) => filterTodoList(e.target.value)}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filterTodoList"
            id="rb_all"
            value="all"
          />
          <label className="form-check-label" htmlFor="rb_all">
            All
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filterTodoList"
            id="rb_active"
            value="active"
          />
          <label className="form-check-label" htmlFor="rb_active">
            Active
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filterTodoList"
            id="rb_compleated"
            value="compleated"
          />
          <label className="form-check-label" htmlFor="rb_compleated">
            Compleated
          </label>
        </div>
      </div>
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoCompleate={toggleTodoCompleate}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
