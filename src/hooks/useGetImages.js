import { imagesService } from '../services/imagesService'

export const useGetImages = () => {

  const images = imagesService;


  return {images}
}
