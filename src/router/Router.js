import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Products } from '../pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
