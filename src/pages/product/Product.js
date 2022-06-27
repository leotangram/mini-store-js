import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProductById } from '../../api'

import { Layout } from '../../components/layout'

export const Product = () => {
  // const {
  //   data: products,
  //   error,
  //   isLoading
  // } = useQuery(['product', 'asdasd'], () => getProductById('asdasd'))

  return <Layout title="Nombre del producto">Product</Layout>
}
