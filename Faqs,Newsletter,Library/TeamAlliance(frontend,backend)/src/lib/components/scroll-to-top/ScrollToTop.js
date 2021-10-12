import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [Visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = window.scrollY;
    setVisible(scrolled <= 300 ? true : false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <button
      type="button"
      className={`btn-scroll-top ${Visible && "hide"}`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTop;
