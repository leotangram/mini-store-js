import { render, screen } from '@testing-library/react'

import { ProductItem } from './ProductItem'

test('renders ProductItem text', () => {
  const productItem = {
    id: 'ZmGrkLRPXOTpxsU4jjAcv',
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: '170',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'
  }

  render(<ProductItem {...productItem} />)
  const linkElement = screen.getByText(/acer iconia talk s/i)
  expect(linkElement).toBeInTheDocument()
})
