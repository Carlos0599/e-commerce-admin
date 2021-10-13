import style from "./Details.module.css";
import Breadcrumbs from "./Breadcrumbs";
import Modal from "./Modal";
import { useRef, useState, useEffect } from "react";

import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";
function Details(props) {
  const modalRef = useRef(null);
  let [quantity, setQuantity] = useState(1);
  var [item, setItem] = useState({});
  var [categ, setCateg] = useState({});

  useEffect(() => {
    getItems();
    console.log(item);
  }, []);

  const getItems = async () => {
    axios.get("http://localhost:3003/retreiveBook").then((response) => {
      response.data.map((item, index) => {
        if (item.product_id == props.props) {
          axios
            .get("http://localhost:3003/retrieveProductById", {
              params: {
                id: item.product_id,
              },
            })
            .then((response) => {
              console.log(response.data);
              setItem({
                id: item.product_id,
                image: item.book_thumbnail,
                definition: item.book_description,
                name: item.book_name,
                person: item.book_author,
                unit: response.data[0].product_price,
              });
            });
        }
      });
    });
    axios.get("http://localhost:3003/retreiveInnovation").then((response) => {
      response.data.map((item, index) => {
        if (item.product_id == props.props) {
          setItem({
            id: item.product_id,
            definition: item.innovation_description,
            story: item.innovation_story,
            name: item.innovation_title,
            status: item.innovation_status,
            image: item.book_thumbnail,

            innovator_id: item.innovator_id,
          });
        }
      });
    });
    axios.get("http://localhost:3003/retreiveSouvenir").then((response) => {
      response.data.map((item, index) => {
        if (item.product_id == props.props) {
          setItem({
            id: item.product_id,
            name: item.souvenir_name,
            definition: item.souvenir_description,
            userid: item.user_id,
            prod_id: item.product_id,
            // image: item.book_thumbnail,

            // person: item.book_author,
          });
        }
      });
    });
  };
  const AddCart = async () => {
    var newItem = {
      product_id: item.id,
      quantity: quantity,
      user_id: 1,
    };
    axios.post("http://localhost:3003/insertCart", newItem).then((response) => {
      modalRef.current.displayModal();
    });
  };
  return (
    <div className={style.details}>
      <Breadcrumbs />
      <h1>{item.name}</h1>
      <div className={style.details__person}>
        <h4>Innovator/s:&nbsp;</h4>
        <p>{item.person}</p>
      </div>
      <p>{item.definition}</p>
      <h2 className={style.details__price}>₱{item.unit}</h2>
      <div className={style.details__quantity}>
        <p>Quantity</p>
        <div className={style.details__quantity_buttons}>
          <button
            onClick={() => {
              if (quantity <= 1) {
                setQuantity(0);
              } else {
                setQuantity((quantity -= 1));
              }
            }}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              setQuantity((quantity += 1));
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className={style.details__buttons}>
        <Link to="/cart">
          *{" "}
          <button
            onClick={() => {
              setCateg("Cart");
              AddCart();
            }}
          >
            {" "}
            Add to Cart
          </button>
        </Link>
        <Link to="/checkout">
          *{" "}
          <button
            onClick={() => {
              setCateg("Check Out");
              AddCart();
            }}
          >
            {" "}
            Buy Now
          </button>
        </Link>
      </div>
      <Modal ref={modalRef} props={item} categ={categ} />
    </div>
  );
}

export default Details;
