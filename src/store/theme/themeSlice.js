import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: localStorage.getItem('theme') || 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onChangeTheme: (state, action) => {
      localStorage.setItem('theme', action.payload)
      state.theme = action.payload
    }
  }
})

export const { onChangeTheme } = themeSlice.actions

export default themeSlice.reducer
