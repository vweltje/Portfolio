import React, { Component } from 'react'
import Logo from '../Logo'
import Nav from '../Nav'
import Contact from '../Contact'

import './style.css'

export default class Layout extends Component {
  render() {
    const { name, children } = this.props
    return (
      <main className={name}>
        <Logo />
        <Nav socialIcons={false} />
        <div className="Content">{children}</div>
        <Contact />
      </main>
    )
  }
}
