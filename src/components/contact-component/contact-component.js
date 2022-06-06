import React from 'react'
import { Mail } from '../icons/mail/mail'
import { Phone } from '../icons/phone/phone'
import './contact-component.css'

export const ContactComponent = ({ icon, title, description, color = '#1C3C59' }) => {
  const iconType = {
    'phone': <Phone color={color} />,
    'email': <Mail />
  }
  return (
    <section className="contactComponent-container">
      <div className="phone" style={{
        border: `1px solid ${color}`,
      }}>
        {iconType[icon]}
      </div>
      <div className="contactComponent-info">
        <h2 style={{
          color: color,
        }} >{title}</h2>
        <a href={`${iconType[icon] === 'email' ? `mailto:${description}` : `tel:+57${description}`}`} style={{
          color: color,
        }} >{description}</a>
      </div>
    </section>
  )
}
