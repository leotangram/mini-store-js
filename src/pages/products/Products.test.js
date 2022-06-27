import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../tests/utils'

import { Products } from './Products'

describe('<Products />', () => {
  test('renders products title', () => {
    renderWithRouter(<Products />)
    const linkElement = screen.getByText(/lista de productos/i)
    expect(linkElement).toBeInTheDocument()
  })
})
