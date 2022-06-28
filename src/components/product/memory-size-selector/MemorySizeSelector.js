import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@mui/material'

export const MemorySizeSelector = ({
  onSelectedStorage,
  selectedStorage,
  storages
}) => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography align="center">Escoge el tamaño de la memoria</Typography>
      <Box display="flex" justifyContent="center" sx={{ marginY: 2 }}>
        {storages?.map(storage => {
          const { code, name } = storage

          return (
            <Button
              key={code}
              size="small"
              variant={selectedStorage.code === code ? 'contained' : 'outlined'}
              color={selectedStorage.code === code ? 'primary' : 'secondary'}
              onClick={() => onSelectedStorage(storage)}
              sx={{ marginX: 1 }}
            >
              {name}
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}

MemorySizeSelector.propTypes = {
  onSelectedStorage: PropTypes.func,
  selectedStorage: PropTypes.shape({
    code: PropTypes.string.isRequired
  }).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
