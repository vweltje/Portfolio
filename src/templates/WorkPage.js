import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.js'
import Nav from '../components/Nav'
import Image from '../components/Image'

// Export Template for use in CMS preview
export const WorkPageTemplate = () => (
  <main class="Work">
    <div className="Container">
      <div className="Container--Left">
        <div className="Overlay" />
        <Image
          background
          src="https://ucarecdn.com/93a1259b-031a-4897-ae76-794834c89316/"
          resolutions="large"
          alt="Home - Vincent is happy at a temple in Mexico"
          className="Align--Bottom"
        />
        <span className="Caption">Hierve El Agua - Mexico</span>
      </div>
      <div className="Container--Right">
        <Nav />
        <div className="Content">
          <h1>My Work</h1>
          <h2>A selection of my work</h2>
          <p>
            Down here you'll find a range of projects I did for work, personal
            practishe or school.
          </p>
        </div>
      </div>
    </div>
  </main>
)

const WorkPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <WorkPageTemplate {...page} {...page.frontmatter} />
  </Layout>
)

export default WorkPage

export const pageQuery = graphql`
  query WorkPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
    }
  }
`
