import './home.css'
import { Video } from '../../components/videoPlayer/video'
import { Header } from '../../components/header/Header'

export const Home = () => {
  return (
    <main>
      <Header />
      {/* <div className="wrap" /> */}
      <Video />
    </main>
  )
}