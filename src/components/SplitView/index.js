import React, { Component } from 'react'
import Nav from '../Nav'
import './SplitView.css'

export default class SplitView extends Component {
  render() {
    const { children } = this.props

    return <div className="Container">{children}</div>
  }
}

export const Left = ({ children }) => (
  <div className="Container--Left">
    <div className="Overlay" />
    {children}
  </div>
)

export const Right = ({ children }) => (
  <div className="Container--Right">
    <Nav />
    {children}
  </div>
)
