import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Layout from "../../layout"
import { useLargeBreakpoint } from "../../hooks/useMediaQuery"
import { MobileMenu } from "../mobile-menu/mobile-menu"
import { Menu } from "../icons/menu/menu"
import './Header.css'

export const Header = () => {
  const title = "Arroz Pa' Todos"
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
                <img src="https://i.imgur.com/oxjBorc.jpeg" alt="logo" />
              </div>
              <h1>{title}</h1>
            </section>
          </Link>
          {
            !isMobile ?
              <ul>
                <NavLink to="/nosotros" activeClassName="active-link">
                  <li>Nosotros</li>
                </NavLink>
                <NavLink to="/donaciones" activeClassName="active-link">
                  <li>Donaciones</li>
                </NavLink>
                <NavLink to="/aliados" activeClassName="active-link">
                  <li>Aliados</li>
                </NavLink>
              </ul>
              : <div onClick={() => setShowMenu(true)}><Menu /></div>
          }
        </header>
      </Layout>
    </div>
  )
}

