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
  return (
    <div className="App">
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
