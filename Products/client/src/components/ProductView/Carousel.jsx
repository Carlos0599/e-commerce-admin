import React from "react";

import axios from "axios";

import "react-image-gallery/styles/css/image-gallery.css";
import Image from "../../assets/img_placeholder.jpeg";
import style from "./Carousel.module.css";

function Carousel_Imgs(props) {
  var [image, setImage] = React.useState();
  React.useEffect(() => {
    const call = async () => {
      console.log(props.props);
      axios.get("http://localhost:3003/retreiveBook").then((response) => {
        response.data.map((item, index) => {
          if (item.product_id.toString() == props.props) {
            setImage({ image: item.book_thumbnail });
          }
        });
      });
      axios.get("http://localhost:3003/retreiveInnovation").then((response) => {
        response.data.map((item, index) => {
          if (item.product_id == props.props) {
            setImage({ image: item.book_thumbnail });
          }
        });
      });
      axios.get("http://localhost:3003/retreiveSouvenir").then((response) => {
        response.data.map((item, index) => {
          if (item.product_id == props.props) {
            setImage({ image: item.book_thumbnail });
          }
        });
      });
    };
    call();
  }, []);
  console.log(image);
  return (
    <div>
      <div>
        {image != null ? (
          <img
            className={style.carousel__image}
            alt=""
            src={`data:image/jpeg;base64,${Buffer.from(image.image).toString(
              `base64`
            )}`}
          />
        ) : (
          <img src={Image} alt={Image} />
        )}
      </div>
    </div>
  );
}

export default Carousel_Imgs;
