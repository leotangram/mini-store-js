import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartCount: localStorage.getItem('cartCount') || 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    onChangeCartCount: (state, action) => {
      localStorage.setItem('cartCount', action.payload)
      state.cartCount = action.payload
    }
  }
})

export const { onChangeCartCount } = cartSlice.actions

export default cartSlice.reducer
