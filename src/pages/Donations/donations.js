import { Community } from '../../components/community/community'
import { DonationsHero } from '../../components/donations-hero/hero'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/Header'
import { HowItWorks } from '../../components/howItWorks/howItWorks'
import { Mission } from '../../components/mission/mission'
import { Target } from '../../components/target/target'

import './donations.css'

export default function Donations() {
  return (
    <>
      <Header />
      <DonationsHero />
      <HowItWorks />
      <Target />
      <Community />
      <Mission />
      <Footer />
    </>
  )
}
