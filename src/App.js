import React, { useEffect, useState } from "react";

import "./App.css";
import "./styles/_main.scss";
import "aos/dist/aos.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import AOS from "aos";
import { Loading } from "@nextui-org/react";

function App() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const handleClose = () => {
    setShow(show === false ? true : false);
    console.log("click", show);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading">
          <Loading
            color="warning"
            loadingCss={{
              $$loadingSize: "100px",
              $$loadingBorder: "10px",
            }}
          />
        </div>
      ) : (
        <Router>
          <Header setShow={setShow} show={show} handleClose={handleClose} />
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />}></Route>
            <Route
              exact
              path="/home"
              element={<Home handleClose={handleClose} />}
            />
            <Route
              exact
              path="/servicios/:servicioID"
              element={<Servicios setShow={setShow} />}
            />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
