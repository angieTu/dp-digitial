import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/_servicios.scss";
import { BiChevronRight } from "react-icons/bi";
import ScrollToTop from "../components/ScrollToTop";

const Error = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 0);
  return (
    <>
      <div
        className="servicios-container"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <ScrollToTop />
        <h3 className="about-title">
          <span>
            {" "}
            <BiChevronRight />
          </span>
          Página no encontrada
        </h3>
        <div className="container-data"></div>
      </div>
    </>
  );
};

export default Error;
