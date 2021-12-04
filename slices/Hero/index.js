import React from 'react'
import { RichText } from 'prismic-reactjs'

const Hero = ({ slice }) => (
  <section className="hero">
    <div className="hero-img" style={{backgroundImage: 'url(' + slice.primary.image.url + ')'}}></div>
    <div className="hero-txt">
      <RichText render={slice.primary.title} />
    </div>
  </section>
)

export default Hero