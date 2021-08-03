import { Link } from "react-router-dom"
import './Header.css'

export const Header = () => {
  return (
    <div className="container-header">
      <header>
        <Link to="/" className="image-container">
          <img src="https://arroz-pa-todos-images.s3.us-east-2.amazonaws.com/Logo+sin+fondo.png" alt="logo"/>
        </Link>
        <ul>
          <Link to="/nosotros">
            <li>Nosotros</li>
          </Link>
          <Link to="/donaciones">
            <li>Donaciones</li>
          </Link>
          <Link to="/aliados">
            <li>Aliados</li>
          </Link>
          <Link to="/contacto">
            <li>Contacto</li>
          </Link>
        </ul>
      </header>
    </div>
  )
}

