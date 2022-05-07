import './hero.css'
import { Link } from 'react-router-dom'
import { useGetImages } from '../../hooks/useGetImages'
import { CallToAction } from '../callToAction/callToActions'
import { Arrow } from '../arrow/arrow'
import { ContactComponent } from '../contact-component/contact-component'
import { LargeArrow } from '../large-arrow/largeArrow'
import { Instagram } from '../instagram/instagram'

export const HomeHero = () => {
  const {image1} = useGetImages()
  console.log(image1)
  return (
    <main className="hero">
      <section className="hero-text">
        <header className="hero-description">
          <h1>!Hay arroz pa' todos!</h1>
          <p>Ayúdanos a alimentar a toda la población colombiana que no tiene su comida asegurada.</p>
          <div className="hero-callToAction">
            <CallToAction type="blue" arrow>Donar ahora</CallToAction>
            <ContactComponent />
          </div>
        </header>
        <footer className="hero-footer">
          <small>Síguenos en</small>
          <LargeArrow />
          <Instagram />
        </footer>
      </section>
      <section>
        <figure className="bigImage-container">
          <img src={image1.image} alt="first image" />
        </figure>
      </section>
    </main>
  )
}
