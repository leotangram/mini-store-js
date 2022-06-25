import { render, screen } from '@testing-library/react'
import { Description } from './Description'

test('renders Description text', () => {
  render(<Description />)
  const linkElement = screen.getByText(/description/i)
  expect(linkElement).toBeInTheDocument()
})
