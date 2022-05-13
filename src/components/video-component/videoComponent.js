import React from 'react'
import Layout from '../../layout'
import { Video } from '../old-utils/videoPlayer/video'
import './videoComponent.css'

export const VideoComponent = () => {
  return (
    <main className="video">
      <Layout>
        <div className="video-container">
          <section>
            <h1>Nuestro impacto social</h1>
            <p>Queremos llevar alimento a diferentes grupos, como recicladores, víctimas del conflicto armado, y otros sectores vulnerables y de escasos recursos. Si conoces alguna población que necesite nuestra ayuda, contáctanos y entregaremos #arrozpatodos.</p>
          </section>
          <div className="video-player">
            <Video />
          </div>
        </div>
      </Layout>
    </main>
  )
}
