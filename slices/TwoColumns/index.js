import React from 'react'
import { RichText } from 'prismic-reactjs'

const TwoColumns = ({ slice }) => (
  <section className="two-columns">
    <div className="container">
      <div className="column">
        {
          slice.primary.title ?
          <RichText render={slice.primary.title}/>
          : <h2>Template slice, update me!</h2>
        }
      </div>
      <div className="column">
        {
          slice.primary.text ?
          <RichText render={slice.primary.text}/>
          : <p>start by editing this slice from inside Prismic builder!</p>
        }
      </div>
    </div>
  </section>
)

export default TwoColumns