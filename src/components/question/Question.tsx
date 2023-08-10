import { useState } from "react";

import { FaTimes, FaPlus } from "react-icons/fa";
import "./question.css";

type QuestionProps = {
  question: string;
  response: string;
  handleActiveQuestion: (q: string) => void;
  activeQuestion: string;
  lines: number;
};

const Question = ({
  question,
  response,
  handleActiveQuestion,
  activeQuestion,
  lines,
}: QuestionProps) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  function handleText(text: string, number: number) {
    return (
      <p className={`question__response `}>
        {text.substring(0, number)}
        {text.length > number && (
          <span className="question__response--extra">
            {text.substring(number, text.length)}
          </span>
        )}
      </p>
    );
  }
  return (
    <article className="question">
      <header className="question__header">
        <h1 className="question__title">{question}</h1>
        {isQuestionOpen && activeQuestion === question ? (
          <button
            className="question__btn"
            onClick={() => setIsQuestionOpen(false)}
          >
            <FaTimes />
          </button>
        ) : (
          <button
            className="question__btn"
            onClick={() => {
              setIsQuestionOpen(true);
              handleActiveQuestion(question);
            }}
          >
            <FaPlus />
          </button>
        )}
      </header>

      <div
        className={`question-response__container ${
          isQuestionOpen && activeQuestion === question
            ? "show--response"
            : "hide--response"
        }`}
      >
        {handleText(response, lines)}
      </div>
    </article>
  );
};

export default Question;
