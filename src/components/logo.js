import React from 'react'
import { Link } from 'gatsby'

import './logo.css'

export default () => {
  return (
    <div className="Logo">
      <Link className="Logo--Link" to="/" title="Go to home page">
        Vincent Weltje
      </Link>
    </div>
  )
}
