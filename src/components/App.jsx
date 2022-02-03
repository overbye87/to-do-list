import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim() != "") {
      setTodos([...todos, text]);
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
    </div>
  );
}

export default App;
