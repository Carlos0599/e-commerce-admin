import style from "./Checkout.module.css";
import Navbar from "../../assets/navbar.png";
import Footer from "../../assets/footer.png";
import gcash from "../../assets/gcash.png";
import banktransfer from "../../assets/banktransfer.jpg";
import paypal from "../../assets/paypal.png";
import CartItem from "../../components/Checkout/CartItem";
import { EditModal, OrderModal } from "../../components/Checkout/Modal";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

function Checkout() {
  const orderModalRef = useRef(null);
  const editModalRef = useRef(null);
  var [items, setItem] = useState([]);

  useEffect(() => {
    getItems();
    console.log(items);
  }, []);
  const getItems = async () => {
    axios.get("http://localhost:3003/retrieveCart").then((response) => {
      response.data.map((itemCart, index) => {
        axios
          .get("http://localhost:3003/retreiveProduct", {
            params: {
              id: itemCart.product_id,
            },
          })
          .then((responseProduct) => {
            responseProduct.data.map((itemProduct, index) => {
              if (itemProduct.product_category == "Book") {
                axios
                  .get("http://localhost:3003/retrieveBookById", {
                    params: {
                      id: itemCart.product_id,
                    },
                  })
                  .then((responseBook) => {
                    responseBook.data.map((itemBook, index) => {
                      setItem((data) => [
                        ...data,
                        {
                          id: itemCart.cart_id,
                          image: itemBook.book_thumbnail,
                          definition: itemBook.book_description,
                          name: itemBook.book_name,
                          person: itemBook.book_author,
                          quantity: itemCart.quantity,
                          unit: itemProduct.product_price,
                        },
                      ]);
                    });
                  });
              } else if (itemProduct.product_category == "Innovation") {
                axios
                  .get("http://localhost:3003/retrieveInnovationById", {
                    params: {
                      id: itemCart.product_id,
                    },
                  })
                  .then((responseBook) => {
                    responseBook.data.map((itemBook, index) => {
                      setItem((data) => [
                        ...data,
                        {
                          id: itemCart.cart_id,
                          image: "",
                          definition: itemBook.innovation_description,
                          name: itemBook.innovation_title,
                          person: itemBook.innovator_id,
                          quantity: itemCart.quantity,
                          unit: itemProduct.product_price,
                        },
                      ]);
                    });
                  });
              } else if (itemProduct.product_category == "Souvenir") {
                axios
                  .get("http://localhost:3003/retrieveSouvenirById", {
                    params: {
                      id: itemCart.product_id,
                    },
                  })
                  .then((responseBook) => {
                    responseBook.data.map((itemBook, index) => {
                      setItem((data) => [
                        ...data,
                        {
                          id: itemCart.cart_id,
                          image: itemBook.book_thumbnail,
                          definition: itemBook.souvenir_description,
                          name: itemBook.souvenir_name,
                          person: "National University",
                          quantity: itemCart.quantity,
                          unit: itemProduct.product_price,
                        },
                      ]);
                    });
                  });
              }
            });
          });
      });
    });
  };

  const getTotal = () => {
    let total = 0;

    items.map((item, key) => {
      total += item.unit * item.quantity;
    });
    return total;
  };

  const PlaceOrder = () => {
    var today = new Date(),
      dateSumitted =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    var newItem = {
      order_date: dateSumitted,
      order_total: getTotal(),
      user_id: "1",
    };
    axios
      .post("http://localhost:3003/insertOrder", newItem)
      .then((response) => {
        console.log(response.data.insertId);
        items.map((item, key) => {
          var newItem1 = {
            order_id: response.data.insertId,
            product_id: item.id,
            order_date: dateSumitted,
            payment_proof: "None",
            payment_type: "Gcash",
            order_total: item.unit * item.quantity,
          };
          axios
            .post("http://localhost:3003/insertOrderDetail", newItem1)
            .then((response) => {
              axios
                .delete("http://localhost:3003/deleteItemCart", {
                  params: {
                    id: item.id,
                  },
                })
                .then((response) => {});
            });
        });
        orderModalRef.current.displayModal();
      });
  };
  return (
    <>
      <img src={Navbar} style={{ width: "100%" }} alt="" />
      <div className="container">
        <h2 className={style.checkout__title}>Check Out</h2>
      </div>

      <div className={style.checkout__details}>
        <div className={`container ${style.checkout__address}`}>
          <p>mapicon</p>
          <div>
            <h4>Delivery Address</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              at aliquam consequatur dignissimos? Tenetur, quae nulla?{" "}
            </p>
          </div>
          <p
            className={style.checkout__address_edit}
            onClick={() => editModalRef.current.displayModal()}
          >
            Edit{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className={style.cart__labels}>
          <div className={style.cart__labels_product}>
            <h4>Products Ordered</h4>
          </div>
          <h4>Unit Price</h4>
          <h4>Quantity</h4>
          <h4>Total Price</h4>
        </div>
        {items.map((item, key) => {
          return <CartItem props={item} />;
        })}

        <div className={style.checkout__payment}>
          <div className={style.checkout__payment_type}>
            <h3>Payment type</h3>
            <img src={gcash} alt="" />
            <img src={banktransfer} alt="" />
            <img src={paypal} alt="" />
          </div>

          {/* <div className={style.checkout__payment_upload}>
            <h3>Upload Payment</h3>
            <p>Upload your Proof of Payment:</p>
            <label htmlFor="fileUpload">Choose file:</label>
            <input type="file" id="fileUpload" />
          </div> */}
        </div>
        <div className={style.checkout__total}>
          <h3>Total Payment:</h3>
          <h3 className={style.checkout__total_price}>P {getTotal()}</h3>
        </div>
        <div className={style.checkout__button}>
          <button
            onClick={() => {
              PlaceOrder();
            }}
          >
            Place Order
          </button>
        </div>
      </div>

      <img src={Footer} style={{ width: "100%" }} alt="" />
      <OrderModal ref={orderModalRef} />
      <EditModal ref={editModalRef} />
    </>
  );
}

export default Checkout;
