import React from "react";
import connect from "../icons/connect.png";
import fun from "../icons/fun.png";
import noExcuese from "../icons/noExcuese.png";

const SideInfo = () => (
  <p className="sideInfo">
    <div className="sideinfofirst">
      <img alt=" " className="icon" src={fun} />{" "}
      <span>Enjoy Life to the Fullest</span>
    </div>

    <div className="sideinfomiddle">
      <img alt=" " className="icon" src={connect} />{" "}
      <span>Never miss out a day out with your friends!!!</span>
    </div>

    <div className="sideinfolast">
      <img alt=" " className="icon" src={noExcuese} />{" "}
      <span>No excuses to not Get a Life </span>
    </div>
  </p>
);

export default SideInfo;
