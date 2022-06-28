import { useParams } from 'react-router-dom'
import { useFetchProduct } from './useFetchProduct'

export const useProduct = () => {
  const { id } = useParams()
  const { data: product, isLoading } = useFetchProduct(id)

  const title = `${product?.brand} - ${product?.model}`

  return { ...product, title, isLoading, product }
}
