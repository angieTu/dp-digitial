import React from "react";

import { NavLink } from "react-router-dom";

import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import "../styles/components/_header.scss";
import logo from "../img/Logo_transparente.png";

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
              to="/#hero"
              onClick={() => {
                setShow(false);
                window.scrollTo(0, 0);
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
                <NavLink to="/potenciales-clientes">
                  Potenciales Clientes
                </NavLink>
              </li>
              <li>
                <NavLink to="/sms-marketing">SMS Marketing</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/marketing-online">Marketing Online</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/google-adwords">Google ADWORDS</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/email-marketing">E-mail Marketing</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/desarrollo-web">Diseño y Desarrollo Web</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/strainer-contact">Strainer Contact</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/ivr">IVR</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/datacenter">Servicios de Datacenter</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href={page === "home" ? "#clientes" : "/"}
              onClick={() => setShow(false)}
            >
              CLIENTES
            </a>
          </li>
          <li className="nav-item">
            <a
              href={page === "home" ? "#contacto" : "/"}
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
