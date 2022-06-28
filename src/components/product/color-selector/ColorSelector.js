import CircleIcon from '@mui/icons-material/Circle'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { stringUtils } from '../../../utils'

export const ColorSelector = ({ colors, onSelectedColor, selectedColor }) => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography align="center">Escoge un color</Typography>
      <Box display="flex" justifyContent="center" sx={{ marginY: 2 }}>
        {colors.map(color => {
          const { code, name } = color

          return (
            <Button
              key={code}
              sx={{
                color: stringUtils.stringToLowerCase(name),
                backgroundColor: stringUtils.stringToLowerCase(name),
                opacity: selectedColor.code === code ? 1 : 0.5,
                border: '1px solid #000000',
                marginX: 1
              }}
              onClick={() => onSelectedColor(color)}
            >
              <CircleIcon />
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}
