import './home.css'
import { Video } from '../../components/videoPlayer/video'
import { Header } from '../../components/header/Header'
import { Introduction } from '../../components/introduction/Introduction'
import { Status } from '../../components/status/Status'
import { Carrousel } from '../../components/carrousel/Carrousel'
import { Logos } from '../../components/logos/Logos'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
  return (
    <>
      <main>
        <Header />
        <div className="wrap" />
        <Video />
      </main>
      <Introduction />
      <Status />
      <Carrousel />
      <Logos />
      <Footer />
    </>
  )
}