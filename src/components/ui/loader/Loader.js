import { Box, CircularProgress, Typography } from '@mui/material'

export const Loader = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ height: 'calc(100vh - 64px)' }}
    >
      <CircularProgress size={80} />
      <Typography variant="h3">Cargando</Typography>
    </Box>
  )
}
