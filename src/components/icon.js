import React from "react";

import "./icon.css";

const childs = {};

export const Icon = ({ name }) => (
  <i className={`Icon Icon--${name}`}>{name in childs ? childs[name] : ""}</i>
);

export default Icon;
