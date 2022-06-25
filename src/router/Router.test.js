import { screen } from '@testing-library/react'
import { renderWithRouter } from '../tests/utils'

import { Router } from './Router'

describe('<Router />', () => {
  test('should render Products component "/"', async () => {
    renderWithRouter(<Router />)

    const linkElement = screen.getByText(/lista de productos/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('should render Product component "/product/:id"', () => {
    renderWithRouter(<Router />, { route: '/product/123456' })

    const linkElement = screen.getByText(/nombre del producto/i)
    expect(linkElement).toBeInTheDocument()
  })
})
