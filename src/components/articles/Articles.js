import { useGetLogos } from '../../hooks/useGetLogos'
import { News } from './components/news'
import './Articles.css'

export const Articles = () => {
  const { news, images } = useGetLogos()
  return (
    <section className="articles-container">
      <span className="small-title">nosotros</span>
      <div className="base_line line"></div>
      <article className="news-container">
        <News news={news} images={images} />
      </article>
    </section>
  )
}
