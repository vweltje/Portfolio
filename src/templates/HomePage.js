import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Image from '../components/Image'

// Export Template for use in CMS preview
export const HomePageTemplate = () => (
  <main className="Home">
    <div className="Container">
      <div className="Container--Left">
        <div className="Overlay" />
        <Image
          background
          src="https://ucarecdn.com/1f7335b2-4899-4722-96cc-9139fcc48d88/"
          resolutions="large"
          alt="Home - Vincent is happy at a temple in Mexico"
          className="Align--Bottom"
        />
        <span className="Caption">Hierve El Agua - Mexico</span>
      </div>
      <div className="Container--Right">
        <Nav />
        <div className="Content">
          <h1>Vincent Weltje</h1>
          <h2>Full stack web developer</h2>
          <p>
            I am a passionate and hard working person, love to explore and have
            always a big hunger for new knowladge and advantures. I love to
            inspire other people around me and get inspired by them. Hit the
            buttons below to see my work and travles!
          </p>
          <Link className="Button" to="work">
            Work
          </Link>
          <Link className="Button" to="travels">
            Travels
          </Link>
        </div>
      </div>
    </div>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
    }
  }
`
