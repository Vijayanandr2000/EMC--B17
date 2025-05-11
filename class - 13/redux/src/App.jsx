import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { decrement, increment } from "./stores/features/counter";

function App() {
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Toolkit in React</h1>

      <h1>Count: {count}</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(decrement(5));
          }}
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
}

export default App;
