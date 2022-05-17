import './about.css'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/footer'
import { AboutHero } from '../../components/about-hero/hero'
import { AboutUs } from '../../components/aboutUs/aboutUs'
import { News } from '../../components/new/news'
import { Community } from '../../components/community/community'
import { Metrics } from '../../components/metrics/metrics'

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutUs />
      <News />
      <Community />
      <Metrics />
      <Footer />
    </>
  )
}
