import React, { Component } from 'react'

import ReactBackgroundSlideshow from 'react-background-slideshow'

import image1 from './assets/0001.JPG.png'
import image2 from './assets/0002.jpg'
import image3 from './assets/0003.jpg'
import image4 from './assets/0004.jpg'
import image5 from './assets/0005.jpg'



const images = [
  image1,
  image2,
  image3,
  image4,
  image5
 
]


export default class App extends Component {
  render () {
    return (
      <div class="container" >
      <ReactBackgroundSlideshow images={images} />
      
      </div>
    )
  }
}
