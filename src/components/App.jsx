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
      console.log(todos);

      setText("");
    }
  }

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="textInput"></label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          id="textInput"
          required
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" name={todo.id} id={todo.id}></input>
            <span>{todo.title}</span>
            <button>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
