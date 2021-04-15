import { Link } from "react-router-dom"
import './Header.css'

export const Header = () => {
  return (
    <div className="container-header">
      <header>
        <Link to="/" className="image-container">
          <img src="https://i.imgur.com/LVJ7Sdt.png" alt="logo"/>
        </Link>
        <ul>
          <Link to="/nosotros">
            <li>nosotros</li>
          </Link>
          <Link to="/donaciones">
            <li>donaciones</li>
          </Link>
          <Link to="/donaciones">
            <li>aliados</li>
          </Link>
          <Link to="/contacto">
            <li>contacto</li>
          </Link>
        </ul>
      </header>
    </div>
  )
}

