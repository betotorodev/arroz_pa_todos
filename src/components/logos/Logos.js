import { useGetLogos } from '../../hooks/useGetLogos'
import { InfiniteSlider } from './components/infiniteSlider/InfiniteSlider'
import './Logos.css'

export const Logos = () => {
  const { logos } = useGetLogos()
  const group1 = logos[0]
  const group2 = logos[1]
  const group3 = logos[2]

  return (
    <section className="logos">
      <InfiniteSlider logos={group1}/>
      <InfiniteSlider inverse={true} logos={group3}/>
      <InfiniteSlider logos={group2}/>
    </section>
  )
}
