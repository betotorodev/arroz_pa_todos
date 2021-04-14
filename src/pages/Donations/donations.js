import { Header } from '../../components/header/Header'
import { Logos } from '../../components/logos/Logos'
import { Footer } from '../../components/footer/Footer'
import { IntroductionDonations } from '../../components/introduction/donations/IntroductionDonations'

import './donations.css'

export default function Donations() {
  return (
    <>
      <main className="main-description-header">
        <Header />
        <div className="blur"></div>
        <section className="introduction-description-container">
          <div className="wrap-donations">
            <h1 className="LARGE-TEXT">¡HAGAMOS VACA!</h1>
            <p className="text-donations">Aporta la cantidad que desees y ayúdanos a repartir más de 5.000 arroces en la segunda etapa.</p>
            <button className="btn">DONA</button>
          </div>
        </section>
      </main>
      <IntroductionDonations />
      <Logos />
      <Footer />
    </>
  )
}
