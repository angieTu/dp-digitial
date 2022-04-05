import React from "react";

import "../styles/components/_carousel.scss";

import img2 from "../img/audi.png";
import img3 from "../img/fiat.png";
import img4 from "../img/ford.png";
import img5 from "../img/peugeot.png";
import img6 from "../img/renault.png";
import img7 from "../img/toyota.png";
import img8 from "../img/volkswagen.png";
import img9 from "../img/si.png";
import img10 from "../img/movistar.png";
import img11 from "../img/chubb.png";
import img12 from "../img/3m.png";

const Carousel = () => {
  return (
    <div className="container-clientes">
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img2} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img3} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img4} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img5} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img6} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img7} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img8} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img9} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img10} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img11} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img12} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
