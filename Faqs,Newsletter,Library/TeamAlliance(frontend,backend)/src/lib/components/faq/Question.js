import React from "react";

const Questions = ({ id, question, answer }) => {
  return (
    <div
      className="question"
      id={id}
      data-aos="fade-right"
      data-aos-duration={(id + 1) * 250}
      data-aos-once="true"
    >
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default Questions;
