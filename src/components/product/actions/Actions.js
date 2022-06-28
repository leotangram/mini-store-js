import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import { ColorSelector } from '../color-selector/ColorSelector'
import { MemorySizeSelector } from '../memory-size-selector/MemorySizeSelector'
import { useFetchProductToCart } from '../../../hooks'
import { onChangeCartCount } from '../../../store/cart/cartSlice'

export const Actions = ({ id, options }) => {
  const dipatch = useDispatch()

  const [selectedStorage, setSelectedStorage] = useState(options?.storages[0])
  const [selectedColor, setSelectedColor] = useState(options?.colors[0])

  const { data, refetch } = useFetchProductToCart({
    id,
    colorCode: selectedColor?.code,
    storageCode: selectedStorage?.code
  })

  useEffect(() => {
    if (data) {
      dipatch(onChangeCartCount(data.count))
    }
  }, [data, dipatch])

  const onSelectedStorage = selectedStorage =>
    setSelectedStorage(selectedStorage)

  const onSelectedColor = selectedColor => setSelectedColor(selectedColor)

  return (
    <>
      <Typography variant="h4">Acciones</Typography>
      <Box display="flex" flexDirection="column" justifyContent="center">
        {options?.storages && (
          <MemorySizeSelector
            onSelectedStorage={onSelectedStorage}
            selectedStorage={selectedStorage}
            storages={options.storages}
          />
        )}
        {options?.colors && (
          <ColorSelector
            colors={options?.colors}
            onSelectedColor={onSelectedColor}
            selectedColor={selectedColor}
          />
        )}
        <Button onClick={refetch} color="secondary">
          Añadir a la cesta
        </Button>
      </Box>
    </>
  )
}

ColorSelector.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    storages: PropTypes.array,
    colors: PropTypes.array
  })
}
