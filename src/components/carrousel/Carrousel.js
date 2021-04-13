import { useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, ImageWithZoom, ButtonPlay } from 'pure-react-carousel'
import { useGetImages } from '../../hooks/useGetImages'

import './Carrousel.css'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const Carrousel = () => {
  const [slide, setSlide] = useState(0)
  const { images } = useGetImages()
  return (
    <section className="carrousel-container">
      <span className="small-title">galeria</span>
      <div className="base_line line"></div>
      <div className="carrousel-images">
        <CarouselProvider
          visibleSlides={2}
          totalSlides={23}
          step={2}
          naturalSlideWidth={110}
          naturalSlideHeight={170}
          infinite
        >
          <div className="container-slider">
            <Slider className="slider">
              {
                images.map((image, index) => {
                  return (
                  <Slide key={index} index={index}>
                    <Image className="image" src={`http://localhost:1337${image.image[0].url}`}/>
                  </Slide>
                  )})
              }
            </Slider>
            <ButtonBack className="buttonBack">Back</ButtonBack>
            <ButtonNext className="buttonNext">Next</ButtonNext>
          </div>
      </CarouselProvider>
    </div>
    </section>
  )
}
