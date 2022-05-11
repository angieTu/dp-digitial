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
        <img src={img2} alt="logo-audi" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img3} alt="logo-fiat" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img4} alt="logo-ford" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img5} alt="logo-peugeot" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img6} alt="logo-renault" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img7} alt="logo-toyota" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img8} alt="logo-volkswagen" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img9} alt="logo-municipalidad-san-isidro" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img10} alt="logo-movistar" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img11} alt="logo-chubb" />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img12} alt="logo-3M" />
      </div>
    </div>
  );
};

export default Carousel;
