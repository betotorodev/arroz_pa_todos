import { imagesService } from '../services/imagesService'

export const useGetImages = () => {

  const image1 = imagesService[8];
  const image2 = imagesService[5];
  const image3 = imagesService[10];


  return {image1, image2, image3}
}
