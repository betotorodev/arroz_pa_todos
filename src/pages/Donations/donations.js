import { DonationsHero } from '../../components/donations-hero/hero'
import { Header } from '../../components/header/Header'
import { HowItWorks } from '../../components/howItWorks/howItWorks'

import './donations.css'

export default function Donations() {
  return (
    <>
      <Header />
      <DonationsHero />
      <HowItWorks />
    </>
  )
}
