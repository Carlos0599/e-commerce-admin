import { useState, useImperativeHandle, forwardRef } from "react";
import style from "./Modal.module.css";
import { Route, Link, NavLink, useHistory } from "react-router-dom";

const Modal = forwardRef((props, ref, categ) => {
  const history = useHistory();
  console.log(props.categ);
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    displayModal() {
      setToggle(true);
      setTimeout(() => setToggle(false), 3000);
    },
  }));

  const hideModal = () => {
    setToggle(false);
    if (props.categ == "Cart") {
      history.push("/cart");
    }
    if (props.categ == "Check Out") {
      history.push("/checkout");
    }
  };
  return (
    <>
      {toggle && (
        <div className={style.modal} onClick={hideModal}>
          <div className={style.modal__content}>
            <button className={style.modal__content_button} onClick={hideModal}>
              X
            </button>
            <h2 className={style.modal__content_label}>
              Item has been added to your shopping cart
            </h2>
          </div>
        </div>
      )}
    </>
  );
});

export default Modal;
