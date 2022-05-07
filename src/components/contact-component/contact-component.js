import React from 'react'
import { Phone } from '../phone/phone'
import './contact-component.css'

export const ContactComponent = () => {
  return (
    <section className="contactComponent-container">
      <div className="phone">
        <Phone />
      </div>
      <div className="contactComponent-info">
        <h2>CONTÁCTANOS</h2>
        <p>313 495 3567</p>
      </div>
    </section>
  )
}
