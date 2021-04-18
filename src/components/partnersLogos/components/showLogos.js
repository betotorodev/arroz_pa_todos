import './showLogos.css'

export const ShowLogos = ({ data = [] }) => {
  const images = data[0]?.image
  return (
    <div className="restaurants-logos">
      {
        images?.map((item, index) => {
          return (
            <div key={index}>
              <img src={`http://localhost:1337${item.url}`} alt="logos"/>
            </div>
          )
        })
      }
    </div>
  )
}
