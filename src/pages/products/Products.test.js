import { screen } from '@testing-library/react'
import { customRender } from '../../tests/utils'

import { Products } from './Products'

describe('<Products />', () => {
  test('renders products title', () => {
    customRender(<Products />)
    const linkElement = screen.getByText(/lista de productos/i)
    expect(linkElement).toBeInTheDocument()
  })
})
