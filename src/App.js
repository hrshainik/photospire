import React from "react";
import Header from "./components/Header";
import "./styles/App.scss";
import gsap from "gsap";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  //preventing reload flash
  gsap.to("body", 0, { css: { visibility: "visible" } });

  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
