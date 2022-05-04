import React from 'react'

export const LogosSlider = ({images = [], className2 = ''}) => {
  return (
    <>
      {images.map((image, index) => (
        <a
          href={image.link}
          target="_blank"
          rel="noreferrer"
          key={index}
          className={className2}
        >
          <img src={image.logo} alt="logos" />
        </a>
      ))}
    </>
  )
}
