import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { setUser, user } = useContext(UserContext);
  const navigator = useNavigate();

  return (
    <>
      <h1>Welcome to Quiz App...!</h1>

      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            const { value } = e.target;
            setUser(value.trim());
          }}
        />
      </div>
      <br />
      <button
        disabled={!user}
        onClick={() => {
          navigator("/instruction");
        }}
      >
        Next
      </button>
    </>
  );
};

export default UserInfo;
