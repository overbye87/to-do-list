import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "./InputField";
import TodoList from "./TodoList";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo() {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: { title: text } });
      setText("");
    }
  }
  const numberOfCompleted = todos.filter((todo) => todo.completed).length;
  const numberOfActive = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="App">
            <h1 className="mt-3">To-do list</h1>
            <hr />
            <div>
              <p>
                <span>Active : {numberOfActive}</span>
                {", "}
                <span>Completed : {numberOfCompleted}</span>
                {"."}
              </p>
            </div>
            <div onChange={(e) => setFilter(e.target.value)}>
              <div>Filter:</div>
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
                <label className="form-check-label" htmlFor="rb_completed">
                  Completed
                </label>
              </div>
            </div>
            <InputField
              text={text}
              handleInput={setText}
              handleSubmit={addTodo}
            />
            <TodoList filter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
