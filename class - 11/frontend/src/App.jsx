import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        gap: "20px",
      }}
    >
      <h1>Welcome to the App</h1>
      <Outlet />
      <h3>Footer Content</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/login">Login</a>
        <span> | </span>
        <a href="/signup">Signup</a>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
