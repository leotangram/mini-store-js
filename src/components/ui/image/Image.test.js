import { render, screen } from '@testing-library/react'

import { Image } from './Image'

test('renders Image text', () => {
  const image =
    'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'
  const altText = 'Iconia Talk S'

  render(<Image image={image} alt={altText} />)
  const linkElement = screen.getByAltText(/iconia talk s/i)
  expect(linkElement).toBeInTheDocument()
})
