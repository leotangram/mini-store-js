import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ColorSelector } from '../color-selector/ColorSelector'
import { MemorySizeSelector } from '../memory-size-selector/MemorySizeSelector'

export const Actions = ({ options }) => {
  const [selectedStorage, setSelectedStorage] = useState(options?.storages[0])
  const [selectedColor, setSelectedColor] = useState(options?.colors[0])

  const onSelectedStorage = selectedStorage =>
    setSelectedStorage(selectedStorage)

  const onSelectedColor = selectedColor => setSelectedColor(selectedColor)

  const onAddToCart = () => console.log('Adding')

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
        <Button onClick={onAddToCart} color="secondary">
          Añadir a la cesta
        </Button>
      </Box>
    </>
  )
}
