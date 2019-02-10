import React from 'react'
import Layout from '../components/layout'
import Masonry from '../components/masonry'

import './work.css'

let brakePoints = [350, 500, 750]
let images = []
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643]
for (let i = 0; i < imgId.length; i++) {
  const ih = 200 + Math.floor(Math.random() * 10) * 15
  images.push('https://unsplash.it/250/' + ih + '?image=' + imgId[i])
}

const WorkPage = () => (
  <Layout name="Home">
    <Masonry brakePoints={brakePoints}>
      {images.map((image, id) => {
        return <Tile key={`tile-${id}`} src={image} />
      })}
    </Masonry>
    <div className="Backgound--Shape" />
  </Layout>
)

export default WorkPage

const Tile = ({ key, src }) => {
  return (
    <div key={key} className="Masonry--tile">
      <img src={src} alt={src} />
    </div>
  )
}
