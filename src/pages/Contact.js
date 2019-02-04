import React, { Component } from 'react'
import SplitView, { Left, Right } from '../components/SplitView'

export default class Contact extends Component {
  render() {
    const image = {
        src: 'https://ucarecdn.com/c0375548-e262-4459-955d-7a5b71421c00/',
        alt: 'Exploring the outback Australia',
        style: { backgroundPosition: 'bottom' }
      },
      caption = 'Kings canyon - Outback Australia'

    return (
      <SplitView>
        <Left image={image} caption={caption} />
        <Right>
          <h1>Drop a line</h1>
        </Right>
      </SplitView>
    )
  }
}
