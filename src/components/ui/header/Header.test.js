import { render, screen } from '@testing-library/react'
import { renderWithRouter } from '../../../tests/utils'

import { Header } from './Header'

test('renders header text', () => {
  renderWithRouter(<Header />)
  const linkElement = screen.getByText(/ministore/i)
  expect(linkElement).toBeInTheDocument()
})
