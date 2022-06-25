import { render, screen } from '@testing-library/react'
import { Product } from './Product'

test('renders product text', () => {
  render(<Product />)
  const linkElement = screen.getByText(/product/i)
  expect(linkElement).toBeInTheDocument()
})
