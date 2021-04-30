import { useGetLogos } from '../../hooks/useGetLogos'
import { InfiniteSlider } from './components/infiniteSlider/InfiniteSlider'
import './Logos.css'

export const Logos = () => {
  const { group1, group2, group3 } = useGetLogos()
  return (
    <section className="logos">
      <InfiniteSlider logos={group1}/>
      <InfiniteSlider inverse={true} logos={group3}/>
      <InfiniteSlider logos={group2}/>
    </section>
  )
}
