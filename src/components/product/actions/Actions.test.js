import { render, screen } from '@testing-library/react'

import { Actions } from './Actions'

test('renders Description text', () => {
  render(<Actions />)
  const linkElement = screen.getByText(/acciones/i)
  expect(linkElement).toBeInTheDocument()
})
