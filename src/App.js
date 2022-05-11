import React, { useEffect, useState } from "react";

// import "./App.css";
import "./styles/_main.scss";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Error from "./pages/Error";
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
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home handleClose={handleClose} setShow={setShow} show={show} />
              }
            />
            <Route
              path="/:servicioID"
              element={
                <Servicios
                  handleClose={handleClose}
                  setShow={setShow}
                  show={show}
                />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
