import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import "../styles/components/_header.scss";
import logo from "../img/Logo_transparente.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(show === false ? true : false);

  return (
    <header>
      <div className="header-container">
        <NavLink to="/home#hero" className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <ul className={show === true ? "main-nav show" : "main-nav"}>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/home#hero"
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item submenu">
            <a href="/home#about">SERVICIOS</a>
            <ul>
              <li>
                <NavLink to="/servicios/potenciales-clientes">
                  Potenciales Clientes
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicios/sms-marketing">SMS Marketing</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/servicios/marketing-online">
                  Marketing Online
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/servicios/google-adwords">Google ADWORDS</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/servicios/email-marketing">
                  E-mail Marketing
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/servicios/desarrollo-web">
                  Diseño y Desarrollo Web
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/servicios/strainer-contact">
                  Strainer Contact
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/servicios/ivr">IVR</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/servicios/datacenter">
                  Servicios de Datacenter
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/home#clientes">CLIENTES</a>
          </li>
          <li className="nav-item">
            <a href="/home#contacto">CONTACTO</a>
          </li>
        </ul>
        <div className="collapse-nav" onClick={handleClose}>
          {show === false ? <BsListNested /> : <AiOutlineClose />}
        </div>
      </div>
    </header>
  );
};

export default Header;