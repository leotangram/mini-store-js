import { screen } from '@testing-library/react'
import { customRender } from '../../../tests/utils'

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

  customRender(<ProductItem {...productItem} />)
  const linkElement = screen.getByText(/acer - iconia talk s/i)
  expect(linkElement).toBeInTheDocument()
})
