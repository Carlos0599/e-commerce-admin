import { useEffect } from "react";
import style from "./Heading.module.css";

const categories = [
  { category: "innovations" },
  { category: "books" },
  { category: "souvenirs" },
];

function Heading({ category }) {
  useEffect(() => {
    console.log(category);
  }, []);

  return (
    <div className={style.heading}>
      <h1 className={style.heading__label}>Products</h1>
      <div className={style.heading__divider}></div>
      <div className="container">
        <div className={style.heading__categories}>
          {categories.map((item, index) => (
            <h2
              className={
                item.category === category
                  ? style.heading__categories_selected
                  : ""
              }
              key={index}
            >
              <a href={`/products/${item.category}`}>{item.category}</a>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Heading;
