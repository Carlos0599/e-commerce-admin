import style from "./Filter.module.css";
import { useRef, useState, useEffect } from "react";
import filterdata from "../getFilter";
//  {props.props == "books"
//         ? innovation
//             .sort((a, b) => (a.unit > b.unit ? 1 : -1))
//             .map((item, index) => (
//               <Item
//                 key={index}
//                 id={item.id}
//                 image={item.image}
//                 name={item.name}
//                 person={item.person}
//               />
//             ))
function Filter({ category }) {
  const [holder, setholder] = useState("");

  return (
    <>
      <div className="container">
        <div>
          <h2 className={style.filter__label}>{category}</h2>
          <p className={style.filter__result}>
            Showing <span className={style.filter__result_count}>1</span> result
          </p>
        </div>
      </div>
      <div className={style.filter}>
        <div className="container">
          <div className={style.filter__buttons}>
            <div className={style.filter__buttons_sort}>
              <p>Sort by</p>
              <button
                className={
                  holder == "Recent" ? style.filter__buttons_selected : ""
                }
                onClick={() => {
                  setholder("Recent");
                }}
              >
                Recent
              </button>
              <button
                className={
                  holder == "Price" ? style.filter__buttons_selected : ""
                }
                onClick={() => {
                  setholder("Price");
                }}
              >
                Price
              </button>
            </div>
            <div className={style.filter__buttons_paginate}>
              <p>1 / 1</p>
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
