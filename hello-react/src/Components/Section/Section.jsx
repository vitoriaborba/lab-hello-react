import React from 'react'
import './Section.css'
import img1 from '../../images/icon1.png'
import img2 from '../../images/icon2.png'
import img3 from '../../images/icon3.png'
import img4 from '../../images/icon4.png'

function Section() {
  return (
    <section>
      <div>
        <img src={img1} alt="icon1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
      <img src={img2} alt="icon2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
      <img src={img3} alt="icon3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
      <img src={img4} alt="icon4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </section>
  )
}

export default Section