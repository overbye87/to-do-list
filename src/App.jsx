import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/Filter";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { addTodoAction } from "./store/todos/actions";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim()) {
      //dispatch({ type: "ADD_TODO", payload: { title: text } });
      dispatch(addTodoAction(text));
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
            <Filter />
            <InputField
              text={text}
              handleInput={setText}
              handleSubmit={addTodo}
            />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
