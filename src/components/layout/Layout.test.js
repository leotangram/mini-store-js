import { screen } from '@testing-library/react'
import { customRender } from '../../tests/utils'

import { Layout } from './Layout'

beforeEach(() => customRender(<Layout title="Lista de productos" />))

describe('<Layout />', () => {
  test('should render <Header />', () => {
    const linkElement = screen.getByText(/ministore/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('should renders title', () => {
    const linkElement = screen.getByText(/lista de productos/i)
    expect(linkElement).toBeInTheDocument()
  })
})
