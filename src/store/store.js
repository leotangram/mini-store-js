import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search/counterSlice'
import themeReducer from './theme/themeSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    theme: themeReducer
  }
})
