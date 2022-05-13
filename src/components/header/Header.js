import { useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../../layout"
import { useLargeBreakpoint } from "../../hooks/useMediaQuery"
import { MobileMenu } from "../mobile-menu/mobile-menu"
import { Menu } from "../icons/menu/menu"
import './Header.css'

export const Header = () => {
  const isMobile = useLargeBreakpoint()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="container-header">
      {showMenu && <MobileMenu close={setShowMenu} />}
      <Layout>
        <header className="menu">
          <Link to="/">
            <section className="logo-container">
              <div className="image-container">
                <img src="https://arroz-pa-todos-images.s3.us-east-2.amazonaws.com/Logo+sin+fondo.png" alt="logo" />
              </div>
              <h1>arroz pa' todos</h1>
            </section>
          </Link>
          {
            !isMobile ?  
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
              : <div onClick={() => setShowMenu(true)}><Menu /></div>
          }
        </header>
      </Layout>
    </div>
  )
}

