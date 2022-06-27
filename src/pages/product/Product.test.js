import { screen } from '@testing-library/react'
import { customRender } from '../../tests/utils'

import { Product } from './Product'

test('renders product text', () => {
  customRender(<Product />, 'product/123456')
  const linkElement = screen.getByText(/nombre del producto/i)
  expect(linkElement).toBeInTheDocument()
})
