import { render, screen } from '@testing-library/react'

import { Loader } from './Loader'

test('renders Cargando text', () => {
  render(<Loader />)
  const linkElement = screen.getByText(/cargando/i)
  expect(linkElement).toBeInTheDocument()
})
