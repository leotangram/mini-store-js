import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Layout } from '../../components/layout'
import { Actions, Description } from '../../components/product'
import { Image, Loader } from '../../components/ui'
import { useFetchProduct } from '../../hooks'

export const Product = () => {
  let { id } = useParams()
  const { data: product, isLoading } = useFetchProduct(id)

  if (isLoading) {
    return <Loader />
  }

  const { brand, model, imgUrl, options } = product

  const title = `Producto: ${brand} ${model}`

  return (
    <Layout title={title}>
      <Grid container spacing={8}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Image image={imgUrl} alt={title} size={600} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Description product={product} />
          <Actions id={id} options={options} />
        </Grid>
      </Grid>
    </Layout>
  )
}
