import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import IntroOverlay from "./components/IntroOverlay";
import Services from "./components/Services";
import "./styles/App.scss";
import gsap from "gsap";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //timeline
    const tl = gsap.timeline();

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: 0.3,
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        stagger: 0.4,
        ease: "expo.inOut",
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        stagger: 0.4,
        ease: "expo.inOut",
        delay: -0.8,
      })
      .to(".intro-overlay", 0, {
        css: { display: "none" },
      })
      .from(".service-image img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: 0.4,
      });
  }, []);

  return (
    <>
      <IntroOverlay />
      <Header />
      <Banner />
      <Services />
    </>
  );
}

export default App;
