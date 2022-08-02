import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">MENU</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/case-studies">Case Studies</NavLink>
              </li>
              <li>
                <NavLink to="/approach">Approach</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact">Get in touch with us</NavLink>
                </li>
                <li>
                  <NavLink to="/audit">Get a free audit</NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Shonir Akhra</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+8801766-215104</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
