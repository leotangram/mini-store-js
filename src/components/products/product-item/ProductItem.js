import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import { Image } from '../../ui'

export const ProductItem = ({ brand, imgUrl, model }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minWidth: '100%' }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">{`${brand} ${model}`}</Typography>
            <Image image={imgUrl} alt={`${brand} ${model}`} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
