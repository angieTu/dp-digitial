import React, { useEffect } from "react";

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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />}></Route>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/servicios/:servicioID" element={<Servicios />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
