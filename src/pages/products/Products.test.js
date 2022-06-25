import { render, screen } from '@testing-library/react'

import { Products } from './Products'

test('renders products text', () => {
  render(<Products />)
  const linkElement = screen.getByText(/lista de productos/i)
  expect(linkElement).toBeInTheDocument()
})
