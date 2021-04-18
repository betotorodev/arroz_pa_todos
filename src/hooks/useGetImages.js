import { useState, useEffect } from 'react'

export const useGetImages = () => {
  const [data, setData] = useState([])
  const supplier = data.filter(img => img.imageID === 'proveedores')
  const restaurants = data.filter(img => img.imageID === 'cocinas')
  const organizations = data.filter(img => img.imageID === 'organization')
  const images = data.filter(img => img.imageID.includes('images'))
  useEffect(() => {
    fetch('http://localhost:1337/images')
      .then(data => data.json())
      .then(res => setData(res))
  }, [])

  return {images, supplier, restaurants, organizations}
}
