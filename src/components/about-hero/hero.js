import React from 'react'
import { useGetImages } from '../../hooks/useGetImages'
import Layout from '../../layout'
import { urlVaca } from '../../services/vacaUrl'
import { CallToAction } from '../callToAction/callToActions'
import './hero.css'

export const AboutHero = () => {
  const {image1} = useGetImages()
  
  return (
    <main 
      className="about-hero"
      style={{
        background: `linear-gradient(0deg, rgba(28, 60, 89, 0.86), rgba(28, 60, 89, 0.86)), url(${image1.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Layout>
        <section className="about-container">
          <h1>Nuestra misión es ayudar a la población <br /> colombiana que no tiene su comida <br /> asegurada.</h1>
          <p>Creemos que la suma de pequeñas acciones pueden hacer la diferencia. Juntos podemos <br /> ayudar a muchas familias que no cuentan con acceso a la alimentación.</p>
          <div className="about-callToAction">
            <CallToAction type="white" url={urlVaca} target>Donar Ahora</CallToAction>
            <CallToAction type="blue" arrow url="/donaciones" >Cómo donar</CallToAction>
          </div>
        </section>
      </Layout>
    </main>
  )
}
