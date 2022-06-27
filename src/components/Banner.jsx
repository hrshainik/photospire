import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>We Are Offering The</span>
            </div>
            <div className="line">
              <span>Best Photography</span>
            </div>
            <div className="line">
              <span>Services For You</span>
            </div>
          </h2>
          <div className="btn-row">
            <Link to="/">
              More about us <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
