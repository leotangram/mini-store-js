import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const PROPS_TO_SHOW = [
  {
    brand: 'Marca',
    model: 'Modelo',
    price: 'Precio',
    cpu: 'CPU',
    ram: 'RAM',
    os: 'Sistema Operativo',
    displayResolution: 'Reslución de pantalla',
    battery: 'Batería',
    primaryCamera: 'Cámara 1',
    secondaryCmera: 'Cámara 2',
    dimentions: 'Dimensiones',
    weight: 'Peso'
  }
]

export const Description = ({ product }) => {
  const [filteredProduct, setFilteredProduct] = useState([])

  useEffect(() => {
    if (product) {
      const keysToShow = Object.keys(PROPS_TO_SHOW[0])
      const filteredProductToShow = []
      for (const [key, value] of Object.entries(product)) {
        if (keysToShow.includes(key)) {
          const currentObject = PROPS_TO_SHOW[0]
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
