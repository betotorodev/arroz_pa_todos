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
            <h1>5.646</h1>
            <p>Arroces entregados 2020</p>
          </div>
          <div className="rice">
            <h1>+50</h1>
            <p>Empresas comprometidas</p>
          </div>
          <div className="rice">
            <h1>+6000</h1>
            <p>Arroces por entregar 2022</p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
