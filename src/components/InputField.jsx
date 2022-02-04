function InputField({ text, handleInput, handleSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit();
        e.preventDefault();
      }}
      className="mt-3 mb-3"
    >
      <label htmlFor="textInput" className="visually-hidden">
        Todo title text
      </label>
      <input
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        type="text"
        id="textInput"
        className="form-control mb-2"
      />

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
export default InputField;
