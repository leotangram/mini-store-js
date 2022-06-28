import PropTypes from 'prop-types'
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

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
