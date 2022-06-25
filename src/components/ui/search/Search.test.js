import { render, screen } from '@testing-library/react'

import { Search } from './Search'

test('renders search text', () => {
  render(<Search />)
  const linkElement = screen.getByText(/search/i)
  expect(linkElement).toBeInTheDocument()
})
