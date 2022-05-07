import { Header } from '../../components/header/Header'
import { HomeHero } from '../../components/home-hero/hero'
import { Metrics } from '../../components/metrics/metrics'
import { WhatWeDo } from '../../components/whatWeDo/whatWeDo'

export const Home = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <WhatWeDo />
      <Metrics />
    </>
  )
}