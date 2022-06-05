import './hero.css'
import { useGetImages } from '../../hooks/useGetImages'
import { CallToAction } from '../callToAction/callToActions'
import { ContactComponent } from '../contact-component/contact-component'
import { LargeArrow } from '../icons/large-arrow/largeArrow'
import { Instagram } from '../icons/instagram/instagram'
import { urlVaca } from '../../services/vacaUrl'
import Layout from '../../layout'

export const HomeHero = () => {
  const { image1, image2, image3 } = useGetImages()
  return (
    <Layout>
      <main className="hero">
        <section className="hero-text">
          <header className="hero-description">
            <h1>!Hay arroz pa' todos!</h1>
            <p className="hero-description-p">Ayúdanos a alimentar a toda la población colombiana que no tiene su comida asegurada.</p>
            <div className="hero-callToAction">
              <CallToAction type="blue" arrow url={urlVaca} target>Donar ahora</CallToAction>
              <ContactComponent icon="phone" title="CONTÁCTANOS" description="313 495 3567" />
            </div>
          </header>
          <footer className="hero-footer">
            <small>Síguenos en</small>
            <LargeArrow />
            <a href="https://instagram.com/arrozpatodos?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><Instagram color="#283038" /></a>
          </footer>
        </section>
        <section className="hero-images">
          <figure className="images-container">
            <div className="background" />
            <img src={image1.image} alt="chefs" />
          </figure>
          <div className="small-images">
            <figure className="image1">
              <div className="background" />
              <img src={image2.image} alt="chefs" />
            </figure>
            <figure className="image2">
              <div className="background" />
              <img src={image3.image} alt="chefs" />
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  )
}
