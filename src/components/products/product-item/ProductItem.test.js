import { render, screen } from '@testing-library/react'
import { ProductItem } from './ProductItem'

test('renders ProductItem text', () => {
  render(<ProductItem />)
  const linkElement = screen.getByText(/productitem/i)
  expect(linkElement).toBeInTheDocument()
})
