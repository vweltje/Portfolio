import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'react-feather'

import './Nav.css'

export default class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <NavLink to="/" onClick={this.handleLinkClick}>
            <div
              className="Logo"
              style={{
                backgroundImage: `url(images/logo.svg)`
              }}
            />
          </NavLink>
          <div className="Nav--Links">
            <NavLink
              to="/"
              className={`NavLink`}
              exact
              activeClassName="active"
              onClick={this.handleLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/work"
              className={`NavLink`}
              activeClassName="active"
              onClick={this.handleLinkClick}
            >
              Work
            </NavLink>
            <NavLink
              to="/travels"
              className={`NavLink`}
              activeClassName="active"
              onClick={this.handleLinkClick}
            >
              Travels
            </NavLink>
            <NavLink
              to="/contact"
              className={`NavLink`}
              activeClassName="active"
              onClick={this.handleLinkClick}
            >
              Contact
            </NavLink>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

// export default () => <Location>{route => <Navigation {...route} />}</Location>
