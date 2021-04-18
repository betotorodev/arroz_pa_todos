import './PartnersLogos.css'
import { useGetImages } from '../../hooks/useGetImages'
import { ShowLogos } from './components/showLogos'

export const PartnersLogos = () => {
  const {restaurants, supplier, organizations} = useGetImages()
  return (
    <section className="partners-container">
      <span className="small-title">aliados</span>
      <div className="base_line line"></div>
      <section className="logos-wrap">
        <h1 className="LARGE-TEXT">Cocinas</h1>
        <ShowLogos data={restaurants}/>
      </section>
      <section className="logos-wrap">
        <h1 className="LARGE-TEXT">Organizaciones</h1>
        <ShowLogos data={organizations}/>
      </section>
      <section className="logos-wrap">
        <h1 className="LARGE-TEXT">Proveedores</h1>
        <ShowLogos data={supplier}/>
      </section>
    </section>
  )
}
