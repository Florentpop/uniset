import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span>GHANA'S LEADING</span>
            <span>STEVEDORING COMPANY</span>
            <span></span>
          </h1>
          <p className="u-text-small u-text-light">
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
