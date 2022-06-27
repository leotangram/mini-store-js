import { render, screen } from '@testing-library/react'

import { Products } from './Products'

describe('<Products />', () => {
  test('renders products title', () => {
    render(<Products />)
    const linkElement = screen.getByText(/lista de productos/i)
    expect(linkElement).toBeInTheDocument()
  })
})
