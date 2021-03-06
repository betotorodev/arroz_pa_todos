import { useGetImages } from '../../hooks/useGetImages'
import { CallToAction } from '../callToAction/callToActions'
import { ContactComponent } from '../contact-component/contact-component'
import Layout from '../../layout'
import './hero.css'
import { urlVaca } from '../../services/vacaUrl'

export const DonationsHero = () => {
  const {image1} = useGetImages()
  return (
    <Layout>
      <main className="donationsHero">
        <section className="donationsHero-text">
          <header className="donationsHero-description">
            <h1>¡Hagamos Vaca!</h1>
            <p className="donationsHero-p">Aporta la cantidad que desees y ayúdanos a repartir más <br /> de 15.000 arroces en la tercera etapa.</p>
            <div className="donationsHero-callToAction">
              <CallToAction type="blue" arrow url={urlVaca} target>Donar ahora</CallToAction>
              <ContactComponent icon="phone" title="CONTÁCTANOS" description="313 495 3567"/>
            </div>
          </header>
        </section>
        <section className="donationsHero-images">
          <figure className="images-container">
            <div className="background"/>
            <img src={image1.image} alt="chefs" />
          </figure>
        </section>
      </main>
    </Layout>
  )
}
