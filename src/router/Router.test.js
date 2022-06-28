import { screen } from '@testing-library/react'

import { customRender } from '../tests/utils'
import { Router } from './Router'

describe('<Router />', () => {
  test('should render Products component "/"', async () => {
    customRender(<Router />)

    const linkElement = screen.getByText(/lista de productos/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('should render Product component "/product/:id"', () => {
    customRender(<Router />, { route: '/product/123456' })
  })
})
