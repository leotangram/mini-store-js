import { render, screen } from '@testing-library/react'

import { Image } from './Image'

test('renders Image text', () => {
  render(<Image />)
  const linkElement = screen.getByText(/image/i)
  expect(linkElement).toBeInTheDocument()
})
