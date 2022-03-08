import React from "react";
import "./Value.css";
import { BsAlarm } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaPeopleCarry } from "react-icons/fa";
import { IconContext } from "react-icons";

const Value = () => {
  return (
    <div className="container value">
      <IconContext.Provider value={{ size: "45", color: "orangered" }}>
        <div className="icons">
          <div className="icon">
            <div className="ico">
              <VscWorkspaceTrusted />
            </div>
            <h3>Reliability</h3>
          </div>
          <div className="icon">
            <div className="ico">
              <BsAlarm />
            </div>
            <h3>Efficiency</h3>
          </div>
          <div className="icon">
            <div className="ico">
              <FaPeopleCarry />
            </div>
            <h3>Safety</h3>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Value;
