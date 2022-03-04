import React from "react";
import "./Service.css";
import stevedore from "../../assets/stevedore.jpg";

const Service = ({ image, heading, text }) => {
  return (
    <div className="service2">
      <div className="img">{image}</div>

      <div className="service-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Service;
