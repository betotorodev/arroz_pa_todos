import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layout'
import { Instagram } from '../icons/instagram/instagram'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Layout>
        <main className="footer-container">
          <div className="footer-sections-container">
            <section className="footer-info">
              <section>
                <h6>Arroz pa' todos</h6>
                <small>arrozpatodos@gmail.com</small>
              </section>
              <section className="footer-info--secondPart">
                <div>
                  <h6>Enlaces</h6>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/nosotros">Nosotros</Link>
                      </li>
                      <li>
                        <Link to="/donaciones">Donaciones</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link to="/aliados">Aliados</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h6>Redes sociales</h6>
                  <a href="https://instagram.com/arrozpatodos?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                    <Instagram color="#FFFCF9"/>
                  </a>
                </div>
              </section>
            </section>
          </div>
          <small className="rights">© 2022 arrozparatodos. <Link className='rights-terms' to="/terms">Términos y condiciones</Link></small>
        </main>
      </Layout>
    </footer>
  )
}
