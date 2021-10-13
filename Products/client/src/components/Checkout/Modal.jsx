import { forwardRef, useImperativeHandle, useState } from "react";
import style from "./Modal.module.css";
import { Route, Link, NavLink, useHistory } from "react-router-dom";

const OrderModal = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  useImperativeHandle(ref, () => ({
    displayModal() {
      setToggle(true);
      setTimeout(() => setToggle(false), 3000);
    },
  }));

  const hideModal = () => {
    setToggle(false);
    history.push("/products/innovations");
  };

  return (
    <>
      {toggle && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <button className={style.modal__content_button} onClick={hideModal}>
              X
            </button>
            <h2 className={style.modal__content_label}>
              Ordered successfully!
            </h2>
          </div>
        </div>
      )}
    </>
  );
});

const EditModal = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    displayModal() {
      setToggle(true);
    },
  }));

  const hideModal = () => {
    setToggle(false);
  };

  return (
    <>
      {toggle && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <button className={style.modal__content_button} onClick={hideModal}>
              X
            </button>
            <h2 className={style.modal__content_title}>Edit Address</h2>

            <div className={style.modal__content_input}>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" />
            </div>
            <div className={style.modal__content_input}>
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="tel" id="contactNumber" />
            </div>
            <div className={style.modal__content_input}>
              <label htmlFor="address">Address</label>
              <textarea id="address" rows="3"></textarea>
            </div>
            <div className={style.modal__content_submit}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export { OrderModal, EditModal };
