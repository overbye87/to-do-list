import React, { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  function filterTodos(todos, filter) {
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    return todos;
  }

  function addTodo() {
    if (text.trim()) {
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
    const todosUpdatedByCompleted = todos.map((todo) => {
      if (todo.id !== todoId) return todo; //(<--- от обратного)
      return {
        ...todo,
        completed: !todo.completed,
      };
    });
    setTodos(todosUpdatedByCompleted);
  }

  function removeTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  const numberOfCompleted = todos.filter((todo) => todo.completed).length;
  const numberOfActive = todos.filter((todo) => !todo.completed).length;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="App">
            <h1 className="mt-3">To-do list</h1>
            <div>
              <p>Completed : {numberOfCompleted}</p>
              <p>Active : {numberOfActive}</p>
            </div>
            <div onChange={(e) => setFilter(e.target.value)}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterTodoList"
                  id="rb_all"
                  value="all"
                  defaultChecked
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
                  id="rb_completed"
                  value="completed"
                />
                <label className="form-check-label" htmlFor="rb_compleated">
                  Completed
                </label>
              </div>
            </div>
            <InputField
              text={text}
              handleInput={setText}
              handleSubmit={addTodo}
            />
            <TodoList
              todos={filterTodos(todos, filter)}
              toggleTodoCompleate={toggleTodoCompleate}
              removeTodo={removeTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
