import React from "react";

import "../styles/components/_form.scss";

import { BiChevronRight } from "react-icons/bi";

const Form = () => {
  return (
    <>
      <h3 className="about-title">
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
            action="https://formsubmit.co/angie.tur@gmail.com"
            method="POST"
          >
            <div className="input-container">
              {" "}
              <input id="name" name="name" type="text" required />{" "}
              <label for="name">Nombre</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              {" "}
              <input id="email" name="email" type="email" required />{" "}
              <label for="email">E-mail</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              {" "}
              <textarea id="msg" name="msg"></textarea>{" "}
              <label for="msg">Mensaje </label>
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
