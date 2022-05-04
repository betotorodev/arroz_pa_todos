import { Link } from "react-router-dom"
import Layout from "../../layout"
import './Header.css'

export const Header = () => {
  return (
    <div className="container-header">
      <Layout>
        <header>
          <Link to="/">
            <section className="logo-container">
              <div className="image-container">
                <img src="https://arroz-pa-todos-images.s3.us-east-2.amazonaws.com/Logo+sin+fondo.png" alt="logo" />
              </div>
              <h1>arroz pa' todos</h1>
            </section>
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
      </Layout>
    </div>
  )
}

