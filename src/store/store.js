import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search/counterSlice'
import themeReducer from './theme/themeSlice'
import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    theme: themeReducer
  }
})
