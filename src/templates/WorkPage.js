import React from 'react'
import { orderBy, kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

import './WorkPage.css'

const Tile = ({ slug, featuredImage, title, keywords }) => (
  <Link to={slug} title={title} className="Grid--item">
    <div
      style={{ backgroundImage: `url(${featuredImage})` }}
      alt={kebabCase(title)}
      className="Grid--itemBackground"
    />
    <div className="Grid--itemCaption">
      <h3>{title}</h3>
      <ul>
        {keywords.slice(0, 2).map((keyword, key) => (
          <li key={key}>{keyword.description}</li>
        ))}
      </ul>
    </div>
  </Link>
)

const WorkPageTemplate = ({ projects }) => {
  projects = orderBy(projects, 'position')
  return (
    <>
      <div class="Grid">
        {projects.slice(0, 8).map((project, key) => (
          <Tile key={key} {...project} />
        ))}
      </div>
      <div className="Backgound--Shape" />
    </>
  )
}

const WorkPage = ({ data: { page, projects } }) => {
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <WorkPageTemplate
        projects={projects.edges.map(project => ({
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
