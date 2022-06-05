import React from 'react'
import { useGetLogos } from '../../hooks/useGetLogos'
import { InfiniteSlider } from '../old-utils/logos/components/infiniteSlider/InfiniteSlider'
import './partners.css'
import { CallToAction } from '../callToAction/callToActions'
import { Link } from 'react-router-dom'

export const Partners = () => {
  const { group1 } = useGetLogos()
  return (
    <main className="partners">
        <h1>Empresas aliadas</h1>
        <InfiniteSlider logos={group1} />
        <CallToAction type="transparent" arrow url="/aliados">Conócelas a todas</CallToAction>
    </main>
  )
}
