import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search/counterSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer
  }
})
