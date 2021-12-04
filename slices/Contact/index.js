import React from 'react'
import { RichText } from 'prismic-reactjs'

const Contact = ({ slice }) => (
  <section className="contact">
    <span className="title">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    <div class="columns">
      <div class="column">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=junoplein%2034&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div> 
      </div>
      <div class="column">
        <form action="mailto:winekesalemink@gmail.com?Subject=Nieuwe%20afspraak" method="post" enctype="text/plain">
          <label for="naam">Voor en achternaam</label>
          <input type="text" id="naam" name="Naam"/>
          <label for="email">Email</label>
          <input type="text" id="email" name="E-mail"/>
          <label for="nummer">Telefoonnummer</label>
          <input type="text" id="nummer" name="Telefoonnummer"/>
          <label for="leeftijd">Leeftijd</label>
          <input type="text" id="leeftijd" name="Leeftijd"/>
          <label for="reden">Reden van aanmelding/klachten</label>
          <textarea id="reden" name="Reden van aanmelding/klachten" style={{height:'170px'}}></textarea>
          <input type="submit" value="Versturen"/>
        </form>
      </div>
    </div>
  </section>
)

export default Contact