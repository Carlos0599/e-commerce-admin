import { useState } from "react";
import style from "./Item.module.css";
import Image from "../../assets/img_placeholder.jpeg";
function Item({ id, image, name, person, unit }) {
  return (
    <div className={style.item}>
      {image?.data ? (
        <img
          src={`data:image/jpeg;base64,${Buffer.from(image?.data).toString(
            `base64`
          )}`}
          alt={image}
          className={style.item__image}
        />
      ) : (
        <img src={Image} alt={image} className={style.item__image} />
      )}{" "}
      <h3 className={style.item__name}>{name}</h3>
      <p className={style.item__person}>{person}</p>{" "}
      <p className={style.item__price}>₱{unit}</p>{" "}
      <a className={style.item__button} href={`/product/${id}`}>
        View item
      </a>
    </div>
  );
}
export default Item;
Item.defaultProps = {
  image: "https://i.stack.imgur.com/y9DpT.jpg",
  person: "Author",
};
