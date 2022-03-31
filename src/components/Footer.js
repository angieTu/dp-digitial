import React from "react";

import "../styles/components/_footer.scss";
import logo from "../img/Logo_transparente.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdPhonelinkRing } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const yearCopyright = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-details">
        <ul className="footer-list">
          <li>
            <span>
              {" "}
              <ImLocation />
            </span>
            Pte. Fragata Sarmiento 2101
            <br /> - CABA
          </li>
          <li>
            <span>
              {" "}
              <MdPhonelinkRing />
            </span>
            1139220393
          </li>
          <li>
            <span>
              {" "}
              <AiOutlineMail />
            </span>
            email@email.com
          </li>
        </ul>
        <div className="footer-content">
          {" "}
          <img src={logo} alt="Logo" className="logo" />
          <div className="social-media">
            {" "}
            <div class="icon facebook">
              <div class="tooltip">Facebook</div>
              <span>
                <FaFacebookF />
              </span>
            </div>
            <div className="icon instagram">
              <div className="tooltip">Instagram</div>
              <span>
                <FaInstagram />
              </span>
            </div>
            <div class="icon whatsapp">
              <div class="tooltip">Whatsapp</div>
              <span>
                <a
                  href="https://api.whatsapp.com/send/?phone=5491157220949&text=Me+interesa+más+información&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="sub-footer">
        <p>
          Copyright © {yearCopyright} | Designed by
          <a
            href="https://angiet.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Angie Turne 💫
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
