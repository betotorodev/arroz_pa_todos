import './showLogos.css'

export const ShowLogos = ({ data = [] }) => {
  return (
    <div className="restaurants-logos">
      {
        data?.map((item, index) => {
          return (
            <a href={item.link} target="_blank" key={index}>
              <img src={item.logo} alt="logos"/>
            </a>
          )
        })
      }
    </div>
  )
}
