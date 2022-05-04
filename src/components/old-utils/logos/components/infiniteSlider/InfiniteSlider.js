import { LogosSlider } from '../logos-slider/logosSlider'
import './infiniteSlider.css'

export const InfiniteSlider = ({ inverse = false, logos = {} }) => {
  const className = inverse ? 'logos-container-2' : 'logos-container'
  const className2 = inverse ? 'orb-2' : 'orb'
  return (
    <div className="logos-wrap">
      <div className={className}>
        <span>
          <LogosSlider className2={className2} images={logos}/>
        </span>
        <span>
          <LogosSlider className2={className2} images={logos}/>
        </span>
      </div>
      </div>
  )
}
