import './Status.css'

export const Status = () => {
  return (
    <section className='status'>
      <span className='small-title'>Cómo vamos</span>
      <div className='base_line line-white'></div>
      <div className='status-description'>
        <div>
          <h1 className='LARGE-TEXT'>5.821</h1>
          <h1 className='LARGE-TEXT'>ARROCES ENTREGADOS EN LA PRIMERA ETAPA</h1>
        </div>
        <p>
          Creemos que la suma de pequeñas acciones pueden hacer la diferencia.
          Juntos podemos ayudar a muchas familias que no cuentan con acceso a la
          alimentación. ¿La idea? Cocinar arroces con amor y repartirlos a la
          mayor cantidad de población posible. Con tu aporte y nuestras manos,
          podremos cocinar.
        </p>
        <small>#arrozpatodos</small>
      </div>
    </section>
  )
}
