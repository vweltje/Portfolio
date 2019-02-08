import React, { Component } from 'react'
import SplitView, { Left, Right } from '../components/SplitView'
import Button from '../components/Button'

export default class About extends Component {
  render() {
    const image = {
        src: 'https://ucarecdn.com/1f7335b2-4899-4722-96cc-9139fcc48d88/',
        alt: 'Home - Vincent is happy at a temple in Mexico',
        style: { backgroundPosition: 'bottom' }
      },
      caption = 'Springbrook National Park, QLD - Australia'

    return (
      <SplitView>
        <Left image={image} caption={caption} />
        <Right>
          <h1>Vincent Weltje</h1>
          <h2>Full stack web developer</h2>
          <p>
            I am a passionate and hard working person, love to explore and have
            always a big hunger for new knowladge and advantures. I love to
            inspire other people around me and get inspired by them. Hit the
            buttons below to see my work and travles!
          </p>
          <Button className="Button" to="work">
            Work
          </Button>
          <Button className="Button" to="travels">
            Travels
          </Button>
        </Right>
      </SplitView>
    )
  }
}
