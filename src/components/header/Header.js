import { Link } from "react-router-dom"
import './Header.css'

export const Header = () => {
  return (
    <div className="container-header">
      <header>
        <h1>logo</h1>
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

