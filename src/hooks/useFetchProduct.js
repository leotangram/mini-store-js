import { useQuery } from 'react-query'
import { getProducts, getProductById, addProductToCart } from '../api'

export const useFetchProduct = (id = '') =>
  useQuery(['product', id], id ? () => getProductById(id) : getProducts)

export const useFetchProductToCart = product =>
  useQuery(['cart'], () => addProductToCart(product), { enabled: false })
