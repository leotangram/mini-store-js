import { screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import { renderWithRouter } from './tests/utils'

test('renders app', () => {
  const client = new QueryClient()

  renderWithRouter(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )

  const header = screen.getByText(/ministore/i)
  expect(header).toBeInTheDocument()
})
