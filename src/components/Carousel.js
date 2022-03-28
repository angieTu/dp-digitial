import React from "react";

import "../styles/components/_carousel.scss";

import img1 from "../img/cliente-municipalidad-san-isidro.jpg";
import img2 from "../img/audi.png";
import img3 from "../img/fiat.png";
import img4 from "../img/ford.png";
import img5 from "../img/peugeot.png";
import img6 from "../img/renault.png";
import img7 from "../img/toyota.png";
import img8 from "../img/volkswagen.png";

const Carousel = () => {
  return (
    <div class="container-clientes">
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img src={img1} alt="" />
      </div>
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
    </div>
  );
};

export default Carousel;
