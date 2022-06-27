import { CardMedia } from '@mui/material'

export const Image = ({ image, alt }) => {
  return <CardMedia component="img" height="auto" image={image} alt={alt} />
}
