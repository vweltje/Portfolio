import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default () => {
  return (
    <div className="Logo">
      <Link to="/" title="Go to home page">
        Vincent Weltje
      </Link>
    </div>
  )
}
