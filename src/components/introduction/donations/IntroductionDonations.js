import './IntroductionDonations.css'

export const IntroductionDonations = () => {
  return (
    <section className="donations-container">
      <span className="small-title">donaciones</span>
      <div className="base_line line"></div>
      <div className="donations-content">
        <h1>¿Cómo funciona?</h1>
        <ul>
          <div>
            <p>01</p>
            <li>Aporta la cantidad que desees por medio de Vaki.</li>
          </div>
          <div>
            <p>02</p>
            <li>El dinero será destinado exclusivamente a la compra de alimentos y empaques con el apoyo y descuento de proveedores aliados. </li>
          </div>
          <div>
            <p>03</p>
            <li>Cada restaurante producirá desde 100 platos de arroz en adelante, según su capacidad. </li>
          </div> 
          <div>
            <p>04</p>
            <li>Repartiremos los arroces con la ayuda logística de organizaciones aliadas.</li>
          </div>
        </ul>
        <h1>¿A quién va dirigido?</h1>
        <p className="paragraph">Queremos llevar alimento a diferentes grupos, como recicladores, víctimas del conflicto armado, y otros sectores vulnerables y de escasos recursos. Si conoces alguna población que necesite nuestra ayuda, contáctanos y entregaremos <span className="hashtag">#arrozpatodos</span>.</p>
        <h1>Nuestro compromiso</h1>
        <p className="paragraph">Entregaremos más de 5.000 arroces en la segunda etapa del proyecto, cocinados con amor para aquellos que más lo necesitan.
        <br/>
        Para asegurar la total transparencia, brindaremos información de las compras y recaudo de dinero a quien lo desee.</p>
      </div>
    </section>
  )
}
