import { PrismicRichText } from '@prismicio/react'
import React from 'react'

const TwoColumns = ({ slice }) => (
  <section className="two-columns">
    <div className="container">
      <div className="column">
        {
          slice.primary.title ?
          <PrismicRichText field={slice.primary.title}/>
          : <h2>Template slice, update me!</h2>
        }
      </div>
      <div className="column">
        {
          slice.primary.text ?
          <PrismicRichText field={slice.primary.text}/>
          : <p>start by editing this slice from inside Prismic builder!</p>
        }
      </div>
    </div>
  </section>
)

export default TwoColumns