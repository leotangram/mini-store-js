import { Grid } from '@mui/material'
import { Layout } from '../../components/layout'
import { ProductItem } from '../../components/products'
import { Loader } from '../../components/ui'
import { useProducts } from '../../hooks'

export const Products = () => {
  const { isLoading, products } = useProducts()

  return (
    <Layout title="Lista de productos">
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {products.map(product => (
            <ProductItem key={product.id} {...product} />
          ))}
        </Grid>
      )}
    </Layout>
  )
}
