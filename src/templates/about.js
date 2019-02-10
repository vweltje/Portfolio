import React from 'react'
import Layout from '../components/layout'
import Form from '../components/form'

import './about.css'

const AboutPage = () => (
  <Layout name="Home">
    <article className="Article ">
      <section className="Article--header">
        <h1>
          Hi, I'm Vincent Weltje. <br />
          A full stack web developer <br />
          coding lightning fast web apps
        </h1>
      </section>
      <section className="Article--body">
        <div className="Article--intro">
          <p>
            Interested in working together? <br />
            Lets have a talk.
          </p>
        </div>
        <div className="Article--text">
          <p>
            I enjoy turning complex problems into beautifull, fast and easy to
            use applications. When I'm not coding, pushing pixels or drinking
            coffee, you'll find me out in nature making awesome photos.
          </p>
          <ul className="Skills">
            <li className="Skills--item">React</li>
            <li className="Skills--item">JavaScript</li>
            <li className="Skills--item">Node</li>
            <li className="Skills--item">PHP</li>
            <li className="Skills--item">HTML5 / CSS</li>
            <li className="Skills--item">Git</li>
          </ul>
        </div>
      </section>
      <section className="Article--footer">
        <Form subject="Contact" name="Contact" />
      </section>
    </article>
    <div className="Backgound--Shape" />
  </Layout>
)

export default AboutPage
