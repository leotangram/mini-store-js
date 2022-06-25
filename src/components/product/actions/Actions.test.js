import { render, screen } from '@testing-library/react'
import { Actions } from './Actions'

test('renders Description text', () => {
  render(<Actions />)
  const linkElement = screen.getByText(/actions/i)
  expect(linkElement).toBeInTheDocument()
})
