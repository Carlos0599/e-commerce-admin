import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import Moment from "react-moment";

const NewsletterCards = ({
  img,
  title,
  subtitle,
  description,
  onclick,
  id,
}) => {
  return (
    <div
      className="card"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div className="card_header">
        <img src={`data:image/jpeg;base64,${Buffer.from(img.data).toString('base64')}`} alt={img} />
      </div>
      <div className="card_body">
        <h3 className="title">{title}</h3>
        <p className="subtitle">
          <Moment format={"MMMM DD YYYY"} date={subtitle} />{" "}
        </p>
        <LinesEllipsis
          className="description"
          maxLine="7"
          ellipsis="..."
          trimRight
          basedOn="letters"
          text={description}
        />

        <button className="secondary outline" onClick={() => onclick(id)}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default NewsletterCards;

NewsletterCards.defaultProps ={

}