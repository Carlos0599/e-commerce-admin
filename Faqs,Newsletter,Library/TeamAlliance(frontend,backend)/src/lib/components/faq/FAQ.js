import React, { useState } from "react";
import QuestionContainer from "./QuestionContainer";
import data from "../../DummyData/Dummy";

export const General = () => {
  const [question, setQuestion] = useState(data?.faqs?.general);

  const onClick = (id) => {
    setQuestion(
      question.map((q, index) =>
        q.id === id ? { ...q, active: !q.active } : { ...q, active: false }
      )
    );
  };

  return (
    <div className="general">
      {question.map((general, index) => (
        <QuestionContainer
          active={general.active}
          key={index}
          id={general.id}
          question={general.q}
          answer={general.a}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export const Product = () => {
  const [question, setQuestion] = useState(data?.faqs?.product);

  const onClick = (id) => {
    setQuestion(
      question.map((q, index) =>
        q.id === id ? { ...q, active: !q.active } : { ...q, active: false }
      )
    );
  };

  return (
    <div className="products">
      {question.map((product, index) => (
        <QuestionContainer
          active={product.active}
          key={index}
          id={product.id}
          question={product.q}
          answer={product.a}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export const Investment = () => {
  const [question, setQuestion] = useState(data?.faqs?.investment);

  const onClick = (id) => {
    setQuestion(
      question.map((q, index) =>
        q.id === id ? { ...q, active: !q.active } : { ...q, active: false }
      )
    );
  };

  return (
    <div className="investment">
      {question.map((investment, index) => (
        <QuestionContainer
          active={investment.active}
          key={index}
          id={investment.id}
          question={investment.q}
          answer={investment.a}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
