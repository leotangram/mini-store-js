import { useQuery } from 'react-query'
import { getProducts } from '../api'

export const useFetchProduct = id => {
  // if (!id) {
  return useQuery(['product'], getProducts)
  // }

  // return useQuery(['product', id], () => store.getProductById(id))
}
