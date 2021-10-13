import { useParams } from "react-router";
import Carousel_Imgs from "../../components/ProductView/Carousel";
import Details from "../../components/ProductView/Details";
import style from "./ProductView.module.css";
import Navbar from "../../assets/navbar.png";
import Footer from "../../assets/footer.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ProductView() {
  let { id } = useParams();

  return (
    <>
      <img src={Navbar} alt="" style={{ width: "100%" }} />
      <div className="container">
        <main className={style.product}>
          <div className={style.Carousel_Imgs}>
            {" "}
            <Carousel_Imgs props={id} />
          </div>
          <Details props={id} />
        </main>
      </div>
      <img src={Footer} alt="" style={{ width: "100%" }} />
    </>
  );
}

export default ProductView;
