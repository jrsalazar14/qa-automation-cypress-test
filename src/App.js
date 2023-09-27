import { useState } from "react";
import logo from "./logo.svg";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNotes((prevState) => [
      ...prevState,
      { id: uuidv4(), content: inputValue },
    ]);
    setInputValue("");
  }

  function handleDelete(id) {
    setNotes((prevState) => prevState.filter((item) => item.id !== id));
  }

  return (
    <div className="app-container" data-cy="app">
      <h2 data-cy="title">QA Automation Cypress Test</h2>
      <div className="list-container" data-cy="list">
        <ul>
          {notes.map((item) => (
            <div className="note-container" data-cy="note">
              <li key={item.id}>{item.content}</li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit} data-cy="form">
          <input
            type="text"
            id="text-input"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            data-cy="input"
          />
          <button type="submit" data-cy="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
