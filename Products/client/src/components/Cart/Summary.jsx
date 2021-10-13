import style from "./Summary.module.css";
import { Route, Link, NavLink, useHistory } from "react-router-dom";

function Summary(props) {
  const history = useHistory();
  console.log();
  return (
    <div className={`container ${style.summary}`}>
      <p>
        Total ({props.len}):{" "}
        <span className={style.summary__total}>₱ {props.props}</span>
      </p>
      <button
        className={style.summary__button}
        onClick={() => {
          history.push("/checkout");
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default Summary;
