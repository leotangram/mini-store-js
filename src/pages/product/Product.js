import { Grid } from '@mui/material'

import { Layout } from '../../components/layout'
import { Actions, Description } from '../../components/product'
import { Image, Loader } from '../../components/ui'
import { useProduct } from '../../hooks'

export const Product = () => {
  const { title, imgUrl, product, options, isLoading, id } = useProduct()

  if (isLoading) {
    return <Loader />
  }

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
