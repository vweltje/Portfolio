import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SplitView, { Left, Right } from '../components/SplitView'
import Image from '../components/Image'

export default class About extends Component {
  render() {
    return (
      <SplitView>
        <Left>
          <Image
            background
            src="https://ucarecdn.com/1f7335b2-4899-4722-96cc-9139fcc48d88/"
            resolutions="large"
            alt="Home - Vincent is happy at a temple in Mexico"
            className="Align--Bottom"
          />
          <span className="Caption">
            Springbrook National Park, QLD - Australia
          </span>
        </Left>
        <Right>
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
        </Right>
      </SplitView>
    )
  }
}
