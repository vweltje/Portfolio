import React, { Component } from 'react'
import Nav from '../Nav'
import Image from '../Image'

import './SplitView.css'

export default class SplitView extends Component {
  render() {
    const { children } = this.props

    return <div className="Container">{children}</div>
  }
}

export class Left extends Component {
  render() {
    const { image, caption, children } = this.props
    return (
      <div className="Container--Left">
        <div className="Overlay" />
        {image && <Image background resolutions="large" {...image} />}
        {caption && <span className="Caption">{caption}</span>}
        {children}
      </div>
    )
  }
}

export class Right extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="Container--Right">
        <Nav />
        {children}
      </div>
    )
  }
}
