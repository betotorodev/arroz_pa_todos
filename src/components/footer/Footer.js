import './Footer.css'

export const Footer = () => {
  const image = 'https://image.flaticon.com/icons/png/512/87/87390.png'
  const ref = 'https://instagram.com/arrozpatodos?igshid=1cchsvrdeexgc'
  return (
    <footer>
      <a href={ref} target="_blank" className="footer-socialNetwork">
        <img src={image} alt="Instagram"/>
      </a>
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
