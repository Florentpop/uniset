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
              <b> Uniset Stevedoring Company</b> is an indigenous Ghanaian
              company. It was incorporated in the year 1999, under the Company
              Code of Ghana (Act 179, 1963). The company's objects allow it to
              provide services in stevedoring and logistics to companies in the
              fishing Industry of Ghana.
              <p>
                we are licence by
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
