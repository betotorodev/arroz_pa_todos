import React from 'react'
import { useGetImages } from '../../hooks/useGetImages'
import Layout from '../../layout'
import { CallToAction } from '../callToAction/callToActions'
import { ContactComponent } from '../contact-component/contact-component'
import './partnersHero.css'

export const PartnersHero = () => {
  const {image4} = useGetImages()

  return (
    <main 
      className="partners-hero"
      style={{
        background: `linear-gradient(0deg, rgba(28, 60, 89, 0.86), rgba(28, 60, 89, 0.86)), url(${image4.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Layout>
        <section className="partners-container">
          <h1>Nuestros aliados</h1>
          <p className="partners-description">Realizamos todo el proceso de preparación y distribución con la colaboración de <br /> restaurantes, proveedores y otras entidades.</p>
          <div className="partners-callToAction">
            <h6>¿Quieres sumarte como aliado?</h6>
            <div className="callToAction-container">
              <CallToAction type="white" url="/aliados">Únete como aliado</CallToAction>
              <ContactComponent icon="phone" title="CONTÁCTANOS" description="313 495 3567" color="white" />
            </div>
          </div>
        </section>
      </Layout>
    </main>
  )
}
