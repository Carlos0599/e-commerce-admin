import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import NewsletterCard from "../../components/newsletter/NewsletterCard";
import { getNewsLetter } from "../../database/root";
import { useHistory } from "react-router-dom";
import loading from "./../../../assets/images/loading.png";
import InitialLoading from "./InitialLoading";
import SEO from "../../components/helmet/Helmet";
import axios from "axios";

const Newsletter = () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [newsletter, setNewsLetter] = useState([]);

  const getnewslet = async () => {
    const response = await axios.get("http://localhost:3001/newsletter");
    return response.data;
  };

  const onclick = (id) => {
    history.push(`/newsletter/${id}`);
  };

  const addNewsLetter = async () => {
    setIsLoading(true);
    const response = await getnewslet();
    setNewsLetter(newsletter.concat(response));
    setIsLoading(false);
  };

  const onClick_AddNewsletter = () => addNewsLetter();

  useEffect(() => {
    addNewsLetter();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="newsletter">
      <SEO title={`Newsletter | NU Innovation Tech Hub`} />
      <div className="container">
        <h1 className="header">
          News<span>letter</span>
        </h1>
        <div className="card_holder">
          {newsletter.map((data, index) => (
            <NewsletterCard
              key={index}
              img={data.content}
              title={data.newsletter_title}
              subtitle={data.date_created}
              description={data.newsletter_desc}
              date={data.date_created}
              content={data.content}
              id={data.newsletter_ID}
              onclick={onclick}
            />
          ))}
          {isLoading && <InitialLoading count={newsletter.length} />}
        </div>

        <div className="newsletter_button">
          {!isLoading ? (
            <button className="primary solid" onClick={onClick_AddNewsletter}>
              View more Stories <FaArrowRight className="icon" />{" "}
            </button>
          ) : (
            <img src={loading} alt={loading} className="loading" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
