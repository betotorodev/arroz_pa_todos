import './ContactInfo.css'

export const ContactInfo = () => {
  return (
    <section className="contact-container">
      <span className="small-title">contáctanos</span>
      <div className="base_line line"></div>
      <section className="contact-info">
        <p>Déjanos tus dudas o comentarios. Nos comunicaremos contigo lo más pronto posible.</p>
        <div>
          <span>Tel: 313 495 3567</span>
          <span>arrozpatodos@gmail.com</span>
        </div>
        <p>Si deseas hacer parte de la iniciativa como restaurante aliado, debes cumplir y aceptar los apartados consignados en <a href="">Términos y Condiciones.</a></p>
      </section>
    </section>
  )
}
