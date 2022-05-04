import { Video } from '../../components/videoPlayer/video'
import { Header } from '../../components/header/Header'
import { HomeHero } from '../../components/home-hero/hero'
import { Status } from '../../components/status/Status'
import { Carrousel } from '../../components/carrousel/Carrousel'
import { Logos } from '../../components/logos/Logos'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <HomeHero/>
      {/* <Status />
      <Carrousel />
      <Logos />
      <Footer /> */}
    </>
  )
}