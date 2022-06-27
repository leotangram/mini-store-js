import { AppBar, Link, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const onNavigate = () => navigate('/')

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link
          underline="none"
          color="white"
          sx={{ cursor: 'pointer' }}
          onClick={onNavigate}
        >
          <Typography variant="h6">MiniStore</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
