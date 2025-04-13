import React from "react";
import { useNavigate } from "react-router-dom";

const Instruction = () => {
  const navigator = useNavigate();
  return (
    <>
      <h1>Instructions</h1>
      <ul
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          textAlign: "left",
        }}
      >
        <li>Read each question carefully.</li>
        <li>Select the correct answer from the options provided.</li>
        <li>You can skip questions and come back to them later.</li>
        <li>Once you finish, submit your answers to see your score.</li>
        <li>Good luck!</li>
      </ul>

      <button
        onClick={() => {
          navigator("/quiz");
        }}
      >
        Start Quiz
      </button>
    </>
  );
};

export default Instruction;
