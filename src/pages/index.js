import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './index.css'

const IndexPage = () => (
  <Layout name="Home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2 class="Home--Heading">Hi I am a developer</h2>
    <div className="Backgound--Shape" />
  </Layout>
)

export default IndexPage
