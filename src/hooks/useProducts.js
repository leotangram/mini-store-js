import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { stringUtils } from '../utils'
import { useFetchProduct } from './useFetchProduct'

export const useProducts = () => {
  const { searchValue } = useSelector(state => state.search)
  const { data: allProducts, isLoading } = useFetchProduct()

  const [products, setProducts] = useState([])

  useEffect(() => {
    if (allProducts && !searchValue) {
      setProducts(allProducts)
    }

    if (allProducts && searchValue) {
      const filteredProductsByBrandOrModel = allProducts.filter(
        ({ brand, model }) =>
          stringUtils.stringToLowerCase(brand).includes(searchValue) ||
          stringUtils.stringToLowerCase(model).includes(searchValue)
      )

      setProducts(filteredProductsByBrandOrModel)
    }
  }, [allProducts, searchValue])

  return { products, isLoading }
}
