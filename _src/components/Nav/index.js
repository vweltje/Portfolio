import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="Nav--Items">
          <li>
            <NavLink
              to="/about"
              className="Nav--Item"
              exact
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className="Nav--Item"
              exact
              activeClassName="active"
            >
              Work
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
