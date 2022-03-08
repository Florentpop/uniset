import React from "react";
import "./About.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import stevedore from "../../assets/stevedore.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>About us</h2>
        </div>
        <div className="about-main">
          <div className="left">
            <img src={stevedore} alt="stevedore" />
          </div>

          <div className="right">
            <h4 className="u-text-small u-text-dark">
              <b> Uniset Stevedoring Company</b> was formed in 1999 and is a
              Ghanaian registered and owned company, with an extensive portfolio
              of activities, with particular emphasis in stevedoring and
              logistics service related fields.
              <p>
                We are licence by
                <a href="ghanaports.gov.gh">
                  Ghana Ports and Harbours Authority(GPHA)
                </a>
                and also a proud member of
                <a href="ghanatuna.com"> Ghana Tuna Association(GTA) </a>. The
                stevedore licence grants us
                <a href=""> Uniset Stevedoring Company</a> the right and
                privilege to undertake stevedoring operations in the Port of
                Tema (Fishing Harbours and the Main Port).
              </p>
              <p>
                We deliver on our promises with day-to-day activities that
                represent value for money, quality, continuity, innovation, and
                maximum reach.
              </p>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
