import { useQuery } from 'react-query'
import { getProducts, getProductById } from '../api'

export const useFetchProduct = (id = '') =>
  useQuery(['product', id], id ? () => getProductById(id) : getProducts)
