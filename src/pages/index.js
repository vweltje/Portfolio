import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout name="Home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Hi I am a developer</h2>
  </Layout>
);

export default IndexPage;
