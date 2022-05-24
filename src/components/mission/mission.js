import React from 'react'
import Layout from '../../layout'
import { CallToAction } from '../callToAction/callToActions'
import './mission.css'

export const Mission = () => {
  return (
    <main className="mission">
      <Layout>
        <section className="mission-container">
          <h1>Nuestro compromiso</h1>
          <p className="mission-description">Entregaremos más de 5.000 arroces en la segunda etapa del proyecto, cocinados con amor para aquellos que más lo necesitan. Para asegurar la total transparencia, brindaremos información de las compras y recaudo de dinero a quien lo desee.</p>
          <CallToAction type="white" arrow>Donar ahora</CallToAction>
        </section>
      </Layout>
    </main>
  )
}
