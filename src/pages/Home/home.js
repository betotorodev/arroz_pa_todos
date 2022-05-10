import { Donate } from '../../components/donate/donate'
import { Header } from '../../components/header/Header'
import { HomeHero } from '../../components/home-hero/hero'
import { Metrics } from '../../components/metrics/metrics'
import { News } from '../../components/new/news'
import { Partners } from '../../components/partners/partners'
import { VideoComponent } from '../../components/video-component/videoComponent'
import { WhatWeDo } from '../../components/whatWeDo/whatWeDo'

export const Home = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <WhatWeDo />
      <Metrics />
      <VideoComponent />
      <Partners />
      <Donate />
      <News />
    </>
  )
}