import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

export default class Button extends Component {
  render() {
    const { to, href, children, className } = this.props
    return (
      <Fragment>
        {to && (
          <Link
            to="work"
            className={`Button${className ? className : ''}`}
            {...this.props}
          >
            {children}
          </Link>
        )}
        {href && !to && (
          <a
            href={href}
            className={`Button${className ? className : ''}`}
            {...this.props}
          >
            {children}
          </a>
        )}
      </Fragment>
    )
  }
}
