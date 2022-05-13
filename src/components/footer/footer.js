import React from 'react'
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
                <h6>arroz pa'todos</h6>
                <small>arrozpatodos@gmail.com</small>
              </section>
              <section className="footer-info--secondPart">
                <div>
                  <h6>Enlaces</h6>
                  <div className="footer-menu">
                    <ul>
                      <li>Nosotros</li>
                      <li>Donaciones</li>
                    </ul>
                    <ul>
                      <li>Aliados</li>
                      <li>Contacto</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h6>Redes sociales</h6>
                  <Instagram color="#FFFCF9"/>
                </div>
              </section>
            </section>
            <section>
              {/* contacto */}
            </section>
          </div>
          <small className="rights">© 2022 arrozparatodos. Todos los derechos reservados. </small>
        </main>
      </Layout>
    </footer>
  )
}
