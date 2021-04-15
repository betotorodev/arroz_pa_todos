import './Introduction.css'

export const Introduction = () => {
  return (
    <section className="introduction">
      <span className="small-title">dona</span>
      <div className="base_line line"></div>
      <div className="title">
        <h1 className="LARGE-TEXT">¡HAY ARROZ PA’ TODOS!</h1>
        <h2>Ayúdanos a alimentar a toda la población colombiana que no tiene su comida asegurada.</h2>
      </div>
      <h1 className="Subtitle LARGE-TEXT">¿Cómo?</h1>
      <div className="base_line line1"></div>
      <div className="box-1">
        <h1>Hagamos Vaca</h1>
        <p className="step">Apóyanos con tu donación y hagamos rendir el arroz para más familias.
          El dinero irá destinado al pago de insumos.</p>
        <button className="btn">Hagamos Vaca</button>
      </div>
      <div className="base_line line2"></div>
      <div className="box-2">
        <h1>Cocinemos</h1>
        <p className="step">Queremos repartir +5.000 arroces en la segunda etapa y tú puedes ayudarnos.
          Súmate como restaurante o proveedor aliado y trabajemos de la mano.</p>
        <button className="btn">Cocinemos</button>
      </div>
      <div className="base_line line3"></div>
      <div className="box-3">
        <h1>Conoce Más</h1>
        <p className="step">Llegamos a las poblaciones de mayor necesidad, con ayuda de distribuidores  y entidades aliadas.
          Envíanos información sobre alguna población que necesite nuestra ayuda.
          Queremos llegar cada día más lejos para proteger la seguridad alimentaria de todos.</p>
        <button className="btn">Cocinemos</button>
      </div>
    </section>
  )
}
