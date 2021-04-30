import { logosService } from '../services/logosService'

export const useGetLogos = () => {
  let allLogos = []

  const kitchens = logosService[0].cocinas
  const organizations = logosService[0].organizaciones
  const suppliers = logosService[0].proveedores

  allLogos = [...kitchens, ...organizations, ...suppliers]

  const group1 = allLogos.filter(l => l.group === 1)
  const group2 = allLogos.filter(l => l.group === 2)
  const group3 = allLogos.filter(l => l.group === 3)

  return { kitchens, organizations, suppliers, group1, group2, group3}
}
