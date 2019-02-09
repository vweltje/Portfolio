import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './about.css'

const AboutPage = () => (
  <Layout name="Home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="Backgound--Shape" />
  </Layout>
)

export default AboutPage
