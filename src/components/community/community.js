import React from 'react'
import { useGetImages } from '../../hooks/useGetImages'
import Layout from '../../layout'
import { CallToAction } from '../callToAction/callToActions'
import './community.css'

export const Community = () => {
  const {image4} = useGetImages()
  return (
    <main className="community">
      <Layout>
        <div className="community-container">
          <section className="community-text">
            <h1>Apoya a tu comunidad</h1>
            <div className="community-info">
              <h6>Hagamos Vaca</h6>
              <p>Apóyanos con tu donación y hagamos rendir el arroz para más familias.</p>
            </div>
            <div className="community-info">
              <h6>Cocinemos</h6>
              <p>Súmate como restaurante o proveedor aliado.</p>
            </div>
            <div>
              <CallToAction type="blue" arrow url="/donaciones">Conoce más</CallToAction>
            </div>
          </section>
          <section className="community-image">
            <img src={image4.image} alt="chef" />
          </section>
        </div>
      </Layout>
    </main>
  )
}
