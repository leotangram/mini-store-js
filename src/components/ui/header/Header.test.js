import { screen } from '@testing-library/react'
import { customRender } from '../../../tests/utils'

import { Header } from './Header'

test('renders header text', () => {
  customRender(<Header />)
  const linkElement = screen.getByText(/ministore/i)
  expect(linkElement).toBeInTheDocument()
})
