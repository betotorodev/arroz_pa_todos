import { useState, useEffect } from 'react'

export const useGetLogos = () => {
  const [logos, setLogos] = useState([])
  const [news, setNews] = useState([])
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('http://localhost:1337/logos')
      .then(data => data.json())
      .then(res => {
        const newsData = res[3].news
        const imagesData = res[3].images
        setLogos(res)
        setNews(newsData)
        setImages(imagesData)
      })
  }, [])

  return {logos, news, images}
}
