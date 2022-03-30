import React from "react";

import { useNavigate } from "react-router-dom";

import "../styles/components/_cardsHome.scss";

const CardsHome = ({ handleClose }) => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/servicios/${title}`);
  };

  const dates = document.querySelectorAll(".shop");
  for (let i = 0; i < dates.length; i++) {
    dates[i].innerHTML = "Ver Más";
  }

  return (
    <div className="grid" onClick={handleClose}>
      <div
        className="item-1"
        onClick={() => handleClick("potenciales-clientes")}
      >
        <span>Potenciales Clientes</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="alt" onClick={() => handleClick("sms-marketing")}>
        <span>SMS Marketing</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="item-1" onClick={() => handleClick("marketing-online")}>
        <span>Marketing Online</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="item-1" onClick={() => handleClick("google-adwords")}>
        <span>Google Adwords</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="item-1" onClick={() => handleClick("email-marketing")}>
        <span>Email Marketing</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="alt" onClick={() => handleClick("desarrollo-web")}>
        <span>Diseńo y Desarrollo Web</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="alt" onClick={() => handleClick("strainer-contact")}>
        <span>Strainer Contact</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="" onClick={() => handleClick("ivr")}>
        <span>IVR</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
      <div className="alt" onClick={() => handleClick("datacenter")}>
        <span>Servicios de Datacenter</span>
        <span className="shop"></span>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default CardsHome;
