import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { products } from '../../../constants'

export const Description = ({ product }) => {
  const [filteredProduct, setFilteredProduct] = useState([])

  useEffect(() => {
    if (product) {
      const keysToShow = Object.keys(products.PROPS_TO_SHOW[0])
      const filteredProductToShow = []
      for (const [key, value] of Object.entries(product)) {
        if (keysToShow.includes(key)) {
          const currentObject = products.PROPS_TO_SHOW[0]
          filteredProductToShow.push(`${currentObject[key]}: ${value}`)
        }
      }
      setFilteredProduct(filteredProductToShow)
    }
  }, [product])

  return (
    <Box>
      <Typography variant="h4">Descripción</Typography>
      <ul>
        {filteredProduct.map(productProp => (
          <li key={productProp}>
            <Typography>{productProp}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  )
}

Description.propTypes = {
  product: PropTypes.object.isRequired
}
