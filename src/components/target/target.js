import React from 'react'
import Layout from '../../layout'
import { ContactComponent } from '../contact-component/contact-component'
import './target.css'

export const Target = () => {
  return (
    <main className="target">
      <Layout>
        <h1>¿A quién va dirigido?</h1>
        <p className="target-description">Queremos llevar alimento a diferentes grupos, como recicladores, víctimas del conflicto armado, y otros sectores vulnerables y de escasos recursos. Si conoces alguna población que necesite nuestra ayuda, contáctanos y entregaremos #arrozpatodos.</p>
        <div className="target-contact">
          <ContactComponent icon='phone' title='LLÁMANOS' description='313 495 3567'/>
          <ContactComponent icon='email' title='CONTÁCTANOS' description='arrozpatodos@gmail.com'/>
        </div>
      </Layout>
    </main>
  )
}
