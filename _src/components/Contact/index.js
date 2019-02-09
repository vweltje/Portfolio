import React from 'react'
import Icon from '../Icons'

import './style.css'

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
  )
}
