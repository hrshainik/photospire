import React from "react";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";

let tl = gsap.timeline();

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    if (menuState.menuOpened === true) {
      // run open menu animation
      tl.to("body", { duration: 0.01, css: { overflow: "hidden" } })
        .to(".app", {
          duration: 1,
          y: dimensions.width <= 654 ? "55vh" : dimensions.height / 2,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0",
          ease: "expo.inOut",
        })
        .to("#line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      // run close menu animation
      tl.to(".app", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#path_1", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#path_2", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#line_1", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          duration: 0,
          css: {
            display: "none",
          },
        })
        .to("body", {
          css: {
            overflow: "auto",
          },
        });
    }
  }, [menuState.menuOpened, dimensions]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">PHOTOSPIRE</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
