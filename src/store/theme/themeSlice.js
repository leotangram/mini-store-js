import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onChangeTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { onChangeTheme } = themeSlice.actions

export default themeSlice.reducer
