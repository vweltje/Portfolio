import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Logo from "./logo";
import Nav from "./nav";
import Contact from "./contact";

import "./layout.css";

const Layout = ({ children, name }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <main className={name}>
          <Logo />
          <Nav socialIcons={false} />
          <div className="Content">{children}</div>
          <Contact />
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
