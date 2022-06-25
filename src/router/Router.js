import { Routes, Route } from 'react-router-dom'

import { Product, Products } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
}
