export const News = ({ news }) => {
  return (
    <>
      {
        news?.map((newsData, index) => (
          <a href={newsData.link} target="_blank" rel="noreferrer" className="news">
            <div className="image-container">
              <img src={newsData.image} alt="images"/>
            </div>
            <div className="image-description">
              <p>{newsData.noticia}</p>
              <small>{newsData.news}</small>
            </div>
          </a>
        ))
      }
    </>
  )
}
