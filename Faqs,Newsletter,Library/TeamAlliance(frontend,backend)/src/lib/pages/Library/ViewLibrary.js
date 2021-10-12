import React from "react";
import { useParams } from "react-router-dom";
import Data from "./../../DummyData/Dummy";
import SEO from "../../components/helmet/Helmet";

const ViewLibrary = () => {
  const { id } = useParams();

  return (
    <div className="view_library">
      <SEO title={`${Data.library[id].title} | NU Innovation Tech Hub`} />
      <div className="container">
        <h1 className="header">{Data.library[id].title}</h1>
        <div className="content">
          <iframe
            title={Data.library[id].title}
            src={`${Data.library[id].file}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewLibrary;
