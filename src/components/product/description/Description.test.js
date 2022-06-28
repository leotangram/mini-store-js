import { render, screen } from '@testing-library/react'

import { Description } from './Description'

test('renders Description text', () => {
  render(<Description />)
  const linkElement = screen.getByText(/descripción/i)
  expect(linkElement).toBeInTheDocument()
})
