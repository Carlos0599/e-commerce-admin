import { useState, useRef } from "react";
import style from "./CartItem.module.css";
import axios from "axios";
import { DeleteModal } from "./Modal copy";

function CartItem(props) {
  const [hide, setHide] = useState(false);
  let [quantity, setQuantity] = useState(1);
  let [total, setTotal] = useState(props.props.quantity * props.props.unit);
  let amount = props.props.unit;
  const deleteModalRef = useRef(null);

  const getTotal = () => {
    setTotal(quantity * amount);
  };

  const changeHide = () => {
    setHide(!hide);
  };
  const UpdateQuantity = async () => {
    console.log(quantity + " " + props.props.id);
    axios
      .put("http://localhost:3003/updateCartQuantity", {
        params: {
          quantity: quantity,
          id: props.props.id,
        },
      })
      .then((response) => {
        window.location.reload();
      });
  };
  window.addEventListener("resize", function (event) {
    if (event.target.innerWidth > 1000) {
      setHide(false);
    } else if (event.target.innerWidth <= 1000) {
      setHide(true);
    }
  });

  return (
    <>
      <div className={style.item}>
        <div className={style.item__details}>
          <div className={style.item__details_image}>
            <img src="https://i.stack.imgur.com/y9DpT.jpg" alt="" />
          </div>
          <div>
            <h3>{props.props.name}</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className={style.item___dropdown_button}>
            <button onClick={changeHide}>Expand</button>
          </div>
        </div>

        <div
          className={`${style.item__subdetails} ${
            hide ? style.item__dropdown : ""
          }`}
        >
          <div>
            <h4 className={style.item__details_label}>Unit Price</h4>{" "}
            <h4>₱ {props.props.unit}</h4>
          </div>

          <div>
            <h4 className={style.item__details_label}>Quantity</h4>
            <div className={style.details__quantity}>
              <div className={style.details__quantity_buttons}>
                <button
                  onClick={() => {
                    if (quantity <= 1) {
                      deleteModalRef.current.displayModal();
                    } else {
                      setQuantity((quantity -= 1));
                      getTotal();
                      UpdateQuantity();
                    }
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() => {
                    setQuantity((quantity += 1));
                    getTotal();
                    UpdateQuantity();
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className={style.item__details_label}>Total Price</h4>{" "}
            <h4>₱ {total}</h4>
          </div>
        </div>
      </div>
      <p>
        Receive by <span className={style.item__delivery}>5</span> working days
      </p>{" "}
      <DeleteModal props={props.props.id} ref={deleteModalRef} />
    </>
  );
}

export default CartItem;
