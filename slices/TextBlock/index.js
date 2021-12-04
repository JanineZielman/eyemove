import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'

const TextBlock = ({ slice }) => (
  <section className="text-block container">
    {
      slice.primary.text ?
      <RichText render={slice.primary.text}/>
      : <p>start by editing this slice from inside Prismic builder!</p>
    }
  </section>
)

export default TextBlock