import React from 'react'
import { Mail } from '../icons/mail/mail'
import { Phone } from '../icons/phone/phone'
import './contact-component.css'

export const ContactComponent = ({icon, title, description}) => {
  const iconType = {
    'phone': <Phone />,
    'email': <Mail />
  }
  return (
    <section className="contactComponent-container">
      <div className="phone">
        {iconType[icon]}
      </div>
      <div className="contactComponent-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}
