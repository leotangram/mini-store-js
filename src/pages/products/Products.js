import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import { Layout } from '../../components/layout'
import { ProductItem } from '../../components/products'
import { useProduct } from '../../hooks/useProduct'

export const Products = () => {
  const { data: allProducts, error, isLoading } = useProduct()
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts)
    }
  }, [allProducts])

  return (
    <Layout title="Lista de productos">
      <Grid container spacing={2}>
        {products?.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </Grid>
    </Layout>
  )
}
