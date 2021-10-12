import React, { useState } from "react";
import qa from "./../../../assets/images/faqs/QA.png";
import NU_building from "./../../../assets/images/faqs/NU_building.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import { General, Investment, Product } from "../../components/faq/FAQ";
import Question from "../../components/faq/Question";
import NU_logo from "./../../../assets/images/NU_logo.png";
import { FaCheck, FaTimes } from "react-icons/fa";
import Data from "./../../DummyData/Dummy";
import Prompt from "../../components/prompt/Prompt";
import SEO from "../../components/helmet/Helmet";
import axios from "axios";

const FAQs = () => {
  let { url } = useRouteMatch();
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [id, setId] = useState(0);

  const [feedback, setFeedback] = useState({
    email: "",
    message: "",
  })

  const submitReview = () => {
    
  };
  const [active, setActive] = useState([
    {
      id: 0,
      buttonName: "General",
      isActive: true,
      path: `${url}/general`,
    },
    {
      id: 1,
      buttonName: "Product",
      isActive: false,
      path: `${url}/product`,
    },
    {
      id: 2,
      buttonName: "Investment",
      isActive: false,
      path: `${url}/investment`,
    },
  ]);

  const onSend = (e) => {
    axios.post("http://localhost:3001/create", feedback).then(() => {
    });
    e.preventDefault();
  //   setSuccess(true);
  };

  const toggleActive = (id) => {
    setActive(
      active.map((button, index) =>
        index === id
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      )
    );
    setId(id);
  };

  return (
    <div className="faqs">
      <SEO
        title={`Frequently Asked Questions (FAQs) | NU Innovation Tech Hub`}
      />
      <div className="container">
        <div className="faq_header">
          <img src={qa} alt={qa} />
          <h1 className="title">Ask us anything.</h1>
        </div>
      </div>
      <div className="body">
        <img src={NU_building} alt={NU_building} className="background" />
        <div className="container">
          <div className="question_box">
            {Data.faqs.simple.map((item, index) => (
              <Question
                key={index}
                id={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container margin-bottom">
        <div
          className="faqs_container"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <h2>Frequently Asked Questions (FAQs)</h2>
          <Router>
            <div className="folder">
              <div className="folder_buttons">
                {active.map((button, index) => (
                  <Link
                    to={button.path}
                    key={index}
                    onClick={() => toggleActive(button.id)}
                    className={`custom${button.isActive ? " active" : ""}`}
                  >
                    {button.buttonName}
                  </Link>
                ))}
                <div
                  className={`underline${id === 0 ? " active-0" : ""}${
                    id === 1 ? " active-1" : ""
                  }${id === 2 ? " active-2" : ""}`}
                />
              </div>
              <div className="folder_question">
                <Switch>
                  <Route path="/faqs/general" component={General} />
                  <Route path="/faqs/product" component={Product} />
                  <Route path="/faqs/investment" component={Investment} />
                  <Redirect to="/faqs/general"></Redirect>
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </div>
      <div className="inquiry">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <form className="email_container" onSubmit={onSend}>
            <div className="message">
              <h3>If you have more question, you can E-mail Us!</h3>
              <img src={NU_logo} alt={NU_logo} />
            </div>
            <input type="email" name="email" onChange={(e) => {
              setFeedback({...feedback, email: e.target.value});
            }} placeholder="example@yahoo.com..." />
            <textarea name="messages" onChange={(e) => {setFeedback({...feedback, message: e.target.value})}} placeholder="Aaaaaaaaaaa..." rows={10} />
            <button type="submit" onClick={onSend} className="primary solid btn_send">
              Send
            </button>
          </form>
        </div>
      </div>
      <Prompt
        icon={<FaCheck />}
        title={"Successfully Submitted!"}
        active={success}
        onClick={() => setSuccess(false)}
      />
      <Prompt
        icon={<FaTimes />}
        title={"Failed to Submit!"}
        active={failed}
        onClick={() => setFailed(false)}
      />
    </div>
  );
};

export default FAQs;
