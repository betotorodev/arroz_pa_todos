import './PartnersLogos.css'
import { useGetLogos } from '../../hooks/useGetLogos'
import { ShowLogos } from './components/showLogos'

export const PartnersLogos = () => {
  const {kitchens, suppliers, organizations} = useGetLogos()
  return (
    <section className="partners-container">
      <span className="small-title">aliados</span>
      <div className="base_line line"></div>
      <section className="logos-wrap">
        <h1 className="LARGE-TEXT">Cocinas</h1>
        <ShowLogos data={kitchens}/>
      </section>
      <section className="logos-wrap">
        <h1 className="LARGE-TEXT">Organizaciones</h1>
        <ShowLogos data={organizations}/>
      </section>
      <section className="logos-wrap">
        <h1 className="LARGE-TEXT">Proveedores</h1>
        <ShowLogos data={suppliers}/>
      </section>
    </section>
  )
}
