import { render, screen } from '@testing-library/react'

import { Description } from './Description'

test('renders Description text', () => {
  const product = {}

  render(<Description product={product} />)
  const linkElement = screen.getByText(/descripción/i)
  expect(linkElement).toBeInTheDocument()
})
