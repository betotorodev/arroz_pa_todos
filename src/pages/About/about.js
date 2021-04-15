import './about.css'
import { Header } from '../../components/header/Header'
import { Articles } from '../../components/articles/Articles'
import { Logos } from '../../components/logos/Logos'
import { Footer } from '../../components/footer/Footer'

export default function About() {
  return (
    <>
      <main className="main-description-header">
        <Header />
        <div className="blur"></div>
        <section className="introduction-description-container">
          <p className="text">
            Arroz Pa’ Todos nace como una iniciativa para ayudar a familias que no tienen asegurada su alimentación. Decidimos usar los esfuerzos y recursos de la industria gastronómica para brindar alimento a quienes más lo necesitan. Usamos las cocinas de todos los restaurantes aliados para preparar almuerzos a base de arroz. Gracias a las donaciones, a nuestros proveedores y restaurantes aliados y al apoyo de otras entidades, distribuimos alimento a las poblaciones más vulnerables. Queremos dibujar más de 5.000 sonrisas en la segunda etapa y juntos podemos lograrlo.
          </p>
        </section>
      </main>
      <Articles />
      <Logos />
      <Footer />
    </>
  )
}
