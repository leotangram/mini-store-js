import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../store'

const client = new QueryClient()

const AllTheProviders = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </QueryClientProvider>
  )
}

export const customRender = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: AllTheProviders })
  }
}
