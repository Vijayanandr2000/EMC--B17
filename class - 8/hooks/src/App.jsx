import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // let name = "Vijay";
  let [name, setName] = useState(() => {
    return "Vijay";
  });

  const [rn, setRn] = useState(0);
  // name = "Vijay"
  // name = "anand"
  // name = "anand"

  useEffect(() => {
    console.log("Mounting", name, rn);

    return () => {
      console.log("Unmounting", name, rn);
    };
  }, [name, rn]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>
        Random Number: <i>{rn}</i>
      </h1>

      <button
        onClick={() => {
          // name = "Anand";
          setName("Anand");

          console.log(name);
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          let num = Math.floor(Math.random() * 10) + 1;
          setRn(num);
        }}
      >
        Random Number
      </button>
    </div>
  );
}

export default App;
