import { useGetNews } from '../../hooks/useGetNews'
import { News } from './components/news'
import './Articles.css'

export const Articles = () => {
  const { news } = useGetNews()
  return (
    <section className="articles-container">
      <span className="small-title">nosotros</span>
      <div className="base_line line"></div>
      <article className="news-container">
        <News news={news} />
      </article>
    </section>
  )
}
