import React, { useContext } from "react";
import { quizQuestions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Quiz = () => {
  const navigator = useNavigate();
  const { setScore } = useContext(UserContext);
  const [currQuestionIdx, setCurrQuestionIdx] = React.useState(0);

  const handleSubmit = (selectedOption) => {
    const isCorrect = selectedOption === quizQuestions[currQuestionIdx].answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currQuestionIdx < quizQuestions.length - 1) {
      setCurrQuestionIdx((prev) => prev + 1);
    } else {
      navigator("/result");
    }
  };

  return (
    <>
      <h1>Quiz</h1>

      <div>
        <h2>
          {currQuestionIdx + 1} . {quizQuestions[currQuestionIdx].question}
        </h2>
        {quizQuestions[currQuestionIdx].options.map((item) => {
          return (
            <div
              style={{
                marginBottom: "10px",
              }}
            >
              <button
                onClick={() => {
                  handleSubmit(item);
                }}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Quiz;
