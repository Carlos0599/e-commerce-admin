import React from "react";
import loading from "./../../../assets/images/newsletter/loading.png";

const LoadingCard = () => {
  return (
    <div
      className="loading_card"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div className="card_header">
        <img src={loading} alt={loading} />
      </div>
      <div className="card_body">
        <div className="title" />
        <div className="subtitle" />
        <div className="description" />
        <div className="description" />
        <div className="description" />
        <div className="description" />
        <div className="button" />
      </div>
    </div>
  );
};

export default LoadingCard;
