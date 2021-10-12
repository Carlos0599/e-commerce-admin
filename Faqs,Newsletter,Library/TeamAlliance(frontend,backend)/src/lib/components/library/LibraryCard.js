import React from "react";
import { FaFileDownload } from "react-icons/fa";

const LibraryCard = ({ id, img, title, onClickView, onClickDownload }) => {
  return (
    <div
      className="card"
      onClick={() => onClickView(id)}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div className="card_header">
        <img src={img} alt={img} />
      </div>
      <div className="card_body">
        <h3 className="title">{title}</h3>
        <button
          className="secondary outline"
          onClick={(e) => onClickDownload(e, id)}
        >
          <FaFileDownload />
        </button>
      </div>
    </div>
  );
};

export default LibraryCard;
