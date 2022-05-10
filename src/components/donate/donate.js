import React from 'react'
import Layout from '../../layout'
import { CallToAction } from '../callToAction/callToActions'
import { Money } from '../icons/money/money'
import { Stove } from '../icons/stove/stove'
import './donate.css'

export const Donate = () => {
  return (
    <main className="donate">
      <Layout>
        <div className="donate-container">
          <h1>Donaciones</h1>
          <article className="donate-info">
            <section className="donate-detail">
              <Money />
              <div>
                <h2>Hagamos Vaca</h2>
                <p>Apóyanos con tu donación y hagamos <br /> rendir el arroz para más familias.</p>
              </div>
            </section>
            <section className="donate-detail">
              <Stove />
              <div>
                <h2>Cocinemos</h2>
                <p>Súmate como restaurante o proveedor aliado.</p>
              </div>
            </section>
          </article>
          <div className="donate-callToAction">
            <CallToAction type="white">Donar Ahora</CallToAction>
            <CallToAction type="blue" arrow>Cómo Donar</CallToAction>
          </div>
        </div>
      </Layout>
    </main>
  )
}
