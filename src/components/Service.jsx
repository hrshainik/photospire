import React from "react";

const Service = ({ service }) => {
  return (
    <div className="service">
      <div className="service-details">
        <span>{service.subtitle}</span>
        <h2>{service.title}</h2>
      </div>
      <div className="service-image">
        <img
          src={require(`../assets/${service.img}.png`)}
          alt={service.title}
        />
      </div>
    </div>
  );
};

export default Service;
