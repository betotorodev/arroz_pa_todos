import React from 'react'
import { Arrow } from '../arrow/arrow'

export const CallToAction = ({ type = 'blue', children, arrow }) => {
  const buttonColor = {
    'blue': '#1C3C59',
    'white': '#FFFFFF',
    'transparent': 'transparent'
  }
  const textColor = {
    'blue': buttonColor['white'],
    'white': buttonColor['blue'],
    'transparent': buttonColor['blue']
  }
  return (
    <button style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem',
      height: '3rem',
      borderRadius: '9999px',
      padding: '14.5px 24px',
      fontSize: '1rem',
      fontWeight: '700',
      backgroundColor: buttonColor[type],
      color: textColor[type],
      lineHeight: '19px',
      border: `${(type === 'blue' || type === 'transparent') ? 'none' : '1px solid #1C3C59'}`,
    }}>
      {children}
      {arrow && <Arrow color={textColor[type]} />}
    </button>
  )
}
