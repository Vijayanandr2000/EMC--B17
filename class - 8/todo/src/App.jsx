import "./App.css";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      value: inputValue,
      checked: false,
    };

    lists.push(payload);
    setLists([...lists]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => {
            const inputData = e.target.value;
            setInputValue(inputData);
          }}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {lists.map((list, idx) => {
          // console.log(list);
          return (
            <li
              style={{
                listStyle: "none",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <input
                type="checkbox"
                onChange={(e) => {
                  let checked = e.target.checked;
                  lists[idx].checked = checked;
                  setLists([...lists]);
                }}
              />
              <span className={list.checked ? "checked" : ""}>
                {list.value}
              </span>
              <button
                onClick={() => {
                  lists.splice(idx, 1);
                  setLists([...lists]);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
