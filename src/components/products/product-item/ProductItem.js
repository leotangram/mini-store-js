import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography
} from '@mui/material'
import { Image } from '../../ui'

export const ProductItem = ({ brand, id, imgUrl, model }) => {
  const navigate = useNavigate()

  const goToProductDetail = () => navigate(`/product/${id}`)

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minWidth: '100%' }} onClick={goToProductDetail}>
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
