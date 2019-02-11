import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Meta from './meta'
import Logo from './logo'
import Nav from './nav'
import Contact from './contact'

import './layout.css'

const Layout = ({ children, meta, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        settingsYaml {
          siteTitle
          siteDescription
          googleTrackingId
          socialMediaCard {
            image
          }
        }
      }
    `}
    render={data => {
      const { siteTitle, socialMediaCard, googleTrackingId } =
        data.settingsYaml || {}
      return (
        <>
          <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
            {title}
            <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
            <link rel="dns-prefetch" href="https://ucarecdn.com" />
            {/* Add font link tags here */}
          </Helmet>
          <Meta
            googleTrackingId={googleTrackingId}
            absoluteImageUrl={
              socialMediaCard && socialMediaCard.image && socialMediaCard.image
            }
            {...meta}
            {...data.settingsYaml}
          />
          <Logo />
          <Nav socialIcons={false} />
          {children}
          <Contact />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
