// driesvanbroeck
import React from 'react'
import Layout from '../components/layout'

import './HomePage.css'

const HomePageTemplate = () => (
  <main className="Content">
    <h2 className="Home--Heading">Hi I am a developer</h2>
    <div className="Backgound--Shape" />
  </main>
)

const HomePage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <HomePageTemplate />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
      }
    }
  }
`
