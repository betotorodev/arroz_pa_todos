import { useState, useEffect } from 'react'

export const useGetImages = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('http://localhost:1337/images')
      .then(data => data.json())
      .then(res => setImages(res))
  }, [])

  return {images}
}
