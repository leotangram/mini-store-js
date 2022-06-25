import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import { Header } from '../ui'

export const Layout = ({ title }) => {
  return (
    <Box>
      <Header />
      {title}
    </Box>
  )
}

Layout.propTypes = {
  title: PropTypes.string
}
