import { useState } from "react";
import Form from "../../../components/form/Form";
import "./FAQ.css";
import Question from "../../../components/question/Question";
import { FAQ_Questions } from "../../../data/data";

const FAQ = () => {
  const [activeQuestion, setAvctiveQuestion] = useState("");
  const handleActiveQuestion = (q: string) => {
    setAvctiveQuestion(q);
  };
  return (
    <section className="faq">
      <h1 className="faq__title"> Frequently Asked Questions</h1>
      <div className="faq__container">
        {FAQ_Questions.map(({ id, question, response, lines }) => (
          <Question
            lines={lines}
            key={id}
            question={question}
            response={response}
            handleActiveQuestion={handleActiveQuestion}
            activeQuestion={activeQuestion}
          />
        ))}
      </div>
      <Form />
    </section>
  );
};

export default FAQ;
