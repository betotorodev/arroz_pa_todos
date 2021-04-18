import './Partner.css'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { PartnersLogos } from '../../components/partnersLogos/PartnersLogos'

export default function Partners() {
  return (
    <>
      <main className="main-description-header">
        <Header />
        <div className="blur"></div>
        <section className="introduction-description-container">
          <div className="wrap-partners">
            <h1 className="LARGE-TEXT">ALIADOS</h1>
            <p className="text-partners">Realizamos todo el proceso de preparación y distribución con la colaboración de restaurantes, proveedores y otras entidades.</p>
            <button className="btn">SÚMATE</button>
          </div>
        </section>
      </main>
      <PartnersLogos />
      <Footer />
    </>
  )
}
