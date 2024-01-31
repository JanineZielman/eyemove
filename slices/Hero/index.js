import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Hero = ({ slice }) => (
  <section className="hero">
    <div className="hero-img" style={{backgroundImage: 'url(' + slice.primary.image.url + ')'}}></div>
    <div className="hero-txt">
      <PrismicRichText field={slice.primary.title} />
    </div>
  </section>
)

export default Hero