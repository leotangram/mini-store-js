import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../tests/utils'

import { Product } from './Product'

test('renders product text', () => {
  renderWithRouter(<Product />, 'product/123456')
  const linkElement = screen.getByText(/nombre del producto/i)
  expect(linkElement).toBeInTheDocument()
})
