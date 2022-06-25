import { render, screen } from '@testing-library/react'
import { Products } from './Products'

test('renders products text', () => {
  render(<Products />)
  const linkElement = screen.getByText(/products/i)
  expect(linkElement).toBeInTheDocument()
})
