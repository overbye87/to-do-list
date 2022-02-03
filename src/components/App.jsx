import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    console.log(text);
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
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
