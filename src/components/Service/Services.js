import React from "react";
import "./Services.css";
import { GiShipWheel } from "react-icons/gi";
import Service from "./Service";
import { serviceList } from "./data";

const Services = () => {
  return (
    <section id="services">
      <div className="container service">
        <div className="u-title">
          <GiShipWheel color="orangered" size={45} />
          <h2>Services</h2>
        </div>
        <div className="services-main">
          {serviceList.map((service) => (
            <Service
              key={service.id}
              image={service.image}
              heading={service.heading}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
