import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/pages/_servicios.scss";
import { BiChevronRight } from "react-icons/bi";
import ScrollToTop from "../components/ScrollToTop";

import PotencialesClientes from "../components/servicios/PotencialesClientes";
import SmsMarketing from "../components/servicios/SmsMarketing";
import MarketingOnline from "../components/servicios/MarketingOnline";
import GoogleAdwords from "../components/servicios/GoogleAdwords";
import EmailMarketing from "../components/servicios/EmailMarketing";
import DesarrolloWeb from "../components/servicios/DesarrolloWeb";
import StrainerContact from "../components/servicios/StrainerContact";
import IVR from "../components/servicios/IVR";
import Datacenter from "../components/servicios/Datacenter";

const Servicios = ({ setShow }) => {
  const { servicioID } = useParams();

  const title = servicioID.replace("-", " ").toUpperCase();

  useEffect(() => {
    setShow(false);
  }, []);

  return (
    <div
      className="servicios-container"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <ScrollToTop />
      <h3 className="about-title">
        <span>
          {" "}
          <BiChevronRight />
        </span>
        {title}
      </h3>
      <div className="container-data">
        {(servicioID === "potenciales-clientes" && <PotencialesClientes />) ||
          (servicioID === "sms-marketing" && <SmsMarketing />) ||
          (servicioID === "marketing-online" && <MarketingOnline />) ||
          (servicioID === "google-adwords" && <GoogleAdwords />) ||
          (servicioID === "email-marketing" && <EmailMarketing />) ||
          (servicioID === "desarrollo-web" && <DesarrolloWeb />) ||
          (servicioID === "strainer-contact" && <StrainerContact />) ||
          (servicioID === "ivr" && <IVR />) ||
          (servicioID === "datacenter" && <Datacenter />)}
      </div>
    </div>
  );
};

export default Servicios;
