import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import { Header } from '../ui'

export const Layout = ({ children, title }) => {
  return (
    <Box>
      <Header />
      {title}
      {children}
    </Box>
  )
}

Layout.propTypes = {
  title: PropTypes.string
}
