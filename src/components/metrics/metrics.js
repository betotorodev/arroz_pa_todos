import React from 'react'
import Layout from '../../layout'
import './metrics.css'

export const Metrics = () => {
  return (
    <Layout>
      <main className="metrics">
        <h1 className="metrics-title">Cómo vamos...</h1>
        <section className="metrics-container">
          <div className="rice">
            <h1>8.706</h1>
            <p>Arroces entregados hasta 2021</p>
          </div>
          <div className="rice">
            <h1>+20</h1>
            <p>Empresas aliadas</p>
          </div>
          <div className="rice">
            <h1>15.000</h1>
            <p>Arroces por entregar 2022</p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
