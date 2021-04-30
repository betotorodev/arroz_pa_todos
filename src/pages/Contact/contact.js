import { Header } from '../../components/header/Header'
import { Logos } from '../../components/logos/Logos'
import { Footer } from '../../components/footer/Footer'
import { ContactInfo } from '../../components/contactInfo/ContactInfo'
import './contact.css'

export default function Contact() {
  return (
    <>
      <main className="main-description-header">
        <Header />
        <div className="blur"></div>
        <section className="introduction-description-container">
          <div className="wrap-contact">
            <h1 className="LARGE-TEXT">CONTÁCTANOS</h1>
            <p className="text-contact">Juntemos ideas, recursos y fuerzas para cumplir una gran meta.</p>
          </div>
        </section>
      </main>
      <ContactInfo />
      <Logos />
      <Footer />
    </>
  )
}