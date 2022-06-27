// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { useProduct } from './hooks/useProduct'

const mockedUseProduct = useProduct

jest.mock('./hooks/useProduct')

beforeEach(() => {
  mockedUseProduct.mockImplementation(() => ({ isLoading: true }))
})

afterEach(() => {
  jest.clearAllMocks()
})
