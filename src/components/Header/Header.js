import React, { useEffect } from "react";
import "./Header.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left">
          <h1 data-aos="fade-right">
            <span>GHANA'S LEADING</span>
            <span>STEVEDORING COMPANY</span>
            <span></span>
          </h1>
          <p className="u-text-small u-text-light" data-aos="fade-up">
            Our stevedores handle over 180,000 MT of tuna annually and provide
            our clients with a variety of services: fish sorting, direct
            discharge to cold stores and canning factory, as well as reefer
            container stuffing and unloading with the aid of fish loader
            machinery.
          </p>
        </div>
        <div className="header-right"></div>
      </div>
    </section>
  );
};

export default Header;
