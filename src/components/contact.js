import React from "react";
import Icon from "./icon";

import "./contact.css";

export default () => {
  return (
    <div className="Contact">
      <a
        className="Contact--button"
        href="mailto:vincentweltje@gmail.com"
        title="Contact me"
      >
        <Icon name="mail" />
      </a>
    </div>
  );
};
