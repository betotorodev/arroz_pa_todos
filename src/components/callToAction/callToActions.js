import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '../icons/arrow/arrow'

const Button = ({backgroundColor, color, type, children, arrow}) => (
    <button style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    height: '3rem',
    borderRadius: '9999px',
    padding: '14.5px 24px',
    fontSize: '1rem',
    fontWeight: '700',
    backgroundColor: backgroundColor,
    color: color,
    lineHeight: '19px',
    border: `${(type === 'transparent') ? 'none' : `1px solid ${color}`}`,
  }}>
    {children}
    {arrow && <Arrow color={color} />}
  </button>
)

export const CallToAction = ({ type = 'blue', children, arrow, url, target }) => {
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
    <>
      {
        target
        ? 
          <a href={url} target={`${target ? '_blank' : '_self'}`} rel="noreferrer">
            <Button
              backgroundColor={buttonColor[type]}
              color={textColor[type]}
              type={type}
              children={children}
              arrow={arrow}
            />
          </a>
        :
          <Link to={url} target={`${target ? '_blank' : '_self'}`} rel="noreferrer">
            <Button
              backgroundColor={buttonColor[type]}
              color={textColor[type]}
              type={type}
              children={children}
              arrow={arrow}
            />
          </Link>
      }
    </>
  )
}
