import { useState, useEffect } from 'react'

export const useGetLogos = () => {
  const [logos, setLogos] = useState([])
  useEffect(() => {
    fetch('http://localhost:1337/logos')
      .then(data => data.json())
      .then(res => setLogos(res))
  }, [])

  return {logos}
}
