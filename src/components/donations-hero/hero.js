import { useGetImages } from '../../hooks/useGetImages'
import { CallToAction } from '../callToAction/callToActions'
import { ContactComponent } from '../contact-component/contact-component'
import { LargeArrow } from '../icons/large-arrow/largeArrow'
import { Instagram } from '../icons/instagram/instagram'
import Layout from '../../layout'
import './hero.css'

export const DonationsHero = () => {
  const {image1, image2, image3} = useGetImages()
  return (
    <Layout>
      <main className="hero">
        <section className="hero-text">
          <header className="hero-description">
            <h1>¡Hagamos Vaca!</h1>
            <p>Aporta la cantidad que desees y ayúdanos a repartir más <br /> de 5.000 arroces en la segunda etapa.</p>
            <div className="hero-callToAction">
              <CallToAction type="blue" arrow>Donar ahora</CallToAction>
              <ContactComponent />
            </div>
          </header>
        </section>
        <section className="hero-images">
          <figure className="images-container">
            <div className="background"/>
            <img src={image1.image} alt="chefs" />
          </figure>
        </section>
      </main>
    </Layout>
  )
}
