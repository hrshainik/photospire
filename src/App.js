import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Services from "./components/Services";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Services />
    </>
  );
}

export default App;
