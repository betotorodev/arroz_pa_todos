import './Footer.css'

export const Footer = () => {
  const image = 'https://image.flaticon.com/icons/png/512/87/87390.png'
  return (
    <footer>
      <div className="footer-socialNetwork">
        <img src={image} alt="Instagram"/>
      </div>
      <div className="footer-legal">
        <div>
          <p>Súmate y haz parte del cambio. Juntos repartiremos</p>
          <p>#arrozpatodos</p>
        </div>
        <p>Términos y condiciones</p>
      </div>
    </footer>
  )
}
