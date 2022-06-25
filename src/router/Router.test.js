import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Products } from '../pages/products/Products'

describe('<Router />', () => {
  test('should render Products component "/"', () => {
    render(<Products />, { wrapper: MemoryRouter })

    const linkElement = screen.getByText(/lista de productos/i)
    expect(linkElement).toBeInTheDocument()
  })
})
