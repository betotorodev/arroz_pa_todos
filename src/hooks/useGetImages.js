import { imagesService } from '../services/imagesService'

export const useGetImages = () => {

  const image1 = imagesService[0];
  const image2 = imagesService[1];
  const image3 = imagesService[2];


  return {image1, image2, image3}
}
