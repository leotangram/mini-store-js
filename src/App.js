import { CssBaseline, ThemeProvider } from '@mui/material'

import { Router } from './router'
import { darkTheme } from './themes'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
