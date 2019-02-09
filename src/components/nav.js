import React, { Component } from "react";
import { Link } from "gatsby";

import "./nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="Nav--Items">
          <li>
            <Link to="/about" className="Nav--Item" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/work" className="Nav--Item" activeClassName="active">
              Work
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
