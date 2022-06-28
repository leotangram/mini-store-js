import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { onChangeTheme } from '../../../store/theme/themeSlice'

export const Header = () => {
  const navigate = useNavigate()
  const { theme } = useSelector(state => state.theme)
  const dispath = useDispatch()

  const isLightTheme = theme === 'light'

  const onChangeValueTheme = () => {
    dispath(onChangeTheme(isLightTheme ? 'dark' : 'light'))
  }

  const onNavigate = () => navigate('/')

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link
          underline="none"
          color="white"
          sx={{ cursor: 'pointer' }}
          onClick={onNavigate}
        >
          <Typography variant="h6">MiniStore</Typography>
        </Link>
        <IconButton color="secondary" onClick={onChangeValueTheme}>
          {isLightTheme ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
