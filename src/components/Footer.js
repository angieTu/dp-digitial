import React from "react";

import "../styles/components/_footer.scss";
import logo from "../img/Logo_transparente.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdPhonelinkRing } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

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
            +5491139220393
          </li>
          <li>
            <span>
              {" "}
              <AiOutlineMail />
            </span>
            info@dpdigital.com.ar
          </li>
        </ul>
        <div className="footer-content">
          {" "}
          <img src={logo} alt="Logo" className="logo" />
          <div className="social-media">
            {" "}
            <div className="icon facebook">
              <div className="tooltip">Facebook</div>
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
            <div className="icon whatsapp">
              <div className="tooltip">Whatsapp</div>
              <span>
                <a
                  href="https://api.whatsapp.com/send/?phone=5491139220393&text=Me+interesa+más+información&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp />
                </a>
              </span>
            </div>
            <div className="icon tiktok">
              <div className="tooltip">TikTok</div>
              <span>
                <FaTiktok />
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
