import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul>
          <li>
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" exact activeClassName="active">
              Work
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
