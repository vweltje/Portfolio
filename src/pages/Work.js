import React, { Component } from 'react'
import SplitView, { Left, Right } from '../components/SplitView'

export default class Work extends Component {
  render() {
    const image = {
        src: 'https://ucarecdn.com/93a1259b-031a-4897-ae76-794834c89316/',
        alt: 'Work - Sun, beach, ocean = surf',
        style: { backgroundPosition: 'bottom' }
      },
      caption = 'The Pass, Byron Bay, NSW - Australia'

    return (
      <SplitView>
        <Left image={image} caption={caption} />
        <Right>
          <h1>My Work</h1>
          <h2>A selection of my work</h2>
          <p>
            Down here you'll find a range of projects I did for work, personal
            practishe or school.
          </p>
        </Right>
      </SplitView>
    )
  }
}
