import { CssBaseline, ThemeProvider } from '@mui/material'
import { useSelector } from 'react-redux'

import { Router } from './router'
import { darkTheme, lightTheme } from './themes'

function App() {
  const { theme } = useSelector(state => state.theme)

  const isLightTheme = theme === 'light'

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
