import { CardMedia } from '@mui/material'

export const Image = ({ image, alt, size = '100%' }) => {
  return (
    <CardMedia
      component="img"
      image={image}
      alt={alt}
      sx={{ width: { xs: '100%', lg: size } }}
    />
  )
}
