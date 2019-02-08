import React, { Component } from 'react'
import SplitView, { Left, Right } from '../components/SplitView'

export default class Travels extends Component {
  render() {
    const image = {
        src: 'https://ucarecdn.com/e3c21782-456f-47cd-a1a0-e43926590771/',
        alt: 'Travels - Driving in mexico',
        style: { backgroundPosition: 'bottom' }
      },
      caption = 'Somewhere in Chiapas - Mexico'

    return (
      <SplitView>
        <Left image={image} caption={caption} />
        <Right>
          <h1>Travel</h1>
          <h2>Eat, sleap, travel repeat</h2>
          <p>
            Travel is my greates passion, backpacking road triping or just a
            ride around town. I love beeing on the move, and seeing new things.
          </p>
        </Right>
      </SplitView>
    )
  }
}
