import React from "react";
import { Icon } from "semantic-ui-react";

const SideInfo = () => (
  <p className="sideInfo">
    <div align="center" className="sideinfofirst">
      <Icon name="smile" size="big" inverted />
      Enjoy Life to the Fullest
    </div>
    <br />
    <div className="sideinfomiddle">
      {" "}
      <Icon name="comment" size="big" />
      Never miss out a day out with your friends!!!
    </div>
    <br />
    <div className="sideinfolast">
      <Icon name="bullhorn" size="big" /> No excuses to not Get a Life
    </div>
  </p>
);

export default SideInfo;
