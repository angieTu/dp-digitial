import React from "react";

import "../styles/pages/_home.scss";

import Carousel from "../components/Carousel";
import CardsHome from "../components/CardsHome";
import Header from "../components/Header";

import { BiChevronRight } from "react-icons/bi";
import Form from "../components/Form";
import ScrollToTop from "../components/ScrollToTop";

const Home = ({ handleClose, setShow, show }) => {
  return (
    <>
      <Header
        page="home"
        setShow={setShow}
        show={show}
        handleClose={handleClose}
      />
      <div id="hero" className="home-container">
        <ScrollToTop />
        <div className="waves-container">
          <h1>DP Digital</h1>
          <div className="inner-header flex">
            <div className="wrapper">
              <span className="text">
                <div className="disappear">
                  <span>D</span>
                  <span style={{ marginRigth: "24px" }}>P</span>
                  {""}
                  <span> {""}</span>
                  <span> {""} </span>
                  {""}
                  <span> D</span>
                  <span>I</span>
                  <span>G</span>
                  <span>I</span>
                  <span>T</span>
                  <span>A</span>
                  <span>L</span>
                </div>
              </span>

              <h3 className="sub" data-aos="fade-up">
                Agencia de Marketing
              </h3>

              <span className="sub" data-aos="fade-up">
                LA MANO QUE SU EMPRESA NECESITA EN SOLUCIONES ONLINE.
              </span>
              <a className="main-button" href="#about">
                CONOCE MÁS
              </a>
            </div>
            <div className="gradient"></div>
          </div>

          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#e9e9e9" />
              </g>
            </svg>
          </div>
        </div>
        <main id="about">
          <h3 className="about-title" data-aos="zoom-out">
            <span>
              {" "}
              <BiChevronRight />
            </span>
            ¿Qué hacemos?
          </h3>
          <CardsHome handleClose={handleClose} />
        </main>
        <section id="clientes">
          <h3 className="about-title" data-aos="zoom-out">
            <span>
              {" "}
              <BiChevronRight />
            </span>
            ¿Quiénes confían en nosotros?
          </h3>
          <Carousel />
        </section>
        <section id="contacto" className="form-container">
          <Form />
        </section>
      </div>
    </>
  );
};

export default Home;
