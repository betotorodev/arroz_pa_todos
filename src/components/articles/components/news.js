export const News = ({ news, images }) => {
  return (
    <>
      {
        news?.map((newsData, index) => (
          <a href={newsData.link} target="_blank" rel="noreferrer" className="news">
            <div className="image-container">
              <img src={`http://localhost:1337${images[index]?.url}`} alt="images"/>
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
