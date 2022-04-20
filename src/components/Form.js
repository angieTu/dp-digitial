import React from "react";

import "../styles/components/_form.scss";

import { BiChevronRight } from "react-icons/bi";

const Form = () => {
  return (
    <>
      <h3 className="about-title" data-aos="zoom-out">
        <span>
          {" "}
          <BiChevronRight />
        </span>
        Contactanos
      </h3>
      <div className="container">
        <div className="card"></div>
        <div className="card">
          <form
            action="https://formsubmit.co/info@dpdigital.com.ar"
            method="POST"
            target="_blank"
          >
            <div className="input-container">
              {" "}
              <input type="hidden" name="_captcha" value="false" />
              <input id="name" name="name" type="text" required />{" "}
              <label htmlFor="name">Nombre</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              {" "}
              <input id="email" name="email" type="email" required />{" "}
              <label htmlFor="email">E-mail</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              {" "}
              <textarea id="msg" name="msg"></textarea>{" "}
              <label htmlFor="msg">Mensaje </label>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button onClick={(event) => event.preventDefault}>
                <span>Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
