import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Image from '../components/Image'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = () => (
  <main className="Contact">
    <div className="Container">
      <div className="Container--Left">
        <div className="Overlay" />
        <Image
          background
          src="https://ucarecdn.com/c0375548-e262-4459-955d-7a5b71421c00/"
          resolutions="large"
          alt="Home - Vincent is happy at a temple in Mexico"
          className="Align--Bottom"
        />
        <span className="Caption">The Pass, Byron Bay, NSW - Australia</span>
      </div>
      <div className="Container--Right">
        <Nav />
        <div className="Content">
          <h1>Drop a line</h1>
        </div>
      </div>
    </div>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
    }
  }
`
