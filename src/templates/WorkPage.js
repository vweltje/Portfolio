import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Masonry from '../components/masonry'

import './WorkPage.css'

const Tile = ({ key, src }) => {
  return (
    <div key={key} className="Masonry--tile">
      <img src={src} alt={src} />
    </div>
  )
}

const WorkPageTemplate = ({ projects }) => (
  <>
    <div className="Backgound--Shape" />
  </>
)

const WorkPage = ({ data: { page, projects } }) => {
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <WorkPageTemplate
        projects={projects.edges.map(project => ({
          ...project.node,
          ...project.node.fields,
          ...project.node.frontmatter
        }))}
      />
    </Layout>
  )
}

export default WorkPage

export const pageQuery = graphql`
  query WorkPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
      }
    }

    projects: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "projects" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            position
            featuredImage
            keywords {
              title
              description
            }
          }
        }
      }
    }
  }
`
