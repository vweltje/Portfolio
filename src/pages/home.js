// driesvanbroeck
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './home.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main className="Content">
      <h2 className="Home--Heading">Hi I am a developer</h2>
      <div className="Backgound--Shape" />
    </main>
  </Layout>
)

export default IndexPage
