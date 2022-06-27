import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

import { Header, Search } from '../ui'
import { useLocation } from 'react-router-dom'

export const Layout = ({ children, title }) => {
  const { pathname } = useLocation()

  return (
    <Box>
      <Header />
      <Box padding={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">{title}</Typography>
          {pathname === '/' && <Search />}
        </Box>
        <Box paddingY={2}>{children}</Box>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  title: PropTypes.string
}
