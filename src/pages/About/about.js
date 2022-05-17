import './about.css'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/footer'
import { AboutHero } from '../../components/about-hero/hero'
import { AboutUs } from '../../components/aboutUs/aboutUs'

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutUs />
      <Footer />
    </>
  )
}
