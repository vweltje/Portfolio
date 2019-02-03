import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Image from '../components/Image'

/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */
export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (posts, title, contentType) => {
  const isCategory = contentType === 'travelCountries'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? posts.filter(byCategory) : posts
}

// Export Template for use in CMS preview
export const TravelsPageTemplate = ({
  title,
  posts = [],
  travelCountries = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredPosts =
        posts && !!posts.length
          ? byCategory(byDate(posts), title, contentType)
          : []

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase().includes(searchTerm)
        )
      }

      return (
        <main className="Blog">
          <div className="Container">
            <div className="Container--Left">
              <div className="Overlay" />
              <Image
                background
                src="https://ucarecdn.com/e3c21782-456f-47cd-a1a0-e43926590771/"
                resolutions="large"
                alt="Home - Vincent is happy at a temple in Mexico"
                className="Align--Bottom"
              />
              <span className="Caption">Hierve El Agua - Mexico</span>
            </div>
            <div className="Container--Right">
              <Nav />
              <div className="Content">
                <h1>Travel</h1>
                <h2>Eat, sleap, travel repeat</h2>
                <p>
                  Travel is my greates passion, backpacking road triping or just
                  a ride around town. I love beeing on the move, and seeing new
                  things.
                </p>
                {!!travelCountries.length && (
                  <PostCategoriesNav
                    enableSearch
                    categories={travelCountries}
                  />
                )}
                {!!posts.length && <PostSection posts={filteredPosts} />}
              </div>
            </div>
          </div>
        </main>
      )
    }}
  </Location>
)

// Export Default TravelsPage for front-end
const TravelsPage = ({ data: { page, posts, travelCountries } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <TravelsPageTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      travelCountries={travelCountries.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default TravelsPage

export const pageQuery = graphql`
  ## Query for TravelsPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query TravelsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
        featuredImage
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories {
              category
            }
            featuredImage
          }
        }
      }
    }
    travelCountries: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "travelCountries" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
