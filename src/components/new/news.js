import React from 'react'
import { useGetNews } from '../../hooks/useGetNews'
import { InfiniteSlider } from '../old-utils/logos/components/infiniteSlider/InfiniteSlider'
import './news.css'

export const News = () => {
const { news } = useGetNews()
  return (
    <main className="news">
      <h1>Lo que dicen los medios</h1>
      <InfiniteSlider logos={news} />
      {/* {
        news.map((article, index) => (
          <img key={index} src={article.image} alt="newspaper logos" />
        ))
      } */}
    </main>
  )
}
