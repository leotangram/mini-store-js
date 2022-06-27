import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'

test('renders app', () => {
  const client = new QueryClient()

  render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )

  const header = screen.getByText(/ministore/i)
  expect(header).toBeInTheDocument()
})
