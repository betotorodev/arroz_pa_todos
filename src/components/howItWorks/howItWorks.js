import React from 'react'
import Layout from '../../layout'
import './howItWorks.css'

export const HowItWorks = () => {
  return (
    <main className="howItWorks">
      <Layout>
        <h1 className="howItWorks-title">¿Cómo funciona?</h1>
        <section className="howItWorks-container">
          <div className="rice">
            <h1>01</h1>
            <p>Puedes aportar la cantidad que desees por medio de Vaki.</p>
          </div>
          <div className="rice">
            <h1>02</h1>
            <p>El dinero es destinado a la compra de alimentos y empaques con el apoyo de proveedores aliados.</p>
          </div>
          <div className="rice">
            <h1>03</h1>
            <p>Cada restaurante producirá desde 100 platos de arroz en adelante, según su capacidad.</p>
          </div>
          <div className="rice">
            <h1>04</h1>
            <p>Repartiremos los arroces con la ayuda logística de organizaciones aliadas.</p>
          </div>
        </section>
      </Layout>
    </main>
  )
}
