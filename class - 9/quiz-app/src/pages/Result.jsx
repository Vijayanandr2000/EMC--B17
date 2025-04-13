import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Result = () => {
  const { score, user } = useContext(UserContext);
  return (
    <>
      <h1>Result</h1>

      <h2>
        Hi{" "}
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {user}
        </span>
      </h2>

      <h4>
        Your Score is{" "}
        <i>
          <mark
            style={{
              backgroundColor: "yellow",
              color: "black",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {score}
          </mark>
        </i>
      </h4>
    </>
  );
};

export default Result;
