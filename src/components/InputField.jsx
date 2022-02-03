function InputField({ text, handleInput, handleSubmit }) {
  return (
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
          onChange={(e) => handleInput(e.target.value)}
          type="text"
          id="textInput"
          className="form-control "
        />
      </div>
      <div className="col-auto">
        <button onClick={handleSubmit} className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
export default InputField;
