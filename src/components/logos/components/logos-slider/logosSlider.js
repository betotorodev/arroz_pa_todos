import React from 'react'

export const LogosSlider = ({images = [], className2 = ''}) => {
  return (
    <>
      {
        images.map(image =>(
          <div className={className2}>
            <img src={`http://localhost:1337${image.url}`} alt="logos"/>
          </div>
        ))
      }
    </>
  )
}
