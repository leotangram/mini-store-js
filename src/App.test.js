import { screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import { customRender } from './tests/utils'

test('renders app', () => {
  const client = new QueryClient()

  customRender(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )

  const header = screen.getByText(/ministore/i)
  expect(header).toBeInTheDocument()
})
