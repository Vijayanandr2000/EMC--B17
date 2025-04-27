import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigatore = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("User data submitted:", user);

      const response = await axios.post("http://localhost:8080/signup", user);
      console.log("Response from server:", response);

      if (response.status === 201) {
        alert("User created successfully!");
        navigatore("/login");
        return;
      }

      setError(response.data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      onSubmit={handleSubmit}
    >
      {error && (
        <h1
          style={{
            color: "red",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          {error}
        </h1>
      )}
      <section>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => {
            const { value } = e.target;
            setUser({
              ...user,
              email: value,
            });
          }}
        />
      </section>
      <section>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => {
            const { value } = e.target;
            setUser({
              ...user,
              password: value,
            });
          }}
        />
      </section>

      <section>
        <input type="submit" value="Signup" />
      </section>
    </form>
  );
};

export default SignUp;
