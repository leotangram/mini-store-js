import axios from 'axios'

const baseURL = 'https://front-test-api.herokuapp.com/api'

const miniStoreApi = axios.create({
  baseURL
})

export const getProducts = async () => {
  const { data } = await miniStoreApi.get('/product')
  return data
}

export const getProductById = async id => {
  const { data } = await miniStoreApi.get(`/product/${id}`)
  return data
}

export const addProductToCart = async product => {
  const { data } = await miniStoreApi.post(`/cart`, product)
  return data
}
