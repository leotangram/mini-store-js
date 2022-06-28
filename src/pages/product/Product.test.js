import { customRender } from '../../tests/utils'

import { Product } from './Product'

test('renders <Product />', () => {
  customRender(<Product />, 'product/123456')
})
