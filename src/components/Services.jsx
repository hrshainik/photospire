import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";
import Service from "./Service";

const services = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin’s unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="services-navigation">
          <div className="services-arrow prev disabled">
            <LeftArrow />
          </div>
          <div className="services-arrow next">
            <RightArrow />
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
