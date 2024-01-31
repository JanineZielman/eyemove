import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TextBlock = ({ slice }) => (
  <section className="text-block container">
    {
      slice.primary.text ?
      <PrismicRichText field={slice.primary.text}/>
      : <p>start by editing this slice from inside Prismic builder!</p>
    }
  </section>
)

export default TextBlock