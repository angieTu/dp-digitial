import React from "react";

import { NavLink } from "react-router-dom";

import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import "../styles/components/_header.scss";
import logo from "../img/Logo_transparente.png";
import ScrollToTop from "./ScrollToTop";

const Header = ({ setShow, show, handleClose, page }) => {
  return (
    <header>
      <div className="header-container">
        <NavLink to="/" className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <ul className={show === true ? "main-nav show" : "main-nav"}>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
              onClick={() => {
                setShow(false);
                <ScrollToTop />;
              }}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item submenu">
            <a
              href={page === "home" ? "/#about" : "/"}
              onClick={() => setShow(false)}
            >
              SERVICIOS
            </a>
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
            <a
              href={page === "home" ? "/#clientes" : "/"}
              onClick={() => setShow(false)}
            >
              CLIENTES
            </a>
          </li>
          <li className="nav-item">
            <a
              href={page === "home" ? "/#contacto" : "/"}
              onClick={() => setShow(false)}
            >
              CONTACTO
            </a>
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
