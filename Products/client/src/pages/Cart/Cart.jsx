import style from "./Cart.module.css";
import CartItem from "../../components/Cart/CartItem";
import Navbar from "../../assets/navbar.png";
import Footer from "../../assets/footer.png";
import Summary from "../../components/Cart/Summary";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import getTotalAmount from "../../components/getTotalAmount";

function Cart() {
  var [items, setItem] = useState([]);
  var [details, setdetails] = useState({});
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
  return (
    <>
      <img src={Navbar} style={{ width: "100%" }} alt="" />
      <main className={`container ${style.cart}`}>
        <h1 className={style.cart__label}>Shopping Cart</h1>
        <div className={style.cart__labels}>
          <div className={style.cart__labels_product}>
            <input type="checkbox" className={style.cart__labels_checkbox} />
            <h4>Products</h4>
          </div>
          <h4>Unit Price</h4>
          <h4>Quantity</h4>
          <h4>Total Price</h4>
          <h4>Actions</h4>
        </div>
        {items.map((item, key) => {
          return <CartItem props={item} />;
        })}

        <Summary props={getTotalAmount(items)} len={items.length.toString()} />
      </main>
      <img src={Footer} style={{ width: "100%" }} alt="" />
    </>
  );
}

export default Cart;
