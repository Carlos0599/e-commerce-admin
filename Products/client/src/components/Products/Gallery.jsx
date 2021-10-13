import style from "./Gallery.module.css";
import Item from "./Item";
import { useRef, useState, useEffect } from "react";
import stylefilter from "./Filter.module.css";
import axios from "axios";

function Gallery(props) {
  const [products, setProducts] = useState([]);
  const [holder, setholder] = useState("Recent");

  useEffect(() => {
    if (props.props == "books") {
      axios.get("http://localhost:3003/retreiveBook").then((response) => {
        var prod = [];
        response.data.map((item, keey) => {
          axios
            .get("http://localhost:3003/retrieveProductById", {
              params: {
                id: item.product_id,
              },
            })
            .then((responseProduct) => {
              var unit = responseProduct.data[0].product_price;

              prod.push({
                id: item.product_id,
                image: item.book_thumbnail,
                definition: item.book_description,
                name: item.book_name,
                person: item.book_author,
                unit: unit,
              });
            });
        });

        setProducts(prod);
      });
    } else if (props.props == "innovations") {
      axios.get("http://localhost:3003/retreiveInnovation").then((response) => {
        var prod = [];
        response.data.map((item, key) => {
          axios
            .get("http://localhost:3003/retrieveProductById", {
              params: {
                id: item.product_id,
              },
            })
            .then((responseProduct) => {
              var unit = responseProduct.data[0].product_price;
              prod.push({
                id: item.product_id,
                image: null,
                name: item.innovation_title,
                person: item.innovator_id,
                definition: item.innovation_description,
                innovation_story: item.innovation_story,
                innovation_status: item.innovation_status,
                unit: responseProduct.data[0].product_price,
              });
            });
        });
        console.log(prod);
        setProducts(prod);
      });
    } else if (props.props == "souvenirs") {
      axios.get("http://localhost:3003/retreiveSouvenir").then((response) => {
        var prod = [];
        response.data.map((item, key) => {
          axios
            .get("http://localhost:3003/retrieveProductById", {
              params: {
                id: item.product_id,
              },
            })
            .then((responseProduct) => {
              prod.push({
                id: item.product_id,
                image: item.book_thumbnail,
                name: item.souvenir_name,
                person: "National University",
                unit: responseProduct.data[0].product_price,
              });
            });
        });

        setProducts(prod);
      });
    }
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h2 className={stylefilter.filter__label}>{props.props}</h2>
          <p className={stylefilter.filter__result}>
            Showing{" "}
            <span className={stylefilter.filter__result_count}>
              {products.length}
            </span>{" "}
            result
          </p>
        </div>
      </div>
      <div className={stylefilter.filter}>
        <div className="container">
          <div className={stylefilter.filter__buttons}>
            <div className={stylefilter.filter__buttons_sort}>
              <p>Sort by</p>
              <button
                className={
                  holder == "Recent" ? stylefilter.filter__buttons_selected : ""
                }
                onClick={() => {
                  setholder("Recent");
                  console.log(products);
                }}
              >
                Recent
              </button>
              <button
                className={
                  holder == "Price" ? stylefilter.filter__buttons_selected : ""
                }
                onClick={() => {
                  setholder("Price");
                  console.log(products);
                }}
              >
                Price
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={style.gallery}>
          {holder == "Recent"
            ? products
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((item, index) => {
                  console.log(item.id);
                  return (
                    <Item
                      key={index}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      person={item.person}
                      unit={item.unit}
                    />
                  );
                })
            : products
                .sort((a, b) => (a.unit > b.unit ? 1 : -1))
                .map((item, index) => {
                  return (
                    <Item
                      key={index}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      person={item.person}
                      unit={item.unit}
                    />
                  );
                })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
