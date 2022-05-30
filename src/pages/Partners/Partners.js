import './Partner.css'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/footer'
import { PartnersHero } from '../../components/partners-hero/partnersHero'
import { PartnersLogos } from '../../components/partnersLogos/partnersLogos'

export default function Partners() {
  return (
    <>
      <Header />
      <PartnersHero />
      <PartnersLogos />
      <Footer />
    </>
  )
}
