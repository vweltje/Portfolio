import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Masonry from '../components/masonry'

import './WorkPage.css'

let brakePoints = [350, 500, 750]
let images = []

const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643]

for (let i = 0; i < imgId.length; i++) {
  const ih = 200 + Math.floor(Math.random() * 10) * 15
  images.push('https://unsplash.it/250/' + ih + '?image=' + imgId[i])
}

const Tile = ({ key, src }) => {
  return (
    <div key={key} className="Masonry--tile">
      <img src={src} alt={src} />
    </div>
  )
}

const WorkPageTemplate = ({ projects }) => (
  <>
    <Masonry brakePoints={brakePoints}>
      {images.map((image, id) => {
        return <Tile key={`tile-${id}`} src={image} />
      })}
    </Masonry>
    <div className="Backgound--Shape" />
  </>
)

const WorkPage = ({ data: { page, projects } }) => {
  return (
    <Layout
      name="Home"
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <WorkPageTemplate
        {...page}
        {...page.fields}
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
  ## Query for WorkPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
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
