import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import UserInfo from "./pages/UserInfo";
import Instruction from "./pages/Instruction";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const env = (key) => {
  return process.env[key] ?? null;
};

function App() {
  console.log(process.env.API_KEY);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserInfo />} />

          <Route path="/instruction" element={<Instruction />} />

          <Route path="/quiz" element={<Quiz />} />

          <Route path="/result" element={<Result />} />

          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route
            path="*"
            element={<h1>Sorry, this page isn't available.</h1>}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
